// Get the button that opens the modal
var editButton = document.getElementById("editButton");
var saveButton = document.getElementById("saveButton");
var likeButton = document.getElementById("likeButton");
var addCommentButton = document.getElementById("addCommentButton");
var numOfLikes =0;

// When the user clicks on the button, open the modal
editButton.onclick = function() {
  saveButton.style.display = "block";
  editButton.style.display = "none";
  document.getElementById("blog-content-text").contentEditable = "true";
  document.getElementById("blog-title").contentEditable = "true";

}

saveButton.onclick = function() {
  editButton.style.display = "block";
  saveButton.style.display = "none";
  document.getElementById("blog-content-text").contentEditable = "false";
  document.getElementById("blog-title").contentEditable = "false";
}

likeButton.onclick = function() {
  numOfLikes++;
  document.getElementById("no-of-likes").innerHTML= numOfLikes +" person(s) like this !";
  document.getElementById("no-of-likes").contentEditable = "false";
}

addCommentButton.onclick = function() {
  var newComment = document.createElement("div");
  var commentText = document.getElementById("comment-text").value;
  newComment.innerHTML=commentText;
  newComment.setAttribute("class", "single-comment");
  var allComments = document.getElementsByClassName("single-comment");
  if(allComments!==null)
  document.getElementsByClassName("new-comments")[0].insertBefore(newComment, allComments[0]);
  else
  document.getElementsByClassName("new-comments")[0].appendChild(newComment);

}
