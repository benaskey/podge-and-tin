// Header behaviour: desktop Menu sub-nav reveal + mobile accordion menu.
(function () {
  'use strict';

  document.addEventListener('DOMContentLoaded', function () {
    var menuTrigger = document.getElementById('menu-trigger');
    var subNav = document.getElementById('sub-nav');

    if (menuTrigger && subNav) {
      menuTrigger.addEventListener('click', function (e) {
        e.preventDefault();
        subNav.classList.toggle('open');
        menuTrigger.classList.toggle('active');
      });

      document.addEventListener('click', function (e) {
        if (!subNav.contains(e.target) && e.target !== menuTrigger) {
          subNav.classList.remove('open');
          menuTrigger.classList.remove('active');
        }
      });
    }

    var hamburger = document.getElementById('hamburger');
    var mobileMenu = document.getElementById('mobile-menu');

    if (hamburger && mobileMenu) {
      hamburger.addEventListener('click', function () {
        mobileMenu.classList.toggle('open');
        hamburger.classList.toggle('open');
      });
    }

    var mobileMenuTrigger = document.getElementById('mobile-menu-trigger');
    var mobileMenuFood = document.getElementById('mobile-menu-food');

    if (mobileMenuTrigger && mobileMenuFood) {
      mobileMenuTrigger.addEventListener('click', function () {
        mobileMenuFood.classList.toggle('open');
      });
    }

    var yearEl = document.getElementById('year');
    if (yearEl) {
      yearEl.textContent = new Date().getFullYear();
    }
  });
})();
