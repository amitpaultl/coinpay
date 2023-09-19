const select = (selector, Boolean = false) => Boolean ? document.querySelectorAll(selector) : document.querySelector(selector)
const weekdays = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Sunday']
const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December']
function daysInMonth (month, year) {
  return new Date(year, ++month, 0).getDate();
}
function getDay(year, month, day) {
  const d = new Date(year, month, day);
  return weekdays[d.getDay()];
}
select('.date-input').onfocus = (e) => {
  new DatePicker(e.target)
}