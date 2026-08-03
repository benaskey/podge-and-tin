// Hero word-cycle -> final logo/tagline reveal (homepage only).
// Pattern: toggle Tailwind's opacity-0/opacity-100/hidden utility classes directly,
// each element already carries `transition-opacity duration-300` in its markup.
(function () {
  'use strict';

  document.addEventListener('DOMContentLoaded', function () {
    var cycleWrap = document.getElementById('inspire-cycle');
    var finalBlock = document.getElementById('inspire-final');
    if (!cycleWrap || !finalBlock) return;

    var words = cycleWrap.querySelectorAll('.inspire-word');
    if (!words.length) return;

    var index = 0;
    var displayDuration = 1300;
    var fadeDuration = 300;

    function showWord(i) {
      words.forEach(function (word) {
        word.classList.add('hidden');
        word.classList.remove('opacity-100');
        word.classList.add('opacity-0');
      });
      if (i < words.length) {
        var current = words[i];
        current.classList.remove('hidden');
        void current.offsetWidth;
        current.classList.remove('opacity-0');
        current.classList.add('opacity-100');
      }
    }

    function showFinal() {
      cycleWrap.classList.remove('opacity-100');
      cycleWrap.classList.add('opacity-0');
      setTimeout(function () {
        cycleWrap.classList.add('hidden');
        finalBlock.classList.remove('hidden');
        void finalBlock.offsetWidth;
        finalBlock.classList.remove('opacity-0');
        finalBlock.classList.add('opacity-100');
      }, fadeDuration);
    }

    function animate() {
      if (index < words.length) {
        showWord(index);
        index++;
        setTimeout(animate, displayDuration);
      } else {
        showFinal();
      }
    }

    animate();
  });
})();
