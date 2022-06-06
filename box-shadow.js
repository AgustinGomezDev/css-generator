/* ----- CUSTOMIZE SHADOW ELEMENTS ----- */

// Show code button
const showCodeBtn = document.getElementById('show-code');
const alertClose = document.getElementById('alert-close');
const alertBtn = document.getElementById('alert-btn');

showCodeBtn.addEventListener('click', showCode) // Show the alert
alertClose.addEventListener('click', showCode); // Close the alert
alertBtn.addEventListener('click', copyCode) // Copy the code to the clipboard

// Outisde / Inside
const radioOutside = document.getElementById('outside');
const radioInside = document.getElementById('inside');

radioOutside.checked = true;
radioInside.checked = false;

radioInside.addEventListener('click', updateRadioInside)
radioOutside.addEventListener('click', updateRadioOutside);

// Horizontal offset
const horizontalOffset = document.getElementById('horizontal-offset');
const horizontalOffsetNum = document.getElementById('horizontal-offset-num');

// Vertical offset
const verticalOffset = document.getElementById('vertical-offset');
const verticalOffsetNum = document.getElementById('vertical-offset-num');

// Blur radius
const blurRadius = document.getElementById('blur-radius');
const blurRadiusNum = document.getElementById('blur-radius-num');

// Spread radius
const spreadRadius = document.getElementById('spread-radius');
const spreadRadiusNum = document.getElementById('spread-radius-num');

// Color
const color = document.getElementById('color');

// Reset button
const resetShadowBtn = document.getElementById('reset-shadow');

resetShadowBtn.addEventListener('click', resetShadow); // Reset customize shadow inputs

/* ----- CUSTOMIZE BOX ELEMENTS ----- */

// Width
const width = document.getElementById('width');
const widthNum = document.getElementById('width-num');

// Height
const height = document.getElementById('height');
const heightNum = document.getElementById('height-num');

// Border radius
const borderRadius = document.getElementById('border-radius');
const borderRadiusNum = document.getElementById('border-radius-num');

// Border width
const borderWidth = document.getElementById('border-width');
const borderWidthNum = document.getElementById('border-width-num');

// Border color
const borderColor = document.getElementById('border-color');

// Bacgkround color
const backgroundColor = document.getElementById('background-color');

// DISPLAY BOX
const displayBox = document.getElementById('display-box');

// Reset button
const resetBoxBtn = document.getElementById('reset-box');

resetBoxBtn.addEventListener('click', resetBox); // Reset customize box inputs

/* ----- CUSTOMIZE SHADOW FUNCTIONS ----- */

function updateRadioInside(){ // Update the radio inside
    if(radioOutside.checked){
        radioOutside.checked = false;
        radioInside.checked = true;
    }
    updateShadow(color.value);
}

function updateRadioOutside(){ // Update the radio outside
    if(radioInside.checked){
        radioInside.checked = false;
        radioOutside.checked = true;
    }
    updateShadow(color.value);
}

function updateHorizontalOffset(value) { // Save the horizontal offset value
    horizontalOffset.value = value;
    horizontalOffsetNum.value = value; 
    displayBox.style.boxShadow = value;
    updateShadow(color.value);
}

function updateVerticalOffset(value) { // Save the vertical offset value
    verticalOffset.value = value;
    verticalOffsetNum.value = value; 
    updateShadow(color.value);
}

function updateBlurRadius(value) { // Save the blur radius value
    blurRadius.value = value;
    blurRadiusNum.value = value; 
    updateShadow(color.value);
}

function updateSpreadRadius(value) { // Save the spread radius value
    spreadRadius.value = value;
    spreadRadiusNum.value = value; 
    updateShadow(color.value);
}

function updateColor(){ // Update color of the shadow
    updateShadow(color.value);
}

let updateShadow = function(value){ // Update box shadow, value is the color of the shadow
    displayBox.style.boxShadow = `${horizontalOffset.value}px 
                                ${verticalOffset.value}px 
                                ${blurRadius.value}px 
                                ${spreadRadius.value}px 
                                ${value} 
                                ${radioInside.checked ? 'inset' : ''}`; // condition ? true_expression : false_expression
}

function resetShadow(){
    radioInside.checked = false;
    radioOutside.checked = true;

    horizontalOffset.value = 0;
    horizontalOffsetNum.value = 0;

    verticalOffset.value = 0;
    verticalOffsetNum.value = 0;

    blurRadius.value = 0;
    blurRadiusNum.value = 0;

    spreadRadius.value = 0;
    spreadRadiusNum.value = 0;

    color.value = '';

    updateShadow(color.value);
}

/* ----- CUSTOMIZE BOX FUNCTIONS ----- */

function updateWidth(value) { // Save the width value
    width.value = value;
    widthNum.value = value; 
    displayBox.style.width = value + 'px'; // Update the width of the box
}

function updateHeight(value) { // Save the height value
    height.value = value;
    heightNum.value = value; 
    displayBox.style.height = value + 'px'; // Update the height of the box
}

function updateBorderRadius(value) { // Save the border radius value
    borderRadius.value = value;
    borderRadiusNum.value = value; 
    displayBox.style.borderRadius = value + 'px';
}

function updateBorderWidth(value) { // Save the border width value
    borderWidth.value = value;
    borderWidthNum.value = value; 
    displayBox.style.border = value + 'px solid' + borderColor.value; // Update the border width of the box and the border color
}

function updateBorderColor(){ // Update the border color of the box{
    displayBox.style.border = borderWidth.value + 'px solid' + borderColor.value; // Update the border width of the box and the border color
}

function updateBackgroundColor(){ // Update the background color of the box
    displayBox.style.backgroundColor = backgroundColor.value;
}

function resetBox(){
    width.value = 300;
    widthNum.value = 300;

    height.value = 300;
    heightNum.value = 300;

    borderRadius.value = 15;
    borderRadiusNum.value = 15;

    borderWidth.value = 0;
    borderWidthNum.value = 0;

    borderColor.value = '';

    backgroundColor.value = '';

    updateWidth(width.value);
    updateHeight(height.value);
    updateBorderRadius(borderRadius.value);
    updateBorderWidth(borderWidth.value);
    updateBackgroundColor(backgroundColor.value);
}

/* ----- SHOW CODE FUNCTION ----- */

function showCode(){ // Show the alert
    const alert = document.getElementById('alert');
    const code = document.getElementById('code').textContent="box-shadow: "+displayBox.style.boxShadow+";"; // Write the code in the alert
    alert.classList.toggle('alert-show'); // Toggle the alert class
}

function copyCode(){ // Copy the code to the clipboard
    navigator.clipboard.writeText(code.textContent);
} 