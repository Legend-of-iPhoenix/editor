function format(style) {
  document.execCommand(style, false);
}

function heading() {
  document.execCommand("heading", false, '<h1>')
}

window.onkeydown = function(event) {
  if (event.metaKey) { // i.e. command key on mac
    if (event.key == 'b') {
      format('bold');
    }
    if (event.key == 'i') {
      format('italics');
    }
    if (event.key == 'u') {
      format('underline');
    }
    if (event.key == 's' && event.shiftKey) { // ctrl-shift-s
      format('strikethrough');
    }
    if (event.key == 'ArrowUp' && event.shiftKey) { // ctrl-shift-up
      format('superscript');
    }
    if (event.key == 'ArrowDown' && event.shiftKey) { // you get the idea
      format('subscript');
    }
  }
}
