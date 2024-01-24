// Make the element with id "drag" draggable along the x-axis within the bounds of the element with class "container"
Draggable.create("#drag", {
    type: "x",        // Specify the type of dragging (here, along the x-axis)
    bounds: ".container",  // Specify the bounding element (the draggable element cannot go beyond the boundaries of this element)
});

// Function to check for overlap between two elements
function checkOverlap() {
    // Select the elements to be checked for overlap
    var div1 = document.querySelector(".circ");  // Assuming you have an element with class "cir"
    var div2 = document.querySelector("#drag");  // Assuming you have an element with id "drag"

    // Get the bounding rectangles of the two elements
    var rect1 = div1.getBoundingClientRect();  // Get the dimensions and position of the first element
    var rect2 = div2.getBoundingClientRect();  // Get the dimensions and position of the second element

    if(
        rect1.right > rect2.left && rect1.left < rect2.right
    ){
        document.querySelector("#video1").style.opacity = 0;
        
    }
    else{
        document.querySelector("#video1").style.opacity = 1;
    }
}
window.addEventListener('mousemove', checkOverlap);
