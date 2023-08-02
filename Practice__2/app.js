const button = document.querySelector("#btn");

button.addEventListener("click", function() {
    let screenSize = "Размер экрана: " + window.innerWidth + "x" + window.innerHeight;
    alert(screenSize);
});