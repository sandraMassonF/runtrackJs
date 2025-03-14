// Fonction qui prend en paramètre une chaîne JSON et une clé,
// et qui retourne la valeur associée à cette clé.
function jsonValueKey(jsonString, key) {
    try {
      const obj = JSON.parse(jsonString);
      return obj[key];
    } catch (error) {
      console.error("La chaîne JSON n'est pas valide :", error);
      return null;
    }
  }
  
  // On attend que le DOM soit complètement chargé
  document.addEventListener("DOMContentLoaded", function() {
    // Récupération du bouton
    const filterButton = document.getElementById("filterButton");
  
    filterButton.addEventListener("click", function() {
      // Récupérer les valeurs des champs du formulaire
      const idVal = document.getElementById("id").value;
      const nomVal = document.getElementById("nom").value;
      const typeVal = document.getElementById("type").value;
  
      // Création d'un objet à partir des valeurs saisies
      const dataObj = {
        id: idVal,
        nom: nomVal,
        type: typeVal
      };
  
      // Conversion de l'objet en chaîne JSON
      const jsonString = JSON.stringify(dataObj);
  
      // Utilisation de la fonction jsonValueKey pour obtenir la valeur associée à la clé "nom"
      const valeur = jsonValueKey(jsonString, "nom");
  
      // Affichage du résultat dans le div "affichage"
      document.getElementById("affichage").textContent = `La valeur pour la clé "nom" est : ${valeur}`;
    });
  });
  