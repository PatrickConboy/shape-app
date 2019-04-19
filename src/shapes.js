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
    circleButton.id = 'circleButton'
    document.getElementById('shapesMenu').appendChild(circleButton)

    // var lineButton = document.createElement("BUTTON")
    // lineButton.innerHTML = "Add Line"
    // lineButton.id = 'lineButton'
    // document.getElementById('shapesMenu').appendChild(lineButton)

    // var rectangleButton = document.createElement("BUTTON")
    // rectangleButton.innerHTML = "Add Rectangle"
    // rectangleButton.id = 'rectangleButton'
    // document.getElementById('shapesMenu').appendChild(rectangleButton)

    // var textButton = document.createElement("BUTTON")
    // textButton.innerHTML = "Add Text"
    // textButton.id = 'textButton'
    // document.getElementById('shapesMenu').appendChild(textButton)
  }
}