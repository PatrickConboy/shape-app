import canvas from '/src/canvas.js'
import shapes from '/src/shapes.js'
import shapesMenu from '/src/shapesMenu.js'

class Main {
  constructor () {
    this.createCanvas()
    this.createMenus()
    this.addShapeButtons()
    this.handleShapeEvent()
  }

  createCanvas() {
    let width = prompt('Please enter canvas width:', '800')
    let height = prompt('Please enter canvas height:', '500')
    new canvas(width, height)
  }

  createMenus() {
    new shapesMenu()
  }

  // Add buttons where user can select shapes
  addShapeButtons() {
    
  }

  // When shape is selected, run this code
  handleShapeEvent() {
  
  }
  
  
}

const app = new Main()