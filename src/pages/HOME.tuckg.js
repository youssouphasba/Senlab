import { fetch } from 'wix-fetch';
import wixWindow from 'wix-window';
import { session } from 'wix-storage';

$w.onReady(async function () {
    // On vérifie si le visiteur a déjà vu le popup dans cette session
    if (!session.getItem("vuPopupSenegal")) {
        try {
            const reponse = await fetch("https://ipapi.co/json/", { method: 'get' });
            if (reponse.ok) {
                const json = await reponse.json();
                
                // Si Sénégal
                if (json.country_code === "SN") {
                    // On ouvre la fenêtre (Vérifiez bien que le nom est InfoSenegal)
                    wixWindow.openLightbox("InfoSenegal");
                    // On note qu'il l'a vu
                    session.setItem("vuPopupSenegal", "oui");
                }
            }
        } catch (err) {
            console.log("Erreur Popup: " + err);
        }
    }
});