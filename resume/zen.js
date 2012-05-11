var domReady = (function() {

  var w3c = !!document.addEventListener,
  loaded = false,
  toplevel = false,
  fns = [];

  if (w3c) {
    document.addEventListener("DOMContentLoaded", contentLoaded, true);
    window.addEventListener("load", ready, false);
  }
  else {
    document.attachEvent("onreadystatechange", contentLoaded);
    window.attachEvent("onload", ready);

    try {
      toplevel = window.frameElement === null;
    } catch(e) {}
    if ( document.documentElement.doScroll && toplevel ) {
      scrollCheck();
    }
  }

  function contentLoaded() {
    (w3c)?
    document.removeEventListener("DOMContentLoaded", contentLoaded, true) :
    document.readyState === "complete" &&
    document.detachEvent("onreadystatechange", contentLoaded);
    ready();
  }

  // If IE is used, use the trick by Diego Perini
  // http://javascript.nwbox.com/IEContentLoaded/
  function scrollCheck() {
    if (loaded) {
      return;
    }

    try {
      document.documentElement.doScroll("left");
    }
    catch(e) {
      window.setTimeout(arguments.callee, 15);
      return;
    }
    ready();
  }

  function ready() {
    if (loaded) {
      return;
    }
    loaded = true;

    var len = fns.length,
    i = 0;

    for( ; i < len; i++) {
      fns[i].call(document);
    }
  }

  return function(fn) {
    // if the DOM is already ready,
    // execute the function
    return (loaded)?
    fn.call(document):
    fns.push(fn);
  }
})();

// add events
function addEvent(element, evnt, funct){
  if (element.attachEvent)
    return element.attachEvent('on'+evnt, funct);
  else
    return element.addEventListener(evnt, funct, false);
}

// ajax
function ajax(option, element){
  var xhr;
  if(window.XMLHttpRequest){// code for IE7+, Firefox, Chrome, Opera, Safari
    xhr = new XMLHttpRequest();
  }
  else{// code for IE6, IE5
    xhr=new ActiveXObject("Microsoft.XMLHTTP");
  }
  xhr.onreadystatechange = function(){
    if (xhr.readyState === 4){
      document.getElementById(element).innerHTML = xhr.responseText;
    }
  }
  xhr.open(option.method, option.url, true);
  xhr.send(option.data);
}
