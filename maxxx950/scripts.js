//
// var index = 0;
// var length = images.length - 1;
//
// var images = ["JavascriptCookbook.jpg", "learningPerl.jpg", "modernPHP.jpg", "mysqlCookbook.jpg"];
// var waitTime = [3000, 5000, 3000, 7000];
//
// function changeImage(x) {
//     index += x;
//     if (index > length) {
//       index = 0;
//     }
//     if (index < 0) {
//       index = length;
//     }
//
//     document.getElementById("slideshow").src = images[index];
//
//     return false;
//   }
//
// function autorun() {
//   setInterval("changeImage(1)", 2000);
// }
var images = ["JavascriptCookbook.jpg", "learningPerl.jpg", "modernPHP.jpg", "mysqlCookbook.jpg"];
var caption = ["Javascript", "Perl", "PHP", "SQL"];
var times = [3000, 5000, 3000, 7000];

var imageNumber = 0;
var imageLength = images.length - 1;

function changeImage(x) {
    imageNumber += x;

    if (imageNumber > imageLength) {
        imageNumber = 0;
    }
    if (imageNumber < 0) {
        imageNumber = imageLength;
    }

    document.getElementById("slideshow").src = images[imageNumber];
    document.getElementById("caption").innerHTML = caption[imageNumber];

    return false;
}

function autoRun() {
    setInterval("changeImage(1)", times[imageNumber]);
}