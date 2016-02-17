// http://joelcalifa.com/blog/revisiting-visited
localStorage.setItem('visited-'+window.location.pathname,true);
var links = document.getElementsByTagName('a');
for (i=0;i<links.length;i++) {   
  var link = links[i];
  if (link.host == window.location.host 
  && localStorage.getItem('visited-' + link.pathname + '/')) {
    link.dataset.visited = true;
  }
}