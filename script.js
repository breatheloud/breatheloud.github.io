// jello animation on profile pic

var profilePic = document.getElementById('avatar');


  profilePic.onclick = function () {
      profilePic.classList.add("jello");
      setTimeout(function(){
        profilePic.classList.remove("jello");
        document.getElementById('sneakyLine').style.visibility = "visible";
      }, 500);
  };

  // for non-mouse or touchpad users
  profilePic.onkeydown = function () {
    profilePic.classList.add("jello");
    setTimeout(function(){
      profilePic.classList.remove("jello")}, 500
  );

};

// from #JS30
function removeTransition(e) {
  if (e.propertyName !== "transform") return;
  e.target.classList.remove("jello");
}

profilePic.addEventListener("transitionend", removeTransition);

// figcaption reveal on hover or focus or tap

var figures = document.getElementsByTagName('figure');
