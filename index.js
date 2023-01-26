/*
1 meter = 3.281 feet
1 liter = 0.264 gallon
1 kilogram = 2.204 pound
*/

const input = document.getElementById("input")
const convertBtn = document.getElementById("btn")
const lengthEl = document.getElementById("length")
const volumeEl = document.getElementById("volume")
const massEl = document.getElementById("mass")

function convert(inputValue, unit, conversionNum, convertUnit) {
    if(inputValue === ''){
   alert('Please type a number')
 } else {
     if(unit){
         return `${inputValue} ${unit} = ${(inputValue * conversionNum).toFixed(3)} ${convertUnit}            | ${inputValue} ${convertUnit} = ${(inputValue / conversionNum).toFixed(3)} ${unit}`
     }
 }
}

convertBtn.addEventListener("click", function(){
    lengthEl.textContent = convert(input.value, "meters", 3.281, "feet")
    volumeEl.textContent = convert(input.value, "liters", 0.264, "gallons")
    massEl.textContent = convert(input.value, "kilograms", 2.204, "pounds")
})

