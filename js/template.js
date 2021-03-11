function currPage() {
  //console.log(document.readyState);
  if (window.location.pathname == "/index.html" || window.location.pathname == "/") {
    document.getElementById("home").id = "highlight";
    document.getElementById("current_page").innerHTML = "Home";
  }
  else if (window.location.pathname == "/pages/groups.html") {
    document.getElementById("groups").id = "highlight";
    document.getElementById("current_page").innerHTML = "Groups";
  }
  else if (window.location.pathname == "/pages/search.html") {
    document.getElementById("search").id = "highlight";
    document.getElementById("current_page").innerHTML = "Search";
  }
  else if (window.location.pathname == "/pages/liked.html") {
    document.getElementById("liked").id = "highlight";
    document.getElementById("current_page").innerHTML = "Liked";
  }
  else if (window.location.pathname == "/views/auth/login.html") {
    document.getElementById("current_page").innerHTML = "Login";
  }
  else {
    console.log("Add '" + window.location.pathname + "' to currPage");
  }
}

export function renderWithTemplate(template, parent, data, callback) {
  let clone = template.content.cloneNode(true);
  if(callback) {
    clone = callback(clone, data);
  }
  parent.appendChild(clone);
}

export async function loadTemplate(path) {
  const html = await fetch(path).then(convertToText);
  const template = document.createElement('template');
  template.innerHTML = html;
  return template;
}

export async function loadHeaderFooter() {
  const header = await loadTemplate('/templates/header.html');
  const footer = await loadTemplate('/templates/footer.html');
  const headerElement = document.querySelector('header');
  const footerElement = document.querySelector('footer');
  renderWithTemplate(header, headerElement);
  renderWithTemplate(footer, footerElement);
  currPage();
}

export async function loadPosts() {
  document.getElementById("Noposts").style.display = "none";
  var i;
  for (i = 0; i < 4; i++) {
    const post = await loadTemplate('../templates/post.html');
    const postElement = document.getElementById("posts");
    renderWithTemplate(post, postElement);
    getModal(i);
  }
/*var img = document.getElementById('myImg');
  document.getElementById('myModal').style.display = "none";
  img.style.cssFloat = "left";
  img.style.marginRight = "5px";
  img.style.marginLeft = "";*/
}

function convertToText(res) {
  if (res.ok) {
    return res.text();
  } else {
    throw new Error("Bad Response");
  }
}

function getModal(i) {
  // Get the modal
  var modal = document.getElementById('myModal');

  // Get the image and insert it inside the modal - use its "alt" text as a caption
  var img = document.getElementsByClassName("myImg")[i];
  var modalImg = document.getElementById("img01");
  var captionText = document.getElementById("caption");
  img.onclick = function(){
  modal.style.display = "block";
    document.getElementById("posts").id = "center"; 
  /*img.style.cssFloat = "none";
    img.style.marginRight = "50%";
    img.style.marginLeft = "50%";*/
    modalImg.src = this.src;
    captionText.innerHTML = this.alt;
  }

  // Get the <span> element that closes the modal
  var span = document.getElementsByClassName("close")[0];

  // When the user clicks on <span> (x), close the modal
  span.onclick = function() { 
    document.getElementById("center").id = "posts";
    modal.style.display = "none";
  /*img.style.cssFloat = "left";
    img.style.marginRight = "5px";
    img.style.marginLeft = "";*/
  }
}
