import canvas from '/src/canvas.js'
import shapes from '/src/shapes.js'


class Main {
  constructor () {
    this.createCanvas()
    new shapes()
  }

  createCanvas() {
    let width = prompt('Please enter canvas width:', '800')
    let height = prompt('Please enter canvas height:', '500')
    new canvas(width, height)
  }
}

const app = new Main()