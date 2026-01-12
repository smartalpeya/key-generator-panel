// Dans un nouveau fichier script.js
const API_URL = 'https://api.jsonbin.io/v3/b'; // Service gratuit

async function saveKeysOnline(keys) {
    try {
        const response = await fetch(API_URL, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'X-Master-Key': 'votre-cle-api'
            },
            body: JSON.stringify({ keys: keys })
        });
        return await response.json();
    } catch (error) {
        console.error('Erreur:', error);
    }
}