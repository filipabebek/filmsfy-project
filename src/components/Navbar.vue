<template>
  <header>
    <router-link to="/" class="logo">
      <img :src="logo" alt="Logo">
    </router-link>
    <div class="bx bx-menu" id="menu-icon"></div>
    <ul class="navbar">
      <li><router-link to="/" :class="[isActiveLink('/') ? 'home-active' : '']">Home</router-link></li>
      <li><a @click.prevent="scrollToMovies">Movies</a></li>
      <li class="dropdown">
        <a href="#" class="dropbtn">Genres</a>
        <div class="dropdown-content">
          <router-link to="/genres/action">Action</router-link>
          <router-link to="/genres/adventure">Adventure</router-link>
          <router-link to="/genres/horror">Horror</router-link>
          <router-link to="/genres/anime">Anime</router-link>
        </div>
      </li>
      <li><router-link to="/new-popular" :class="[isActiveLink('/new-popular') ? 'home-active' : '']">New & Popular</router-link></li>
      <li><a @click.prevent="handleWishlistClick">Wishlist</a></li>
      <li><router-link to="/support">Support</router-link></li>
    </ul>
    <button @click="handleAuth" class="btn" id="authButton">
      {{ isLoggedIn ? 'Logout' : 'Sign In' }}
    </button>
  </header>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import { RouterLink, useRoute, useRouter } from 'vue-router';
import logo from '@/assets/img/logo.png';

const route = useRoute();
const router = useRouter();
const isLoggedIn = ref(false); 

const isActiveLink = (routePath) => {
  return route.path === routePath;
};

const scrollToMovies = () => {
  router.push({ path: '/', hash: '#movies' }).then(() => {
    const moviesSection = document.getElementById('movies');
    const padding = 100; 

    if (moviesSection) {
      const sectionTop = moviesSection.getBoundingClientRect().top + window.pageYOffset;
      const scrollPosition = sectionTop - padding;

      window.scrollTo({
        top: scrollPosition,
        behavior: 'smooth',
      });
    }
  });
};

const handleAuth = () => {
  if (isLoggedIn.value) {
    localStorage.removeItem('loggedIn');
    localStorage.removeItem('userEmail');
    isLoggedIn.value = false;
    router.push('/');
  } else {
    router.push('/login');
  }
};

onMounted(() => {
  isLoggedIn.value = localStorage.getItem('loggedIn') === 'true';
  window.addEventListener('loginStatusChanged', () => {
    isLoggedIn.value = localStorage.getItem('loggedIn') === 'true';
  });
});

const handleWishlistClick = () => {
  if (!isLoggedIn.value) {
    router.push('/login');
  } else {
    router.push('/wishlist');
  }
};

function mustRefresh() {
  router.go({ path: router.currentRoute.value.path, force: true });
}
</script>