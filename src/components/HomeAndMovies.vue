<script setup>
import { ref, onMounted } from 'vue';
import Swiper from 'swiper';
import {Swiper as SwiperComponent, SwiperSlide} from 'swiper/vue';

//homepage background images / slideri
import venom from '@/assets/img/venom.jpg';
import guardiansofthegalaxy from '@/assets/img/guardians of the galaxy.jpg';
import movie300 from '@/assets/img/300 movie.jpg';
import aquamanandthelostkingdom from '@/assets/img/aquaman and the lost kingdom.jpg';

// opening this week filmovi
import m1 from '@/assets/img/m1.jpg';
import wolverine from '@/assets/img/wolverine.jpg';
import batmanvssuperman from '@/assets/img/batmanvssuperman.jpg';
import johnwick2 from '@/assets/img/johnwick2.jpg';
import prometheus from '@/assets/img/prometheus.jpg';
import aquaman from '@/assets/img/aquman.jpg';
import rushhour2 from '@/assets/img/rushhour2.jpg';
import rings from '@/assets/img/rings.jpg';
import badboys2 from '@/assets/img/badboys2.jpg';
import jumanji from '@/assets/img/jumanji.jpg';
import extinction from '@/assets/img/extincion.jpg';
import howitends from '@/assets/img/how it ends.jpg';

// coming soon filmovi
import antman from '@/assets/img/ant man.jpg';
import johnnyenglish from '@/assets/img/johhny english.jpg';
import scream from '@/assets/img/scream.jpg';
import rampage from '@/assets/img/rampage.jpg';
import fractured from '@/assets/img/fractured.jpg';
import thesilence from '@/assets/img/the silence.jpg';
import waves from '@/assets/img/waves.jpg';
import theking from '@/assets/img/the king.jpg';
import escaperoom from '@/assets/img/escape room.jpg';
import hitman from '@/assets/img/hitman.jpg';
import ted from '@/assets/img/ted.jpg';
import the33 from '@/assets/img/the 33.jpg';
import assassinscreed from '@/assets/img/assasin\'s creed.jpg';
import warcraft from '@/assets/img/warcraft.jpg';
import img1922 from '@/assets/img/1922.jpg';

// Define reactive state for slides, movies, and comingMovies
const slides = [
  { image: venom, alt: 'Venom', category: 'Marvel Universe', title: 'Venom: Let There Be Carnage', moreInfoLink: '#' },
  { image: guardiansofthegalaxy, alt: 'Guardians of the Galaxy', category: 'Marvel Universe', title: 'Guardians of the Galaxy 2', moreInfoLink: '#' },
  { image: movie300, alt: '300', category: 'Action', title: '300: Rise of an Empire', moreInfoLink: '#' },
  { image: aquamanandthelostkingdom, alt: 'Aquaman', category: 'Action, Fantasy', title: 'Aquaman and the Lost Kingdom', moreInfoLink: '#' }
];

const movies = [
  { image: m1, title: 'Venom', duration: '1h 52min', genre: 'Action, Sci-Fi' },
  { image: wolverine, title: 'The Wolverine', duration: '2h 6min', genre: 'Action, Sci-Fi' },
  { image: batmanvssuperman, title: 'Batman Vs Superman', duration: '2h 31min', genre: 'Sci-Fi' },
  { image: johnwick2, title: 'John Wick 2', duration: '2h 2min', genre: 'Action, Thriller' },
  { image: prometheus, title: 'Prometheus', duration: '2h 4min', genre: 'Sci-Fi, Horror' },
  { image: aquaman, title: 'Aquaman', duration: '2h 23min', genre: 'Action, Fantasy' },
  { image: rushhour2, title: 'Rush Hour 2', duration: '1h 30min', genre: 'Comedy, Action' },
  { image: rings, title: 'Rings', duration: '1h 42min', genre: 'Horror' },
  { image: badboys2, title: 'Bad Boys 2', duration: '2h 27min', genre: 'Action, Comedy' },
  { image: jumanji, title: 'Jumanji: Welcome to the Jungle', duration: '1h 59min', genre: 'Adventure, Comedy' },
  { image: extinction, title: 'Extinction', duration: '1h 35min', genre: 'Action, Sci-Fi' },
  { image: howitends, title: 'How It Ends', duration: '1h 54min', genre: 'Action, Thriller' }
];

const comingMovies = [
  { image: antman, title: 'Ant-Man', duration: '1h 58min', genre: 'Action', moreInfoLink: '#' },
  { image: johnnyenglish, title: 'Johnny English', duration: '1h 29min', genre: 'Adventure', moreInfoLink: '#' },
  { image: scream, title: 'Scream', duration: '1h 51min', genre: 'Thriller', moreInfoLink: '#' },
  { image: rampage, title: 'Rampage', duration: '1h 47min', genre: 'Adventure', moreInfoLink: '#' },
  { image: fractured, title: 'Fractured', duration: '1h 40min', genre: 'Thriller', moreInfoLink: '#' },
  { image: thesilence, title: 'The Silence', duration: '1h 30min', genre: 'Horror, Sci-Fi', moreInfoLink: '#' },
  { image: waves, title: 'Waves', duration: '2h 15min', genre: 'Romantic, Sport', moreInfoLink: '#' },
  { image: theking, title: 'The King', duration: '2h 20min', genre: 'Drama, War', moreInfoLink: '#' },
  { image: escaperoom, title: 'Escape Room', duration: '1h 40min', genre: 'Horror, Sci-Fi', moreInfoLink: '#' },
  { image: hitman, title: 'Hitman: Agent 47', duration: '1h 36min', genre: 'Action', moreInfoLink: '#' },
  { image: ted, title: 'Ted', duration: '1h 46min', genre: 'Comedy, Fantasy', moreInfoLink: '#' },
  { image: the33, title: 'The 33', duration: '2h 7min', genre: 'Drama, History', moreInfoLink: '#' },
  { image: assassinscreed, title: 'Assasin\'s Creed', duration: '1h 55min', genre: 'Action, Adventure', moreInfoLink: '#' },
  { image: warcraft, title: 'Warcraft: The Beginning', duration: '2h 3min', genre: 'Action, Fantasy', moreInfoLink: '#' },
  { image: img1922, title: '1922', duration: '1h 42min', genre: 'Horror, Criminal', moreInfoLink: '#' }
];

// Refs for Swiper instances
const homeSwiper = ref(null);

onMounted(() => {
  // Header scroll effect
  window.addEventListener('scroll', () => {
    const header = document.querySelector('header');
    if (window.scrollY > 0) {
      header.classList.add('shadow');
    } else {
      header.classList.remove('shadow');
    }
  });

  // Swiper initialization for the home section
  homeSwiper.value = new Swiper('.homeSwiper', {
    spaceBetween: 0,
    centeredSlides: true,
    autoplay: {
      delay: 5000,
      disableOnInteraction: false,
    },
  });

  // Swiper initialization for the coming soon section
  const moviesSection = ref(null);
  onMounted(() => {
    // Check if the hash in the URL matches the section ID
    if (route.hash === '#movies') {
      // Scroll to the movies section
      moviesSection.value.scrollIntoView({ behavior: 'smooth' });
    }
  });
});
</script>


<template>
  <div>
    <!-- Swiper Section -->
    <section class="home swiper" id="home">
      <SwiperComponent class="homeSwiper">
        <SwiperSlide v-for="(slide, index) in slides" :key="index" class="container">
          <img :src="slide.image" :alt="slide.alt">
          <div class="home-text">
            <span>{{ slide.category }}</span>
            <h1>{{ slide.title }}</h1>
            <a :href="slide.moreInfoLink" class="btn">More Information</a>
          </div>
        </SwiperSlide>
      </SwiperComponent>
    </section>

    <!-- Opening this week -->
    <section class="movies" id="movies" ref="moviesSection">
      <h2 class="heading">Opening This Week</h2>
      <div class="movies-container">
        <div class="box" v-for="(movie, index) in movies" :key="index">
          <div class="box-img">
            <img :src="movie.image" :alt="movie.title">
          </div>
          <h3>{{ movie.title }}</h3>
          <span>{{ movie.duration }} | {{ movie.genre }}</span>
        </div>
      </div>
    </section>

    <!-- Coming Soon Section -->
    <section class="coming" id="coming">
      <h2 class="heading">Coming Soon</h2>
      <div class="coming-container swiper">
        <SwiperComponent
          ref="comingSwiperRef"
          class="comingSwiper"
          :autoplay="{ delay: 5500, disableOnInteraction: false }"
          :loop="true"
          :centeredSlides="false"
          :spaceBetween="20"
          :breakpoints="breakpoints"
          :slidesPerView="5"
        >
          <SwiperSlide
            v-for="(movie, index) in comingMovies"
            :key="index"
            class="swiper-slide box"
          >
            <div class="box-img">
              <img :src="movie.image" :alt="movie.title" />
            </div>
            <h3>{{ movie.title }}</h3>
            <span>{{ movie.duration }} | {{ movie.genre }}</span>
          </SwiperSlide>
        </SwiperComponent>
      </div>
    </section>

    <div class="copyright">
        <p>&#169; Filipa Bebek, Boris Vujica All Right Reserved.</p>

    </div>
  </div>
</template>

<style scoped>
*{
  padding: 0;
}

.copyright{
    padding: 20px;
    text-align: center;
    color: var(--bg-color);
}


.movies {
  padding: 20px;
}


.home-text{
    z-index: 1000;
    padding: 0 100px;
    margin-top: 400px;
}
.home-text span{
    color: var(--bg-color);
    font-weight: 500;
    text-transform: uppercase;
}
.home-text h1{
    color: var(--bg-color);
    font-size: 4rem;
    font-weight: 700;
    margin-bottom: 1rem;
}

.play{
    position: absolute;
    right: 4rem;
    bottom: 10%;
}

.play .bx{
    background: var(--bg-color);
    padding: 10px;
    font-size: 2rem;
    border-radius: 50%;
    border: 4px solid rgb(2,3,7,0.4);
    color: var(--main-color);
}

.play .bx:hover{
    background: var(--main-color);
    color: var(--bg-color);
    transition: 0.2s all linear;
}

.btn{
    padding: 0.7rem 1.4rem;
    background: var(--main-color);
    color: var(--bg-color);
    font-weight: 400;
    border-radius: 0.5rem;
}

.btn:hover{
    background: red;
}


/* Container for all movie boxes */
.movies-container{
    max-width: 1300px;
    margin-right: auto;
    margin-left: auto;
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(180px,auto));
    gap: 1rem;
    margin-top: 2rem;
}

.box .box-img{
    width: 100%;
    height: 270px;
}

.box .box-img img{
    width: 100%;
    height: 100%;
    object-fit: cover;
}

.box .box-img img:hover{
    transform: translateY(-10px);
    transition: 0.2s all linear;
}

.box h3{
    font-size: 0.9rem;
    font-weight: 500;
}

.box span{
    font-size: 13px;
}

.coming{
  padding: 70px;
}

.comingSwiper {
  width: 100%;
  height: auto; /* Adjust height as needed */
}</style>