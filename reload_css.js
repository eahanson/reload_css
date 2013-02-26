var links = document.getElementsByTagName("link");
for (var i = 0; i < links.length; i++) {
  if (links[i].rel === "stylesheet") {
    if (links[i].href.indexOf("?") === -1) {
      links[i].href += "?";
    }
    links[i].href += "x";
  }
}
