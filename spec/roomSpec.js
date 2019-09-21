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

  it('x coordinate cannot be a negative number', function () {
    expect(room.isInTheRoom({ x: -1, y: 0})).toEqual(false)
  })

  it('position x coordinate cannot be above the x coordinate of the room', function () {
    expect(room.isInTheRoom({ x: 6, y: 0})).toEqual(false)
  })

  it('position x coordinate can be 0', function () {
    expect(room.isInTheRoom({ x: 0, y: 0})).toEqual(true)
  })

  it('position x coordinate can be 5', function () {
    expect(room.isInTheRoom({ x: 5, y: 0})).toEqual(true)
  })

  it('y coordinate cannot be a negative number', function () {
    expect(room.isInTheRoom({ x: 0, y: -1})).toEqual(false)
  })
  it('position y coordinate cannot be above the y coordinate of the room', function () {
    expect(room.isInTheRoom({ x: 0, y: 6})).toEqual(false)
  })
  it('position y coordinate can be 0', function () {
    expect(room.isInTheRoom({ x: 0, y: 0})).toEqual(true)
  })
  it('position y coordinate can be 5', function () {
    expect(room.isInTheRoom({ x: 0, y: 5})).toEqual(true)
  })
})
