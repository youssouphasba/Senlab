import { uploadImageToMedia } from 'backend/upload';
import { cart } from 'wix-stores';

// --- CONFIGURATION ---
const PRODUCT_ID = "b6d8773f-c0e6-47f4-b7ba-2b6c9772c710"; 
const HTML_WIDGET_ID = "#html1"; 

// Fonction technique pour transformer le lien Wix en lien Web visible
function convertWixUrlToPublic(wixUrl) {
    if (!wixUrl || !wixUrl.startsWith('wix:image://v1/')) { return wixUrl; }
    let path = wixUrl.substring('wix:image://v1/'.length);
    const hashIndex = path.indexOf('#');
    if (hashIndex !== -1) { path = path.substring(0, hashIndex); }
    return `https://static.wixstatic.com/media/${path}`;
}

$w.onReady(function () {
    
    // On écoute le configurateur
    $w(HTML_WIDGET_ID).onMessage(async (event) => {
        
        if (event.data.type === "add_to_cart") {
            console.log("🎨 Commande Coque reçue !");
            
            const modeleChoisi = event.data.modele;
            const traitementChoisi = event.data.traitement; 
            
            // Nom unique pour l'image
            const safeModelName = modeleChoisi.replace(/[^a-zA-Z0-9]/g, '-');
            const uniqueName = `design-${safeModelName}-${Date.now()}.png`;

            try {
                // 1. Envoi sécurisé vers votre fichier backend/upload
                const uploadedUrlInterne = await uploadImageToMedia(event.data.image, uniqueName);
                
                // On convertit le lien pour que vous puissiez le lire
                const uploadedUrlPublic = convertWixUrlToPublic(uploadedUrlInterne);
                console.log("✅ Image sauvegardée :", uploadedUrlPublic);

                // 2. Ajout au panier avec TOUTES les infos
                await cart.addProducts([{
                    "productId": PRODUCT_ID, 
                    "quantity": 1,
                    "options": {
                        "choices": {
                            "Modèle": modeleChoisi 
                        },
                        "customTextFields": [
                            {
                                "title": "Lien Design", 
                                "value": uploadedUrlPublic // Le lien https://
                            },
                            {
                                "title": "Traitement Image",
                                "value": traitementChoisi // Cartoon ou Normal
                            }
                        ]
                    }
                }]);

                // 3. Réduction Sénégal (-20%)
                if (event.data.pays === "Sénégal") {
                    try {
                        await cart.applyCoupon("SENEGAL20"); 
                        console.log("✅ Coupon Sénégal appliqué");
                    } catch (err) { console.log("Pas de coupon"); }
                }
                
                // 4. Ouverture du panier
                cart.showMiniCart();

            } catch (error) {
                console.error("❌ Erreur :", error);
            }
        }
    });
});