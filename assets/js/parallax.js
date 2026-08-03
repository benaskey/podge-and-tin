// Scroll-driven parallax for background panels + fade/slide reveal for floating cards.
(function () {
  'use strict';

  function updateParallax() {
    document.querySelectorAll('.parallax-layer').forEach(function (layer) {
      var speed = parseFloat(layer.dataset.speed || '0.15');
      var parent = layer.parentElement;
      var rect = parent.getBoundingClientRect();
      var viewportCenter = window.innerHeight / 2;
      var elementCenter = rect.top + rect.height / 2;
      var distance = elementCenter - viewportCenter;
      layer.style.transform = 'translateY(' + (distance * speed) + 'px)';
    });
  }

  window.addEventListener('scroll', updateParallax, { passive: true });
  window.addEventListener('resize', updateParallax);
  document.addEventListener('DOMContentLoaded', updateParallax);

  document.addEventListener('DOMContentLoaded', function () {
    var cards = document.querySelectorAll('.reveal-card');
    if (!cards.length) return;

    var observer = new IntersectionObserver(
      function (entries) {
        entries.forEach(function (entry) {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.2 }
    );

    cards.forEach(function (card) {
      observer.observe(card);
    });
  });
})();
