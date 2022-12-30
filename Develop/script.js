// Wrap all code that interacts with the DOM in a call to jQuery to ensure that
// the code isn't run until the browser has finished rendering all the elements
// in the html.

$(function () {
  $('.saveBtn').click(function () {
    let hourNumber = $(this).parent().attr('id')
    let hourText = $(this).siblings('.description').val();
    localStorage.setItem(hourNumber, hourText)
  })

  function displayDateAndTime() {
    let today = dayjs();
    let hour = today.hour();
    let hourBlockEl = $('.time-block');
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

  displayDateAndTime()

  //
  // TODO: Add code to get any user input that was saved in localStorage and set
  // the values of the corresponding textarea elements. HINT: How can the id
  // attribute of each time-block be used to do this?

});



// ********* Finished I think **********
// TODO: Add a listener for click events on the save button. This code should
  // use the id in the containing time-block as a key to save the user input in
  // local storage. HINT: What does `this` reference in the click listener
  // function? How can DOM traversal be used to get the "hour-x" id of the
  // time-block containing the button that was clicked? How might the id be
  // useful when saving the description in local storage?
  //
  // TODO: Add code to apply the past, present, or future class to each time
  // block by comparing the id to the current hour. HINTS: How can the id
  // attribute of each time-block be used to conditionally add or remove the
  // past, present, and future classes? How can Day.js be used to get the
  // current hour in 24-hour time?
    //
  // TODO: Add code to display the current date in the header of the page.