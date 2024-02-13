let passcode = '';

function addNumber(number) {
  if (passcode.length < 4) {
    passcode += number;
    updatePasscodeDisplay();
  }
}

function deleteNumber() {
  passcode = passcode.slice(0, -1);
  updatePasscodeDisplay();
}

function updatePasscodeDisplay() {
  const passcodeElements = document.querySelectorAll('.passcode-value span');
  passcodeElements.forEach((element, index) => {
    if (index < passcode.length) {
      element.textContent = '•';
    } else {
      element.textContent = '';
    }
  });
}

function submitPasscode() {
  if (passcode.length === 4) {
    // Check passcode here, for example:
    if (passcode === '0425') {
      // Redirect to new page upon successful passcode input
      window.location.href = 'home.html'; // Replace 'success.html' with your desired URL
    } else {
      displayModal('Passcode incorrect! Please try again.');
    }
  } else {
    displayModal('Please enter a 4-digit passcode!');
  }
}

function displayModal(message) {
  const modalText = document.getElementById('modalText');
  modalText.textContent = message;
  const modal = document.getElementById('myModal');
  modal.style.display = 'block';

  // Close the modal when user clicks on the close button
  const closeBtn = document.querySelector('.close');
  closeBtn.addEventListener('click', function() {
    modal.style.display = 'none';
  });
}
