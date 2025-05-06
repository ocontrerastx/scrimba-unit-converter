let inputEl = document.getElementById("input-el")
const convertButton = document.getElementById("button-convert")
const lengthEl = document.getElementById("length-el")
const volumeEl = document.getElementById("volume-el")
const massEl = document.getElementById("mass-el")

const metersToFeet = 3.281
const litersToGallons = 0.264
const kilogramsToPounds = 2.204

convertButton.addEventListener("click", function() {
    let inputUnit = Number(inputEl.value)

    let metersToFeetConversion = (inputUnit * metersToFeet).toFixed(3)
    let feetToMetersConversion = (inputUnit / metersToFeet).toFixed(3)

    let litersToGallonsConversion = (inputUnit * litersToGallons).toFixed(3)
    let gallonsToLitersConversion = (inputUnit / litersToGallons).toFixed(3)

    let kilosToPoundsConverion = (inputUnit * kilogramsToPounds).toFixed(3)
    let poundsToKilosConversion = (inputUnit / kilogramsToPounds).toFixed(3)

    let lengthString = `${inputUnit} meters = ${metersToFeetConversion} feet | ${inputUnit} feet = ${feetToMetersConversion} meters`
    let volumeString = `${inputUnit} liters = ${litersToGallonsConversion} gallons | ${inputUnit} gallons = ${gallonsToLitersConversion} liters`
    let massString = `${inputUnit} kilos = ${kilosToPoundsConverion} pounds | ${inputUnit} pounds = ${poundsToKilosConversion} kilos`

    lengthEl.textContent = lengthString
    volumeEl.textContent = volumeString
    massEl.textContent = massString
})