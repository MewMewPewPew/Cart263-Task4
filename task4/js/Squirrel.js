//The SVG namespace is required to create SVG elements in JavaScript. It is a string that represents the XML namespace for SVG elements          
const svgNS = "http://www.w3.org/2000/svg";
const svg = document.createElementNS(svgNS, "svg");

// Create an SVG element to represent the squirrel
const squirrelSVG = document.createElementNS(svgNS, "svg");

// Append the squirrel SVG to the main SVG element in the DOM
svg.appendChild(squirrelSVG);


//Randomly select a squirrel image from the array of squirrel svgs
const squirrelImages = ["svg/Squirrel1.svg", "svg/Squirrel2.svg", "svg/Squirrel3.svg", "svg/Squirrel4.svg", "svg/Squirrel5.svg"];
const randomIndex = Math.floor(Math.random() * squirrelImages.length);
const selectedSquirrelImage = squirrelImages[randomIndex];
// this.squirrelSVG.setAttribute("href", selectedSquirrelImage);


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
        // Create an SVG element to represent the squirrel
        this.squirrelSVG = document.createElementNS(svgNS, "image");
        this.squirrelSVG.setAttribute("href", selectedSquirrelImage);
        this.squirrelSVG.style.left = this.position.x + "px";
        this.squirrelSVG.style.top = this.position.y + "px";
        this.squirrelSVG.style.width = this.size + "px";
        this.squirrelSVG.style.height = this.size + "px";
        svg.appendChild(this.squirrelSVG);
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