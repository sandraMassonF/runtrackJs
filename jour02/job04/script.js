
const textarea = document.getElementById('keylogger');

    document.addEventListener('keydown', function(event) {
      const lettre = event.key;

        if (lettre.length === 1 && lettre.match(/[a-z]/i)) {
        
        if (document.activeElement === textarea) {          
          textarea.value += lettre + lettre;
        } else {          
          textarea.value += lettre;
        }
      }
    });