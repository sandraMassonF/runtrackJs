$(document).ready(function() {
    // Quand on clique sur le bouton "Afficher"
    $('#afficherBtn').on('click', function() {
      // Vérifier si la citation existe déjà pour éviter de la recréer
      $(this).hide();

      if ($('#citation').length === 0) {
        // Création de la citation
        const $citation = $('<div>', {
          id: 'citation',
          text: "Les logiciels et les cathédrales, c'est un peu la même chose - d'abord, on les construit, ensuite, on prie."
        });

        // Création du bouton "Cacher"
        const $btnCacher = $('<button>', {
          text: 'Cacher la citation',
          id: 'cacherBtn'
        });

        // Action du bouton "Cacher" : supprimer la citation et lui-même
          $btnCacher.on('click', function() {
          $citation.remove();
          $(this).remove();
          $('#afficherBtn').show();
        });

        // Ajouter la citation et le bouton "Cacher" à la page
        $('body').append($citation, $btnCacher);
      }
    });
  });