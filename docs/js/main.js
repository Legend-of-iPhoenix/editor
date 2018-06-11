
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
  document.execCommand("bold", false);
  document.execCommand("italic", false);
  document.execCommand("underline", false);
}
