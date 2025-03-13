function jsonValueKey(jsonString, key) {
    try {
        // Convertir la chaîne JSON en objet JavaScript
        const jsonObject = JSON.parse(jsonString);

        // Retourner la valeur associée à la clé si elle existe
        return jsonObject[key] !== undefined ? jsonObject[key] : null;
    } catch (error) {
        console.error("Erreur lors de l'analyse du JSON :", error);
        return null;
    }
}

// Exemple d'utilisation :
const jsonString = '{"nom": "Alice", "age": 25, "ville": "Paris"}';
console.log(jsonValueKey(jsonString, "nom"));  // Affiche "Alice"
console.log(jsonValueKey(jsonString, "age"));  // Affiche 25
console.log(jsonValueKey(jsonString, "ville")); // Affiche null (clé inexistante)
