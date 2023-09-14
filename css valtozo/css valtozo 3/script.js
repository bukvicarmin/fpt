const root = document.querySelector(':root')
const rootStyle = getComputedStyle(root)
const color1 = rootStyle.getPropertyValue('--szin1')
const colorPicker = document.querySelector('.colorPicker')
const selectBtn = document.querySelector('.colorBtn')

const dropdown = document.querySelector("#colorBlock")
console.log(dropdown.value);

selectBtn.addEventListener('click',function() {
    let colorBlock = dropdown.value
    let color = colorPicker.value
    root.style.setProperty(`--szin${colorBlock}`, colorPicker.value)
})