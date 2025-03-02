document.getElementById('discover').addEventListener('click', function(event){
    window.location.href = './blogs.html'
})

document.getElementById('background-color').addEventListener('click', function(){
    var x = Math.floor(Math.random() * 256);
    var y = Math.floor(Math.random() * 256);
    var z = Math.floor(Math.random() * 256);
    var bgColor = "rgb(" + x + "," + y + "," + z + ")";
    document.getElementById('body-color').style.backgroundColor = bgColor;
})