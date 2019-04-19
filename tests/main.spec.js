let expect = chai.expect

import canvas from '/src/canvas.js'
import main from '/src/main.js'

describe('Testing Main app creation', () => {
  let testApp = new main()

  it('check that canvas object was created', () => {
    expect(testCanvas).to.not.equal('Undefined')
  })

})
