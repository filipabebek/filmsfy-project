<script setup>
import { ref, onMounted } from 'vue';
import Swiper from 'swiper';
import 'swiper/swiper-bundle.css';

import theWitcherImage from '@/assets/img/thewitcher.jpg';
import suicideSquadImage from '@/assets/img/suicidesquad.jpg';
import bladeRunnerImage from '@/assets/img/bladerunner.jpg';
import johnWick4Image from '@/assets/img/johnwick4.jpg';
import houseOfTheDragonImage from '@/assets/img/houseofthedragon.jpg';
import gameOfThronesImage from '@/assets/img/gameofthrones.jpg';
import lotrImage from '@/assets/img/lotr return of the king.jpg';
import kingsmanImage from '@/assets/img/kingsman.jpg';
import piratesImage from '@/assets/img/pirates.jpg';
import harryPotterImage from '@/assets/img/harrypotter.jpg';
import xMenImage from '@/assets/img/xmen.jpg';
import matrixImage from '@/assets/img/matrix.jpg';
import ghostbustersImage from '@/assets/img/ghostbusters2.jpg';
import hungerGamesImage from '@/assets/img/hungergames.jpg';
import ironMan2Image from '@/assets/img/ironman2.jpg';
import darkKnightImage from '@/assets/img/darkknight.jpg';

//pozadine
import theWitcherBgImage from '@/assets/img/thewitcherbg.jpg';
import suicideSquadBgImage from '@/assets/img/suicidesquadbg.jpg';
import bladeRunnerBgImage from '@/assets/img/bladerunnerbg.jpg';
import johnWick4BgImage from '@/assets/img/johnwick4bg.jpg';
import houseOfTheDragonBgImage from '@/assets/img/houseofthedragonbg.jpg';
import gameOfThronesBgImage from '@/assets/img/gameofthronesbg.jpg';
import lotrBgImage from '@/assets/img/lotrreturnofthekingbg.jpg';
import kingsmanBgImage from '@/assets/img/kingsmanbg.jpg';
import piratesBgImage from '@/assets/img/piratesbg.jpg';
import harryPotterBgImage from '@/assets/img/harrypotterbg.jpg';
import xMenBgImage from '@/assets/img/xmenbg.jpg';
import matrixBgImage from '@/assets/img/matrixbg.jpg';
import ghostbustersBgImage from '@/assets/img/ghostbustersbg.png';
import hungerGamesBgImage from '@/assets/img/hungergamesbg.jpg';
import ironMan2BgImage from '@/assets/img/ironman2bg.jpg';
import darkKnightBgImage from '@/assets/img/darkknightbg.jpg';


// Reactive data for movies
const movies = ref([
  { title: 'The Witcher', image: theWitcherImage, genre: 'Action' },
  { title: 'Suicide Squad', image: suicideSquadImage, genre: 'Comedy' },
  { title: 'Blade Runner 2049', image: bladeRunnerImage, genre: 'Drama' },
  { title: 'John Wick 4', image: johnWick4Image, genre: 'Horror' },
  { title: 'House of the Dragon', image: houseOfTheDragonImage, genre: 'Sci-Fi' },
  { title: 'Game of Thrones', image: gameOfThronesImage, genre: 'Sci-Fi' },
  { title: 'LOTR: Return of the King', image: lotrImage, genre: 'Sci-Fi' },
  { title: 'Kingsman: The Secret Service', image: kingsmanImage, genre: 'Sci-Fi' },
  { title: 'Pirates of the Caribbean', image: piratesImage, genre: 'Sci-Fi' },
  { title: 'Harry Potter: Chamber of Secrets', image: harryPotterImage, genre: 'Sci-Fi' },
  { title: 'X-Men Origins: Wolverine', image: xMenImage, genre: 'Sci-Fi' },
  { title: 'The Matrix', image: matrixImage, genre: 'Sci-Fi' },
  { title: 'Ghostbusters', image: ghostbustersImage, genre: 'Sci-Fi' },
  { title: 'The Hunger Games', image: hungerGamesImage, genre: 'Sci-Fi' },
  { title: 'Iron-Man 2', image: ironMan2Image, genre: 'Sci-Fi' },
  { title: 'The Dark Knight', image: darkKnightImage, genre: 'Sci-Fi' },
]);

const movieImages={
  'The Witcher': theWitcherImage,
  'Suicide Squad': suicideSquadImage,
  'Blade Runner 2049': bladeRunnerImage,
  'John Wick 4': johnWick4Image,
  'House of the Dragon': houseOfTheDragonImage,
  'Game of Thrones': gameOfThronesImage,
  'LOTR: Return of the King': lotrImage,
  'Kingsman: The Secret Service': kingsmanImage,
  'Pirates of the Caribbean': piratesBgImage,
  'Harry Potter: Chamber of Secrets': harryPotterImage,
  'X-Men Origins: Wolverine': xMenImage,
  'The Matrix': matrixImage,
  'Ghostbusters': ghostbustersImage,
  'The Hunger Games': hungerGamesImage,
  'Iron-Man 2': ironMan2Image,
  'The Dark Knight': darkKnightImage,
};

const backgroundImages = {
  'The Witcher': theWitcherBgImage,
  'Suicide Squad': suicideSquadBgImage,
  'Blade Runner 2049': bladeRunnerBgImage,
  'John Wick 4': johnWick4BgImage,
  'House of the Dragon': houseOfTheDragonBgImage,
  'Game of Thrones': gameOfThronesBgImage,
  'LOTR: Return of the King': lotrBgImage,
  'Kingsman: The Secret Service': kingsmanBgImage,
  'Pirates of the Caribbean': piratesBgImage,
  'Harry Potter: Chamber of Secrets': harryPotterBgImage,
  'X-Men Origins: Wolverine': xMenBgImage,
  'The Matrix': matrixBgImage,
  'Ghostbusters': ghostbustersBgImage,
  'The Hunger Games': hungerGamesBgImage,
  'Iron-Man 2': ironMan2BgImage,
  'The Dark Knight': darkKnightBgImage,
};

const movieDetails = {
    'The Witcher': {
        description: 'The Witcher follows the story of Geralt of Rivia, a solitary monster hunter, who struggles to find his place in a world where people often prove more wicked than monsters and beasts. But when destiny hurtles him toward a powerful sorceress, and a young princess with a special gift, the three must learn to navigate independently the increasingly volatile Continent.',
        type: 'Action | Adventure | Drama | Fantasy',
        rating: '★★★★☆'
    },
    'Suicide Squad': {
        description: 'It feels good to be bad...Assemble a team of the worlds most dangerous, incarcerated Super Villains, provide them with the most powerful arsenal at the governments disposal, and send them off on a mission to defeat an enigmatic, insuperable entity. U.S. intelligence officer Amanda Waller has determined only a secretly convened group of disparate, despicable individuals with next to nothing to lose will do.',
        type: 'Action | Adventure | Fantasy | Sci-Fi',
        rating: '★★★☆☆'
    },
    'Blade Runner 2049': {
        description: 'Thirty years after the events of Blade Runner (1982), a new Blade Runner, L.A.P.D. Officer "K" (Ryan Gosling), unearths a long-buried secret that has the potential to plunge whats left of society into chaos. Officers discovery leads him on a quest to find Rick Deckard (Harrison Ford), a former L.A.P.D. Blade Runner, who has been missing for thirty years.',
        type: 'Action | Drama | Mystery | Thriller',
        rating: '★★★★☆'
    },
    'John Wick 4': {
        description: 'At last, Johns violent journey, fuelled by vengeance and grief, ultimately leads him to a fateful confrontation with his former employers, the crime masters that forced him into exile. And as the blood-stained vendetta to destroy those who pull the strings continues, old companions face the brutal consequences of friendship, and all-powerful, well-connected adversaries emerge to bring Wicks head on a platter. But talk is cheap--now guns have the final say.',
        type: 'Action | Crime | Thriller',
        rating: '★★★☆☆'
    },
    'House of the Dragon': {
        description: 'The Targaryen dynasty is at the absolute apex of its power, with more than 10 dragons under their yoke. Most empires crumble from such heights. In the case of the Targaryens, their slow fall begins when King Viserys breaks with a century of tradition by naming his daughter Rhaenyra heir to the Iron Throne. But when Viserys later fathers a son, the court is shocked when Rhaenyra retains her status as his heir, and seeds of division sow friction across the realm.',
        type: 'Action | Adventure | Drama | Romance',
        rating: '★★★★☆'
    },
    'Game of Thrones': {
        description: 'In the mythical continent of Westeros, several powerful families fight for control of the Seven Kingdoms. As conflict erupts in the kingdoms of men, an ancient enemy rises once again to threaten them all. Meanwhile, the last heirs of a recently usurped dynasty plot to take back their homeland from across the Narrow Sea.',
        type: 'Action | Adventure | Drama | Fantasy',
        rating: '★★★★★'
    },
    'LOTR: Return of the King': {
        description: 'The final confrontation between the forces of good and evil fighting for control of the future of Middle-earth. Frodo and Sam reach Mordor in their quest to destroy the One Ring, while Aragorn leads the forces of good against Saurons evil army at the stone city of Minas Tirith.',
        type: 'Action | Adventure | Drama | Fantasy',
        rating: '★★★★☆'
    },
    'Kingsman: The Secret Service': {
        description: 'A super-secret organization recruits an unrefined but promising street kid into the agencys ultra-competitive training program just as a dire global threat emerges from a twisted tech genius. A phenomenal cast, including Colin Firth, Michael Caine and Samuel L. Jackson, leads this action-packed spy-thriller directed by Matthew Vaughn.',
        type: 'Action | Adventure | Comedy | Thriller',
        rating: '★★★☆☆'
    },
    'Pirates of the Caribbean': {
        description: 'Captain Jack Sparrow (Johnny Depp) crosses paths with a woman from his past, Angelica (Penélope Cruz), and hes not sure if its love, or if shes a ruthless con artist whos using him to find the fabled Fountain of Youth. When she forces him aboard the Queen Annes Revenge, the ship of the formidable pirate Blackbeard (Ian McShane), Jack finds himself on an unexpected adventure in which he doesnt know who to fear more: Blackbeard or the woman from his past.',
        type: 'Action | Adventure | Fantasy',
        rating: '★★★☆☆'
    },
    'Harry Potter: Chamber of Secrets': {
        description: 'Forced to spend his summer holidays with his muggle relations, Harry Potter (Daniel Radcliffe) gets a real shock when he gets a surprise visitor: Dobby (Toby Jones) the house-elf, who warns Harry against returning to Hogwarts, for terrible things are going to happen. Harry decides to ignore Dobbys warning and continues with his pre-arranged schedule. But at Hogwarts, strange and terrible things are indeed happening.',
        type: 'Action | Adventure | Fantasy',
        rating: '★★★★☆'
    },
    'X-Men Origins: Wolverine': {
        description: 'Two mutant brothers, Logan and Victor, born 200 years ago, suffer childhood trauma and have only each other to depend upon. Basically, they are fighters and killers, living from war to war throughout U.S. history. In modern times, US. Colonel Stryker recruits them and other mutants as commandos. Logan quits and becomes a logger, falling in love with a local teacher. When Logan refuses to rejoin Strykers crew, the Colonel sends the murderous Victor.',
        type: 'Action | Sci-Fi',
        rating: '★★★☆☆'
    },
    'The Matrix': {
        description: 'Thomas A. Anderson is a man living two lives. By day he is an average computer programmer and by night a hacker known as Neo. Neo has always questioned his reality, but the truth is far beyond his imagination. Neo finds himself targeted by the police when he is contacted by Morpheus, a legendary computer hacker branded a terrorist by the government.',
        type: 'Action | Sci-Fi',
        rating: '★★★★☆'
    },
    'Ghostbusters': {
        description: 'Peter Venkman, Ray Stantz and Egon Spengler work at Columbia University. where they delve into the paranormal and fiddle with many unethical experiments on their students. As they are kicked out of the University, they really understand the paranormal and go into business for themselves. Under the new snazzy business name of "Ghostbusters", and living in the old firehouse building they work out of, they are called to rid New York City of paranormal phenomenon.',
        type: 'Action | Comedy | Fantasy | Sci-Fi',
        rating: '★★★★☆'
    },
    'The Hunger Games': {
        description: 'In a dystopian future, the totalitarian nation of Panem is divided into 12 districts and the Capitol. Each year two young representatives from each district are selected by lottery to participate in The Hunger Games. Part entertainment, part brutal retribution for a past rebellion, the televised games are broadcast throughout Panem. The 24 participants are forced to eliminate their competitors while the citizens of Panem are required to watch.',
        type: 'Action | Adventure | Sci-Fi | Thriller',
        rating: '★★★☆☆'
    },
    'Iron-Man 2': {
        description: 'With the world now aware of his dual life as the armored superhero Iron Man, billionaire inventor Tony Stark faces pressure from the government, the press, and the public to share his technology with the military. Unwilling to let go of his invention, Stark, along with Pepper Potts, and James "Rhodey" Rhodes at his side, must forge new alliances - and confront powerful enemies.',
        type: 'Action | Sci-Fi',
        rating: '★★★☆☆'
    },
    'The Dark Knight': {
        description: 'Set within a year after the events of Batman Begins (2005), Batman, Lieutenant James Gordon, and new District Attorney Harvey Dent successfully begin to round up the criminals that plague Gotham City, until a mysterious and sadistic criminal mastermind known only as "The Joker" appears in Gotham, creating a new wave of chaos. Batmans struggle against The Joker becomes deeply personal, forcing him to "confront everything he believes" and improve his technology to stop him.',
        type: 'Action | Crime | Drama | Thriller',
        rating: '★★★★★'
    }
};

// Reactive data for selected movie
const movie = ref({
  title: 'The Witcher',
  description: movieDetails['The Witcher'].description,
  type: movieDetails['The Witcher'].type,
  rating: movieDetails['The Witcher'].rating,
  image: movieDetails['The Witcher'].image
});

const showPopup = ref(false);
const popupMessage = ref('');

const backgroundImage = ref(backgroundImages['The Witcher']);

// Handle slide click to update movie info and background image
function handleSlideClick(title) {
  const newBackgroundImage = backgroundImages[title];
  const details = movieDetails[title];

  if (newBackgroundImage) {
    backgroundImage.value = newBackgroundImage;
  }

  if (details) {
    movie.value = {
      title: title,
      description: details.description,
      type: details.type,
      rating: details.rating,
    };
  }
}

// Method to play movie
function playMovie() {
  popupMessage.value = 'Play button clicked!';
  showPopup.value = true;
}

function addToWishlist(movie) {
  // Check if the user is logged in
  const loggedIn = localStorage.getItem('loggedIn') === 'true';

  if (!loggedIn) {
    // If the user is not logged in, show an error notification
    showNotification('You need to be logged in to add movies to your wishlist.', true);
    return;
  }

  let wishlist = JSON.parse(localStorage.getItem('wishlist')) || [];

  // Check if the movie is already in the wishlist
  const movieExists = wishlist.find(item => item.title === movie.title);
  
  if (!movieExists) {
    const movieData = {
      title: movie.title,
      description: movie.description,
      type: movie.type,
      rating: movie.rating,
      image: movieImages[movie.title] // Add the image property
    };
    wishlist.push(movieData);
    localStorage.setItem('wishlist', JSON.stringify(wishlist));
    showNotification(`${movie.title} has been added to your wishlist!`);
  } else {
    showNotification(`${movie.title} is already in your wishlist.`, true);
  }
}

function showNotification(message, isError = false) {
  popupMessage.value = message;  // Update the notification message
  showPopup.value = true;        // Show the popup

  // Automatically hide the popup after 2.5 seconds
  setTimeout(() => {
    showPopup.value = false;     // Hide the popup
  }, 2500);
}



// Initialize Swiper after component mounts
onMounted(() => {
  new Swiper('.mySwiper', {
    slidesPerView: 8,
    spaceBetween: 15,
    slidesPerGroup: 4,
    loop: true,  // Ensures continuous sliding
    speed: 600,
    effect: 'slide',
    autoplay: {
      delay: 3000,  // Delay in ms between slides
      disableOnInteraction: false,  // Continue autoplay even if user interacts with Swiper
    },
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
  });


  // Initialize the default movie details and background
  handleSlideClick('The Witcher');
});



</script>

<template>
  <div>
    <!-- Background image container -->
    <div class="background-container">
      <!-- This is the div that will act as the background -->
      <img :src="backgroundImage" class="background-image" alt="Background Image" />
    </div>

    <!-- Movie Information Section -->
    <section class="movie-info-container">
      <div class="movie-info">
        <h1 id="movie-title">{{ movie.title }}</h1>
        <p id="movie-description">{{ movie.description }}</p>
        <p id="movie-type">{{ movie.type }}</p>
        <p id="movie-rating">Rating: {{ movie.rating }}</p>
        <div class="button-container">
          <button id="play-button" @click="playMovie">Play</button>
          <button class="btn wishlist-btn" @click="addToWishlist(movie)">Add to Wishlist</button>
        </div>
      </div>
    </section>

    <!-- Swiper Section -->
    <section class="sliding-container">
      <div class="swiper mySwiper">
        <div class="swiper-wrapper">
          <div
            class="swiper-slide"
            v-for="(item, index) in movies"
            :key="index"
            @click="handleSlideClick(item.title)"
          >
            <img :src="item.image" :alt="item.title" />
            <p>{{ item.title }}</p>
          </div>
        </div>
        <!-- Add Pagination -->
        <div class="swiper-pagination"></div>
      </div>
    </section>

    <!-- Popup Message -->
    <div 
      id="popup-message" 
      :class="['popup-message', { show: showPopup, error: isErrorPopup, success: !isErrorPopup }]"
      v-if="showPopup"
    >
      {{ popupMessage }}
    </div>
  </div>
</template>

<style scoped>

.background-container {
  position: absolute;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  z-index: -1; /* Behind other elements */
  overflow: hidden;
}

.background-image {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

body {
  margin: 0;
  padding: 0;
  height: 100vh; /* Full height of viewport */
  width: 100vw;  /* Full width of viewport */
  overflow: hidden; /* Prevent scrollbars */
  background-size: cover; /* Cover entire viewport */
  background-position: center; /* Center the image */
  background-repeat: no-repeat; /* No repeating of the image */
}

.sliding-container {
    width: 100%;
    padding: 5px 0;
    position: absolute;
    bottom: 0;
    left: 0;
}

.swiper {
    width: 80%; /* Adjust the width of the swiper container */
    padding-top: 5px;
    padding-bottom: 10px;
    margin: 0 auto;
}

.swiper-slide {
    width: calc(12.5% - 10px); /* Adjust the width of each slide considering the gap */
    border-radius: 8px;
    text-align: center;
    color: white;
    overflow: hidden;
    transition: transform 0.3s ease-in-out;
    margin-right: 10px; /* Add a margin to create a gap between slides */
}

/* Set a fixed size for images within swiper slides */
.swiper-slide img {
    width: 100%; /* Full width of the slide */
    height: 250px; /* Fixed height */
    object-fit: cover; /* Maintain aspect ratio and cover the area */
}

.swiper-slide p {
    padding: 3px;
    font-size: 10px; /* Smaller font size */
    font-weight: bold;
    margin: 0;
}

.swiper-slide:last-child {
    margin-right: 0; /* Remove margin on the last slide */
}

.swiper-slide:hover {
    transform: scale(1.05);
}

.swiper-button-next, .swiper-button-prev {
    color: red;
    transform: scale(0.8); /* Reduce size of the navigation buttons */
    position: absolute;
    top: 50%; /* Position in the middle vertically */
    transform: translateY(-50%) scale(0.8); /* Center the buttons vertically and scale them down */
    z-index: 10; /* Ensure buttons are above the swiper slides */
}

.swiper-button-next {
    margin-right: 100px; /* Move the right button 100px closer to the container */
}
  
  .swiper-button-prev {
    margin-left: 100px; /* Move the left button 100px closer to the container */
  }

  .swiper-button-next::after, .swiper-button-prev::after {
    color: white; /* Change the color of the next arrow to a pinkish hue */
  }
  
  
  

.movie-info-container {
    position: absolute; /* Position fixed relative to the viewport */
    top: 150px; /* Adjust vertical positioning if needed */
    left: 20.8%; /* Center horizontally */
    transform: translateX(-50%); /* Center the element based on its width */
    width: 400px; /* Fixed width */
    padding: 20px;
    background: rgba(0, 0, 0, 0.8); /* Slightly darker background for better contrast */
    color: #fff;
    border-radius: 10px; /* Rounded corners */
    border: 3px solid red; /* Accent border */
    box-shadow: 0 4px 10px rgba(0, 0, 0, 0.5); /* Shadow for depth */
    z-index: 10; /* Ensure it's above other content */
}

/* Movie Info */
.movie-info {
    display: flex;
    flex-direction: column; /* Stack elements vertically */
    align-items: center;
    gap: 15px;
}

.movie-poster {
    flex: 0 0 100%; /* Full width */
    max-width: 100px; /* Fixed size */
    border-radius: 8px;
    overflow: hidden;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.5); /* Shadow for emphasis */
}

.movie-poster img {
    width: 100%;
    height: auto;
    display: block;
}

.movie-details {
    text-align: center;
}

#movie-title {
    font-size: 22px;
    font-weight: bold;
    margin: 0 0 10px 0;
    text-shadow: 2px 2px 6px rgba(0, 0, 0, 0.8); /* Shadow for text */
}

#movie-description {
    font-size: 14px;
    line-height: 1.4;
    margin: 0 0 15px 0;
}

#movie-type {
    font-size: 14px;
    margin: 0 0 10px 0;
}

#movie-rating {
    font-size: 14px;
    margin: 0 0 15px 0;
    display: flex;
    align-items: center;
}

#rating-stars {
    font-family: 'Font Awesome 5 Free'; /* Assuming FontAwesome for star icons */
    font-weight: 900;
    margin-left: 5px;
    color: #ffeb3b; /* Gold color for stars */
}

#play-button {
    background: red; /* Gradient background */
    color: #fff;
    border: none;
    padding: 12px 24px;
    font-size: 14px;
    cursor: pointer;
    border-radius: 8px;
    transition: background 0.3s, transform 0.3s, box-shadow 0.3s;
    box-shadow: 0 5px 15px rgba(0, 0, 0, 0.4); /* Shadow for button */
}

#play-button:hover {
    background: red; /* Reversed gradient on hover */
    transform: scale(1.05); /* Slightly larger button on hover */
    box-shadow: 0 8px 20px rgba(0, 0, 0, 0.5); /* Darker shadow on hover */
}

/* Button Container */
.button-container {
    display: flex;
    gap: 10px; /* Space between buttons */
}

.btn {
    background: red;
    color: #fff;
    border: 1px solid #444;
    padding: 10px 20px;
    font-size: 14px;
    cursor: pointer;
    border-radius: 8px;
    transition: background 0.3s, transform 0.3s, box-shadow 0.3s;
}

.btn.wishlist-btn {
    background: red;
}

.btn:hover {
    background: red;
    transform: scale(1.05); /* Slightly larger button on hover */
}

.btn.wishlist-btn:hover {
    background: red;
}


.popup-message {
  position: fixed;
  top: 65px; /* Position it from the top */
  left: 50%; /* Center horizontally */
  transform: translateX(-50%); /* Adjust position to be fully centered */
  padding: 15px 20px;
  background-color: #333; /* Default dark background */
  color: #fff; /* White text */
  border-radius: 8px; /* Rounded corners */
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2); /* Subtle shadow */
  font-size: 16px; /* Readable text size */
  opacity: 0; /* Hidden by default */
  transition: all 0.5s ease-in-out; /* Smooth show/hide */
  z-index: 1000; /* Ensure it appears above other elements */
  white-space: nowrap; /* Prevent wrapping for short messages */
  max-width: 90%; /* Prevent it from stretching too wide */
  overflow: hidden; /* Hide overflow if the message is too long */
}

.popup-message.show {
  opacity: 1;
  transform: translateX(-50%) translateY(0); /* Center the popup in place */
}

.popup-message.success {
  background-color: red
}

</style>