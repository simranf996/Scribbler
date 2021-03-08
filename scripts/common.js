// Get the modal
var signInModal = document.getElementById("signInModal");
var signUpModal = document.getElementById("signUpModal");

// Get the button that opens the modal
var signInButton = document.getElementById("signIn");
var signUpButton = document.getElementById("signUp");
var signUpLink= document.getElementById("signuplink");

// Get the <span> element that closes the modal
var signInSpan = document.getElementsByClassName("signin-close")[0];
var signUpSpan = document.getElementsByClassName("signup-close")[0];


// When the user clicks on the button, open the modal
signInButton.onclick = function() {
  signInModal.style.display = "block";
}

signUpButton.onclick = function() {
  signUpModal.style.display = "block";
}

signUpLink.onclick = function() {
  signInModal.style.display = "none";
  signUpModal.style.display = "block";
}


// When the user clicks on <span> (x), close the modal
signInSpan.onclick = function() {
  signInModal.style.display = "none";
  //signUpButton.style.display = "none";
}

signUpSpan.onclick = function() {
  signUpModal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == signInModal || event.target == signUpModal ) {
    signInModal.style.display = "none";
    signUpModal.style.display = "none";
  }
}
