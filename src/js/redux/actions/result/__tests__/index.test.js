import resultActions from './'

describe('actions', () => {
  it('createResultOwner', () => {
    const name = 'vasya'
    const email = 'blabla@gmail.com'
    const resultAction = { name, email }

    const action = resultActions.createResultOwner(name, email)
    expect(action).toEqual(resultAction)
  })
})
