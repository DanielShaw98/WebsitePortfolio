// CV Underline

document.addEventListener('DOMContentLoaded', function () {
  const underlineCv = document.querySelector('.underline-cv');

  function extend() {
    underlineCv.style.transition = 'width 0.5s ease-in-out';
    underlineCv.style.width = '350px';
  }

  function revert() {
    underlineCv.style.transition = 'width 0.5s ease-in-out';
    underlineCv.style.width = '300px';
  }

    setTimeout(function () {
      extend();
      setTimeout(revert, 500);
    }, 250);
});

// Projects Underline

document.addEventListener('DOMContentLoaded', function () {
  const underlineProjects = document.querySelector('.underline-projects');

  function extend() {
    underlineProjects.style.transition = 'width 0.5s ease-in-out';
    underlineProjects.style.width = '600px';
  }

  function revert() {
    underlineProjects.style.transition = 'width 0.5s ease-in-out';
    underlineProjects.style.width = '550px';
  }

    setTimeout(function () {
      extend();
      setTimeout(revert, 500);
    }, 250);
});
