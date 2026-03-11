// ===========================================
// Code Velo sur la Page Wix du Mug
// ===========================================

import { uploadImageToMedia } from 'backend/upload';
import { cart } from 'wix-stores';

// --- CONFIGURATION OBLIGATOIRE ---
// 🚨 Mettez ici l'ID de votre produit Mug dans Wix Stores 🚨
const PRODUCT_ID_MUG = "3f577c45-7268-4ebf-8e31-5e609b887567"; 

const HTML_WIDGET_ID = "#html1"; // ID de votre Widget HTML

// Fonction de conversion d'URL (copiée de la V50)
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

$w.onReady(function () {
    
    // Assurez-vous que l'ID du Mug est bien configuré
    if (PRODUCT_ID_MUG === "COLLE_ID_DU_PRODUIT_MUG_ICI") {
         console.error("ERREUR Velo: Veuillez mettre à jour PRODUCT_ID_MUG dans le code Velo.");
         // Vous pouvez ajouter un message à l'utilisateur ici si nécessaire
         return;
    }


    $w(HTML_WIDGET_ID).onMessage(async (event) => {
        
        if (event.data.type === "add_to_cart") {
            console.log("🎨 Design de Mug reçu. Traitement et upload en cours...");
            
            const modeleChoisi = event.data.modele; // Doit être "Mug Personnalisé"
            const traitementChoisi = event.data.traitement; 
            
            const safeModelName = modeleChoisi.replace(/[^a-zA-Z0-9]/g, '-');
            const uniqueName = `design-${safeModelName}-${Date.now()}.png`;

            try {
                // 1. Upload de l'image
                const uploadedUrlInterne = await uploadImageToMedia(event.data.image, uniqueName);
                const uploadedUrlPublic = convertWixUrlToPublic(uploadedUrlInterne);
                console.log("✅ Image Mug stockée (URL Publique) :", uploadedUrlPublic);

                // 2. Ajout au panier : On utilise le PRODUCT_ID_MUG
                await cart.addProducts([{
                    "productId": PRODUCT_ID_MUG, 
                    "quantity": 1,
                    "options": {
                        "choices": {
                            // ATTENTION : "Modèle" doit correspondre EXACTEMENT au nom de l'option/variante dans votre produit Mug
                            // Si vous avez nommé l'option "Modèle", le choix doit être "Mug Personnalisé"
                            "Modèle": modeleChoisi 
                        },
                        "customTextFields": [
                            {
                                "title": "Lien Design", // Nom du Modificateur
                                "value": uploadedUrlPublic 
                            },
                            {
                                "title": "Traitement Image", // Nom du Modificateur
                                "value": traitementChoisi
                            }
                        ]
                    }
                }]);

                console.log("🛒 Mug ajouté au panier avec succès !");
                
                // 3. Ouvrir le mini-panier
                cart.showMiniCart();

            } catch (error) {
                console.error("❌ ERREUR CRITIQUE lors de l'ajout au panier du Mug. Vérifiez l'ID produit et les noms d'Option/Modificateurs.", error);
            }
        }
    });
});