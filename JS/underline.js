document.addEventListener('DOMContentLoaded', function () {
  const underline = document.querySelector('.underline');

  function extend() {
    underline.style.transition = 'width 0.5s ease-in-out';
    underline.style.width = '350px';
  }

  function revert() {
    underline.style.transition = 'width 0.5s ease-in-out';
    underline.style.width = '300px';
  }

    setTimeout(function () {
      extend();
      setTimeout(revert, 500);
    }, 250);
});
