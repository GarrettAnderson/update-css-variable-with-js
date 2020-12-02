/* ========================
   Garrett Custom JS
 ======================== */


let spacing = document.querySelector('input[name="spacing"]')
let blur = document.querySelector('input[name="blur"]')
let color = document.querySelector('input[name="base"]')
let image = document.querySelector('img')
console.log(spacing)
console.log(blur)
console.log(image)


spacing.addEventListener('change', e => {
// spacing.addEventListener('change', function(e) {

  console.log('spacing clicked')
  console.log(e.target.value)
  // console.log(this) // refers to window object because of arrow function
  console.log(spacing)

  // change the value of padding on image
  image.style.setProperty('padding', e.target.value + 'px')
  console.log(image)

/* =======================================================
     QUESTION - why is the variable for css declaration not working in JS. Have to write padding explicitely


     // image.style.setProperty('--base', e.target.value + 'px')

  ======================================================= */
});

blur.addEventListener('change', e => {

  console.log(blur)
  console.log(e.target.value)
  console.log(image)

  image.style.setProperty('filter', 'blur' + '(' + e.target.value + 'px'  + ')')
  console.log(image)

});

color.addEventListener('change', e => {

  image.style.setProperty('background', e.target.value)

})
































// const inputs = document.querySelectorAll('.controls input')
//
// function handleUpdate() {
//   console.log(this.value)
//   const suffix = this.dataset.sizing || ''
//   console.log(suffix)
//   document.documentElement.style.setProperty(`--${this.name}`, this.value + suffix)
// }
//
// inputs.forEach((input) => input.addEventListener('change', handleUpdate))
// inputs.forEach((input) => input.addEventListener('mousemove', handleUpdate))
