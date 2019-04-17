// This script provides functionality to change the canvas dimensions

// Grab our form object and add an event listener to it
// const form = document.querySelector('form#canvasForm')
// form.addEventListener('submit', (ev) => {
//   ev.preventDefault()
//   handleSubmit(ev)
// })

// export function changeCanvasSize(width, height) {
//   const canvas = document.getElementById('canvas')
//   canvas.setAttribute('width', width)
//   canvas.setAttribute('height', height)
// }

// function handleSubmit(ev) {
//   const c = ev.target
//   changeCanvasSize(c.widthInput.value, c.heightInput.value)
// }


export default class Canvas {
  constructor (width, height) {
    this.createCanvas(width, height)
  }

  createCanvas (width, height) {
    var svg = document.createElementNS("http://www.w3.org/2000/svg", "svg")
    var svgNS = svg.namespaceURI
    svg.setAttribute('width', '800px')
    svg.setAttribute('height', '500px')

    var canvas = document.createElementNS(svgNS,'rect')
    canvas.setAttribute('x', 0)
    canvas.setAttribute('y', 0)
    canvas.setAttribute('width', width)
    canvas.setAttribute('height', height)
    canvas.setAttribute('fill', 'grey')
    svg.appendChild(canvas)
    document.getElementById('main').appendChild(svg)
  }
}