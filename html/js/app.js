/* Modals */
var modals = document.querySelectorAll('.modal');
var modalButtons = document.querySelectorAll('.open-modal-button');
var modalClose = document.querySelectorAll('.close-modal-button');

var successMessages = document.querySelectorAll('.modal-success-notification');

if (modalButtons.length > 0) {
  modalButtons.forEach(button => {
    button.addEventListener('click', function() {
      document.getElementById(this.dataset.target).classList.add('is-active');
    });
  });
}

if (modalClose.length > 0) {
  modalClose.forEach(closeButton => {
    closeButton.addEventListener('click', function() {
      modals.forEach(modal => {
        modal.classList.remove('is-active');
        successMessages.forEach(message => {
          message.classList.add('is-hidden');
        })
      })
    })
  })
}

var sendBugReport = document.querySelector('.send-bug-report');
if (sendBugReport !== null) {
  sendBugReport.addEventListener('click', function() {
    successMessages.forEach(message => {
      message.classList.remove('is-hidden');
    });
  });
}

/* Mobile Menu */
var burger = document.querySelector('.navbar-burger');
var menu = document.querySelector('.navbar-menu');

if (burger !== null) {
  burger.addEventListener('click', function() {
    burger.classList.toggle('is-active');
    menu.classList.toggle('is-active');
  })
}

/* Notification */
var closeNotification = document.querySelectorAll('.close-notification');
if (closeNotification.length > 0) {
  closeNotification.forEach(closeIcon => {
    closeIcon.addEventListener('click', () => {
      closeIcon.closest('.notification').classList.toggle('is-hidden');
    })
  })
}

/* Delete a book */
var deleteItem = document.querySelectorAll('.delete-item');
if (deleteItem.length > 0) {
  deleteItem.forEach(button => {
    button.addEventListener('click', function() {
      button.closest('.column').remove();
    });
  });
}

/* Delete a customer*/
var deleteCustomer = document.querySelectorAll('.delete-customer');
if (deleteCustomer.length > 0) {
  deleteCustomer.forEach(button => {
    button.addEventListener('click', function() {
      button.closest('tr').remove();
    });
  });
}