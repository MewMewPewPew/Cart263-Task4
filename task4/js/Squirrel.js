//The SVG namespace is required to create SVG elements in JavaScript. It is a string that represents the XML namespace for SVG elements          
const svgNS = "http://www.w3.org/2000/svg";

// selected element is stored in the variable "garden" for later use when appending the squirrel elements to it.
const garden = document.querySelector(".garden");

const svg = document.createElementNS(svgNS, "svg");
svg.setAttribute("width", "100%");
svg.setAttribute("height", "100%");

// Create an SVG element to represent the squirrel
const squirrelSVG = document.createElementNS(svgNS, "svg");
squirrelSVG.setAttribute("width", this.size);
squirrelSVG.setAttribute("height", this.size);
// Append the squirrel SVG to the main SVG element in the DOM
svg.appendChild(squirrelSVG);
svg.style.position = "absolute";
svg.style.top = "0";
svg.style.left = "0";

//Randomly select a squirrel image from the array of squirrel svgs
const squirrelImages = ["squirrel1.svg", "squirrel2.svg", "squirrel3.svg"];
const randomIndex = Math.floor(Math.random() * squirrelImages.length);
const selectedSquirrelImage = squirrelImages[randomIndex];
this.squirrelSVG.setAttribute("href", selectedSquirrelImage);


class Squirrel {
    //constructor which takes a position, size and color as parameters
    constructor(position, size, color) {
        this.position = position;
        this.size = size;
        this.color = color;
    };

    //Create a renderSquirrel() method -> which essentially creates a HTML element(s) - could be an image element:) or an svg .... representing a Squirrel... (see Sun or Flower for inspiration)
    //Will be manipulating an SVG element to represent the squirrel. The position, size and color of the squirrel will be set based on the parameters passed to the constructor.
    renderSquirrel() {
       
        // Set the position and size of the squirrel SVG
        //  based on the parameters passed to the constructor
        this.squirrelSVG.style.left = this.position.x + "px";
        this.squirrelSVG.style.top = this.position.y + "px";
        this.squirrelSVG.style.width = this.size + "px";
        this.squirrelSVG.style.height = this.size + "px";
        // Set the background color of the squirrel SVG based on the color parameter passed to the constructor
        this.squirrelSVG.style.backgroundColor = this.color;
        //
    };

    //Create an animateSquirrel() method in the Squirrel class - which will make a given Squirrel move around the garden - use the requestAnimationFrame()
    animateSquirrel() {
        // Define a function to update the position of the squirrel
        const updatePosition = () => {
            // Update the position of the squirrel by changing its left and top style properties
            this.squirrelSVG.style.left = this.position.x + "px";
            this.squirrelSVG.style.top = this.position.y + "px";
            // Request the next animation frame to continue the animation
            requestAnimationFrame(updatePosition);
        };
        updatePosition();
    };

    //Implement a counter to keep track of how many nuts any given squirrel has picked up (SEE TEAM D for collab)
    // Method that increments the nut count and logs it to the console
    // needs to be called whenever a squirrel picks up a nut (this can be implemented in the animateSquirrel() method or in a separate method that is called when a squirrel interacts with a nut element in the garden)
    nutCounter() {
        this.nutCount = this.nutCount + 1;
        console.log(this.nutCount);
    }

}