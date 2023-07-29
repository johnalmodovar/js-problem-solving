function getToday() {
  return new Date();
}

function isWeekend(date) {
  return date.getDay() === 6 || date.getDay() === 0;
}

function getMonthName(date) {
  date = date.getMonth();
  let dateMonths = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December'
  ];

  return dateMonths[date];
}

/*
getToday => return today's date and time as JS Date Object

isWeekend => return true if date is the weekend

getMonthName => return month name for given date
  psuedo:
  create list of months
  get month from date
    return matching date from list
*/