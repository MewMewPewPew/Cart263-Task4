class Squirrel {
    //constructor which takes a position, size and color as parameters
    constructor(position, size, color) {
        this.position = position;
        this.size = size;
        this.color = color;
    }

    //Create a renderSquirrel() method -> which essentially creates a HTML element(s) - could be
    // an image element:) or an svg .... representing a Squirrel... (see Sun or Flower for inspiration)
    renderSquirrel() {
        this.squirrelDiv = document.createElement('div');
        this.squirrelDiv.classList.add("squirrel");
        document.querySelector(".garden").appendChild(this.squirrelDiv);
    }

    animateSquirrel() {

    }

    //Implement a counter to keep track of how many nuts any given squirrel has picked up (SEE TEAM D for collab)
}