<script setup>
import { ref, onMounted, reactive } from 'vue';
import Swiper from 'swiper';
import 'swiper/swiper-bundle.css';

import itEndsWithUsImage from '@/assets/img/itendswithus.jpg';
import twistersImage from '@/assets/img/twisters.jpg';
import borderlandsImage from '@/assets/img/borderlands.jpg';
import furiosaImage from '@/assets/img/furiosa.jpg';
import beetlejuiceImage from '@/assets/img/beetlejuice.jpg';
import aQuietPlaceImage from '@/assets/img/a quiet place.jpg';
import watchmenImage from '@/assets/img/watchmen.jpg';
import theCrowImage from '@/assets/img/the crow.jpg';
import theFallGuyImage from '@/assets/img/the fall guy.jpg';
import badboysImage from '@/assets/img/badboys.jpg';
import theBeastWithinImage from '@/assets/img/the beast within.jpg';
import ghostbustersImage from '@/assets/img/ghostbusters.jpg';
import civilwarImage from '@/assets/img/civilwar.jpg';
import deadpolImage from '@/assets/img/deadpol.jpg';
import alienromulusposterImage from '@/assets/img/alienromulusposter.jpg';
import duneImage from '@/assets/img/dune.jpg';
import madMaxImage from '@/assets/img/mad max.jpg';
import guardiansImage from '@/assets/img/guardians .jpg';
import batmanImage from '@/assets/img/batman.jpg';
import oppenhaimerImage from '@/assets/img/oppenhaimer.jpg';
import lotrImage from '@/assets/img/lotr.jpg';
import avatarImage from '@/assets/img/avatar.jpg';
import gladiatorImage from '@/assets/img/gladiator.png';
import jurassicWorldImage from '@/assets/img/Jurassic world.jpg';
import themegImage from '@/assets/img/themeg.jpg';
import theAvengersImage from '@/assets/img/the avengers.jpg';
import jokerImage from '@/assets/img/joker.jpg';
import spiderManImage from '@/assets/img/spider-man.jpg';
import dictatorImage from '@/assets/img/dictator.jpg';
import smileImage from '@/assets/img/smile.jpg';

const newMovies = ref([
        { title: "It Ends with Us", image: itEndsWithUsImage, duration: "2h 10min", genre: "Drama, Romance" },
        { title: "Twisters", image: twistersImage, duration: "2h 2min", genre: "Adventure, Action" },
        { title: "Borderlands", image: borderlandsImage, duration: "1h 41min", genre: "Action, Comedy" },
        { title: "Furiosa: A Mad Max Saga", image: furiosaImage, duration: "2h 28min", genre: "Action, Adventure" },
        { title: "Beetlejuice Beetlejuice", image: beetlejuiceImage, duration: "1h 44min", genre: "Comedy, Fantasy" },
        { title: "A Quiet Place: Day One", image: aQuietPlaceImage, duration: "1h 39min", genre: "Horror, Sci-Fi" },
        { title: "Watchmen: Chapter I", image: watchmenImage, duration: "1h 23min", genre: "Mystery, Sci-Fi" },
        { title: "The Crow", image: theCrowImage, duration: "1h 51min", genre: "Fantasy, Horror" },
        { title: "The Fall Guy", image: theFallGuyImage, duration: "2h 6min", genre: "Action, Drama" },
        { title: "Bad Boys: Ride or Die", image: badboysImage, duration: "1h 55min", genre: "Action, Comedy" },
        { title: "The Beast Within", image: theBeastWithinImage, duration: "1h 37min", genre: "Horror" },
        { title: "Ghostbusters: Frozen Empire", image: ghostbustersImage, duration: "1h 55min", genre: "Adventure, Comedy" },
        { title: "Civil War", image: civilwarImage, duration: "1h 49min", genre: "Action, Adventure" },
        { title: "Deadpool and Wolverine", image: deadpolImage, duration: "2h 8min", genre: "Comedy, Action" },
        { title: "Alien: Romulus", image: alienromulusposterImage, duration: "1h 59min", genre: "Horror, Sci-Fi" },
        
        
  
]);

const popularMovies = ref([
        { title: "Dune", image: duneImage, duration: "2h 35min", genre: "Adventure, Sci-Fi" },
        { title: "Mad Max: Fury Road", image: madMaxImage, duration: "2h", genre: "Action, Sci-Fi" },
        { title: "Guardians of the Galaxy Vol. 3", image: guardiansImage, duration: "2h 29min", genre: "Action, Adventure" },
        { title: "The Batman", image: batmanImage, duration: "2h 56min", genre: "Action, Crime" },
        { title: "Oppenheimer", image: oppenhaimerImage, duration: "3h", genre: "Thriller, History" },
        { title: "LOTR: The Fellowship of the Ring", image: lotrImage, duration: "2h 58min", genre: "Fantasy, Adventure" },
        { title: "Avatar: The Way of Water", image: avatarImage, duration: "3h 12min", genre: "Sci-Fi, Action" },
        { title: "Gladiator", image: gladiatorImage, duration: "2h 35min", genre: "Action, Adventure" },
        { title: "Jurassic World Dominion", image: jurassicWorldImage, duration: "2h 27min", genre: "Action, Adventure" },
        { title: "The Meg", image: themegImage, duration: "1h 53min", genre: "Action, Sci-Fi" },
        { title: "The Avengers", image: theAvengersImage, duration: "2h 23min", genre: "Action, Sci-Fi" },
        { title: "Joker", image: jokerImage, duration: "2h 2min", genre: "Crime, Drama" },
        { title: "Spider-Man: Far From Home", image: spiderManImage, duration: "2h 10min", genre: "Action, Sci-Fi" },
        { title: "The Dictator", image: dictatorImage, duration: "1h 23min", genre: "Comedy, Drama" },
        { title: "Smile", image: smileImage, duration: "1h 55min", genre: "Horror, Crime" }
]);

const movieData = {
    "It Ends with Us": {
        description: "The first Colleen Hoover novel adapted for the big screen, tells the compelling story of Lily Bloom, a woman who overcomes a traumatic childhood to embark on a new life in Boston and chase a lifelong dream of opening her own business. A chance meeting with charming neurosurgeon Ryle Kincaid sparks an intense connection, but as the two fall deeply in love, Lily begins to see sides of Ryle that remind her of her parents' relationship.",
        reviews: [
            { user: "User 1", text: "Amazing story!" },
            { user: "User 2", text: "A must-watch!" }
        ]
    },
    "Twisters": {
        description: "As storm season intensifies, the paths of former storm chaser Kate Carter, lured back to the open plains after a devastating encounter years prior, and reckless social-media superstar Tyler Owens collide when terrifying phenomena never seen before are unleashed. The pair and their competing teams find themselves squarely in the paths of multiple storm systems converging over central Oklahoma in the fight of their lives.",
        reviews: [
            { user: "User 1", text: "Thrilling and entertaining!" },
            { user: "User 2", text: "Great visual effects!" }
        ]
    },
    "Deadpool and Wolverine": {
        description: "A listless Wade Wilson toils away in civilian life with his days as the morally flexible mercenary, Deadpool, behind him. But when his homeworld faces an existential threat, Wade must reluctantly suit-up again with an even more reluctant Wolverine.",
        reviews: [
            { user: "User 1", text: "Hilarious and action-packed!" },
            { user: "User 2", text: "Great chemistry between the leads!" }
        ]
    },
    "Alien: Romulus": {
        description: "While scavenging the deep ends of a derelict space station, a group of young space colonists come face to face with the most terrifying life form in the universe.",
        reviews: [
            { user: "User 1", text: "Intense and gripping!" },
            { user: "User 2", text: "A worthy addition to the franchise!" }
        ]
    },
    "Borderlands": {
        description: "Lilith, an infamous bounty hunter with a mysterious past, reluctantly returns to her home, Pandora, the most chaotic planet in the galaxy. Her mission is to find the missing daughter of Atlas, the universe's most powerful S.O.B. Lilith forms an unexpected alliance with a ragtag team of misfits...",
        reviews: [
            { user: "User 1", text: "Action-packed and fun!" },
            { user: "User 2", text: "A thrilling adventure!" }
        ]
    },
    "Furiosa: A Mad Max Saga": {
        description: "As the world fell, young Furiosa is snatched from the Green Place of Many Mothers and falls into the hands of a great Biker Horde led by the Warlord Dementus. Sweeping through the Wasteland they come across the Citadel presided over by The Immortan Joe. While the two Tyrants war for dominance, Furiosa must survive many trials as she puts together the means to find her way home.",
        reviews: [
            { user: "User 1", text: "A high-octane prequel!" },
            { user: "User 2", text: "Fantastic action sequences!" }
        ]
    },
    "Beetlejuice Beetlejuice": {
        description: "After an unexpected family tragedy, three generations of the Deetz family return home to Winter River. Still haunted by Beetlejuice, Lydia's life is turned upside down when her rebellious teenage daughter, Astrid, discovers the mysterious model of the town in the attic and the portal to the Afterlife is accidentally opened.",
        reviews: [
            { user: "User 1", text: "A delightful and spooky sequel!" },
            { user: "User 2", text: "Full of nostalgic charm!" }
        ]
    },
    "A Quiet Place: Day One": {
        description: "After the events and revelations of 'A Quiet Place' and 'A Quiet Place: Part 2' it is time to go back to 'Day One'. Following Sam (Lupita Nyong'o) as she's on a group trip in New York City, everything is going fine, until the invasion that sends the world into silence begins. Can the city stay quiet and can Sam and Eric (Joseph Quin), a new unlikely friend, make it somewhere safe?",
        reviews: [
            { user: "User 1", text: "An intense prequel!" },
            { user: "User 2", text: "Great tension and suspense!" }
        ]
    },
    "Watchmen: Chapter I": {
        description: "In an alternate world history shaped by superheroes, once-celebrated 'costumed adventurers' have been banned by a society disenchanted with vigilantism. Now, in 1985, the murder of hero-turned-government operative 'The Comedian' draws the attention of 'Rorschach,' the last of the outlawed vigilantes.",
        reviews: [
            { user: "User 1", text: "A compelling start to the series!" },
            { user: "User 2", text: "Gripping and thought-provoking!" }
        ]
    },
    "The Crow": {
        description: "Soulmates Eric and Shelly are brutally murdered when the demons of Shelly's dark past catch up with them. Given the chance to save his true love by sacrificing himself, Eric sets out to seek merciless revenge on their killers, traversing the worlds of the living and the dead to put the wrong things right in this modern re-imagining of the 1994 cult classic.",
        reviews: [
            { user: "User 1", text: "Dark and atmospheric!" },
            { user: "User 2", text: "A powerful revenge tale!" }
        ]
    },
    "The Fall Guy": {
        description: "He's a stuntman, and like everyone in the stunt community, he gets blown up, shot, crashed, thrown through windows and dropped from the highest of heights, all for our entertainment. And now, fresh off an almost career-ending accident, this working-class hero has to track down a missing movie star, solve a conspiracy and try to win back the love of his life while still doing his day job. What could possibly go right?",
        reviews: [
            { user: "User 1", text: "Action-packed and fun!" },
            { user: "User 2", text: "A great mix of thrills and comedy!" }
        ]
    },
    "Bad Boys: Ride or Die": {
        description: "When their late police captain gets linked to drug cartels, wisecracking Miami cops Mike Lowrey and Marcus Burnett embark on a dangerous mission to clear his name.",
        reviews: [
            { user: "User 1", text: "Explosive and entertaining!" },
            { user: "User 2", text: "A worthy addition to the franchise!" }
        ]
    },
    "The Beast Within": {
        description: "After a series of strange events leads her to question her family's isolated life on a fortified compound deep in the English wilds, 10-year-old Willow follows her parents on one of their secret late-night treks to the heart of the ancient forest. But upon witnessing her father undergo a terrible transformation, she too becomes ensnared by the dark ancestral secret they've tried so desperately to conceal.",
        reviews: [
            { user: "User 1", text: "Creepy and atmospheric!" },
            { user: "User 2", text: "A chilling family horror!" }
        ]
    },
    "Ghostbusters: Frozen Empire": {
        description: "After saving the world from an ancient god of destruction in Ghostbusters: Afterlife (2021), Gary and the Spenglers settle into the old fire station in New York, where the original Ghostbusters (1984) began their journey to save the world from paranormal threats. But just when they thought they could enjoy their newfound peace, the team stumbles upon a mysterious object that frees an unstoppable force from the depths of history.",
        reviews: [
            { user: "User 1", text: "Nostalgic and exciting!" },
            { user: "User 2", text: "Great fun for fans of the franchise!" }
        ]
    },
    "Civil War": {
        description: "Civil War is a 2024 dystopian thriller film written and directed by Alex Garland. It follows a team of journalists traveling from New York City to Washington, D.C. during a civil war fought across the United States between an authoritarian federal government and several regional factions.",
        reviews: [
            { user: "User 1", text: "A tense and gripping thriller!" },
            { user: "User 2", text: "Well-crafted and engaging!" }
        ]
    },
    "The Dictator": {
        description: "The Republic of Wadiya is ruled by an eccentric and oppressive leader named Hafez Aladeen. Aladeen is summoned to New York to a UN assembly to address concerns about his country's nuclear weapons program, but the trip goes awry.",
        reviews: [
            { user: "User 1", text: "Funny and outrageous!" },
            { user: "User 2", text: "A hilarious political satire!" }
        ]
    },
    "Smile": {
        description: "Having spent years trying to flee her own childhood trauma by working her fingers to the bone, compassionate psychiatrist Dr Rose Cotter is used to treating the most damaged and vulnerable members of society. Laura's puzzling case, however, is a different story. As an unsuspecting Dr Cotter attempts to rationalise the dreadful delusions of the deeply disturbed young woman, hair-raising encounters with the unexplained cause the therapist to reconsider. Now she is losing her grip on reality. ",
        reviews: [
            { user: "User 1", text: "Thrilling and entertaining!" },
            { user: "User 2", text: "Great visual effects!" }
        ]
    },
    "Dune": {
        description: "A mythic and emotionally charged hero's journey, 'Dune' tells the story of Paul Atreides, a brilliant and gifted young man born into a great destiny beyond his understanding, who must travel to the most dangerous planet in the universe to ensure the future of his family and his people. As malevolent forces explode into conflict over the planet's exclusive supply of the most precious resource in existence-a commodity capable of unlocking humanity's greatest potential-only those who can conquer their fear will survive.",
        reviews: [
            { user: "User 1", text: "Thrilling and entertaining!" },
            { user: "User 2", text: "Great visual effects!" }
        ]
    },
    "Mad Max: Fury Road": {
        description: "An apocalyptic story set in the furthest reaches of our planet, in a stark desert landscape where humanity is broken, and almost everyone is crazed fighting for the necessities of life. Within this world exist two rebels on the run who just might be able to restore order. There's Max, a man of action and a man of few words, who seeks peace of mind following the loss of his wife and child in the aftermath of the chaos.",
        reviews: [
            { user: "User 1", text: "Thrilling and entertaining!" },
            { user: "User 2", text: "Great visual effects!" }
        ]
    },
    "Guardians of the Galaxy Vol. 3": {
        description: "In Marvel Studios 'Guardians of the Galaxy Vol. 3' our beloved band of misfits are looking a bit different these days. Peter Quill, still reeling from the loss of Gamora, must rally his team around him to defend the universe along with protecting one of their own. A mission that, if not completed successfully, could quite possibly lead to the end of the Guardians as we know them.",
        reviews: [
            { user: "User 1", text: "Thrilling and entertaining!" },
            { user: "User 2", text: "Great visual effects!" }
        ]
    },
    "The Batman": {
        description: "Two years of nights have turned Bruce Wayne into a nocturnal animal. But as he continues to find his way as Gotham's dark knight Bruce is forced into a game of cat and mouse with his biggest threat so far, a manic killer known as 'The Riddler' who is filled with rage and determined to expose the corrupt system whilst picking off all of Gotham's key political figures. Working with both established and new allies, Bruce must track down the killer and see him brought to justice, while investigating his father's true legacy and questioning the effect that he has had on Gotham so far as 'The Batman'.",
        reviews: [
            { user: "User 1", text: "Thrilling and entertaining!" },
            { user: "User 2", text: "Great visual effects!" }
        ]
    },
    "Oppenheimer": {
        description: "A dramatization of the life story of J. Robert Oppenheimer, the physicist who had a large hand in the development of the atomic bomb, thus helping end World War 2. We see his life from university days all the way to post-WW2, where his fame saw him embroiled in political machinations.",
        reviews: [
            { user: "User 1", text: "Thrilling and entertaining!" },
            { user: "User 2", text: "Great visual effects!" }
        ]
    },
    "LOTR: The Fellowship of the Ring": {
        description: "An ancient Ring thought lost for centuries has been found, and through a strange twist of fate has been given to a small Hobbit named Frodo. When Gandalf discovers the Ring is in fact the One Ring of the Dark Lord Sauron, Frodo must make an epic quest to the Cracks of Doom in order to destroy it. However, he does not go alone. He is joined by Gandalf, Legolas the elf, Gimli the Dwarf, Aragorn, Boromir, and his three Hobbit friends Merry, Pippin, and Samwise. Through mountains, snow, darkness, forests, rivers and plains, facing evil and danger at every corner the Fellowship of the Ring must go. ",
        reviews: [
            { user: "User 1", text: "Thrilling and entertaining!" },
            { user: "User 2", text: "Great visual effects!" }
        ]
    },
    "Avatar: The Way of Water": {
        description: "Several years after the Na'vi repelled the RDA invasion Jake Sully and his family are living on Pandora. Things seem peaceful but the RDA has other plans, invading and capturing Pandora. Sully forms a guerrilla group to try to expel the invaders.",
        reviews: [
            { user: "User 1", text: "Thrilling and entertaining!" },
            { user: "User 2", text: "Great visual effects!" }
        ]
    },
    "Gladiator": {
        description: "Maximus is a powerful Roman general, loved by the people and the aging Emperor, Marcus Aurelius. Before his death, the Emperor chooses Maximus to be his heir over his own son, Commodus, and a power struggle leaves Maximus and his family condemned to death. The powerful general is unable to save his family, and his loss of will allows him to get captured and put into the Gladiator games until he dies.",
        reviews: [
            { user: "User 1", text: "Thrilling and entertaining!" },
            { user: "User 2", text: "Great visual effects!" }
        ]
    },
    "Jurassic World Dominion": {
        description: "After surviving the destruction of Isla Nubla, Owen Grady and Claire Dearing took in young Maisie Lockwood. They've been living under the radar to protect Maisie, but she feels like a prisoner. When Maisie goes missing, Owen and Claire set out to find her, and eventually confront Lewis Dodgson, owner of Biosyn.",
        reviews: [
            { user: "User 1", text: "Thrilling and entertaining!" },
            { user: "User 2", text: "Great visual effects!" }
        ]
    },
    "The Meg": {
        description: "Five years ago, expert sea diver and Naval Captain Jonas Taylor encountered an unknown danger in the unexplored recesses of the Mariana Trench that forced him to abort his mission and abandon half his crew. Though the tragic incident earned him a dismissal from service, what ultimately cost him his career, his marriage and any semblance of honor was his unsupported and incredulous claims of what caused it - an attack on his vessel by a mammoth, 70-foot sea creature, believed to be extinct for more than a million years.",
        reviews: [
            { user: "User 1", text: "Thrilling and entertaining!" },
            { user: "User 2", text: "Great visual effects!" }
        ]
    },
    "The Avengers": {
        description: "Loki, the adopted brother of Thor, teams-up with the Chitauri Army and uses the Tesseract's power to travel from Asgard to Midgard to plot the invasion of Earth and become a king. The director of the agency S.H.I.E.L.D., Nick Fury, sets in motion project Avengers, joining Tony Stark a.k.a. the Iron Man; Steve Rogers, a.k.a. Captain America; Bruce Banner, a.k.a. The Hulk; Thor; Natasha Romanoff, a.k.a. Black Widow; and Clint Barton, a.k.a. Hawkeye, to save the world from the powerful Loki and the alien invasion.",
        reviews: [
            { user: "User 1", text: "Thrilling and entertaining!" },
            { user: "User 2", text: "Great visual effects!" }
        ]
    },
    "Joker": {
        description: "A socially inept clown for hire - Arthur Fleck aspires to be a stand up comedian among his small job working dressed as a clown holding a sign for advertising. He takes care of his mother, Penny Fleck, and as he learns more about his mental illness, he learns more about his past. Dealing with all the negativity and bullying from society, he heads downwards on a spiral, in turn showing how his alter ego 'Joker' , came to be.",
        reviews: [
            { user: "User 1", text: "Thrilling and entertaining!" },
            { user: "User 2", text: "Great visual effects!" }
        ]
    },
    "Spider-Man: Far From Home": {
        description: "Our friendly neighborhood Super Hero decides to join his best friends Ned, MJ, and the rest of the gang on a European vacation. However, Peter's plan to leave super heroics behind for a few weeks are quickly scrapped when he begrudgingly agrees to help Nick Fury uncover the mystery of several elemental creature attacks, creating havoc across the continent.",
        reviews: [
            { user: "User 1", text: "Thrilling and entertaining!" },
            { user: "User 2", text: "Great visual effects!" }
        ]
    },
};

const showPopup = ref(false);
const popupMessage = ref('');

const handleWishlist = (movie) => {
  const loggedIn = localStorage.getItem('loggedIn') === 'true';

  if (!loggedIn) {
    popupMessage.value = 'You need to be logged in to add movies to your wishlist. Please sign in.';
    popupMessageVisible.value = true;
  } else {
    let wishlist = JSON.parse(localStorage.getItem('wishlist')) || [];
    const movieExists = wishlist.find(item => item.id === movie.id);

    if (!movieExists) {
      wishlist.push(movie);
      localStorage.setItem('wishlist', JSON.stringify(wishlist));
      popupMessage.value = `${movie.title} has been added to your wishlist!`;
    } else {
      popupMessage.value = `${movie.title} is already in your wishlist.`;
    }

    popupMessageVisible.value = true;
  }

  setTimeout(() => {
    popupMessageVisible.value = false;
  }, 5000);
};

onMounted(() => {
  new Swiper('.swiper', {
    slidesPerView: 5,
    spaceBetween: 10,
    loop: true,
    speed: 600,
    effect: 'slide',
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
    navigation: false,
    touchRatio: 1,
    fadeEffect: {
      crossFade: true,
    },
  });

  // Authentication button logic
  const authButton = document.getElementById('authButton');
  if (authButton) {
    if (localStorage.getItem('loggedIn') === 'true') {
      authButton.textContent = 'Logout';
      authButton.href = '#';
      authButton.addEventListener('click', () => {
        localStorage.removeItem('loggedIn');
        localStorage.removeItem('userEmail');
        authButton.textContent = 'Sign In';
        window.location.reload();
      });
    } else {
      authButton.textContent = 'Sign In';
      authButton.href = 'login.html';
    }
  }
});

const isPopupVisible = ref(false);
const isUserLoggedIn = ref(localStorage.getItem('loggedIn') === 'true'); 
const newReview = ref('');
const popupMovie = reactive({
  id: '',
  image: '',
  title: '',
  description: '',
  genre: '',
  duration: '',
  reviews: []
});

const openPopup = (movie) => {
  const movieTitle = movie.title;

  const movieDetails = movieData[movieTitle] || {};

  popupMovie.id = movie.id || '';
  popupMovie.image = movie.image || '';
  popupMovie.title = movie.title || 'No title available';
  popupMovie.description = movieDetails.description || 'No description available.';
  popupMovie.genre = movie.genre || 'No genre available';
  popupMovie.duration = movie.duration || 'No duration available';
  popupMovie.reviews = movieDetails.reviews || [];

  isPopupVisible.value = true;
};

const submitReview = () => {
  const loggedIn = localStorage.getItem('loggedIn') === 'true';

  if (!loggedIn) {
    popupMessage.value = 'You need to be logged in to submit a review.';
    popupMessageVisible.value = true;

    setTimeout(() => {
      popupMessageVisible.value = false;
    }, 5000);
    return;
  }

  if (newReview.value.trim()) {
    const review = {
      user: 'You', 
      text: newReview.value
    };

    popupMovie.reviews.push(review);

    newReview.value = '';

    popupMessage.value = 'Your review has been added!';
    popupMessageVisible.value = true;

    setTimeout(() => {
      popupMessageVisible.value = false;
    }, 5000);
  }
};

const closePopup = () => {
  isPopupVisible.value = false;
};

const onMoreButtonClick = (movieTitle) => {
  const movie = {
    image: 'path/to/movie-image.jpg',
    title: movieTitle,
    description: movieData[movieTitle]?.description,
    genre: 'Action',
    reviews: movieData[movieTitle]?.reviews || []
  };

  openPopup(movie);
};

function addToWishlist(movie) {
  const userEmail = localStorage.getItem('userEmail'); 
  if (!userEmail) {
    alert('You need to be logged in to add to your wishlist');
    return;
  }

  let wishlist = JSON.parse(localStorage.getItem(`${userEmail}_wishlist`)) || [];

  const movieExists = wishlist.find(item => item.title === movie.title);

  if (!movieExists) {
    wishlist.push(movie);
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
</script>

<template>
  <div id="app" @click="mustRefresh">
    <section class="coming">
      <h2 class="heading">New Movies / Series</h2>
      <div class="coming-container swiper">
        <div class="swiper-wrapper">
          <swiper-slide
            v-for="(movie, index) in newMovies"
            :key="index"
            class="swiper-slide box"
          >
            <div class="box-img">
              <img :src="movie.image" alt="" />
              <div class="overlayer">
                <a href="#" class="more-btn" @click.prevent="openPopup(movie)">More</a>
              </div>
            </div>
            <h3>{{ movie.title }}</h3>
            <span>{{ movie.duration }} | {{ movie.genre }}</span>
          </swiper-slide>
        </div>
        <div class="swiper-pagination"></div>
      </div>
    </section>

    <section class="coming">
      <h2 class="heading">Popular Movies / Series</h2>
      <div class="coming-container swiper">
        <div class="swiper-wrapper">
          <swiper-slide
            v-for="(movie, index) in popularMovies"
            :key="index"
            class="swiper-slide box"
          >
            <div class="box-img">
              <img :src="movie.image" alt="" />
              <div class="overlayer">
                <a href="#" class="more-btn" @click.prevent="openPopup(movie)">More</a>
              </div>
            </div>
            <h3>{{ movie.title }}</h3>
            <span>{{ movie.duration }} | {{ movie.genre }}</span>
          </swiper-slide>
        </div>
        <div class="swiper-pagination"></div>
      </div>
    </section>

    <div v-if="isPopupVisible" class="popup-overlay" @click="closePopup">
      <div class="popup-content" @click.stop>
        <button class="close-btn" @click="closePopup">×</button>
        <div class="popup-header">
          <img :src="popupMovie.image" alt="Movie Image" class="popup-image" />
          <div class="popup-details">
            <h2 class="popup-title">{{ popupMovie.title }}</h2>
            <p class="popup-info">{{ popupMovie.duration }} | {{ popupMovie.genre }}</p>
            <p class="popup-description">{{ popupMovie.description }}</p>
          </div>
        </div>
        <div class="popup-reviews">
          <h3>Reviews</h3>
          <ul>
            <li v-for="(review, index) in popupMovie.reviews" :key="index">
              <strong>{{ review.user }}:</strong> {{ review.text }}
            </li>
          </ul>
        </div>
        <div v-if="isUserLoggedIn" class="add-review-section">
          <textarea v-model="newReview" placeholder="Write your review..." class="review-input"></textarea>
          <div class="button-container">
            <button class="submit-review-btn" @click="submitReview">Submit Review</button>
            <button class="wishlist-btn" @click="addToWishlist(popupMovie)">
              <i class="fas fa-plus"></i> Add to My List
            </button>
          </div>
        </div>
      </div>
    </div>
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
@import url('https://fonts.googleapis.com/css?family=Montserrat:500'); 

*{
    font-family: "Montserrat", sans-serif;
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    list-style: none;
    text-decoration: none;
    scroll-padding-top: 2rem;
    scroll-behavior: smooth;

}

:root{
    --main-color: red;
    --text-color: black;
    --bg-color: white;
}


body{
    background: var(--text-color);
    color: var(--bg-color);
}

.heading{
    max-width: 1500px;
    margin-left: auto;
    margin-right: auto;
    margin-top: 30px;
    font-size: 1.2rem;
    font-weight: 500;
    text-transform: uppercase;
    border-bottom: 1px solid var(--main-color);
}

.coming{
  margin-top: 45px;
  padding: 15px;
}

.coming-container{
    max-width: 1300px;
    margin-right: auto;
    margin-left: auto;
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(180px,auto));
    gap: 0rem;
    margin-top: 2rem;
    margin-bottom: -2rem;
}

.overlayer{
    position: absolute;
    left: 50%;
    margin-top: 18px;
    transform: translate(-50%, -50%);
    width: 100%;
    height: 88%;
    background-color: rgba(234, 32, 32, 0.6);
    display: flex;
    justify-content: center;
    align-items: center;
}
.more-btn{
    width: 120px;
    height: 40px;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: black;
    color: white;
    font-weight: 700;
    letter-spacing: 1px;
    font-family: Montserrat, sans-serif;
    border-radius: 20px;
    box-shadow: 2px 2px 30px rgba(0,0,0,0.2);
    margin-top: 10%;
}
.more-btn:hover{
    color:white;
    background-color: rgba(234,32,32);
    transition: all ease 0.3s;
}
.overlayer{
    visibility: hidden;
}

.box-img:hover .overlayer{
    visibility: visible;
    animation: fade 0.5;
}

@keyframes fade{
    0%{
        opacity: 0;
    }
    100%{
        opacity: 1;
    }
}

.popup-overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.8);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1000;
}

.popup-content {
  background: black;
  padding: 20px;
  border-radius: 8px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.7);
  width: 80%;
  max-width: 1000px;
  height: auto;
  max-height: 80vh;
  overflow-y: auto;
  position: relative;
  color: #fff;
  display: flex;
  flex-direction: column;
}

.close-btn {
  position: absolute;
  top: 10px;
  right: 10px;
  background: transparent;
  border: none;
  color: #fff;
  font-size: 24px;
  cursor: pointer;
}

.popup-header {
  display: flex;
  align-items: flex-start;
  margin-bottom: 20px;
}

.popup-image {
  width: 25%;
  border-radius: 8px;
  margin-right: 20px;
}

.popup-details {
  flex: 1;
}

.popup-title {
  font-size: 24px;
  margin-bottom: 10px;
  color: #fff;
}

.popup-genre {
  font-size: 14px;
  color: #b3b3b3;
  margin-bottom: 50px;
}

.popup-description {
  font-size: 16px;
  line-height: 1.4;
  margin-top: 20px;
}

.popup-reviews {
  margin-bottom: 20px;
}

.popup-reviews h3 {
  font-size: 18px;
  margin-bottom: 10px;
}

.popup-reviews ul {
  list-style: none;
  padding-left: 0;
}

.popup-reviews li {
  margin-bottom: 10px;
  font-size: 14px;
  line-height: 1.2;
}

.add-review-section {
  margin-bottom: 20px;
}

.review-input {
  width: 100%;
  padding: 10px;
  border-radius: 4px;
  border: none;
  font-size: 14px;
  margin-bottom: 10px;
  background: #333;
  color: #fff;
  resize: none;
}

.submit-review-btn {
  background-color: #e50914;
  border: none;
  color: white;
  padding: 10px 20px;
  text-align: center;
  font-size: 14px;
  cursor: pointer;
  border-radius: 4px;
  margin-left:15px;
}

.wishlist-btn {
  background-color: #e50914; 
  border: none;
  color: white;
  padding: 10px 20px;
  text-align: center;
  font-size: 14px;
  cursor: pointer;
  border-radius: 4px;
  margin-top: 10px;
  margin-left: 620px;
}

.popup-content::-webkit-scrollbar {
  width: 10px;
}

.popup-content::-webkit-scrollbar-track {
  background: #1e1e1e; 
  border-radius: 5px;
}

.popup-content::-webkit-scrollbar-thumb {
  background: #ff0000; 
  border-radius: 5px;
  border: 2px solid #1e1e1e; 
}

.popup-content::-webkit-scrollbar-thumb:hover {
  background: #cc0000; 
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