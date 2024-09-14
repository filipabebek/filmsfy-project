<script setup>
import { ref, onMounted } from 'vue';
import Swiper from 'swiper';
import 'swiper/swiper-bundle.css';

import attackOnTitanImage from '@/assets/img/attackontitan.jpg';
import onePieceImage from '@/assets/img/onepiece.jpg';
import demonSlayerImage from '@/assets/img/demonslayer.jpg';
import jujutsuKaisenImage from '@/assets/img/jjk.jpg';
import soloLevelingImage from '@/assets/img/sololeveling.jpg';
import vinlandSagaImage from '@/assets/img/vinlandsaga.jpg';
import narutoImage from '@/assets/img/naruto.jpg';
import deathNoteImage from '@/assets/img/deathnote.jpg';
import jojosBizarreAdventureImage from '@/assets/img/jojo.jpg';
import bakiImage from '@/assets/img/baki.jpg';
import dragonBallZImage from '@/assets/img/dragonballz.jpg';
import mashleImage from '@/assets/img/mashle.jpg';
import myHeroAcademiaImage from '@/assets/img/myhero.jpg';
import tokyoGhoulImage from '@/assets/img/tokyoghoul.jpg';
import pokemonImage from '@/assets/img/pokemon.jpg';
import blackCloverImage from '@/assets/img/blackclover.jpg';

import attackOnTitanBgImage from '@/assets/img/attackontitanbg.jpg';
import onePieceBgImage from '@/assets/img/onepiecebg.jpg';
import demonSlayerBgImage from '@/assets/img/demonslayerbg.jpg';
import jujutsuKaisenBgImage from '@/assets/img/jjkbg.jpg';
import soloLevelingBgImage from '@/assets/img/sololevelingbg.jpg';
import vinlandSagaBgImage from '@/assets/img/vinlandsagabg.jpg';
import narutoBgImage from '@/assets/img/narutobg.png';
import deathNoteBgImage from '@/assets/img/deathnotebg.jpg';
import jojosBizarreAdventureBgImage from '@/assets/img/jojobg.jpg';
import bakiBgImage from '@/assets/img/bakibg.png';
import dragonBallZBgImage from '@/assets/img/dragonballzbg.jpg';
import mashleBgImage from '@/assets/img/mashlebg.jpg';
import myHeroAcademiaBgImage from '@/assets/img/myherobg.jpg';
import tokyoGhoulBgImage from '@/assets/img/tokyoghoulbg.jpg';
import pokemonBgImage from '@/assets/img/pokemonbg.jpg';
import blackCloverBgImage from '@/assets/img/blackcloverbg.jpg';

const movies = ref([
  { title: 'Solo Leveling', image: soloLevelingImage, genre: 'Animation | Action | Adventure | Fantasy' },
  { title: 'Attack on Titan', image: attackOnTitanImage, genre: 'Animation | Action | Adventure' },
  { title: 'Demon Slayer', image: demonSlayerImage, genre: 'Animation | Action | Adventure' },
  { title: 'Jujutsu Kaisen', image: jujutsuKaisenImage, genre: 'Animation | Action | Adventure' },
  { title: 'Vinland Saga', image: vinlandSagaImage, genre: 'Animation | Action | Adventure' },
  { title: 'Naruto', image: narutoImage, genre: 'Animation | Action | Adventure' },
  { title: 'Death Note', image: deathNoteImage, genre: 'Animation | Drama | Crime | Mystery' },
  { title: 'Jojos Bizzare Adventure', image: jojosBizarreAdventureImage, genre: 'Animation | Action | Adventure | Comedy' },
  { title: 'Baki', image: bakiImage, genre: 'Animation | Action | Drama | Sport' },
  { title: 'Dragon Ball Z', image: dragonBallZImage, genre: 'Animation | Action | Adventure' },
  { title: 'Mashle', image: mashleImage, genre: 'Animation | Action | Adventure | Comedy' },
  { title: 'My Hero Academia', image: myHeroAcademiaImage, genre: 'Animation | Action | Adventure | Comedy' },
  { title: 'Tokyo Ghoul', image: tokyoGhoulImage, genre: 'Animation | Action | Adventure | Comedy' },
  { title: 'Pokemon', image: pokemonImage, genre: 'Animation | Action | Adventure | Comedy' },
  { title: 'Black Clover', image: blackCloverImage, genre: 'Animation | Action | Adventure | Comedy' },
  { title: 'One Piece', image: onePieceImage, genre: 'Animation | Action | Adventure' }
]);

const movieImages={
  'Solo Leveling': soloLevelingImage,
  'Attack on Titan': attackOnTitanImage,
  'Demon Slayer': demonSlayerImage,
  'Jujutsu Kaisen': jujutsuKaisenImage,
  'Vinland Saga': vinlandSagaImage,
  'Naruto': narutoImage,
  'Death Note': deathNoteImage,
  'Jojos Bizzare Adventure': jojosBizarreAdventureImage,
  'Baki': bakiImage,
  'Dragon Ball Z': dragonBallZImage,
  'Mashle': mashleImage,
  'My Hero Academia': myHeroAcademiaImage,
  'Tokyo Ghoul': tokyoGhoulImage,
  'Pokemon': pokemonImage,
  'Black Clover': blackCloverImage,
  'One Piece': onePieceImage,
};

const backgroundImages = {
  'Solo Leveling': soloLevelingBgImage,
  'Attack on Titan': attackOnTitanBgImage,
  'Demon Slayer': demonSlayerBgImage,
  'Jujutsu Kaisen': jujutsuKaisenBgImage,
  'Vinland Saga': vinlandSagaBgImage,
  'Naruto': narutoBgImage,
  'Death Note': deathNoteBgImage,
  'Jojos Bizzare Adventure': jojosBizarreAdventureBgImage,
  'Baki': bakiBgImage,
  'Dragon Ball Z': dragonBallZBgImage,
  'Mashle': mashleBgImage,
  'My Hero Academia': myHeroAcademiaBgImage,
  'Tokyo Ghoul': tokyoGhoulBgImage,
  'Pokemon': pokemonBgImage,
  'Black Clover': blackCloverBgImage,
  'One Piece': onePieceBgImage,
};

const movieDetails = {
    'Attack on Titan': {
        description: 'Humans are nearly exterminated by giant creatures called Titans. Titans are typically several stories tall, seem to have no intelligence, devour human beings and, worst of all, seem to do it for the pleasure rather than as a food source. A small percentage of humanity survived by walling themselves in a land protected by extremely high walls, even taller than the biggest of titans.',
        type: 'Animation | Action | Adventure | Drama',
        rating: '★★★★☆'
    },
    'One Piece': {
        description: 'There once lived a pirate named Gol D. Roger. He obtained wealth, fame, and power to earn the title of Pirate King. When he was captured and about to be executed, he revealed that his treasure called One Piece was hidden somewhere at the Grand Line. This made all people set out to search and uncover the One Piece treasure, but no one ever found the location of Gol D. Rogers treasure, and the Grand Line was too dangerous a place to overcome.',
        type: 'Animation | Action | Adventure',
        rating: '★★★★☆'
    },
    'Demon Slayer': {
        description: 'A family is attacked by demons and only two members survive - Tanjiro and his sister Nezuko, who is turning into a demon slowly. Tanjiro sets out to become a demon slayer to avenge his family and cure his sister.',
        type: 'Animation | Action | Adventure | Thriller',
        rating: '★★★★☆'
    },
    'Jujutsu Kaisen': {
        description: 'Yuji Itadori, a kind-hearted teenager, joins his schools Occult Club for fun, but discovers that its members are actual sorcerers who can manipulate the energy between beings for their own use. He hears about a cursed talisman - the finger of Sukuna, a demon - and its being targeted by other cursed beings. Yuji eats the finger to protect his friends, and ends up becoming Sukunas host. ',
        type: 'Animation | Action | Adventure | Thriller',
        rating: '★★★★☆'
    },
    'Solo Leveling': {
        description: 'In a world where hunters, humans who possess magical abilities, must battle deadly monsters to protect the human race from certain annihilation, a notoriously weak hunter named Sung Jinwoo finds himself in a seemingly endless struggle for survival. After narrowly surviving a powerful double dungeon that nearly wipes out his entire party, a mysterious program called the System chooses him as its sole player and it gives him the extremely rare ability to level up in strength, possibly beyond any known limits.',
        type: 'Animation | Action | Adventure | Fantasy',
        rating: '★★★★☆'
    },
    'Vinland Saga': {
        description: 'A young man named Thorfinn finds himself in a quest for revenge against the man responsible for a traumatic tragedy in his early life. Firstly indulged in the aparent greatness of war and honor, Thorfinn quickly changes as he endures having to survive alone and then alongside the man he vows to kill, developing conflicting emotions towards the causality of his past and present life.',
        type: 'Animation | Action | Adventure | Fantasy',
        rating: '★★★★☆'
    },
    'Naruto': {
        description: 'It is about a boy named Naruto Uzumaki, with a demon fox sealed within him. He is shunned and hated by both villagers and other ninja, and is labeled a freak and a danger to all around him. He overcomes these challenges through hard work and perseverance, and slowly earns the respect and appreciation of others.',
        type: 'Animation | Action | Adventure | Fantasy',
        rating: '★★★★☆'
    },
    'Death Note': {
        description: 'After an intelligent yet cynical high school student begins to cleanse the world from evil with the help of a magical notebook that can kill anyone whose name is written on it, international authorities call upon a mysterious detective known as "L" to thwart his efforts.',
        type: 'Animation | Drama | Crime | Mystery',
        rating: '★★★★☆'
    },
    'Jojos Bizzare Adventure': {
        description: 'Chronicles the struggles of the cursed Joestar bloodline against the forces of evil. Beginning in 1880, Part I follows Jonathan Joestar as he matures with and eventually combats his adoptive brother, the cunning, merciless Dio Brando. Set in 1938, Part II follows the misadventures of Joseph Joestar, grandson of Jonathan, as he masters the Ripple in order to combat hostile, ancient super-beings named the Pillar Men.',
        type: 'Animation | Action | Adventure | Comedy',
        rating: '★★★★☆'
    },
    'Baki': {
        description: 'The protagonist, Baki Hanma, trains with an intense focus to become strong enough to surpass his father, Yujiro Hanma, the strongest fighter in the world. Five of the worlds most violent and brutal death row inmates are gathering to face Baki. Their objective is to taste defeat -- their unmatched strength and skill have led them to grow bored of life itself, and they now seek out Baki in the hopes that he can overwhelm and utterly crush them. ',
        type: 'Animation | Action | Drama | Sport',
        rating: '★★★☆☆'
    },
    'Dragon Ball Z': {
        description: 'Son Goku, the worlds most powerful fighter and guardian of justice, must protect the Earth from the Saiyan Warriors working under the tyrannical space warlord Frieza. Against all odds, Goku must team up with his longtime nemesis Piccolo to save everyone he loves from these new, unpredictable threats to humanity.',
        type: 'Animation | Action | Adventure',
        rating: '★★★★☆'
    },
    'Mashle': {
        description: 'Set in a magical world in which an individuals position within society are defined by the power and skill with magic, Mash Burnedead is a young man without so much as an ounce of magic in his blood. In order to live a peaceful life with his adoptive father, Regro, Mash will need to become a Divine Visionary, a title which is only given to exceptional students from the Easton Magic Academy. ',
        type: 'Animation | Action | Adventure | Comedy',
        rating: '★★★★☆'
    },
    'My Hero Academia': {
        description: 'In a world populated with superhumans, the superhero-loving Izuku Midoriya is without power. However, after the Quirkless dreamer Izuku inherits the powers of the worlds best superhero, All Might, his hopes of becoming the top hero are now possible. Once enrolled in the high school for heroes, U.A., Izuku soon discovers being a hero is much more complicated than it appears.',
        type: 'Animation | Action | Adventure | Comedy',
        rating: '★★★★☆'
    },
    'Tokyo Ghoul': {
        description: 'The suspense horror/dark fantasy story is set in Tokyo, which is haunted by mysterious "ghouls" who are devouring humans. People are gripped by the fear of these ghouls whose identities are masked in mystery. An ordinary college student named Kaneki encounters Rize, a girl who is an avid reader like him, at the café he frequents. Little does he realize that his fate will change overnight.',
        type: 'Animation | Action | Drama | Horror',
        rating: '★★★★☆'
    },
    'Pokemon': {
        description: 'Ten-year-old Ash aspires to be the greatest Pokémon (Pocket Monster) trainer in the world. To do this, he enlists the help of many friends, and his own Pokémon, Pikachu. Together, they must search their world for new Pokémon, while avoiding the likes of Team Rocket, as well as other evil organizations, as well as battling rivals, and meeting legendary Pokémon.',
        type: 'Animation | Action | Adventure | Comedy',
        rating: '★★★★☆'
    },
    'Black Clover': {
        description: 'Asta and Yuno were abandoned together at the same church and have been inseparable since. As children, they promised that they would compete against each other to see who would become the next Wizard King. However, as they grew up the differences in their abilities became considerably noticeable. Yuno was a genius in his magic control and power, whilst Asta possessed no magic at all so he trained his physical body as much as possible in an attempt to make up for his lack of magic. ',
        type: 'Animation | Action | Adventure | Comedy',
        rating: '★★★★☆'
    },
};

const movie = ref({
  title: 'Solo Leveling',
  description: movieDetails['Solo Leveling'].description,
  type: movieDetails['Solo Leveling'].type,
  rating: movieDetails['Solo Leveling'].rating
});

const showPopup = ref(false);
const popupMessage = ref('');
const backgroundImage = ref(backgroundImages['Solo Leveling']);

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

  handleSlideClick('Solo Leveling');
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


@media (max-width: 1024px) {
  .background-container {
    height: 100vh;
  }

  .movie-info-container {
    padding: 15px;
    width: 80% !important; 
    left: 50%;
    transform: translateX(-50%); 
    margin-top: 30px;
  }

  #movie-title {
    font-size: 1.8rem;
  }

  #movie-description, #movie-type, #movie-rating {
    font-size: 0.9rem;
  }

  #play-button, .btn.wishlist-btn {
    padding: 8px 16px;
  }
}

@media (max-width: 768px) {
  .background-container {
    height: 100vh;
  }

  .movie-info-container {
    padding: 10px;
    width: 100%; 
    top: 150px; 
  }

  #movie-title {
    font-size: 1.5rem;
  }

  #movie-description, #movie-type, #movie-rating {
    font-size: 0.8rem;
  }

  #play-button, .btn.wishlist-btn {
    padding: 6px 12px;
  }

  .swiper-slide {
    width: calc(50% - 5px) !important;
  }

  .swiper-slide img {
    height: auto;
  }
}

@media (max-width: 480px) {
  .background-container {
    height: 100vh;
  }

  .movie-info-container {
    padding: 5px;
    width: 100%; 
    top: 100px; 
  }

  #movie-title {
    font-size: 1.2rem;
  }

  #movie-description, #movie-type, #movie-rating {
    font-size: 0.7rem;
  }

  #play-button, .btn.wishlist-btn {
    padding: 5px 10px;
  }

  .swiper-slide {
    width: calc(50% - 5px) !important;
  }

  .swiper-slide img {
    height: 200px;
  }

  .popup-message {
    padding: 12px 15px;
    font-size: 10px;
  }
}
</style>