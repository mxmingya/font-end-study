var ad1 = document.getElementById(slideshow);
changeAds();
// var ad2 =document.getElementById(ad2);
// var ad3 = document.getElementById(ad3);
// var ad4 = document.getElementById(ad4);

var index = 0;
var length = images.length - 1;

var images = ["JavascriptCookbook.jpg", "learningPerl.jpg", "modernPHP.jpg", "mysqlCookbook.jpg"];
var waitTime = [3, 5, 3, 7];

function changeAds(x) {
    index += x;
    if (index > length) {
      index = 1;
    }
    if (index < 0) {
      index = length;
    }


    document.getElementById("slideshow").src = images[index];
    //ad_im.setAttribute("src", images[index]);
    //setInterval(changeAds, waitTime[index]);
    //index++;
  }
}


var intervalHandler = setInterval(changeAds, waitTime[index]);

ad_image.oncick=function(){
  clearInterval(intervalHandler);
}


//-----------------------------------------
function previous(){
  index--;
  if (index < 0) {
    slidexIndex = 0;
  }
  ad_image.setAttribute("src", images[index]);
 }

fuction next() {
  index++;
  if (index > 3) {
    index = 0;
  }
  ad_image.setAttribute("src", images[index]);
}
