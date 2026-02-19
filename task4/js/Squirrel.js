//The SVG namespace is required to create SVG elements in JavaScript. It is a string that represents the XML namespace for SVG elements          
const svgNS = "http://www.w3.org/2000/svg";
// Create an SVG element to represent the squirrel
const svg = document.createElementNS(svgNS, "svg");
// IMPORTANT: give it a size
svg.setAttribute("width", "800");
svg.setAttribute("height", "600");

//Randomly select a squirrel image from the array of squirrel svgs
const squirrelImages = ["svg/Squirrel1.svg", "svg/Squirrel2.svg", "svg/Squirrel3.svg", "svg/Squirrel4.svg", "svg/Squirrel5.svg"];
const randomIndex = Math.floor(Math.random() * squirrelImages.length);

//TO DO: 
// - give squirrels a velocity, currently they are static and just appear in the garden, but we want them to move around the garden. 
// - currently the squirrels aren't changing their color at all. we could assign them colors from an array of fur colors since random is less life-like?
// -  Maybe we should constrain the size of the squirrels to be closer in size to the flowers, since some of time the squirrels appear very tiny?

class Squirrel {
    //constructor which takes a position, size and color as parameters
    constructor(position, size, color) {
        this.position = position;
        this.size = size;
        this.color = color;
        this.nutCount = 0; // Initialize nut count to 0
        this.velocity = { x: 0, y: 0 }; // Initialize velocity
        this.speed = 1; // Set a speed for the squirrel's movement

    };

    //Create a renderSquirrel() method
    //Will be manipulating an SVG element to represent the squirrel. The position, size and color of the squirrel will be set based on the parameters passed to the constructor.
    renderSquirrel(svgContainer) {
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
        svgContainer.appendChild(this.squirrelSVG);
    };

    //Create an animateSquirrel() method in the Squirrel class - which will make a given Squirrel move around the garden - use the requestAnimationFrame()
    animateSquirrel() {
        // Define a function to update the position of the squirrel based on its velocity
        const updatePosition = () => {
            // --- ADDED LOGIC: Change the position ---
            this.position.x += this.velocity.x;
            this.position.y += this.velocity.y;
            // Update the position of the squirrel by changing its x and y attributes
            this.squirrelSVG.setAttribute("x", this.position.x);
            this.squirrelSVG.setAttribute("y", this.position.y);
            // Request the next animation frame to continue the animation
            
            this.animationId = requestAnimationFrame(updatePosition);
        };
        
        // method to stop animating the squirrel
        //TO DO: 
        //  - maybe squirrels could stop moving after it picking up a nut? then after a few seconds it could start moving again?
        this.stopAnimation = function () {
            cancelAnimationFrame(this.animationId);
        }
        // Start the animation by calling the updatePosition function
        updatePosition();
        // this.stopAnimation(); // Call the stopAnimation method to stop the animation after one frame (for testing purposes)

    };

//TO DO!!!!!!!: 
// - connect the squirrels to the nuts in the garden, so that when a squirrel interacts with a nut element in the garden, it increments the nut count for that squirrel and logs it to the console.

    //Implement a counter to keep track of how many nuts any given squirrel has picked up (SEE TEAM D for collab)
    // Method that increments the nut count and logs it to the console
    // needs to be called whenever a squirrel picks up a nut (this can be implemented in the animateSquirrel() method or in a separate method that is called when a squirrel interacts with a nut element in the garden)
    nutCounter() {
        this.nutCount = this.nutCount + 1;
        console.log(this.nutCount);
    }

}