let expect = chai.expect

import canvas from '../src/canvas.js.js'

describe('Testing Canvas creation', () => {
  let testCanvas = new canvas(800, 500)

  it('check that canvas object was created', () => {
    expect(testCanvas).to.not.equal('Undefined')
  })

  it('check that canvas is at correct x coordinate', () => {
    expect(true).to.equal(true)
    expect(testCanvas.x).to.equal(0)
  })

  it('check that canvas is at correct y coordinate', () => {
    expect(true).to.equal(true)
    expect(testCanvas.y).to.equal(0)
  })
})