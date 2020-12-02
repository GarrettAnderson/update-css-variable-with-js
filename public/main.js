/* ========================
    Garrett Custom JS
   ======================== */


let spacing = document.querySelector('#spacing')
console.log(spacing)

spacing.addEventListener('change', e => {
  console.log('spacing clicked')
  console.log(e.target.value)
  // console.log(this)

  spacing.style.padding(e.target.value)

  console.log(spacing)

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
