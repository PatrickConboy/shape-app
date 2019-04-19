// This module provides the Canvas class which creates our canvas.

export default class Canvas {
  constructor (width, height) {
    this.createCanvas(width, height)
    this.width = width
    this.height = height
    this.x = 0
    this.y = 0
    this.fill = 'grey'
  }

  createCanvas (width, height) {
    let svg = document.createElementNS("http://www.w3.org/2000/svg", "svg")
    let svgNS = svg.namespaceURI
    svg.setAttribute('width', '800px')
    svg.setAttribute('height', '500px')

    let canvas = document.createElementNS(svgNS,'rect')
    canvas.setAttribute('x', 0)
    canvas.setAttribute('y', 0)
    canvas.setAttribute('width', width)
    canvas.setAttribute('height', height)
    canvas.setAttribute('fill', 'grey')
    svg.appendChild(canvas)
    document.getElementById('main').appendChild(svg)
  }
}