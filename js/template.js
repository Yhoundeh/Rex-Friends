
/*export async function loadHeaderFooter() {
  var xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
      document.getElementById("main-header").innerHTML =
      this.responseText;
    }
  };

  xhttp.open("GET", "../templates/header.txt", true);
  xhttp.send();

  var xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
      document.getElementById("main-footer").innerHTML =
      this.responseText;
    }
  };
  xhttp.open("GET", "../templates/footer.txt", true);
  xhttp.send();
}*/
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
}

export async function loadPosts() {
  document.getElementById("Noposts").style.display = "none";
  var i;
  for (i = 0; i < 4; i++) {
    const post = await loadTemplate('../templates/post.html');
    const postElement = document.getElementById("posts");
    renderWithTemplate(post, postElement);
  }
  /*var img = document.getElementById('myImg');
  document.getElementById('myModal').style.display = "none";
  img.style.cssFloat = "left";
  img.style.marginRight = "5px";
  img.style.marginLeft = "";*/
  getModal();
}

function convertToText(res) {
  if (res.ok) {
    return res.text();
  } else {
    throw new Error("Bad Response");
  }
}

function getModal() {
  // Get the modal
  var modal = document.getElementById('myModal');

  // Get the image and insert it inside the modal - use its "alt" text as a caption
  var img = document.getElementById('myImg');
  var modalImg = document.getElementById("img01");
  var captionText = document.getElementById("caption");
  img.onclick = function(){
    modal.style.display = "block";
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
    modal.style.display = "none";
    /*img.style.cssFloat = "left";
    img.style.marginRight = "5px";
    img.style.marginLeft = "";*/
  }
}