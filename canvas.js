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
      this.width = width;
      this.height = height;
   }

   function createCanvas (width, height) {
      var svg = document.createElementNS("http://www.w3.org/2000/svg", "svg");
      var svgNS = svg.namespaceURI;

      var rect = document.createElementNS(svgNS,'rect');
      rect.setAttribute('x', 100);
      rect.setAttribute('y', 100);
      rect.setAttribute('width', 500);
      rect.setAttribute('height', 500);
      rect.setAttribute('fill', '#95B3D7');
      svg.appendChild(rect);
      document.main.appendChild(svg);
   }

}