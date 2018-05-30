const app = require('./app')

describe('app', () => {
  it('should print hello world', () => {
    const stub = sinon.stub(console, 'log')

    app()

    expect(stub.calledOnce).to.eq(true)
    expect(stub.firstCall.args[0]).to.eq('Hello world!')

    stub.restore()
  })
})
