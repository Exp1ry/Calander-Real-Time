// Added Date class to extract Date methods
const date = new Date()
years = date.getFullYear()
monthz = date.getMonth()
let index = 0
let yIndex = 0

let daysOfWeek = document.querySelectorAll('.day-of-week')
let decMonth = document.querySelector('.month').innerText = `${date.getFullYear()} - January`

let nextBtn = document.querySelector('.next')
let backBtn = document.querySelector('.previous')
const months =
  ['January', 'Febuary', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December']

let today = document.querySelector('.today')
let days = document.querySelectorAll('.days')


// Next button
const pressNext = nextBtn.onclick = () => {

  // Capping index to 11 to match months array
  if (index < (months.length - 1)) {
    index += 1
    console.log(index)
  }
  // Resetting index if it is > 11 to go to January
  else {
    index = 0
  }

  // Every January, year gets + 1
  if (index == 0) {
    years += 1
  }
  document.querySelector('.month').innerText = `${years} - ${months[index]}`

  // If Febuary, remove 31, 30, 29
  if (index == 1) {

    document.querySelector('#last').style.visibility = 'hidden'
    document.querySelector('#scndlast').style.visibility = 'hidden'
    document.querySelector('#thirdlast').style.visibility = 'hidden'
  }
  // Else if March, May, July, remove 31
  else if (index == 3 || index == 5 || index == 8 || index == 10) {
    document.querySelector('#last').style.visibility = 'hidden'

  }
  // Else keep all days visible
  else {
    document.querySelector('#last').style.visibility = 'visible'
    document.querySelector('#scndlast').style.visibility = 'visible'
    document.querySelector('#thirdlast').style.visibility = 'visible'
  }
  // If month = current month
  if (index == date.getMonth()) {
    // Inner text is today's day
    document.querySelector('.today').innerText = date.getDate()
    document.querySelector('.today').style.backgroundColor = 'yellow'
  }
  // Else bg-color white
  else {
    document.querySelector('.today').style.backgroundColor = 'white'
  }
}





// Back button
const pressBack = backBtn.onclick = () => {

  // Capping index so it does not go negative
  if (index > 0) {
    index -= 1
  }
  // Resetting it to December
  else if (index == 0) {
    index += 11
  }
  // Everytime hits December, year - 1
  if (index == 11) {
    years -= 1
  }
  document.querySelector('.month').innerText = `${years} - ${months[index]}`


  if (index == 1) {

    document.querySelector('#last').style.visibility = 'hidden'
    document.querySelector('#scndlast').style.visibility = 'hidden'
    document.querySelector('#thirdlast').style.visibility = 'hidden'
  }
  else if (index == 3 || index == 5 || index == 8 || index == 10) {
    document.querySelector('#last').style.visibility = 'hidden'

  }
  else {
    document.querySelector('#last').style.visibility = 'visible'
    document.querySelector('#scndlast').style.visibility = 'visible'
    document.querySelector('#thirdlast').style.visibility = 'visible'
  }

  if (index == date.getMonth()) {

    document.querySelector('.today').innerText = date.getDate()
    document.querySelector('.today').style.backgroundColor = 'yellow'
  }
  else {
    document.querySelector('.today').style.backgroundColor = 'white'
  }
}


