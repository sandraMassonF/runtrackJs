const button = document.getElementById('button');

// Ajout d'un écouteur d'événement pour le clic
button.addEventListener('click', function() {
    // Utilisation de Fetch pour récupérer le fichier texte
    fetch('expression.txt')
        .then(response => {
            if (!response.ok) {
                throw new Error('Erreur lors du chargement du fichier');
            }
            return response.text(); // Récupère le contenu en texte
        })
        .then(data => {
            // Création d'un paragraphe et insertion du texte
            const p = document.createElement('p');
            p.textContent = data;
            document.getElementById('result').innerHTML = ''; // Nettoyer l'ancien contenu
            document.getElementById('result').appendChild(p);
        })
        .catch(error => {
            console.error('Erreur:', error);
        });
});