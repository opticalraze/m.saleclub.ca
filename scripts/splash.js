$(document).ready(function() {

  const splash = document.querySelector('#splash');
  splash.addEventListener('animationend', () => {
    // do something
    $('#splash').removeClass('animate__jackInTheBox').addClass('done').delay(1000).queue(function(){
      $('#splash').addClass('animate__pulse animate__infinite');
    });


  });

});


(function($){

  'use strict';
    $(window).on('load', function () {
        if ($(".splash").length > 0)
        {
          waitForElementToDisplay("#splash.done",function(){
            //console.log('u');
            $(".splash").fadeOut("slow");
            $('body').css('overflow','auto');
          },200,10000);
        }
    });
})(jQuery)

function waitForElementToDisplay(selector, callback, checkFrequencyInMs, timeoutInMs) {
  var startTimeInMs = Date.now();
  (function loopSearch() {
    if (document.querySelector(selector) != null) {
      callback();
      return;
    }
    else {
      setTimeout(function () {
        if (timeoutInMs && Date.now() - startTimeInMs > timeoutInMs)
          return;
        loopSearch();
      }, checkFrequencyInMs);
    }
  })();
}
