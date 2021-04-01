export async function loadHeaderFooter() {
    const header = await loadTemplate('/templates/header.html');
    const footer = await loadTemplate('/templates/footer.html');
    const headerElement = document.querySelector('header');
    const footerElement = document.querySelector('footer');
    renderWithTemplate(header, headerElement);
    renderWithTemplate(footer, footerElement);
    document.getElementById("date").innerHTML = new Date().getFullYear();
    currPage();
}

export async function loadSidebar() {
  const post = await loadTemplate('../templates/sidebar.html');
  const postElement = document.getElementById("sidebar");
  renderWithTemplate(post, postElement);
}

export function renderListWithTemplate(template, parent, list, callback) {
    list.forEach(item => {
      const clone = template.content.cloneNode(true);
      const templateWithData = callback(clone, item);
      parent.appendChild(templateWithData);
    });
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

function convertToText(res) {
    if (res.ok) {
      return res.text();
    } else {
      throw new Error("Bad Response");
    }
}

export function clickLike(event) {
  let favorited = event.currentTarget;
  //console.dir(event.currentTarget)
  if(favorited.className == "fas fa-heart fa-2x") {
    favorited.className = "far fa-heart fa-2x";
    //update database
  } else {
    favorited.className = "fas fa-heart fa-2x";
    //update database
  }
}

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
  else if (window.location.pathname == "/pages/login.html") {
    document.getElementById("current_page").innerHTML = "Login";
  }
  else {
    console.log("Add '" + window.location.pathname + "' to currPage");
  }
}

export async function fetchUrl(URL) {
  const responseData = await fetch(URL)
  .then((response) => response.json())
  .catch(error => console.warn(error));
  console.log(responseData)
  return responseData;
};


// export function getModal(i) {
//   console.log(i);
//   let showMenu;
//   // Get the modal
//   var modal = document.getElementById('myModal');
  
//   if(document.getElementById("posts").id == "posts") {
//     modal.style.display = "block";
//     document.getElementById("posts").id = "center"; 
//   } else if (document.getElementById("center").id == "center") {
//     modal.style.display = "none";
//     document.getElementById("center").id = "posts";
//   }
// }

// export async function loadPosts(posts) {
//   document.getElementById("Noposts").style.display = "none";
//   var i;
//   for (i = 0; i < posts.length; i++) {
//     const post = await loadTemplate('../templates/post.html');
//     const postElement = document.getElementById("posts");
//     renderWithTemplate(post, postElement);
//     getModal(i);
//   }
// }