//Create function calculateArea(event), calculate rectangular area

function calculateArea(event){

    event.preventDefault();

    //get the input from html
    const length = parseFloat(document.getElementById('length').value);
    const width = parseFloat(document.getElementById('width').value);

    //condition to counter error
    if(length>0 && width>0){

        //formula to get area
        let area = length*width;

        //print output
        document.getElementById('output').textContent='Rectangle area: '+ area + ' square cm';
    }else{
        document.getElementById('output').textContent='Please enter positive numbers for length and width';
    }
}