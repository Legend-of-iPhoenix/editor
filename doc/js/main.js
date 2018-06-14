
function bold() {
  document.execCommand("bold", false);
}

function italics() {
  document.execCommand("italic", false);
}

function underline() {
  document.execCommand("underline", false);
}

function subscript() {
  document.execCommand("subscript", false)
}

function superscript() {
  document.execCommand("superscript", false)
}

function heading() {
  document.execCommand("heading", false, '<h1>')
}
