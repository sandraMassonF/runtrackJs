$(document).ready(function() {
  let draggedElement = null;

  // Gestion des événements Drag & Drop
  function addDragAndDropEvents(element) {
    element.on('dragstart', function(e) {
      draggedElement = this;
      e.originalEvent.dataTransfer.setData('text/plain', '');
    });

    element.on('dragover', function(e) {
      e.preventDefault();
      $(this).addClass('drag-over');
    });

    element.on('dragleave', function(e) {
      $(this).removeClass('drag-over');
    });

    element.on('drop', function(e) {
      e.preventDefault();
      $(this).removeClass('drag-over');

      if (draggedElement !== this) {
        // Échanger les positions
        const $container = $('#container');
        const $dragged = $(draggedElement);
        const $target = $(this);

        if ($dragged.index() < $target.index()) {
          $target.after($dragged);
        } else {
          $target.before($dragged);
        }
      }
    });
  }

  // Appliquer les événements aux images
  $('#container .rainbow-piece').each(function() {
    addDragAndDropEvents($(this));
  });

  // Mélanger les images
  $('#shuffleBtn').on('click', function() {
    const pieces = $('#container .rainbow-piece').toArray();
    pieces.sort(() => Math.random() - 0.5);
    $('#container').empty().append(pieces);
    $('#result').text('');
    // Réactiver drag and drop après mélange
    $('#container .rainbow-piece').each(function() {
      addDragAndDropEvents($(this));
    });
  });

  // Vérifier l'ordre
  $('#checkBtn').on('click', function() {
    let isCorrect = true;
    $('#container .rainbow-piece').each(function(index) {
      if ($(this).data('id') != index + 1) {
        isCorrect = false;
        return false;
      }
    });

    if (isCorrect) {
      $('#result').text('Vous avez gagné !').css('color', 'green');
    } else {
      $('#result').text('Vous avez perdu !').css('color', 'red');
    }
  });
});