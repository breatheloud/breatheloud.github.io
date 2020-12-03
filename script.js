// Variable Declaration
const projectBoard = document.getElementsByClassName("projectLink"),
  projectModal = document.getElementById("projectModal"),
  projectHeader = document.getElementById("modal-header"),
  projectTitle = document.getElementById("project-title"),
  projectSnippet = document.getElementById("project-snippet"),
  projectBtn = document.getElementById("project-btn"),
  projectList = document.getElementById("project-list"),
  projectBulletPoints = projectList.children,
  xToClose = document.getElementsByClassName("close")[0],
  nightModeBtn = document.querySelector(".night-mode-icon");
let counter = 0,
    nightMode = false;

/*----- Modal -----*/

function createListItem (text) {
  const li = document.createElement('li');
  li.textContent = text;
  return li;
}

function appendListItems (children) {
  children.forEach(function (child) {
    projectList.appendChild(child);
  });
}

function renderProjectModal( projectHeaderColor, projecTitleText, projectTitleColor, projectSnippetText, projectButtonLink, projectBulletPoints) {
  projectModal.style.display = "flex";
  projectModal.style.justifyContent = "center";
  projectModal.style.alignItems = "center";
  projectHeader.style.backgroundColor = projectHeaderColor;
  projectTitle.innerHTML = projecTitleText;
  projectTitle.style.color = projectTitleColor;
  projectSnippet.innerHTML = projectSnippetText;
  projectBtn.setAttribute("onclick", `window.open('${projectButtonLink}')`);

  appendListItems(projectBulletPoints);
}

// Render Frances Loom in modal
projectBoard[0].onclick = function () {

  const projectSnippet = "Bringing several new design ideas to life, I took the rough design wireframes from pencil sketches to fully functional improvements integrated into the aesthetic of the site.";
  const flBulletPoints = [
    createListItem(
      "By inserting static image placeholders on the collections page, and building on already existing customisations within the existing theme layout: I had to account for the dynamically created grid layout crossing over the CSS & Javascript, and programmatically inserted static images that would not break with any number of images that are always being sold. With the help of some basic mathematics, all is well."
    ),
    createListItem(
      "I rebuilt the navigation menu, about us page, and added in some new functionality onto the collections page"
    )
  ];

  renderProjectModal(
    "#faf9f4",
    "Frances Loom",
    "#4a4a4a",
    projectSnippet,
    "https://francesloom.com",
    flBulletPoints
  );
};

// Render Oliver Bilou in modal
projectBoard[1].onclick = function () {

  const obProjectSnippet =
    "My first re-entry into the world of Shopify.  Working alongside the founder and a designer, we rejuvenated Oliver Bilou's original site.";
  const obBulletPoints = [
    createListItem("By implementing user tests to assist in the decision-making process, we were able to act on informed decisions regarding the UX of the site"),
    createListItem("Inserting custom built modals, accordions, and creating a more fluid flow for the users"),
    createListItem("In order to maintain aesthetic consistency across the entire website, I kept colour relationships complementary across the entire site as well as sharp and soft edgings")
  ];

  renderProjectModal(
    "#D01F46",
    "Oliver Bilou",
    "#F0F0F0",
    obProjectSnippet,
    "https://web.archive.org/web/20190105111124/https://www.oliverbilou.com/",
    obBulletPoints
  );
};

// Render Chaykra in modal
projectBoard[2].onclick = function () {

  const chaykraProjectSnippet =
    "Improving a well-designed and already customised Shopify store, I worked alongside the sister founders and a designer.";
  const chaykraBulletPoints = [
    createListItem('Unified three localised versions of the site into a single one with a dynamic currency switcher'),
    createListItem('Implemented blog redesign to spec on an already customised layout.  Often this involved fixing breaks that cascaded down'),
    createListItem('Various fixes to the UI, as well as implementing new banner images with ideal on-page SEO')
  ];

  renderProjectModal(
    "#21386b",
    "Chaykra",
    "#FFFFFF",
    chaykraProjectSnippet,
    "https://chaykra.com",
    chaykraBulletPoints
  );
};

// Render Sister Jane in modal
projectBoard[3].onclick = function () {

  const sjProjectSnippet = "After creating a minimalistic shipping page, I built a geo-location upselling bar that dynamically changes depending on the user's location and current amount in the cart.";
  const sjBulletPoints = [
    createListItem("Working specifically with Shopify's Shipping Zone REST API, I pulled in data from where Sister Jane ships to, and displayed it in a simple dropdown menu incorporated within a search bar"),
    createListItem("Initially using the native HTML5 geolocation feature, the user's location was matched to various logical conditions (and the Shipping Zone API) and dispayed in a bar that changes depending on the cart's amount with the intention of more users spending more to qualify for free shipping"),
    createListItem("Due to the nature of how Shopify hosts its sites, both the above features required a CORS proxy to be set up")
  ];

  renderProjectModal(
    "#FFFFFF",
    "Sister Jane",
    "#39342D",
    sjProjectSnippet,
    "https://sisterjane.com",
    sjBulletPoints
  );
};

// Render OHD in modal
projectBoard[4].onclick = function () {

  const ohdProjectSnippet ="Built and established a basic Shopify store that was previously only a profile on a third-party online marketplace.";
  const ohdBulletPoints = [
    createListItem('Assisted with branding and design considerations, making suggestions that will hopefully manifest in a growing direction'),
    createListItem('Using best practice SEO, I created the lightly designed Ottoman Home Decor storefront')
  ];

  renderProjectModal(
    "#557b97",
    "Ottoman Home Decor",
    "#FFFFFF",
    ohdProjectSnippet,
    "https://ottomanhd.com",
    ohdBulletPoints
  );
};

// Render Kball in modal
projectBoard[5].onclick = function () {

  const kbProjectSnippet = "A well-developed niche product, that needed some improvements to its Shopify store. Incuding various cosmetic customisations, I have improved the speed and functionality since working with the Kollectaball team.";
  const kbBulletPoints = [
    createListItem("Merged (and managed redirects for) 6 variations of the site into one canonical version"),
    createListItem("Almost tripled the site's Lighthouse score: I halved the total load time of the home page; mitigated the amount of network calls, async loading relevant assets, and removed other render-blocking resourecs; forced a FOUT ; deleted unnecessary apps by implementing best practices such as lazy loading, minification, and converting to progressive jps, webp & webm. I cut down the weight of the site's images dramatically"),
    createListItem("Creating the geo-location banner, unifying all collections into a single collection page, and simplifying the site, while fixing various visual bugs.  I have had a hand in improving a multitude of aspects of the site")
  ];

  renderProjectModal(
    "#5c7393",
    "Kollectaball",
    "#FFFFFF",
    kbProjectSnippet,
    "https://kollectaball.com",
    kbBulletPoints
  );
};

// Close Modal

xToClose.addEventListener('click', () => {
  closeModal(); 
})


function closeModal() {
  for (var i = projectBulletPoints.length; i > 0; i--) {
    projectList.removeChild(projectBulletPoints[0]);
  }
  document.getElementById("projectModal").style.display = "none";
}

window.onclick = function(event) {
  if (event.target == projectModal) {
    for (var i = projectBulletPoints.length ; i > 0 ; i--) {
        projectList.removeChild(projectBulletPoints[0]);
    }
    document.getElementsByClassName('modal')[0].style.display = "none";
  }
};

/*----- End of Modal Scripts -----*/

// const isInViewport = function (e){
//   let bounding = e.getBoundingClientRect();
//   console.log("bounding logic begin");
//   return(
//     bounding.top >= 0 &&
//     bounding.left >= 0 &&
//     bounding.bottom >= (window.innerHeight || document.documentElement.clientHeight) &&
//     bounding.right >= (window.innerWidth || document.documentElement.clientWidth)
//   );
// }


// window.addEventListener('load', function(){
//     let bounding = document.querySelector('#profilePic').getBoundingClientRect();
//     console.log( bounding.top >= 0 );
//     console.log( bounding.left >= 0 );
//     console.log( bounding.bottom >= (window.innerHeight || document.documentElement.clientHeight) );
//     console.log( bounding.right >= (window.innerWidth || document.documentElement.clientWidth) );
  
//   // console.log(isInViewport(document.querySelector("#profilePic")));

// })

nightModeBtn.addEventListener('click', () => {
  changeTheLighting();
})

function changeTheLighting(){
  document.body.classList.toggle("night-time");
  andTheIconsToo();
}

function fitMoonWithSun() {
  if (window.innerWidth < 800) {
    nightModeBtn.style.paddingLeft = "3.5vh";
  } else {
    nightModeBtn.style.paddingLeft = "5vh";
  }
}

function andTheIconsToo() {
  if (nightMode === false) {
    fitMoonWithSun();
    nightModeBtn.src = "Images/Moon.svg";
    nightMode = true;
  } else if (nightMode === true) {
    nightModeBtn.style.paddingLeft = "0";
    nightModeBtn.src = "Images/Sun.svg";
    nightMode = false;
  }
}