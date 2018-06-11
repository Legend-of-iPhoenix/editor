
function bold() {
  document.execCommand("bold", false);
}

function italics() {
  document.execCommand("italic", false);
}

function underline() {
  document.execCommand("underline", false);
}

function reformat() {
  var text = e.dataTransfer.getData("text/plain");
  
  document.execCommand("bold", text);
  document.execCommand("italic", text);
  document.execCommand("underline", text);
}
