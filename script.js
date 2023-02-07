let d = new Date()
let dayNight = "AM"

// Adding zero before single numbers
const addZero = (i) => {
  if (i < 10) {
    i = "0" + i
  }
  return i
}

// get the name of the day from the number
const getTheDay = (d) => {
  const weekDay = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday']
  return weekDay[d]
}

// get the name of the month from the number
const getTheMonth = (m) => {
  const month = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December']
  return month[m]
}

// returning the status as PM 
const getStatus = () => {
  return "PM"
}

// changing the 24 hours format to 12 hours
const getTheHours = (h) => {
  if (h > 12) {
    dayNight = getStatus()
    return (h - 12)
  }
  else if (h == 0) {
    dayNight = "AM"
    return 12
  }
}


setInterval(async function() {
  d = new Date()
  document.getElementById("hour").innerHTML = getTheHours(addZero(d.getHours()))
  document.getElementById("min").innerHTML = addZero(d.getMinutes())
  document.getElementById("sec").innerHTML = addZero(d.getSeconds())
  document.getElementById("day").innerHTML = getTheDay(d.getDay())
  document.getElementById("month").innerHTML = getTheMonth(d.getMonth())
  document.getElementById("date").innerHTML = addZero(d.getDate())
  document.getElementById("status").innerHTML = dayNight
}, 1000)

console.log(getTheHours(d.getHours()))
