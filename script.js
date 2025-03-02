document.getElementById('discover').addEventListener('click', function(){
    window.location.href = './blogs.html'
})

document.getElementById('background-color').addEventListener('click', function(){
    var red = Math.floor(Math.random() * 256);
    var green = Math.floor(Math.random() * 256);
    var blue = Math.floor(Math.random() * 256);
    var bgColor = "rgb(" + red + "," + green + "," + blue + ")";
    document.getElementById('body-color').style.backgroundColor = bgColor;
})