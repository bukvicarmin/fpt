const root = document.querySelector(':root')
const rootStyle = getComputedStyle(root)
const color1 = rootStyle.getPropertyValue('--szin1')
const colorPicker = document.querySelector('.colorPicker')
const selectBtn = document.querySelector('.colorBtn')

selectBtn.addEventListener('click',function() {
    let color = colorPicker.value
    root.style.setProperty("--szin1", colorPicker.value)
})