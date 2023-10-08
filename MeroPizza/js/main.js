//video playback speed
function changeSpeed() {
  var video = document.getElementById("myVideo");
  video.playbackRate = 0.5;
}
changeSpeed();


//review slider 

const sliderContainer = document.getElementById('slider-container');
const reviews = sliderContainer.getElementsByClassName('review');

 review.forEach(reviews => {
  user.forEach(users => {
    
if(reviews.userid==users.id){

const reviewDiv = document.createElement("div");
reviewDiv.classList.add("review");


const reviewText = document.createElement("p");
reviewText.innerHTML = `
  <span>"</span>${reviews.content}<span>"</span><br>
`;

const authorName = document.createElement("h1");
authorName.textContent = users.name;

const authorRole = document.createElement("h3");
authorRole.textContent = "customer";


reviewText.appendChild(authorName);
reviewText.appendChild(authorRole);
reviewDiv.appendChild(reviewText);


sliderContainer.appendChild(reviewDiv);
}
});
});
let currentIndex = 0;

reviews[currentIndex].style.display = 'block';


function showNextReview() {

  reviews[currentIndex].style.display = 'none';


  currentIndex = (currentIndex + 1) % reviews.length;


  reviews[currentIndex].style.display = 'block';
}
setInterval(showNextReview, 5000);





