var months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

function updateCalendar() {
  var now = new Date();

  $(".month-name").html(months[new Date().getMonth()]);

  $(".this-year").html(new Date().getFullYear());

  $(".next-year").html(new Date().getFullYear() + 1);

  let daysInCurrentMonth = new Date(now.getFullYear(), now.getMonth() + 1, 0).getDate();

  for (let index = 0; index < daysInCurrentMonth; index++) {
    $(".month-days").append("<span>" + (index + 1) + "</span>");
  }
}

updateCalendar();

setInterval(function() {
  updateCalendar();
}, 3600000);
