// Écouteur de scroll
window.addEventListener('scroll', function () {
    const scrollTop = window.scrollY; // Position verticale de scroll
    const docHeight = document.documentElement.scrollHeight - window.innerHeight; // Hauteur totale scrollable
    const scrolled = (scrollTop / docHeight) * 100; // Pourcentage de scroll
  
    // Mise à jour de la variable CSS personnalisée
    const footer = document.querySelector('footer');
    footer.style.setProperty('--scroll', `${scrolled}%`);
  });
  