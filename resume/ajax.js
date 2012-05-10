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
