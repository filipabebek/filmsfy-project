<script setup>
import { ref, onMounted } from 'vue';
import Swiper from 'swiper';
import 'swiper/swiper-bundle.css';

import doctorStrangeImage from '@/assets/img/doctorstrange.jpg';
import prometheusImage from '@/assets/img/prometheusgenre.jpg';
import morbiusImage from '@/assets/img/morbius.jpg';
import northmanImage from '@/assets/img/northman.jpg';
import unchartedImage from '@/assets/img/uncharted.jpg';
import pussInBootsImage from '@/assets/img/pussinboots.jpg';
import preyImage from '@/assets/img/prey.jpg';
import blackAdamImage from '@/assets/img/blackadam.jpg';
import fantasticBeastsImage from '@/assets/img/fantasticbeasts.jpg';
import theLostCityImage from '@/assets/img/thelostcity.jpg';
import jumanji3Image from '@/assets/img/jumanji3.jpg';
import beastImage from '@/assets/img/beast.jpg';
import trollImage from '@/assets/img/troll.jpg';
import interstellarImage from '@/assets/img/interstellar.jpg';
import avengersEndgameImage from '@/assets/img/avengersendgame.jpg';
import godzillaImage from '@/assets/img/godzilla.jpg';

//pozadine
import doctorStrangeBgImage from '@/assets/img/doctorstrangebg.jpg';
import prometheusBgImage from '@/assets/img/prometheusbg.jpg';
import morbiusBgImage from '@/assets/img/morbiusbg.jpg';
import northmanBgImage from '@/assets/img/northmanbg.jpg';
import unchartedBgImage from '@/assets/img/unchartedbg.jpg';
import pussInBootsBgImage from '@/assets/img/pussinbootsbg.jpg';
import preyBgImage from '@/assets/img/preybg.jpg';
import blackAdamBgImage from '@/assets/img/blackadambg.jpg';
import fantasticBeastsBgImage from '@/assets/img/fantasticbeastsbg.jpg';
import theLostCityBgImage from '@/assets/img/thelostcitybg.jpg';
import jumanji3BgImage from '@/assets/img/jumanji3bg.jpg';
import beastBgImage from '@/assets/img/beastbg.jpg';
import trollBgImage from '@/assets/img/trollbg.jpg';
import interstellarBgImage from '@/assets/img/interstellarbg.jpg';
import avengersEndgameBgImage from '@/assets/img/avengersendgamebg.jpg';
import godzillaBgImage from '@/assets/img/godzillabg.jpg';


// Reactive data for movies
const movies = ref([
  { title: 'Doctor Strange', image: doctorStrangeImage, genre: 'Fantasy' },
  { title: 'Prometheus', image: prometheusImage, genre: 'Sci-Fi' },
  { title: 'Morbius', image: morbiusImage, genre: 'Horror' },
  { title: 'The Northman', image: northmanImage, genre: 'Drama' },
  { title: 'Uncharted', image: unchartedImage, genre: 'Action' },
  { title: 'Puss in Boots', image: pussInBootsImage, genre: 'Animation' },
  { title: 'Prey', image: preyImage, genre: 'Horror' },
  { title: 'Black Adam', image: blackAdamImage, genre: 'Fantasy' },
  { title: 'Fantastic Beasts', image: fantasticBeastsImage, genre: 'Fantasy' },
  { title: 'The Lost City', image: theLostCityImage, genre: 'Comedy' },
  { title: 'Jumanji 3', image: jumanji3Image, genre: 'Fantasy' },
  { title: 'Beast', image: beastImage, genre: 'Drama' },
  { title: 'Troll', image: trollImage, genre: 'Fantasy' },
  { title: 'Interstellar', image: interstellarImage, genre: 'Sci-Fi' },
  { title: 'Avengers: Endgame', image: avengersEndgameImage, genre: 'Action' },
  { title: 'Godzilla vs Kong', image: godzillaImage, genre: 'Sci-Fi' }
]);


const movieImages={
  'Doctor Strange': doctorStrangeImage,
  'Prometheus': prometheusImage,
  'Morbius': morbiusImage,
  'The Northman': northmanImage,
  'Uncharted': unchartedImage,
  'Puss in Boots': pussInBootsImage,
  'Prey': preyImage,
  'Black Adam': blackAdamImage,
  'Fantastic Beasts': fantasticBeastsImage,
  'The Lost City': theLostCityImage,
  'Jumanji 3': jumanji3Image,
  'Beast': beastImage,
  'Troll': trollImage,
  'Interstellar': interstellarImage,
  'Avengers: Endgame': avengersEndgameImage,
  'Godzilla vs Kong': godzillaImage,
};

const backgroundImages = {
  'Doctor Strange': doctorStrangeBgImage,
  'Prometheus': prometheusBgImage,
  'Morbius': morbiusBgImage,
  'The Northman': northmanBgImage,
  'Uncharted': unchartedBgImage,
  'Puss in Boots': pussInBootsBgImage,
  'Prey': preyBgImage,
  'Black Adam': blackAdamBgImage,
  'Fantastic Beasts': fantasticBeastsBgImage,
  'The Lost City': theLostCityBgImage,
  'Jumanji 3': jumanji3BgImage,
  'Beast': beastBgImage,
  'Troll': trollBgImage,
  'Interstellar': interstellarBgImage,
  'Avengers: Endgame': avengersEndgameBgImage,
  'Godzilla vs Kong': godzillaBgImage,
};

const movieDetails = {
    'Doctor Strange': {
        description: 'Marvels "Doctor Strange" follows the story of the talented neurosurgeon Doctor Stephen Strange who, after a tragic car accident, must put ego aside and learn the secrets of a hidden world of mysticism and alternate dimensions. Based in New York Citys Greenwich Village, Doctor Strange must act as an intermediary between the real world and what lies beyond, utilising a vast array of metaphysical abilities and artifacts to protect the Marvel Cinematic Universe.',
        type: 'Adventure | Action | Fantasy | Sci-Fi',
        rating: '★★★★☆'
    },
    'Prometheus': {
        description: 'Following a faint trail of clues, Doctor Elizabeth Shaw, an accomplished archaeologist, and her partner, Charlie Holloway, embark on an ambitious deep-space scientific expedition in 2093. Their task is to explore the desolate exomoon LV-223 aboard the USCSS Prometheus and shed light on the existence of a superior extraterrestrial species known as the Engineers.',
        type: 'Adventure | Mystery | Sci-Fi',
        rating: '★★★☆☆'
    },
    'Morbius': {
        description: 'Dangerously ill with a rare blood disorder, and determined to save others suffering his same fate, Dr. Morbius attempts a desperate gamble. What at first appears to be a radical success soon reveals itself to be a remedy potentially worse than the disease.',
        type: 'Adventure | Action | Horror | Sci-Fi',
        rating: '★★☆☆☆'
    },
    'The Northman': {
        description: 'The Viking Age. With a mind aflame with hate and revenge, Prince Amleth, the wronged son of King Aurvandill War-Raven, heads to cold, windswept Iceland to retrieve what was stolen from him: a father, a mother, and a kingdom. And like a war dog picking up the enemy\'s scent, brutal Amleth embarks on a murderous quest to find the hateful adversary, whose life is forever woven together with his by the threads of fate.',
        type: 'Adventure | Action | Drama | Fantasy',
        rating: '★★★☆☆'
    },
    'Puss in Boots': {
        description: 'Sadly, Puss in Boots, the undaunted Spanish lover and hero, is now down to the last of his nine lives, and as if that weren\'t enough, the unstoppable bounty hunter known as The Big Bad Wolf is after him. To restore all of his precious lives and escape an inglorious fate, Puss must pluck up his courage to embark on a dangerous quest into the Dark Forest to find the legendary Wishing Star.',
        type: 'Adventure | Animation | Action | Comedy',
        rating: '★★★★☆'
    },
    'Prey': {
        description: 'Set in the Comanche Nation 300 years ago, this is the story of Naru, a fierce and highly skilled warrior, raised in the shadow of legendary hunters who roam the Great Plains. When danger threatens her camp, she sets out to protect her people. The prey she stalks: a highly evolved alien predator with a technically advanced arsenal.',
        type: 'Adventure | Action | Horror | Sci-Fi',
        rating: '★★★☆☆'
    },
    'Black Adam': {
        description: 'Reawakening after 5000 years, Black Adam becomes the world\'s ruthless protector: an anti-villain to take on the likes of Superman and Wonder Woman. Now in the 21st Century, Black Adam must face off against the Justice Society of America and its heroes: Doctor Fate, Hawkman, Atom Smasher, and Cyclone. The fate of the world hangs in the balance.',
        type: 'Adventure | Action | Fantasy | Sci-Fi',
        rating: '★★☆☆☆'
    },
    'Fantastic Beasts': {
        description: 'Professor Albus Dumbledore knows the powerful Dark wizard Gellert Grindelwald is moving to seize control of the wizarding world. Unable to stop him alone, he entrusts Magizoologist Newt Scamander to lead an intrepid team of wizards, witches, and one brave Muggle baker on a dangerous mission, where they encounter old and new beasts and clash with Grindelwald\'s growing legion of followers.',
        type: 'Adventure | Family | Fantasy',
        rating: '★★★☆☆'
    },
    'The Lost City': {
        description: 'Reclusive author Loretta Sage writes about exotic places in her popular adventure novels that feature a handsome cover model named Alan. While on tour promoting her new book with Alan, Loretta gets kidnapped by an eccentric billionaire who hopes she can lead him to an ancient city\'s lost treasure from her latest story. Determined to prove he can be a hero in real life and not just on the pages of her books, Alan sets off to rescue her.',
        type: 'Adventure | Action | Comedy | Romance',
        rating: '★★☆☆☆'
    },
    'Jumanji 3': {
        description: 'The gang is back but the game has changed. As they return to Jumanji to rescue one of their own, they discover that nothing is as they expect. The players will have to brave parts unknown and unexplored, from the arid deserts to the snowy mountains, in order to escape the world\'s most dangerous game.',
        type: 'Adventure | Action | Comedy | Fantasy',
        rating: '★★★☆☆'
    },
    'Beast': {
        description: 'A father and his two teenage daughters find themselves hunted by a massive rogue lion intent on proving that the Savanna has but one apex predator.',
        type: 'Adventure | Action | Drama',
        rating: '★★☆☆☆'
    },
    'Troll': {
        description: 'Deep inside the mountain of Dovre, Norway, something gigantic awakens after being trapped for a thousand years. Destroying everything in its path, the creature is fast approaching the capital of Norway, with city-dwellers struggling to stop something they thought existed only in Norwegian folklore.',
        type: 'Adventure | Action | Drama | Fantasy',
        rating: '★★☆☆☆'
    },
    'Interstellar': {
        description: 'In the near future around the American Midwest, Cooper, an ex-science engineer and pilot, is tied to his farming land with his daughter Murph and son Tom. As devastating sandstorms ravage Earth\'s crops, the people of Earth realize their life here is coming to an end as food begins to run out. Eventually stumbling upon a N.A.S.A. base 6 hours from Cooper\'s home, he is asked to go on a daring mission with a few other scientists into a wormhole.',
        type: 'Adventure | Drama | Sci-Fi',
        rating: '★★★★☆'
    },
    'Avengers: Endgame': {
        description: 'After the devastating events of Avengers: Infinity War (2018), the universe is in ruins due to the efforts of the Mad Titan, Thanos. With the help of remaining allies, the Avengers must assemble once more in order to undo Thanos\' actions and restore order to the universe, no matter what consequences may be in store, and no matter who they face...',
        type: 'Adventure | Action | Drama | Sci-Fi',
        rating: '★★★★☆'
    },
    'Godzilla vs Kong': {
        description: 'Legends collide as Godzilla and Kong, the two most powerful forces of nature, clash on the big screen in a spectacular battle for the ages. As a squadron embarks on a perilous mission into fantastic uncharted terrain, unearthing clues to the Titans\' very origins and mankind\'s survival, a conspiracy threatens to wipe the creatures, both good and bad, from the face of the earth forever.',
        type: 'Adventure | Sci-Fi | Thriller',
        rating: '★★★☆☆'
    },
    'Uncharted': {
        description: 'Street-smart Nathan Drake (Tom Holland) is recruited by seasoned treasure hunter Victor "Sully" Sullivan (Mark Wahlberg) to recover a fortune amassed by Ferdinand Magellan and lost 500 years ago by the House of Moncada. What starts as a heist job for the duo becomes a globe-trotting, white-knuckle race to reach the prize before the ruthless Santiago Moncada (Antonio Banderas), who believes he and his family are the rightful heirs.',
        type: 'Adventure | Action',
        rating: '★★★☆☆'
    },
};

// Reactive data for selected movie
const movie = ref({
  title: 'Doctor Strange',
  description: movieDetails['Doctor Strange'].description,
  type: movieDetails['Doctor Strange'].type,
  rating: movieDetails['Doctor Strange'].rating
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
    loop: true,
    speed: 600,
    effect: 'slide',
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
  });

  

  // Initialize the default movie details and background
  handleSlideClick('Doctor Strange');
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