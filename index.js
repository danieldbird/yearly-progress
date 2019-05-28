var weekdays = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];
var months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

function updateCalendar() {
  let date = new Date();
  let year = date.getFullYear();
  let month = date.getMonth();
  let day = date.getDate();
  let daysInMonth = new Date(date.getFullYear(), date.getMonth() + 1, 0).getDate();

  Date.prototype.isLeapYear = function() {
    if ((year & 3) != 0) return false;
    return year % 100 != 0 || year % 400 == 0;
  };

  // Get Day of Year
  Date.prototype.getDOY = function() {
    var dayCount = [0, 31, 59, 90, 120, 151, 181, 212, 243, 273, 304, 334];
    var dayOfYear = dayCount[month] + day;
    if (month > 1 && this.isLeapYear()) dayOfYear++;
    return dayOfYear;
  };

  // check if a leap year
  function daysInYear(data) {
    return isLeapYear(data) ? 366 : 365;
  }

  function isLeapYear(data) {
    return data % 400 === 0 || (data % 100 !== 0 && data % 4 === 0);
  }

  $(".calendar").prepend("<div class='space'>" + year + "</div>");
  for (let index = 0; index < daysInMonth; index++) {
    if (index + 1 === day) {
      $(".calendar").append(
        "<div class='space active'><span class='weekday'>" +
          weekdays[new Date(date.getFullYear(), date.getMonth(), index).getDay()] +
          "</span><span class='day'>" +
          (index + 1) +
          "</span></div>"
      );
    } else {
      $(".calendar").append(
        "<div class='space'><span class='weekday'>" +
          weekdays[new Date(date.getFullYear(), date.getMonth(), index).getDay()] +
          "</span><span class='day'>" +
          (index + 1) +
          "</span></div>"
      );
    }
  }
  $(".calendar").append("<div class='space'>" + (year + 1) + "</div>");

  for (let index = 0; index < daysInMonth; index++) {
    console.log(index + 1 + weekdays[new Date(date.getFullYear(), date.getMonth(), index).getDay()]);
  }

  $(".percentage")
    .html(((date.getDOY() / daysInYear(year)) * 100).toFixed(2) + "%")
    .css("left", ((date.getDOY() / daysInYear(year)) * 100).toFixed(2) + "%");

  console.log("Full Date: " + date);
  console.log("Year: " + year);
  console.log("Month: " + (month + 1));
  console.log("Days in month: " + daysInMonth);
  console.log("Days in year: " + daysInYear(year));
  console.log("Current day of year: " + date.getDOY());
  console.log("Percentage of year: " + ((date.getDOY() / daysInYear(year)) * 100).toFixed(2));
}

updateCalendar();

setInterval(function() {
  updateCalendar();
}, 3600000);
