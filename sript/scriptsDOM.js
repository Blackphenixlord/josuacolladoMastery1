// Replace the first paragraph text
document.querySelector(".intro").innerHTML =
  "Life is a journey full of moments to grow, learn, and overcome obstacles. Every step forward, no matter how small, is progress worth celebrating. Challenges are lessons in disguise, and with perseverance, anything is achievable. Believe in yourself and your ability to create change, and success will follow.";

// Change the 3 images with the correct ones
document.querySelector("#firstImage").src = "./Images/Lamborghini.jpg";
document.querySelector("#secondImage").src = "./Images/VolleyballBeach.jpg";
document.querySelector("#thirdImage").src = "./Images/Gamer.jpg";

// Change the Heading Names
const headings = document.querySelectorAll("h3");
headings[0].innerHTML = "Achieve";
headings[1].innerHTML = "Don't Give Up";
headings[2].innerHTML = "Challenge and Surpass";

// Change the paragraphs under the headings and images
document.querySelector("#firstText").innerHTML =
  "Success is built through consistent effort and belief in your potential. Each small step forward creates momentum toward your goals. Stay focused, and incredible possibilities will unfold.";

document.querySelector("#secondText").innerHTML =
  "Don't give up—challenges are opportunities to grow stronger and wiser. Remember why you started and take each step with determination. Your persistence will lead you to success.";

document.querySelector("#thirdText").innerHTML =
  "Embrace challenges as stepping stones to growth and greatness. Each obstacle you face is an opportunity to push your limits and discover your true potential. With determination and courage, you can surpass anything that stands in your way.";

// Change the color of the header on button click with new colors
function lightBlue() {
  document.querySelector(".headings").style.backgroundColor = "#A2C2E0"; // Light blue
}
document.querySelector("#ColorChanging").addEventListener("click", lightBlue);

function green() {
  document.querySelector(".headings").style.backgroundColor = "#A7D08E"; // Green
}
document.querySelector("#ColorChanged").addEventListener("click", green);

function darkPurple() {
  document.querySelector(".headings").style.backgroundColor = "#6A4C93"; // Dark purple
}
document.querySelector("#ColorChange").addEventListener("click", darkPurple);
