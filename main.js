setInterval(function() {
  var date = new Date()
  var hours = date.getHours()
  if (hours > 12) {
    hours = hours - "12"
  }
  if (hours < 10) {
    hours = "0" + hours
  }

  var minutes = date.getMinutes()
  if (minutes < 10) {
    minutes = "0" + minutes
  }
  var seconds = date.getSeconds()
  if (seconds < 10) {
    seconds = "0" + seconds
  }
  var time = hours + ":" + minutes + ":" + seconds

  $(".clock").html(time)
}, 1000)

setInterval(function() {
  var date = new Date()
  var hours = date.getHours()
  if (hours > 12) {
    hours = hours - "12"
  }
  if (hours < 10) {
    hours = "0" + hours
  }

  var minutes = date.getMinutes()
  if (minutes < 10) {
    minutes = "0" + minutes
  }
  var seconds = date.getSeconds()
  if (seconds < 10) {
    seconds = "0" + seconds
  }
  var color =
    "#" + hours.toString(16) + minutes.toString(16) + seconds.toString(16)

  $(".hex")
    .html(color)
    .css("background-color", `${color}`)
}, 300)
