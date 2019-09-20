import Room from '../src/room'

describe('Room', function () {
  var room
  beforeEach(function () {
    room = new Room({ x: 5, y: 5 })
  })

  it('has a small room', function () {
    expect(room.dimensions()).toEqual({ x: 5, y: 5 })
  })

  it('has a patch of dirt', function () {
    expect(room.addDirt({ x: 1, y: 3 })).toEqual([{ x: 1, y: 3 }])
  })

  it('has two patches of dirt', function () {
    room.addDirt({ x: 3, y: 5 })
    expect(room.addDirt({ x: 1, y: 3 })).toEqual([{ x: 3, y: 5 }, { x: 1, y: 3 }])
  })
})
