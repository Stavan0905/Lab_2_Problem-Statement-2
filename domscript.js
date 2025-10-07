// domscript.js

function changeText() {
  document.getElementById("demoText").innerHTML = "Text Changed!";
}

function changeStyle() {
  const element = document.getElementById("demoText");
  element.style.color = "red";
  element.style.left = "20px";
}

function changeImage() {
  document.getElementById("image").src = "new.jpg";
}

function addNode() {
  const textNode = document.createTextNode("This is a new node.");
  document.getElementById("parentNode").appendChild(textNode);
}

function deleteNode() {
  const parent = document.getElementById("parentNode");
  if (parent.firstChild) {
    parent.removeChild(parent.firstChild);
  }
}

// jQuery operations
$(document).ready(function () {
  $("#jqueryBtn").click(function (e) {
    e.preventDefault();
    $(this).text("Button Clicked");
    $("body").css("background-image", "url('background.jpg')");
    
    const username = $("input[name='username']").val();
    alert("Username entered: " + username);

    $("input[name='username']").attr("data-role", "student");
  });
});
