/**
* Filename: scripts.js
* Author: Alexander Asfaha
* Description: This program will control the way that images are displayed
* and presented.
*/
'use strict';
// Check to see if page is still loading.
if (document.readyState == 'loading') {
    document.addEventListener('DOMContentLoaded', changeImg );
} else {
    changeImg ();
}


// change image
function changeImg (){
    const time = 2000;
    const  photos = [];
    let i = 0; //start

    //image list
    photos [0] = "photos/free3s.jpg";
    photos [1] = "photos/kray2s.jpg";
    photos [2] = "photos/free2s.jpg";

   document.slide.src = photos[i];

   if(i < photos.length - 1){
       i++;
   } else {
       i = 0;
   } 
   setTimeout("changeImg()", time);
}

