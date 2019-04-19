// This module provides the Shapes class which provides 
// the ability to create different shapes.

import shapesMenu from '/src/shapesMenu.js'

export default class Shapes {
  constructor () {
    this.createShapesMenu()
    this.addButtons()
  }

  createShapesMenu() {
    new shapesMenu()
  }

  // add button for each shape type
  addButtons() {
    var circleButton = document.createElement("BUTTON")
    circleButton.innerHTML = "Add Circle"
    document.getElementById('shapesMenu').appendChild(circleButton)
  }
}