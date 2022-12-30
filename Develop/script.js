
$(document).ready(function () {
  let today = dayjs();
  let hour = today.hour();
  let hourBlockEl = $('.time-block');

  $('.saveBtn').click(function () {
    let hourNumber = $(this).parent().attr('id');
    let hourText = $(this).siblings('.description').val();
    localStorage.setItem(hourNumber, hourText);
  })

  function displayDateAndTime() {
    $('#currentDay').text(today.format('[Today is: ] dddd, MMM D, YYYY hh:mm:ss a'));
    hourBlockEl.each(function () {
      let hourBlockNum = $(this).attr('id').replace(/^\D+/g, '')
      if (hourBlockNum == hour) {
        $(this).attr('class', 'row time-block present')
      } else if (hourBlockNum < hour) {
        $(this).attr('class', 'row time-block past')
      } else {
        $(this).attr('class', 'row time-block future')
      }
    })
    setTimeout(displayDateAndTime, 1000);
  }

  function getTasksFromStorage() {
    for (let i = 0; i < hourBlockEl.length; i++) {
      hourNumFromStorage = 'hour' + (i + 9);
      savedTask = localStorage.getItem(hourNumFromStorage);
      $(hourBlockEl[i]).children('.description').text(savedTask);
    }
  }

  $('.clear-schedule').click(function () {
    localStorage.clear()
    $(hourBlockEl).each(function () {
      hourBlockEl.children('.description').text('');
    })
  })

  getTasksFromStorage()
  displayDateAndTime()
});


