function showMessage() {
    // Show the hidden message and poll
    document.getElementById("poll-message").style.display = "block";
    
    // Add the "open" class to animate the box lid opening
    const box = document.getElementById("box");
    box.classList.add("open");
    
    // Change the lid's content to show a "ring" or special message
    const lid = box.querySelector('.lid');
    lid.innerHTML = "<span>Surprise! 💍</span>";
  }
  
  function answerPoll(answer) {
    if (answer === 'yes') {
      // If Yes, close the box and show a final message or reset to the main page
      alert("Yes! 💍 I'm so happy! 💖");
      document.getElementById("box").style.display = "none"; // Hide the box
      document.getElementById("poll-message").style.display = "none"; // Hide the poll
      document.getElementById("hidden-message").style.display = "block"; // Show a final message (if desired)
      // You can redirect or reload the page here
    } else {
      // If No, show a different message or reset
      alert("Oh no! 😞 But I'll keep asking! 💖");
      document.getElementById("poll-message").style.display = "none"; // Hide the poll
      document.getElementById("box").classList.remove("open"); // Close the box
      document.getElementById("box").style.display = "block"; // Show the box again
    }
  }
  