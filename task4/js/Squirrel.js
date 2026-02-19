//The SVG namespace is required to create SVG elements in JavaScript. It is a string that represents the XML namespace for SVG elements          
const svgNS = "http://www.w3.org/2000/svg";
// Create an SVG element to represent the squirrel
const svg = document.createElementNS(svgNS, "svg");

//Randomly select a squirrel image from the array of squirrel svgs
const squirrelImages = ["svg/Squirrel1.svg", "svg/Squirrel2.svg", "svg/Squirrel3.svg", "svg/Squirrel4.svg", "svg/Squirrel5.svg"];
const randomIndex = Math.floor(Math.random() * squirrelImages.length);


class Squirrel {
    //constructor which takes a position, size and color as parameters
    constructor(position, size, color) {
        this.position = position;
        this.size = size;
        this.color = color;
        this.nutCount = 0; // Initialize nut count to 0
    };

    //Create a renderSquirrel() method -> which essentially creates a HTML element(s) - could be an image element:) or an svg .... representing a Squirrel... (see Sun or Flower for inspiration)
    //Will be manipulating an SVG element to represent the squirrel. The position, size and color of the squirrel will be set based on the parameters passed to the constructor.
    renderSquirrel() {
        // Calculate a new random index specifically for THIS squirrel instance
        const randomIndex = Math.floor(Math.random() * squirrelImages.length);
        const selectedSquirrelImage = squirrelImages[randomIndex];
        // Create an SVG element to represent the squirrel
        this.squirrelSVG = document.createElementNS(svgNS, "image");
        this.squirrelSVG.setAttribute("href", selectedSquirrelImage);
        this.squirrelSVG.setAttribute("x", this.position.x);
        this.squirrelSVG.setAttribute("y", this.position.y);
        this.squirrelSVG.setAttribute("width", this.size);
        this.squirrelSVG.setAttribute("height", this.size);
        svg.appendChild(this.squirrelSVG);
    };

    //Create an animateSquirrel() method in the Squirrel class - which will make a given Squirrel move around the garden - use the requestAnimationFrame()
    animateSquirrel() {
        // Define a function to update the position of the squirrel
        const updatePosition = () => {
            // Update the position of the squirrel by changing its x and y attributes
            this.squirrelSVG.setAttribute("x", this.position.x);
            this.squirrelSVG.setAttribute("y", this.position.y);
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