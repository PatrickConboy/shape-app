// This module provides the menu area below the canvas
// for adjusting settings of the selected shape.


export default class ShapesMenu {
  constructor () {
    this.createDiv()
  }

  createDiv() {
    let newDiv = document.createElement('div')
    newDiv.id = 'shapesMenu'
    document.getElementById('main').appendChild(newDiv)
  }
}