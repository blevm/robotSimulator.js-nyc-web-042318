class Robot {
	//your solution here
  constructor(){
    this.coordinates = [0,0]
    this.bearing = 'north'
  }
  setCoordinates(x, y) {
    this.coordinates = [x,y]
  }
  setBearing(direction) {
    let goodOptions = ["north", "south", "east", "west"]
    if (goodOptions.includes(direction)) {
      this.bearing = direction
    } else {
      throw('Invalid Robot Bearing')
    }
  }
}
