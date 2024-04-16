document.addEventListener("DOMContentLoaded", function() {

    function toggleLamp() {
        var lampImage = document.getElementById("lamp-image");
        var body = document.body;
        var h1 = document.querySelector("h1");
        var h2 = document.querySelector("h2");

        if (lampImage.src.endsWith("bulb-off.png")) {
            lampImage.src = "https://i.postimg.cc/6QyTynzr/bulb-on.png";
            body.style.backgroundColor = "yellow";
            h1.style.color = "black"; 
            h2.style.color = "black"; 
        } else {
            lampImage.src = "https://i.postimg.cc/KjK1wL3c/bulb-off.png";
            body.style.backgroundColor = "black";
            h1.style.color = "#fff"; 
            h2.style.color = "#fff"; 
        }
    }

    document.getElementById("lamp-image").addEventListener("click", toggleLamp);
});
