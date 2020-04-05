const fullPath = window.location.pathname;
var dirList = fullPath.substring(fullPath.indexOf("/tutoring") + 1, fullPath.indexOf("/index.html")).split("/");

var breadcrumbDiv = document.createElement("div");
breadcrumbDiv.setAttribute("id", "breadcrumb");

var csseCrumb = document.createElement('a');
csseCrumb.appendChild(document.createTextNode("CSSE"));
csseCrumb.setAttribute("href", "http://csc.calpoly.edu");

breadcrumbDiv.appendChild(csseCrumb);
breadcrumbDiv.appendChild(document.createTextNode(" : "));

for (i = 0; i < dirList.length - 1; i ++) {
  var curDir = dirList[i];

  var newCrumb = document.createElement('a');
  newCrumb.appendChild(document.createTextNode(curDir.charAt(0).toUpperCase() + curDir.slice(1)));
  newCrumb.setAttribute("href", "/" + (curDir == "tutoring" ? "" : curDir + "/"));

  breadcrumbDiv.appendChild(newCrumb);
  breadcrumbDiv.appendChild(document.createTextNode(" : "));
}

breadcrumbDiv.appendChild(document.createTextNode(dirList[dirList.length - 1].charAt(0).toUpperCase() + dirList[dirList.length - 1].slice(1)));

var navBarElement = document.getElementById("nav-bar");
navBarElement.appendChild(breadcrumbDiv);
