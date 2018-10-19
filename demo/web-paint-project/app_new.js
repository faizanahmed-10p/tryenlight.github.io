var newImg = new Image;
/*newImg.onload = function() {
    img.src = this.src;
}*/
newImg.src = 'images/img1.png';

window.onload = function() {
    var c = document.getElementById("myCanvas");
    var ctx = c.getContext("2d");
    var img = newImg
    ctx.drawImage(img, 10, 10);
}