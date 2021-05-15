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
            cell.addEventListener('click', function (event) {
                cell.style.backgroundColor = color.value;
            })
        }
    }
}

submit.addEventListener('submit', function (event) {
    event.preventDefault();
    canvas.innerHTML = " ";
    let height = document.getElementById("inputHeight").value;
    let width = document.getElementById("inputWidth").value;

    makeGrid(height, width);
});