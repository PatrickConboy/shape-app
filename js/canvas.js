// This script provides functionality to change the canvas dimensions

// Grab our form object and add an event listener to it
const form = document.querySelector('form#canvasForm')
form.addEventListener('submit', (ev) => {
  ev.preventDefault()
  handleSubmit(ev)
})

export function changeCanvasSize(width, height) {
  const canvas = document.getElementById('canvas')
  canvas.setAttribute('width', width)
  canvas.setAttribute('height', height)
}

function handleSubmit(ev) {
  const c = ev.target
  changeCanvasSize(c.widthInput.value, c.heightInput.value)
}

