<template>
  <section class="wishlist">
    <h2 class="heading">My Wishlist</h2>
    <div id="wishlist-container" class="wishlist-container">
      <div v-if="wishlist.length === 0" class="empty-message">Your wishlist is empty.</div>
      <div v-for="(item, index) in wishlist" :key="item.title" class="wishlist-item">
        <img :src="item.image" :alt="item.title" class="wishlist-item-image">
        <button class="remove-btn" @click="removeFromWishlist(index)">
          <i class='bx bxs-trash'></i>
        </button>
        <span class="movie-title">{{ item.title }}</span>
      </div>
    </div>
  </section>

  <div class="wishlist-wrapper">
    <div class="wishlist">
    </div>
  </div>

  <div id="notification" class="notification" v-if="notificationMessage">
    {{ notificationMessage }}
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';

const wishlist = ref([]);
const notificationMessage = ref('');
const loggedInUserEmail = ref(''); 

onMounted(() => {
  loadWishlist();
});

function loadWishlist() {
  const userEmail = localStorage.getItem('userEmail'); 
  loggedInUserEmail.value = userEmail;

  if (!userEmail) {
    notificationMessage.value = 'You are not logged in.';
    return;
  }

  const savedWishlist = JSON.parse(localStorage.getItem(`${userEmail}_wishlist`)) || [];
  wishlist.value = savedWishlist;

  if (savedWishlist.length === 0) {
    notificationMessage.value = 'Your wishlist is empty.';
  }
}

function removeFromWishlist(index) {
  const userEmail = loggedInUserEmail.value;
  if (!userEmail) {
    notificationMessage.value = 'You are not logged in.';
    return;
  }

  let savedWishlist = JSON.parse(localStorage.getItem(`${userEmail}_wishlist`)) || [];
  const removedMovie = savedWishlist[index];
  savedWishlist.splice(index, 1); 

  localStorage.setItem(`${userEmail}_wishlist`, JSON.stringify(savedWishlist));
  
  wishlist.value = savedWishlist; 

  showNotification(`${removedMovie.title} has been removed from your wishlist.`);
}

function showNotification(message, isError = false) {
  notificationMessage.value = message;
  const notificationElement = document.getElementById('notification');
  notificationElement.className = isError ? 'notification error show' : 'notification show';


  notificationElement.classList.add('show');


  setTimeout(() => {
    notificationElement.classList.remove('show');
  }, 2500); 
}
</script>

<style scoped>

.heading{
    max-width: 1500px;
    margin-left: auto;
    margin-right: auto;
    font-size: 1.2rem;
    font-weight: 500;
    text-transform: uppercase;
    border-bottom: 1px solid var(--main-color);
    margin-top: 81px;
}

.wishlist-wrapper {
    max-width: 800px; 
    padding: 10px;
  }
  
  .wishlist {
    padding: 10px;
    border-radius: 10px;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
  }
  
  .wishlist-container {
    display: flex;
    flex-wrap: wrap;
    gap: 10px;
    padding: 10px;
    margin-left: 100px;
    margin-top: 5px;
  }
  
 .wishlist-item {
    position: relative;
    width: 200px; 
    height: 280px; 
    border-radius: 10px;
    overflow: hidden;
    cursor: pointer;
    background-color: #fff;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
    transition: transform 0.3s ease-in-out;
}

.wishlist-item:hover {
    transform: scale(1.05);
}

.wishlist-item img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-radius: 10px 10px 0 0;
}

.wishlist-item .remove-btn {
    position: absolute;
    top: 10px;
    right: 10px;
    border: none;
    color: white;
    cursor: pointer;
    font-size: 20px;
    padding: 4px 12px;
    border-radius: 8px;
    background-color: rgba(0, 0, 0, 0.6);
    opacity: 0;
    transition: opacity 0.3s ease-in-out;
}

.wishlist-item:hover .remove-btn {
    opacity: 1; 
}

.wishlist-item .movie-title {
    position: absolute;
    bottom: -50px; 
    left: 0;
    width: 100%; 
    color: #fff; 
    font-size: 14px;
    font-weight: bold;
    text-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
    background-color: rgba(0, 0, 0, 0.6); 
    padding: 4px 6px;
    border-radius: 5px;
    text-align: center;
    transition: bottom 0.3s ease-in-out, opacity 0.3s ease-in-out; 
    opacity: 0; 
}

.wishlist-item:hover .movie-title {
    bottom: 0; 
    opacity: 1; 
}

.notification {
    position: fixed;
    bottom: 20px; 
    left: 50%;
    transform: translateX(-50%);
    background-color: red; 
    color: #fff; 
    padding: 15px;
    border-radius: 5px;
    box-shadow: 0 2px 10px rgba(0, 0, 0, 0.2);
    opacity: 0; 
    visibility: hidden; 
    transition: opacity 0.5s ease, visibility 0.5s ease; 
    z-index: 2000;
    font-size: 1rem;
    text-align: center;
}

.notification.show {
    opacity: 1; 
    visibility: visible; 
}

.notification.error {
    background-color: #f44336; 
}
</style>
