
$(document).ready(function(){
    $("#randomise").on("click",function(){
    $("#quote").html("Please Wait <i class='fa fa-spinner' aria-hidden='true'></i>");  $.getJSON("https://api.icndb.com/jokes/random",function(randomQuote){
        $("#quote").html(randomQuote.value.joke);
      });
    });

    $("#tweetButton").on("click",function(){
      var twitterQuote = document.getElementById("quote").innerHTML;
      var twitterURL = "https://twitter.com/intent/tweet?text=" + twitterQuote;

      if (twitterQuote.length <= 140) {
        $("#twitterLink").attr("href",twitterURL);
      } else { // Shorten the Tweet
        twitterQuote = twitterQuote.slice(0,137);
        twitterQuote += "...";
        var shortTwitterURL = "https://twitter.com/intent/tweet?text=" + twitterQuote
        $("#twitterLink").attr("href",shortTwitterURL);
      }
    });
  });
