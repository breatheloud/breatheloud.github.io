/*
// Picked this up from Stack Overflow for jQuery smoothScroll

$("#button").click(function() {
    $('html, body').animate({
        scrollTop: $("#elementtoScrollToID").offset().top
    }, 2000);
});
*/

// Welcome Animation
  var welcomeText = document.getElementsByTagName('h1');
  var welcomeSubtitle = document.getElementsByTagName('h6');

/*
  var welcomeArr = "Welcome".split("");

  function typewriter(){
    for (var i = 0 ; i < welcomeArr.length ; i++){
      TweenLite.from(welcomeArr[i], 0.9, {autoAlpha:0, ease:Power0.easeNone}); //autoAlpha = visibility & power = entrance power
    }
  }();
*/

  TweenLite.from(welcomeText, 0.9, {autoAlpha:0, ease:Power4.easeIn}); //autoAlpha = visibility & power = entrance power

  /*
  function breathingIn () {
      //TweenLite.fromTo(welcomeText, 2.4,{fontSize:"5.5em"} ,{fontSize:"5.77em" ,ease:Power1.easeOut, onComplete:breathingOut})

      TweenLite.fromTo(welcomeSubtitle,1.0,{fontSize:"1.9em", ease:Power1.easeIn}, {autoAlpha:1, fontSize:"2.1em", onComplete:breathingOut})
  };

  function breathingOut () {
    //TweenLite.fromTo(welcomeText,2.4,{fontSize:"5.77em"},{fontSize:"5.5em",ease:Power1.easeIn, delay:0.15})
    TweenLite.fromTo(welcomeSubtitle,1.0,{fontSize:"2.1em"},{autoAlpha:0,fontSize:"1.9em",ease:Power0.easeOut})
  };
  */


//Wiki Viewer Animations
  var wikiCaption = document.getElementById('wikiCaption');
  var wikiPic = document.getElementById('wikiPic');

  wikiPic.onmouseover = function () {

      TweenLite.to(wikiCaption,0.35, {opacity:1})

      TweenLite.to(wikiPic, 0.35, {opacity: .4}
      );

  }; // end .onmouseover

  wikiPic.onmouseout = function() {

      TweenLite.to(wikiCaption,0.45, {opacity:0});

      TweenLite.to(wikiPic, 0.5, {opacity: 1});

  }; // .end onmouseout


//Weather Applet Animations
  var weatherCaption = document.getElementById('weatherCaption');
  var weatherPic = document.getElementById('weatherPic');

  weatherPic.onmouseover = function () {

      TweenLite.to(weatherCaption,0.6, {opacity:.9})

      TweenLite.to(weatherPic, 0.35, {opacity: .4}
      );

  }; // end .onmouseover

  weatherPic.onmouseout = function() {

      TweenLite.to(weatherCaption,0.45, {opacity:0});

      TweenLite.to(weatherPic, 0.35, {opacity: 1});

  }; // .end onmouseout


// Quote Generator Animations
  var quoteCaption = document.getElementById('quoteCaption');
  var quotePic = document.getElementById('quotePic');

  quotePic.onmouseover = function () {

      TweenLite.to(quoteCaption,0.35, {opacity:1})

      TweenLite.to(quotePic, 0.35, {opacity: .4}
      );

  }; // end .onmouseover

  quotePic.onmouseout = function() {

      TweenLite.to(quoteCaption,0.45, {opacity:0});

      TweenLite.to(quotePic, 0.35, {opacity: 1});

  }; // .end onmouseout
