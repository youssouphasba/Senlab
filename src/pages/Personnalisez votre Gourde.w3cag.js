// ===========================================
// Code Velo - Page Gourdes Personnalisées
// ===========================================

import { uploadImageToMedia } from 'backend/upload';
import { cart } from 'wix-stores';

// 🚨 1. REMPLACER PAR L'ID RÉEL DE VOTRE PRODUIT GOURDE DANS WIX STORES
const PRODUCT_ID_GOURDE = "4c75ef0c-24d9-48d8-80cf-3e7f30339a5c"; 

// 🚨 2. Vérifiez l'ID de votre Widget HTML (cliquez sur l'iframe pour voir son ID, souvent #html1)
const HTML_WIDGET_ID = "#html1"; 

// Fonction pour convertir l'URL interne Wix en URL publique visible par vous
function convertWixUrlToPublic(wixUrl) {
    if (!wixUrl || !wixUrl.startsWith('wix:image://v1/')) return wixUrl;
    let path = wixUrl.substring('wix:image://v1/'.length);
    const hashIndex = path.indexOf('#');
    if (hashIndex !== -1) path = path.substring(0, hashIndex);
    return `https://static.wixstatic.com/media/${path}`;
}

$w.onReady(function () {
    
    // On écoute le message envoyé par le Widget HTML quand on clique sur "Ajouter au panier"
    $w(HTML_WIDGET_ID).onMessage(async (event) => {
        
        if (event.data.type === "add_to_cart") {
            console.log("🎨 Design Gourde reçu. Démarrage du traitement...");
            
            // Récupération des données envoyées par le HTML
            const modeleRecu = event.data.modele; // Ex: "Gourde 400ML"
            const traitementRecu = event.data.traitement; // Ex: "Photo Normale"
            const imageBase64 = event.data.image;
            
            // Nom unique pour le fichier image
            const uniqueName = `gourde-${Date.now()}.png`;

            try {
                // 1. Upload de l'image vers le gestionnaire de médias Wix
                const wixImageUrl = await uploadImageToMedia(imageBase64, uniqueName);
                const publicImageUrl = convertWixUrlToPublic(wixImageUrl);
                
                console.log("✅ Image uploadée avec succès :", publicImageUrl);

                // 2. Ajout du produit au Panier Wix
                await cart.addProducts([{
                    "productId": PRODUCT_ID_GOURDE, 
                    "quantity": 1,
                    "options": {
                        "choices": {
                            // "Modèle" est le nom de l'option (Variante) dans votre fiche produit Wix
                            // La valeur (ex: "Gourde 400ML") doit exister exactement dans cette option
                            "Modèle": modeleRecu 
                        },
                        "customTextFields": [
                            {
                                "title": "Lien Design", // Doit correspondre exactement au nom du champ personnalisé
                                "value": publicImageUrl 
                            },
                            {
                                "title": "Traitement Image", // Doit correspondre exactement au nom du champ personnalisé
                                "value": traitementRecu
                            }
                        ]
                    }
                }]);

                console.log("🛒 Gourde ajoutée au panier !");
                cart.showMiniCart(); // Ouvre le tiroir du panier pour confirmer

            } catch (error) {
                console.error("❌ Erreur lors de l'ajout au panier :", error);
                // On peut renvoyer un message d'erreur au HTML si nécessaire
            }
        }
    });
});