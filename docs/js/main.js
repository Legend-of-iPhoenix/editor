

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
  document.execCommand("bold", true);
  document.execCommand("italic", true);
  document.execCommand("underline", true);
}  
