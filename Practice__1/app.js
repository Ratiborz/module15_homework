const buttons = document.querySelectorAll('button');

buttons.forEach(function(button) {
  button.addEventListener("click", function(event) {
    const icon = this.querySelector('.icon_01');

    if (icon) {
      icon.classList.remove('icon_01');
      icon.classList.add('icon_02');
    } else {
      const previousIcon = this.querySelector('.icon_02');
      previousIcon.classList.remove('icon_02');
      previousIcon.classList.add('icon_01');
    }
  });
});