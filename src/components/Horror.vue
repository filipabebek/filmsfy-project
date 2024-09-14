<script setup>
import { ref, onMounted } from 'vue';
import Swiper from 'swiper';
import 'swiper/swiper-bundle.css';

import tarotImage from '@/assets/img/tarot.jpg';
import noExitImage from '@/assets/img/noexit.jpg';
import nightSwimImage from '@/assets/img/nightswim.jpg';
import aQuietPlaceImage from '@/assets/img/quietplace.jpg';
import thanksgivingImage from '@/assets/img/thanksgiving.jpg';
import itImage from '@/assets/img/it.jpg';
import hereditaryImage from '@/assets/img/hereditary.jpg';
import dontBreatheImage from '@/assets/img/dontbreathe.jpg';
import talkToMeImage from '@/assets/img/talktome.jpg';
import conjuring2Image from '@/assets/img/conjuring2.jpg';
import unfriendedImage from '@/assets/img/unfriended.jpg';
import inTheTallGrassImage from '@/assets/img/intallgrass.jpg';
import slenderManImage from '@/assets/img/slenderman.jpg';
import evilDeadRiseImage from '@/assets/img/evildeadrise.jpg';
import sawImage from '@/assets/img/saw.jpg';
import halloweenImage from '@/assets/img/halloween.jpg';

import tarotBgImage from '@/assets/img/tarotbg.jpg';
import noExitBgImage from '@/assets/img/noexitbg.jpg';
import nightSwimBgImage from '@/assets/img/nightswimbg.png';
import aQuietPlaceBgImage from '@/assets/img/quietplacebg.jpg';
import thanksgivingBgImage from '@/assets/img/thanksgivingbg.jpg';
import itBgImage from '@/assets/img/itbg.jpg';
import hereditaryBgImage from '@/assets/img/hereditarybg.jpg';
import dontBreatheBgImage from '@/assets/img/dontbreathebg.jpg';
import talkToMeBgImage from '@/assets/img/talktomebg.jpg';
import conjuring2BgImage from '@/assets/img/conjuring2bg.jpg';
import unfriendedBgImage from '@/assets/img/unfriendedbg.jpg';
import inTheTallGrassBgImage from '@/assets/img/intallgrassbg.jpg';
import slenderManBgImage from '@/assets/img/slendermanbg.jpg';
import evilDeadRiseBgImage from '@/assets/img/evildeadrisebg.jpg';
import sawBgImage from '@/assets/img/sawbg.jpg';
import halloweenBgImage from '@/assets/img/halloweenbg.jpg';


const movies = ref([
  { title: 'Tarot', image: tarotImage, genre: 'Horror' },
  { title: 'No Exit', image: noExitImage, genre: 'Horror | Drama | Mystery' },
  { title: 'Night Swim', image: nightSwimImage, genre: 'Horror | Thriller' },
  { title: 'A Quiet Place', image: aQuietPlaceImage, genre: 'Horror | Drama | Sci-Fi' },
  { title: 'Thanksgiving', image: thanksgivingImage, genre: 'Horror | Mystery | Thriller' },
  { title: 'It', image: itImage, genre: 'Horror | Fantasy' },
  { title: 'Hereditary', image: hereditaryImage, genre: 'Horror | Drama | Mystery | Thriller' },
  { title: 'Dont Breathe', image: dontBreatheImage, genre: 'Horror | Crime | Thriller' },
  { title: 'Talk to me', image: talkToMeImage, genre: 'Horror | Thriller' },
  { title: 'The Conjuring 2', image: conjuring2Image, genre: 'Horror | Mystery | Thriller' },
  { title: 'Unfriended', image: unfriendedImage, genre: 'Horror | Mystery | Thriller' },
  { title: 'In the Tall Grass', image: inTheTallGrassImage, genre: 'Horror | Mystery | Sci-Fi' },
  { title: 'Slender Man', image: slenderManImage, genre: 'Horror | Mystery | Thriller' },
  { title: 'Evil Dead Rise', image: evilDeadRiseImage, genre: 'Horror | Mystery | Thriller' },
  { title: 'Saw', image: sawImage, genre: 'Horror | Mystery | Thriller' },
  { title: 'Halloween', image: halloweenImage, genre: 'Horror' }
]);

const movieImages={
  'Tarot': tarotImage,
  'No Exit': noExitImage,
  'Night Swim': nightSwimImage,
  'A Quiet Place': aQuietPlaceImage,
  'Thanksgiving': thanksgivingImage,
  'It': itImage,
  'Hereditary': hereditaryImage,
  'Dont Breathe': dontBreatheImage,
  'Talk to me': talkToMeImage,
  'The Conjuring 2': conjuring2Image,
  'Unfriended': unfriendedImage,
  'In the Tall Grass': inTheTallGrassImage,
  'Slender Man': slenderManImage,
  'Evil Dead Rise': evilDeadRiseImage,
  'Saw': sawImage,
  'Halloween': halloweenImage,
};


const backgroundImages = {
  'Tarot': tarotBgImage,
  'No Exit': noExitBgImage,
  'Night Swim': nightSwimBgImage,
  'A Quiet Place': aQuietPlaceBgImage,
  'Thanksgiving': thanksgivingBgImage,
  'It': itBgImage,
  'Hereditary': hereditaryBgImage,
  'Dont Breathe': dontBreatheBgImage,
  'Talk to me': talkToMeBgImage,
  'The Conjuring 2': conjuring2BgImage,
  'Unfriended': unfriendedBgImage,
  'In the Tall Grass': inTheTallGrassBgImage,
  'Slender Man': slenderManBgImage,
  'Evil Dead Rise': evilDeadRiseBgImage,
  'Saw': sawBgImage,
  'Halloween': halloweenBgImage,
};

const movieDetails = {
    'Tarot': {
        description: 'When a group of friends recklessly violates the sacred rule of Tarot readings - never use someone elses deck - they unknowingly unleash an unspeakable evil trapped within the cursed cards. One by one, they come face to face with fate and end up in a race against death to escape the future foretold in their readings.',
        type: 'Horror',
        rating: '★☆☆☆☆'
    },
    'No Exit': {
        description: 'A young woman breaks out of rehab and hot wires a car so she can visit her sick mother, gets stuck with a group of people at a mountain rest stop during a blizzard. Things take a turn for the worse when the young woman discovers a kidnapped child in a car belonging to one of the people inside, putting the group in a terrifying life-or-death situation as they struggle to escape while trying to discover who among them is the kidnapper.',
        type: 'Horror | Drama | Mystery',
        rating: '★★★☆☆'
    },
    'Night Swim': {
        description: 'Forced into early retirement by a degenerative illness, former major league baseball player Ray Waller moves into a new home with his wife and their two children. The new home comes complete with a backyard swimming pool, but a deep secret surfaces and unleashes a malevolent force that will drag the family into the inescapable depths of terror.',
        type: 'Horror | Thriller',
        rating: '★☆☆☆☆'
    },
    'A Quiet Place': {
        description: 'In a devastated Earth overrun by myriads of invincible extraterrestrial predators, the Abbotts struggle to survive in the desolate death trap of New York City. In this muffled dystopia, utter silence may offer a chance to stay alive, as even the slightest noise can attract the deadly invaders. However, despite twelve months of relentless terror, the resilient Abbotts remain unbroken, mastering the art of survival. But now, more than ever, they must live by one rule: dont make a sound or suffer the consequences.',
        type: 'Horror | Drama | Sci-Fi',
        rating: '★★★☆☆'
    },
    'Thanksgiving': {
        description: 'After a Black Friday riot ends in tragedy, a mysterious Thanksgiving-inspired killer terrorizes Plymouth, Massachusetts - the birthplace of the infamous holiday.',
        type: 'Horror | Mystery | Thriller',
        rating: '★★★☆☆'
    },
    'It': {
        description: 'In the Town of Derry, the local kids are disappearing one by one. In a place known as "The Barrens", a group of seven kids are united by their horrifying and strange encounters with an evil clown and their determination to kill It.',
        type: 'Horror | Fantasy',
        rating: '★★★★☆'
    },
    'Hereditary': {
        description: 'When her mentally ill mother passes away, Annie (Toni Collette), her husband (Gabriel Byrne), son (Alex Wolff), and daughter (Milly Shapiro) all mourn her loss. The family turn to different means to handle their grief, including Annie and her daughter both flirting with the supernatural. They each begin to have disturbing, otherworldly experiences linked to the sinister secrets and emotional trauma that have been passed through the generations of their family.',
        type: 'Horror | Drama | Mystery | Thriller',
        rating: '★★★★☆'
    },
    'Dont Breathe': {
        description: 'Rocky, a young woman wanting to start a better life for her and her sister, agrees to take part in the robbery of a house owned by a wealthy blind man with her boyfriend Money and their friend Alex. But when the blind man turns out to be a more ruthless adversary than he seems, the group must find a way to escape his home before they become his latest victims.',
        type: 'Horror | Crime | Thriller',
        rating: '★★★☆☆'
    },
    'Talk to me': {
        description: 'When a group of friends discover how to conjure spirits using an embalmed hand, they become hooked on the new thrill, until one of them goes too far and opens the door to the spirit world forcing them to choose who to trust: the dead or the living.',
        type: 'Horror | Thriller',
        rating: '★★★☆☆'
    },
    'The Conjuring 2': {
        description: 'In 1977 Enfield, the paranormal investigators, Lorraine and Ed Warren, travel to London to help the Hodgsons. After sensing her daughter to be possessed, and her four children haunted by supernatural happenings, Peggy Hodgson asks for help when a malicious entity takes possession of the second eldest child, Janet. However, theres something more threatening, not only for the inhabitants but also for the investigator-couple; something that they couldnt even imagine.',
        type: 'Horror | Mystery | Thriller',
        rating: '★★★★☆'
    },
    'Unfriended': {
        description: 'While video-chatting one night, six high-school friends receive a Skype message from a classmate who killed herself exactly one year ago. At first they think its a prank, but when the girl starts revealing the friends darkest secrets, they realize they are dealing with something out of this world, something that wants them dead.',
        type: 'Horror | Mystery | Thriller',
        rating: '★★☆☆☆'
    },
    'In the Tall Grass': {
        description: 'When siblings Becky and Cal hear the cries of a young boy lost within a field of tall grass, they venture in to rescue him, only to become ensnared themselves by a sinister force that quickly disorients and separates them. Cut off from the world and unable to escape the fields tightening grip, they soon discover that the only thing worse than getting lost is being found.',
        type: 'Horror | Mystery | Sci-Fi',
        rating: '★★★☆☆'
    },
    'Halloween': {
        description: 'The residents of Haddonfield dont know it yet... but death is coming to their small sleepy town. Sixteen years ago, a ten year old boy called Michael Myers brutally kills his step father, his elder sister and her boyfriend. Sixteen years later, he escapes from the mental institution and makes his way back to his hometown intent on a murderous rampage pursued by Dr Sam Loomis who is Michaels doctor and the only one who knows Michaels true evil.',
        type: 'Horror',
        rating: '★★★★☆'
    },
    'Slender Man': {
        description: 'When their friend mysteriously disappears, a group of teenage girls explore whether the culprit could be the creepy internet urban legend character Slenderman by summoning him with a ritual. They begin experiencing supernatural phenomena that make them believe the story is real and that they are now being haunted by the Slenderman. Directed by Sylvain White. Based on the character created by Eric "Victor Surge" Knudsen.',
        type: 'Horror | Mystery | Thriller',
        rating: '★☆☆☆☆'
    },
    'Evil Dead Rise': {
        description: 'Moving the action out of the woods and into the city, "Evil Dead Rise" tells a twisted tale of two estranged sisters, played by Sutherland and Sullivan, whose reunion is cut short by the rise of flesh possessing demons, thrusting them into a primal battle for survival as they face the most nightmarish version of family imaginable.',
        type: 'Horror',
        rating: '★★★★☆'
    },
    'Saw': {
        description: 'Waking up in a bathroom, two men, Adam and Dr. Lawrence Gordon, discover they have been captured by the infamous man known as Jigsaw. The men must escape before time runs out, otherwise, they will face the deadly consequences.',
        type: 'Horror | Mystery | Thriller',
        rating: '★★★★☆'
    },
};

const movie = ref({
  title: 'Tarot',
  description: movieDetails['Tarot'].description,
  type: movieDetails['Tarot'].type,
  rating: movieDetails['Tarot'].rating
});

const showPopup = ref(false);
const popupMessage = ref('');
const backgroundImage = ref(backgroundImages['Tarot']);

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


function addToWishlist(movie) {
  const loggedIn = localStorage.getItem('loggedIn') === 'true';
  const userEmail = localStorage.getItem('userEmail');

  if (!loggedIn || !userEmail) {
    showNotification('You need to be logged in to add movies to your wishlist.', true);
    return;
  }

  let wishlist = JSON.parse(localStorage.getItem(`${userEmail}_wishlist`)) || [];

  const movieExists = wishlist.find(item => item.title === movie.title);

  if (!movieExists) {
    const movieData = {
      title: movie.title,
      description: movie.description,
      type: movie.type,
      rating: movie.rating,
      image: movieImages[movie.title] 
    };

    wishlist.push(movieData);

    localStorage.setItem(`${userEmail}_wishlist`, JSON.stringify(wishlist));

    showNotification(`${movie.title} has been added to your wishlist!`);
  } else {
    showNotification(`${movie.title} is already in your wishlist.`, true);
  }
}


function showNotification(message, isError = false) {
  popupMessage.value = message;  
  showPopup.value = true;        

  setTimeout(() => {
    showPopup.value = false;     
  }, 2500);
}


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



  handleSlideClick('Tarot');
});
</script>

<template>
  <div>
    <div class="background-container">
      <img :src="backgroundImage" class="background-image" alt="Background Image" />
    </div>

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
        <div class="swiper-pagination"></div>
      </div>
    </section>

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
  z-index: -1; 
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
  height: 100vh; 
  width: 100vw;  
  overflow: hidden; 
  background-size: cover; 
  background-position: center; 
  background-repeat: no-repeat; 
}

.sliding-container {
    width: 100%;
    padding: 5px 0;
    position: absolute;
    bottom: 0;
    left: 0;
}

.swiper {
    width: 80%; 
    padding-top: 5px;
    padding-bottom: 10px;
    margin: 0 auto;
}

.swiper-slide {
    width: calc(12.5% - 10px); 
    border-radius: 8px;
    text-align: center;
    color: white;
    overflow: hidden;
    transition: transform 0.3s ease-in-out;
    margin-right: 10px; 
}

.swiper-slide img {
    width: 100%; 
    height: 250px; 
    object-fit: cover; 
}

.swiper-slide p {
    padding: 3px;
    font-size: 10px; 
    font-weight: bold;
    margin: 0;
}

.swiper-slide:last-child {
    margin-right: 0; 
}

.swiper-slide:hover {
    transform: scale(1.05);
}

.swiper-button-next, .swiper-button-prev {
    color: red;
    transform: scale(0.8); 
    position: absolute;
    top: 50%; 
    transform: translateY(-50%) scale(0.8); 
    z-index: 10; 
}

.swiper-button-next {
    margin-right: 100px; 
}
  
  .swiper-button-prev {
    margin-left: 100px; 
  }

  .swiper-button-next::after, .swiper-button-prev::after {
    color: white; 
  }
  
  
.movie-info-container {
    position: absolute; 
    top: 150px; 
    left: 20.8%;
    transform: translateX(-50%); 
    width: 400px; 
    padding: 20px;
    background: rgba(0, 0, 0, 0.8); 
    color: #fff;
    border-radius: 10px; 
    border: 3px solid red; 
    box-shadow: 0 4px 10px rgba(0, 0, 0, 0.5); 
    z-index: 10; 
}

/* Movie Info */
.movie-info {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 15px;
}

.movie-poster {
    flex: 0 0 100%; 
    max-width: 100px; 
    border-radius: 8px;
    overflow: hidden;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.5);
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
    text-shadow: 2px 2px 6px rgba(0, 0, 0, 0.8); 
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
    font-family: 'Font Awesome 5 Free'; 
    font-weight: 900;
    margin-left: 5px;
    color: #ffeb3b; 
}

#play-button {
    background: red; 
    color: #fff;
    border: none;
    padding: 12px 24px;
    font-size: 14px;
    cursor: pointer;
    border-radius: 8px;
    transition: background 0.3s, transform 0.3s, box-shadow 0.3s;
    box-shadow: 0 5px 15px rgba(0, 0, 0, 0.4); 
}

#play-button:hover {
    background: red; 
    transform: scale(1.05); 
    box-shadow: 0 8px 20px rgba(0, 0, 0, 0.5); 
}

.button-container {
    display: flex;
    gap: 10px; 
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
    transform: scale(1.05); 
}

.btn.wishlist-btn:hover {
    background: red;
}

.popup-message {
  position: fixed;
  top: 65px; 
  left: 50%; 
  transform: translateX(-50%); 
  padding: 15px 20px;
  background-color: #333; 
  color: #fff; 
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2); 
  font-size: 16px; 
  opacity: 0; 
  transition: all 0.5s ease-in-out; 
  z-index: 1000;
  white-space: nowrap; 
  max-width: 90%; 
  overflow: hidden; 
}

.popup-message.show {
  opacity: 1;
  transform: translateX(-50%) translateY(0); 
}

.popup-message.success {
  background-color: red 
}

</style>