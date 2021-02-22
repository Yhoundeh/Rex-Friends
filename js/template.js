/*fetch("./templates/header.html")
  .then(response => {
    return response.text()
  })
  .then(data => {
    document.querySelector("header").innerHTML = data;
  });

fetch("./templates/footer.html")
  .then(response => {
    return response.text()
  })
  .then(data => {
    document.querySelector("footer").innerHTML = data;
  });*/

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
    const header = await loadTemplate('./templates/header.html');
    const footer = await loadTemplate('./templates/footer.html');
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