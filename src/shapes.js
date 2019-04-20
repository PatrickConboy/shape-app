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

    // When Add Circle is clicked, this block of code asks the user for input on
    // desired circle settings and then creates the circle
    document.getElementById('circleButton').addEventListener('click', function() {
      let cx = prompt('Circle X Placement')
      let cy = prompt('Circle Y Placement')
      let radius = prompt('Circle Radius')
      let color = prompt('Circle Color')
      let circle = document.createElementNS(svgNS,'circle')
      circle.setAttribute('cx', cx)
      circle.setAttribute('cy', cy)
      circle.setAttribute('r', radius)
      circle.setAttribute('fill', color)
      svg.appendChild(circle)
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
      let x1 = prompt('Line x1 Coordinate')
      let y1 = prompt('Line y1 Coordinate')
      let x2 = prompt('Line x2 Coordinate')
      let y2 = prompt('Line y2 Coordinate')
      let color = prompt('Line Color')
      let line = document.createElementNS(svgNS,'line')
      line.setAttribute('x1', x1)
      line.setAttribute('y1', y1)
      line.setAttribute('x2', x2)
      line.setAttribute('y2', y2)
      line.setAttribute('stroke', color)
      svg.appendChild(line)
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
      let x = prompt('Rectangle X Position')
      let y = prompt('Rectangle Y Position')
      let color = prompt('Rectangle Color')
      let rectangle = document.createElementNS(svgNS,'rect')
      rectangle.setAttribute('width', width)
      rectangle.setAttribute('height', height)
      rectangle.setAttribute('x', x)
      rectangle.setAttribute('y', y)
      rectangle.setAttribute('fill', color)
      svg.appendChild(rectangle)
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
      let x = prompt('Text X Position')
      let y = prompt('Text Y Position')
      let color = prompt('Text Color')
      let textValue = prompt('Enter Your Text')
      let text = document.createElementNS(svgNS,'text')
      text.setAttribute('x', x)
      text.setAttribute('y', y)
      text.setAttribute('fill', color)
      text.innerHTML = textValue
      svg.appendChild(text)
    })
  }
}