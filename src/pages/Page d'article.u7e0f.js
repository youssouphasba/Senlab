import { fetch } from 'wix-fetch';

$w.onReady(async function () {
    
    // 1. On récupère les infos du produit
    const produit = await $w('#productPage1').getProduct();
    
    // Contrairement au code précédent, on NE TOUCHE PAS au prix Euro.
    // On laisse Wix l'afficher normalement.

    // 2. Détection du pays
    try {
        const reponse = await fetch("https://ipapi.co/json/", { method: 'get' });
        
        if (reponse.ok) {
            const json = await reponse.json();

            // 3. SI SÉNÉGAL
            if (json.country_code === "SN") {
                
                // Calcul du prix AVEC la réduction de -20%
                // (On multiplie par 0.8)
                const prixAvecRemise = produit.price * 0.8; 
                
                // Conversion en CFA
                const taux = 655.957;
                const prixCFA = Math.ceil(prixAvecRemise * taux);
                
                // Formatage (ex: 10 500)
                const prixJoli = prixCFA.toLocaleString('fr-FR');

                // 4. Affichage du texte
                // On précise bien que c'est le prix AVEC remise
                $w('#txtPrixCFA').text = `Prix spécial Wave (-20%) : ${prixJoli} FCFA`;

                // On affiche le texte (qui était caché au chargement)
                $w('#txtPrixCFA').expand(); 
            }
        }
    } catch (err) {
        console.log("Erreur : " + err);
    }
});