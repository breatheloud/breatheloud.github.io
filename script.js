// TO DO: change header colour
var projectBoard = document.getElementsByClassName('projectLink');
var projectModal = document.getElementById('projectModal');
var projectHeader = document.getElementById('modal-header');
var projectTitle = document.getElementById('project-title');
var projectSnippet = document.getElementById('project-snippet');
var projectBtn = document.getElementById('project-btn');
var projectList = document.getElementById('project-list');
var counter = 0;

function createListItem (text) {
  var li = document.createElement('li');
  li.textContent = text;
  return li;
}

function appendListItems (parent, children) {
  children.forEach(function (child) {
    parent.appendChild(child);
  });
}

// Oliver Bilou
projectBoard[1].onclick = function(){
  projectModal.style.display = "block";
  projectHeader.style.backgroundColor = "#D01F46";
  projectTitle.innerHTML = "Oliver Bilou";
  projectTitle.style.color = "#F0F0F0";
  projectSnippet.innerHTML = "My first re-entry into the world of Shopify.  Working alongside the founder and a designer, we rejuvenated Oliver Bilou's original site.";
  projectBtn.setAttribute("onclick", "window.open('https://oliverbilou.com')");

  var arr = [
    createListItem("By implementing user tests to assist in the decision-making process, we were able to act on informed decisions regarding the UX of the site"),
    createListItem("Inserting custom built modals, accordions, and creating a more fluid flow for the users"),
    createListItem("In order to maintain aesthetic consistency across the entire website, I kept colour relationships complementary across the entire site as well as sharp and soft edgings")
  ];
  appendListItems(projectList, arr);
}

//Kollectaball
projectBoard[7].onclick = function(){
  projectModal.style.display = "block";
  projectHeader.style.backgroundColor = "#5c7393";
  projectTitle.innerHTML = "Kollectaball";
  projectTitle.style.color = "#fff";
  projectSnippet.innerHTML = "A well-developed niche product, that needed some improvements to its Shopify store. Incuding various cosmetic customisations, I have improved the speed and functionality since working with the Kollectaball team.";
  projectBtn.setAttribute("onclick", "window.open('https://www.kollectaball.com')");

  var arr = [
    createListItem("Merged (and managed redirects for) 6 variations of the site into one canonical version"),
    createListItem("Almost tripled the site's Lighthouse score: I halved the total load time of the home page; mitigated the amount of network calls, async loading relevant assets, and removed other render-blocking resourecs; forced a FOUT ; deleted unnecessary apps by implementing best practices such as lazy loading, minification, and converting to progressive jps, webp & webm. I cut down the weight of the site's images dramatically"),
    createListItem("Creating the geo-location banner, unifying all collections into a single collection page, and simplifying the site, while fixing various visual bugs.  I have had a hand in improving a multitude of aspects of the site")
  ];
  appendListItems(projectList, arr);
}

// Steph Vass
projectBoard[3].onclick = function(){
  projectModal.style.display = "block";
  projectHeader.style.backgroundColor = "#000";
  projectTitle.innerHTML = "Steph Vass EPK";
  projectTitle.style.color = "#d7d7d7";
  projectSnippet.innerHTML = "This single-page site was created entirely by me, I designed and developed everything. Initially hosted on Github Pages.";
  projectBtn.setAttribute("onclick", "window.open('https://stephvass.com')");

  var arr = [
    createListItem('Mobile-first, using flexbox, simple yet effective'),
    createListItem('Workflow using git')
  ];
  appendListItems(projectList, arr);
}

// Chaykra
projectBoard[4].onclick = function(){
  projectModal.style.display = "block";
  projectHeader.style.backgroundColor = "#21386b";
  projectTitle.innerHTML = "Chaykra";
  projectTitle.style.color = "#fff";

  projectSnippet.innerHTML = "Improving a well-designed and already customised Shopify store, I worked alongside the sister founders and a designer.";
  projectBtn.setAttribute("onclick", "window.open('https://chaykra.com')");

  var arr = [
    createListItem('Unified three localised versions of the site into a single one with a dynamic currency switcher'),
    createListItem('Implemented blog redesign to spec on an already customised layout.  Often this involved fixing breaks that cascaded down'),
    createListItem('Various fixes to the UI, as well as implementing new banner images with ideal on-page SEO')
  ];
  appendListItems(projectList, arr);
}

// AĀ
projectBoard[2].onclick = function(){
  projectModal.style.display = "block";
  projectHeader.style.backgroundColor = "#7ca26c";
  projectTitle.innerHTML = "AĀ";
  projectTitle.style.color = "#fff";
  projectSnippet.innerHTML = "Built using Wordpress, and working alongside the company's founder. I'm rather proud of the first site I built from scratch.";
  projectBtn.setAttribute("onclick", "window.open('https://aā.com/shipping/ ')");

  var arr = [
    createListItem('Initially hosted on an AWS EC2 instance, I handled most of the necessary back-end considerations'),
    createListItem("Although the site's design is somewhat basic, some UI elements were rather fun to create: such as the shipping map; done by editing an SVG file with CSS")
  ];
  appendListItems(projectList, arr);
}

// Ottoman Home Decor
projectBoard[6].onclick = function(){
  projectModal.style.display = "block";
  projectHeader.style.backgroundColor = "#557b97";
  projectTitle.innerHTML = "Ottoman Home Decor";
  projectTitle.style.color = "#fff";
  projectSnippet.innerHTML = "Built and established a basic Shopify store that was previously only a profile on a third-party online marketplace.";
  projectBtn.setAttribute("onclick", "window.open('https://ottomanhd.com')");

  var arr = [
    createListItem('Assisted with branding and design considerations, making suggestions that will hopefully manifest in a growing direction'),
    createListItem('Using best practice SEO, I created the lightly designed Ottoman Home Decor storefront')
  ];
  appendListItems(projectList, arr);
}

// Sister Jane
projectBoard[5].onclick = function(){
  projectModal.style.display = "block";
  projectHeader.style.backgroundColor = "#fff";
  projectTitle.innerHTML = "Sister Jane";
  projectTitle.style.color = "#39342D";
  projectSnippet.innerHTML = "After creating a minimalistic shipping page, I built a geo-location upselling bar that dynamically changes depending on the user's location and current amount in the cart.";
  projectBtn.setAttribute("onclick", "window.open('https://sisterjane.com')");

  var arr = [
    createListItem("Working specifically with Shopify's Shipping Zone REST API, I pulled in data from where Sister Jane ships to, and displayed it in a simple dropdown menu incorporated within a search bar"),
    createListItem("Initially using the native HTML5 geolocation feature, the user's location was matched to various logical conditions (and the Shipping Zone API) and dispayed in a bar that changes depending on the cart's amount with the intention of more users spending more to qualify for free shipping"),
    createListItem("Due to the nature of how Shopify hosts its sites, both the above features required a CORS proxy to be set up")
  ];
  appendListItems(projectList, arr);
}

// Frances Loom
projectBoard[0].onclick = function(){
  projectModal.style.display = "block";
  projectHeader.style.backgroundColor = "#faf9f4";
  projectTitle.innerHTML = "Frances Loom";
  projectTitle.style.color = "#4a4a4a";
  projectSnippet.innerHTML = "Bringing several new design ideas to life, I took the rough design wireframes from pencil sketches to fully functional improvements integrated into the aesthetic of the site.";
  projectBtn.setAttribute("onclick", "window.open('https://francesloom.com')");

  var arr = [
    createListItem('By inserting static image placeholders on the collections page, and building on already existing customisations within the existing theme layout: I had to account for the dynamically created grid layout crossing over the CSS & Javascript, and programmatically inserted static images that would not break with any number of images that are always being sold. With the help of some basic mathematics, all is well.'),
    createListItem('I rebuilt the navigation menu, about us page, and added in some new functionality onto the collections page')
  ];
  appendListItems(projectList, arr);
}

// Close Modal
var arr = projectList.children;
var closeWithX = document.getElementsByClassName("close")[0];

closeWithX.onclick = function() {
  for (var i = arr.length ; i > 0 ; i--) {
    console.log(i + " is being removed");
      projectList.removeChild(arr[0]);
  }
  document.getElementsByClassName('modal')[0].style.display = "none";
}

window.onclick = function(event) {
  if (event.target == projectModal) {
    for (var i = arr.length ; i > 0 ; i--) {
      console.log(i + " is being removed");
        projectList.removeChild(arr[0]);
    }
    document.getElementsByClassName('modal')[0].style.display = "none";
  }
}

window.onload = function showQuote(){
  counter ++;
  if (counter < 2) {
    document.getElementsByTagName('quote')[0].classList.remove("invisible");
    document.getElementById('profilePic').classList.add('shake');
    document.getElementById('profilePic').play();
  }
};
