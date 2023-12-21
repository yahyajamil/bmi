const $ = document;
const weight = $.getElementById("weight");
const weightValue = $.getElementById("weight-val");
const height = $.getElementById("height");
const heightValue = $.getElementById("height-val");
const result = $.getElementById("result");
const category = $.getElementById("category");


function calculate () {
    weightValue.innerHTML = weight.value + " kg";
    heightValue.innerHTML = height.value + " cm";

    var bmiValue = weight.value / (height.value * height.value / 10000);
    result.innerHTML = bmiValue.toFixed(1);

    if(bmiValue < 18.5){
        category.innerHTML = "Under Weight";
        result.style.color = "#FFC44D";
    }else if(bmiValue >= 18.5 && bmiValue <= 24.9){
        category.innerHTML = "Normal Weight";
        result.style.color = "#0be881";
    }else if(bmiValue >= 25 && bmiValue <= 29.9){
        category.innerHTML = "Over Weight";
        result.style.color = "#ff884d";
    }else {
        category.innerHTML = "Obese";
        result.style.color = "#ff5e4d";
    }
}

weight.addEventListener("change", calculate);
height.addEventListener("change", calculate);