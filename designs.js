/*
This code was created by Sharni White 2021
Do not alter the code or something bad will happen - it just wont work!
Draw away!
*/

// submit button variable
const submit = document.getElementById("sizePicker");

//canvas select
const canvas = document.getElementById("pixelCanvas");

//colorPicker variable
const color = document.getElementById("colorPicker");

// make grid function
function makeGrid(height, width) {

    // make grid rows
    for (let i = 0; i < height; i++) {
        let row = canvas.insertRow(i);

        // make grid columns
        for (let w = 0; w < width; w++) {
            let cell = row.insertCell(w);

            // do the color change on cells
            cell.addEventListener('click', function (event) {
                cell.style.backgroundColor = color.value;
            })
        }
    }
}
// Event listener for the submit button
submit.addEventListener('submit', function (event) {
    event.preventDefault();

    // clear the canvas on every hit of Submit
    canvas.innerHTML = " ";

    // get values of h & w
    let height = document.getElementById("inputHeight").value;
    let width = document.getElementById("inputWidth").value;

    // call the function to make the grid!!
    makeGrid(height, width);
});
