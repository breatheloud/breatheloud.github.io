// TO DO: change header colour
var projectBoard = document.getElementsByClassName('projectLink');
var projectModal = document.getElementById('projectModal');
var projectHeader = document.getElementById('modal-header');
var projectTitle = document.getElementById('project-title');
var projectSnippet = document.getElementById('project-snippet');
var projectBtn = document.getElementById('project-btn');
var projectList = document.getElementById('project-list');

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
projectBoard[0].onclick = function(){
  projectModal.style.display = "block";
  projectHeader.style.backgroundColor = "#D01F46";
  projectTitle.innerHTML = "Oliver Bilou";
  projectTitle.style.color = "#F0F0F0";
  projectSnippet.innerHTML = "My first re-entry into the world of Shopify.  I was rejuvenated their old website, working alongside the founder and designer.";
  projectBtn.setAttribute("onclick", "window.open('https://oliverbilou.com')");

  var arr = [
    createListItem("By implementing user tests to assist in the decision-making process, we were able to make some good decisions regarding the UX of the site. (i.e. nav bar to hav gradient opacity was the ideal solution as a completely transparent or opaque nav bar was either too jarring or limiting, the sweet spot was somewhere closer to opacity)"),
    createListItem("Inserting custom built modals, accordions, and making the site flow better (e.g. insert buttons at the bottom of single collection pages to see the rest of the products, while making sure that same all products button was accessible in the menu)"),
    createListItem("In order to maintain aesthetic consistency across the entire website, I kept colour relationships complementary across the entire site as well as sharp and soft edgings")
  ];
  appendListItems(projectList, arr);
}

//Kollectaball
projectBoard[1].onclick = function(){
  projectModal.style.display = "block";
  projectHeader.style.backgroundColor = "#5c7393";
  projectTitle.innerHTML = "Kollectaball";
  projectTitle.style.color = "#fff";
  projectSnippet.innerHTML = "A well-developed niche product, that needed some improvements to its Shopify store. Incuding various cosmetic customisations, I have improved the speed and functionality since working with the guys at Kollectaball.";
  projectBtn.setAttribute("onclick", "window.open('https://www.kollectaball.com')");

  var arr = [
    createListItem("Merged (and managed redirects for) 6 variations of the site into one canonical version"),
    createListItem("To more than double the site's Lighthouse score: I halved the total load time of the home page; mitigated the amount of network calls, async loading relevant assets, and removed other render-blocking resourecs; forced a FOUT ; deleted unnecessary apps by implementing best practices such as lazy loading, minification, and converting to progressive jpgs I cut down the weight of the site's images dramatically"),
    createListItem("Creating the geo-location banner, unifying all collections into a single collection page, and simplifying the site, while fixing various visual bugs.  I have had a hand in improving various aspects of the site")
  ];
  appendListItems(projectList, arr);
}

// Steph Vass
projectBoard[2].onclick = function(){
  projectModal.style.display = "block";
  projectHeader.style.backgroundColor = "#000";
  projectTitle.innerHTML = "Steph Vass EPK";
  projectTitle.style.color = "#d7d7d7";
  projectSnippet.innerHTML = "This static site was created entirely by me, I designed and developed everything. Initially hosted on Github Pages.";
  projectBtn.setAttribute("onclick", "window.open('https://stephvass.com')");

  var arr = [
    createListItem('Mobile-first, using flexbox, simple yet effective'),
    createListItem('Workflow using git')
  ];
  appendListItems(projectList, arr);
}

// Chaykra
projectBoard[3].onclick = function(){
  projectModal.style.display = "block";
  projectHeader.style.backgroundColor = "#21386b";
  projectTitle.innerHTML = "Chaykra";
  projectTitle.style.color = "#fff";

  projectSnippet.innerHTML = "A well-designed and customised Shopify store, I worked alongside the sister founders and a designer.";
  projectBtn.setAttribute("onclick", "window.open('https://chaykra.com')");

  var arr = [
    createListItem('Unified three localised versions of the site into a single one with a dynamic currency switcher'),
    createListItem('Implemented blog redesign to spec, took a Sketch design and made customisations to an already customised layout.  Often this involved fixing breaks that cascaded down'),
    createListItem('Various fixes to the UI, as well as implementing new banner images with ideal on-page SEO')
  ];
  appendListItems(projectList, arr);
}

// AĀ
projectBoard[4].onclick = function(){
  projectModal.style.display = "block";
  projectHeader.style.backgroundColor = "#7ca26c";
  projectTitle.innerHTML = "AĀ";
  projectTitle.style.color = "#fff";
  projectSnippet.innerHTML = "Built using Wordpress, and working alongside the company's founder I'm quite proud of the first site I built from scratch.";
  projectBtn.setAttribute("onclick", "window.open('https://aā.com')");

  var arr = [
    createListItem('Initially hosted on an AWS EC2 instance, I manually installed the first SSL certificate'),
    createListItem("Although the site's design is pretty basic, I did create some fun UI elements such as the shipping map, which I made by editing an SVG file with CSS")
  ];
  appendListItems(projectList, arr);
}

// Ottoman Home Decor
projectBoard[5].onclick = function(){
  projectModal.style.display = "block";
  projectHeader.style.backgroundColor = "#557b97";
  projectTitle.innerHTML = "Ottoman Home Decor";
  projectTitle.style.color = "#fff";
  projectSnippet.innerHTML = "Built and established minimalistic Shopify store that was previously only a profile on a third-party online marketplace.";
  projectBtn.setAttribute("onclick", "window.open('https://ottomanhd.com')");

  var arr = [
    createListItem('Assisted with branding and design considerations, making suggestions that will hopefully manifest in a growing direction'),
    createListItem('Using best practice SEO, I created the lightly designed Ottoman Home Decor storefront')
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
