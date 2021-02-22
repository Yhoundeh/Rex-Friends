
export async function loadHeaderFooter() {
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
}