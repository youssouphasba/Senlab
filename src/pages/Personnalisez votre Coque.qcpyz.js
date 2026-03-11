import { uploadImageToMedia } from 'backend/upload';
import { cart } from 'wix-stores';
import { getCoqueWidgetSrc } from 'public/coqueWidget';

const PRODUCT_ID = 'b6d8773f-c0e6-47f4-b7ba-2b6c9772c710';
const HTML_WIDGET_ID = '#html1';
const DEFAULT_TREATMENT = 'Normal';

function convertWixUrlToPublic(wixUrl) {
    if (!wixUrl || !wixUrl.startsWith('wix:image://v1/')) {
        return wixUrl;
    }

    let path = wixUrl.substring('wix:image://v1/'.length);
    const hashIndex = path.indexOf('#');

    if (hashIndex !== -1) {
        path = path.substring(0, hashIndex);
    }

    return `https://static.wixstatic.com/media/${path}`;
}

function normalizeText(value) {
    return typeof value === 'string' ? value.trim() : '';
}

function sanitizeFileNamePart(value) {
    const normalizedValue = normalizeText(value);
    const safeValue = normalizedValue
        .replace(/[^a-zA-Z0-9]+/g, '-')
        .replace(/^-+|-+$/g, '');

    return safeValue || 'modele';
}

function isSenegalCountry(value) {
    const normalizedCountry = normalizeText(value)
        .normalize('NFD')
        .replace(/[\u0300-\u036f]/g, '')
        .toLowerCase();

    return normalizedCountry === 'senegal';
}

function notifyWidget(type, message, extraData = {}) {
    $w(HTML_WIDGET_ID).postMessage({
        type,
        message,
        ...extraData
    });
}

$w.onReady(function () {
    $w(HTML_WIDGET_ID).src = getCoqueWidgetSrc();

    $w(HTML_WIDGET_ID).onMessage(async (event) => {
        const payload = event.data || {};

        if (payload.type !== 'add_to_cart') {
            return;
        }

        const modeleChoisi = normalizeText(payload.modele);
        const traitementChoisi = normalizeText(payload.traitement) || DEFAULT_TREATMENT;
        const imageDataUrl = normalizeText(payload.image);

        if (!modeleChoisi || !imageDataUrl) {
            console.error('Configuration incomplete for add_to_cart.', payload);
            notifyWidget('add_to_cart_error', 'Veuillez choisir un modele et une image.');
            return;
        }

        const uniqueName = `design-${sanitizeFileNamePart(modeleChoisi)}-${Date.now()}.png`;

        try {
            const uploadedUrlInterne = await uploadImageToMedia(imageDataUrl, uniqueName);
            const uploadedUrlPublic = convertWixUrlToPublic(uploadedUrlInterne);

            await cart.addProducts([{
                productId: PRODUCT_ID,
                quantity: 1,
                options: {
                    choices: {
                        'Modèle': modeleChoisi
                    },
                    customTextFields: [
                        {
                            title: 'Lien Design',
                            value: uploadedUrlPublic
                        },
                        {
                            title: 'Traitement Image',
                            value: traitementChoisi
                        }
                    ]
                }
            }]);

            if (isSenegalCountry(payload.pays)) {
                try {
                    await cart.applyCoupon('SENEGAL20');
                } catch (couponError) {
                    console.warn('Unable to apply SENEGAL20 coupon.', couponError);
                }
            }

            cart.showMiniCart();
            notifyWidget('add_to_cart_success', 'Produit ajoute au panier.', {
                imageUrl: uploadedUrlPublic
            });
        } catch (error) {
            console.error('Failed to add coque product to cart.', error);
            notifyWidget('add_to_cart_error', 'Une erreur est survenue. Veuillez reessayer.');
        }
    });
});
