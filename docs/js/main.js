
function bold() {
  document.execCommand("bold", false);
}

function italics() {
  document.execCommand("italic", false);
}

function underline() {
  document.execCommand("underline", false);
}

function toggleformat() {
  document.execCommand("bold", false);
  document.execCommand("italic", false);
  document.execCommand("underline", false);
}  
/* function reformat() {
  var element = document.getElementById("mainbox");
  element.classList.toggle("reformat");
  if (element.classList) { 
  } else {
      var classes = element.className.split(" ");
      var i = classes.indexOf("mystyle");

      if (i >= 0) 
          classes.splice(i, 1);
      else 
          classes.push("mystyle");
          element.className = classes.join(" "); 
  }
} */
