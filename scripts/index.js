// Get the modal
var createPostModal = document.getElementById("createPostModal");

// Get the button that opens the modal
var createPostButton = document.getElementById("create-submit");

// Get the <span> element that closes the modal
var createPostClose = document.getElementsByClassName("create-post-close")[0];

// When the user clicks on the button, open the modal
createPostButton.onclick = function() {
  createPostModal.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
createPostClose.onclick = function() {
  createPostModal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == createPostModal) {
    createPostModal.style.display = "none";
  }
}
