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
    // Setting up SVG stuff
    // Pulls SVG element from our canvas
    // Using same SVG element that we used for canvas
    let svg = document.getElementById('canvas')
    let svgNS = svg.namespaceURI

    this.addCircleButton(svg, svgNS)
    this.addLineButton(svg, svgNS)
    this.addRectangleButton(svg, svgNS)
    this.addTextButton(svg, svgNS)
  }

  addCircleButton(svg, svgNS) {
    // This block of code creates our New Circle button in the bottom menu
    var circleButton = document.createElement("BUTTON")
    circleButton.innerHTML = "New Circle"
    circleButton.id = 'circleButton'
    document.getElementById('shapesMenu').appendChild(circleButton)

    // This block of code handles creation of a 
    // new circle when the New Circle button is clicked
    document.getElementById('circleButton').addEventListener('click', function() {
      let width = prompt('Circle Width')
      let height = prompt('Circle Height')
      let circle = document.createElementNS(svgNS,'circle')
      circle.setAttribute('width', width)
      circle.setAttribute('height', height)
      circle.setAttribute('fill', 'red')
      svg.insertBefore(circle, svg.childNodes[0])
    })
  }

  addLineButton(svg, svgNS) {
    var lineButton = document.createElement("BUTTON")
    lineButton.innerHTML = "Add Line"
    lineButton.id = 'lineButton'
    document.getElementById('shapesMenu').appendChild(lineButton)

    // This block of code handles creation of a 
    // new line when the New Line button is clicked
    document.getElementById('lineButton').addEventListener('click', function() {
      let width = prompt('Line Width')
      let height = prompt('Line Height')
      let line = document.createElementNS(svgNS,'line')
      line.setAttribute('width', width)
      line.setAttribute('height', height)
      line.setAttribute('fill', 'black')
      svg.insertBefore(line, svg.childNodes[0])
    })
  }

  addRectangleButton(svg, svgNS) {
    var rectangleButton = document.createElement("BUTTON")
    rectangleButton.innerHTML = "Add Rectangle"
    rectangleButton.id = 'rectangleButton'
    document.getElementById('shapesMenu').appendChild(rectangleButton)

    // This block of code handles creation of a 
    // new rectangle when the New Rectangle button is clicked
    document.getElementById('rectangleButton').addEventListener('click', function() {
      let width = prompt('Rectangle Width')
      let height = prompt('Rectangle Height')
      let rectangle = document.createElementNS(svgNS,'rectangle')
      rectangle.setAttribute('width', width)
      rectangle.setAttribute('height', height)
      rectangle.setAttribute('fill', 'black')
      svg.insertBefore(rectangle, svg.childNodes[0])
    })
  }

  addTextButton(svg, svgNS) {
    var textButton = document.createElement("BUTTON")
    textButton.innerHTML = "Add Text"
    textButton.id = 'textButton'
    document.getElementById('shapesMenu').appendChild(textButton)

    // This block of code handles creation of a 
    // new text when the New Text button is clicked
    document.getElementById('textButton').addEventListener('click', function() {
      let width = prompt('Text Width')
      let height = prompt('Text Height')
      let text = document.createElementNS(svgNS,'text')
      text.setAttribute('width', width)
      text.setAttribute('height', height)
      text.setAttribute('fill', 'black')
      svg.insertBefore(text, svg.childNodes[0])
    })
  }
}