
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
  const header = await loadTemplate('../templates/header.html');
  const footer = await loadTemplate('../templates/footer.html');
  const headerElement = document.querySelector('header');
  const footerElement = document.querySelector('footer');
  renderWithTemplate(header, headerElement);
  renderWithTemplate(footer, footerElement);
}

function convertToText(res) {
  if (res.ok) {
    return res.text();
  } else {
    throw new Error("Bad Response");
  }
}