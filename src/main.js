import canvas from '/src/canvas.js'
import shapes from '/src/shapes.js'


class Main {
  constructor () {
    this.createCanvas()
    this.addShapeButtons()
    this.handleShapeEvent()
    new shapes()
  }

  createCanvas() {
    let width = prompt('Please enter canvas width:', '800')
    let height = prompt('Please enter canvas height:', '500')
    new canvas(width, height)
  }

  // Add buttons where user can select shapes
  addShapeButtons() {
    
  }

  // When shape is selected, run this code
  handleShapeEvent() {
  
  }
  
  
}

const app = new Main()