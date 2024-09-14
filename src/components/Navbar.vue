<template>
  <header>
    <router-link to="/" class="logo">
      <img :src="logo" alt="Logo">
    </router-link>
    <div class="bx bx-menu" id="menu-icon" @click="toggleMenu"></div>
    <ul class="navbar" :class="{ 'open': isMenuOpen }">
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
      <li><a @click.prevent="handleWishlistClick" :class="[isActiveLink('/wishlist') ? 'home-active' : '']">Wishlist</a></li>
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
const isMenuOpen = ref(false);

const toggleMenu = () => {
  isMenuOpen.value = !isMenuOpen.value;
};

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
</script>

<style scoped>
* {
    font-family: "Montserrat", sans-serif;
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    list-style: none;
    text-decoration: none;
    scroll-padding-top: 2rem;
    scroll-behavior: smooth;
}

:root {
    --main-color: red;
    --text-color: black;
    --bg-color: white;
}

html::-webkit-scrollbar {
    width: 0.5rem;
    color: var(--text-color);
}

html::-webkit-scrollbar-thumb {
    background: var(--main-color);
    border-radius: 5rem;
}

body {
    background: var(--text-color);
    color: var(--bg-color);
}

section {
    padding: 4.5rem 0 1.5rem;
}

header {
    position: fixed;
    width: 100%;
    top: 0;
    right: 0;
    z-index: 1000;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 20px 100px;
    transition: 0.5s;
}

header.shadow {
    background: var(--text-color);
}

header.shadow .navbar a {
    color: var(--bg-color);
}

header.shadow .logo {
    color: var(--bg-color);
    box-shadow: 0 0 4px rgb(14 55 54 / 15%);
}

.logo {
    font-size: 1.1rem;
    font-weight: 600;
    color: var(--bg-color);
    display: flex;
    align-items: center;
    column-gap: 0.5rem;
}

.logo img {
    height: 40px;
    width: auto;
    object-fit: contain;
}

.logo .bx {
    font-size: 24px;
    color: var(--main-color);
}

.navbar {
    display: flex;
    column-gap: 5rem;
}

.navbar li {
    position: relative;
}

.navbar a {
    font-size: 1rem;
    font-weight: 500;
    color: var(--bg-color);
}

.navbar a::after {
    content: '';
    width: 0;
    height: 2px;
    background: var(--main-color);
    position: absolute;
    bottom: -4px;
    left: 50%;
    transform: translateX(-50%);
    transition: width 0.4s linear;
}

.navbar a:hover::after {
    width: 100%;
}

.navbar a:hover::after,
.navbar .home-active::after {
    width: 100%;
}

#menu-icon {
    font-size: 24px;
    cursor: pointer;
    z-index: 1000001;
    display: none;
}

.btn {
    padding: 0.7rem 1.4rem;
    background: var(--main-color);
    color: var(--bg-color);
    font-weight: 400;
    border-radius: 0.5rem;
    border: none;
    cursor: pointer;
}

.btn:hover {
    background: red;
}

.dropdown {
    position: relative;
    display: flex;
    align-items: center;
}

.dropbtn {
    font-size: 1rem;
    font-weight: 500;
    color: var(--bg-color);
}

.dropdown-content {
    display: none;
    position: absolute;
    background: var(--text-color);
    min-width: 160px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
    border-radius: 0.5rem;
    top: 100%;
    left: 60%;
    transform: translateX(-50%);
    z-index: 1000;
}

.dropdown-content a {
    color: var(--bg-color);
    padding: 0.7rem 1rem;
    display: block;
    font-size: 1rem;
    font-weight: 500;
    text-decoration: none;
}

.dropdown-content a:hover {
    background: var(--main-color);
    color: var(--bg-color);
}

.dropdown:hover .dropdown-content {
    display: block;
}

.dropdown:hover .dropbtn {
    color: var(--main-color);
}


@media (max-width: 768px) {
    header {
        padding: 15px 30px;
    }

    .logo img {
        width: 120px; /* Adjusted logo size for smaller screens */
    }

    .navbar {
        position: absolute;
        top: 0;
        right: 0;
        width: 250px; /* Full-width off-canvas menu */
        height: 30vh;
        background-color: rgba(0, 0, 0, 0.9);
        flex-direction: column;
        align-items: flex-start;
        padding: 20px;
        gap: 1rem;
        text-align: left;
        transform: translateX(100%);
        transition: transform 0.3s ease, box-shadow 0.3s ease;
        box-shadow: 0 4px 8px rgba(0, 0, 0, 0.5);
    }

    .navbar.open {
        transform: translateX(0);
    }

    .navbar a {
        font-size: 1.1rem;
    }

    #menu-icon {
        display: block; /* Show the menu icon on smaller screens */
    }

    .btn {
        padding: 0.6rem 1.2rem;
    }

    .dropdown-content {
        right: 0;
        min-width: 100%;
    }
}

@media (max-width: 480px) {
    header {
        padding: 10px 20px;
    }

    .logo img {
        width: 100px; /* Further reduced logo size */
    }

    .navbar {
        width: 100%; /* Full width on very small screens */
        padding: 15px;
    }

    .navbar a {
        font-size: 1rem;
        padding: 10px; /* Adjusted padding for touch targets */
    }

    .btn {
        padding: 0.5rem 1rem;
    }

    #menu-icon {
        font-size: 20px; /* Larger menu icon for easier tapping */
    }
}
</style>