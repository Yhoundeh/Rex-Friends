let showMenu = false;

export function getModal(event) {
  let modal = {};
  //console.dir(event.currentTarget)
  if(event.currentTarget.nodeName === 'IMG') {
    modal = event.currentTarget.parentElement.querySelector('.modal');
  } else {
    modal = event.currentTarget.parentElement;
  }
  if(!showMenu) {
    modal.style.display = "block";
    document.getElementById("posts").id = "center";
    showMenu = true;
  } else {
    modal.style.display = "none";
    document.getElementById("center").id = "posts";
    showMenu = false;
  }
}