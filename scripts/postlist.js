// Get the modal
var deletePostModal = document.getElementById("deleteModal");
var num =0;
// Get the button that opens the modal
var deletePostButton1 = document.getElementById("deleteButton1");
var deletePostButton2 = document.getElementById("deleteButton2");
var deletePostButton3 = document.getElementById("deleteButton3");
var deletePostButton4 = document.getElementById("deleteButton4");
var deletePostButton5 = document.getElementById("deleteButton5");

// Get the <span> element that closes the modal
var deletePostClose = document.getElementsByClassName("delete-close")[0];

// When the user clicks on the button, open the modal
deletePostButton1.onclick = function() {
  deletePostModal.style.display = "block";
  num =1;
}
deletePostButton2.onclick = function() {
  deletePostModal.style.display = "block";
  num =2;
}
deletePostButton3.onclick = function() {
  deletePostModal.style.display = "block";
  num =3;
}
deletePostButton4.onclick = function() {
  deletePostModal.style.display = "block";
  num =4;
}
deletePostButton5.onclick = function() {
  deletePostModal.style.display = "block";
  num =5;
}

// When the user clicks on <span> (x), close the modal
deletePostClose.onclick = function() {
  deletePostModal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == deletePostModal) {
    deletePostModal.style.display = "none";
  }
}

var confirmDeleteButton = document.getElementById("yes-buttons");
var cancelDeleteButton = document.getElementById("no-buttons");

confirmDeleteButton.onclick = function() {
  var cardToDelete = "card"+num;
  document.getElementById(cardToDelete).style.display = "none";
  deletePostModal.style.display = "none";
}

cancelDeleteButton.onclick = function() {
    deletePostModal.style.display = "none";
}
