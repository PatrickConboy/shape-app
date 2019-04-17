import canvas from '/js/canvas.js'
import shapes from '/js/shapes.js'

class Main {
  constructor () {
    this.createCanvas()
  }
  
  createCanvas() {
    var width = prompt('Please enter canvas width:', 'Max Width is 800')
    var height = prompt('Please enter canvas height:', 'Max Height is 500')
    const newCanvas = new canvas(width, height)
  }
}

const app = new Main()