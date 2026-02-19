//The SVG namespace is required to create SVG elements in JavaScript. It is a string that represents the XML namespace for SVG elements          
const svgNS = "http://www.w3.org/2000/svg";

// selected element is stored in the variable "garden" for later use when appending the squirrel elements to it.
const garden = document.querySelector(".garden");

const svg = document.createElementNS(svgNS, "svg");
svg.setAttribute("width", "100%");
svg.setAttribute("height", "100%");
garden.appendChild(svg);
svg.style.position = "absolute";
svg.style.top = "0";
svg.style.left = "0";


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