// (function ($) {
  
//     "use strict";
  
//       // PRE LOADER

//       $(window).load(function(){
//         $('#preloader').delay(3000).slideUp('slow'); // set duration in brackets    
//       });
//     })(window.jQuery);
// $(document).load(function(){
//     setTimeout(function() {
//         $('.preloader').fadeOut();
//     }, 3000);
// });
$(document).ready(function(){
    setTimeout(function() {
        $('#preloader').fadeOut();
    }, 4000);
});


  
    var words = ['HOUSE OF JAMBHA STONE (CHIRA)'],
    part,
    i = 0,
    offset = 0,
    len = words.length,
    forwards = true,
    skip_count = 0,
    skip_delay = 15,
    speed = 70;
var wordflick = function () {
  setInterval(function () {
    if (forwards) {
      if (offset >= words[i].length) {
        ++skip_count;
        if (skip_count == skip_delay) {
          forwards = false;
          skip_count = 0;
        }
      }
    }
    else {
      if (offset == 0) {
        forwards = true;
        i++;
        offset = 0;
        if (i >= len) {
          i = 0;
        }
      }
    }
    part = words[i].substr(0, offset);
    if (skip_count == 0) {
      if (forwards) {
        offset++;
      }
      else {
        offset--;
      }
    }
    $('.word').text(part);
  },speed);
};

$(document).ready(function () {
  wordflick();
});

// function removeLoader(){
  
//   setTimeout(()=>{
//      let loader = document.getElementById('preloader');
  
//   // hide the loader
//   loader.style = 'display: none;';
//   },
//              3000);  
// }