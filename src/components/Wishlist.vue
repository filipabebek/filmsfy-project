<template>
  <section class="wishlist">
    <h2 class="heading">My Wishlist</h2>
    <div id="wishlist-container" class="wishlist-container">
      <!-- Render wishlist items here -->
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
      <!-- Additional wishlist content here -->
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

// Load wishlist data when the component is mounted
onMounted(() => {
  loadWishlist();
});

function loadWishlist() {
  let savedWishlist = JSON.parse(localStorage.getItem('wishlist')) || [];
  console.log(savedWishlist); // Check the logged output
  wishlist.value = savedWishlist;
  
  if (savedWishlist.length === 0) {
    notificationMessage.value = 'Your wishlist is empty.';
  }
}

function removeFromWishlist(index) {
  let savedWishlist = JSON.parse(localStorage.getItem('wishlist')) || [];
  const removedMovie = savedWishlist[index];
  savedWishlist.splice(index, 1); // Remove the movie at the specified index
  localStorage.setItem('wishlist', JSON.stringify(savedWishlist));
  
  wishlist.value = savedWishlist; // Update the wishlist in the component

  // Show notification for removal
  showNotification(`${removedMovie.title} has been removed from your wishlist.`);
}

function showNotification(message, isError = false) {
  notificationMessage.value = message;
  const notificationElement = document.getElementById('notification');
  notificationElement.className = isError ? 'notification error show' : 'notification show';
  
  // Show the notification
  notificationElement.classList.add('show');
  
  // Hide the notification after 2.5 seconds
  setTimeout(() => {
    notificationElement.classList.remove('show');
  }, 2500); // Adjust the time as needed
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
    max-width: 800px; /* Adjust the max-width to fit your needs */
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
  
 /* Wishlist item styling */
 .wishlist-item {
    position: relative;
    width: 200px; /* Adjust the width to fit the image size */
    height: 280px; /* Adjust the height to fit the image size */
    border-radius: 10px;
    overflow: hidden;
    cursor: pointer;
    background-color: #fff;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
    transition: transform 0.3s ease-in-out;
}

/* Hover effect for wishlist item */
.wishlist-item:hover {
    transform: scale(1.05);
}

/* Image styling */
.wishlist-item img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-radius: 10px 10px 0 0;
}

/* Remove button styling */
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
    opacity: 0; /* Initially hide the button */
    transition: opacity 0.3s ease-in-out; /* Smooth transition for visibility */
}

/* Show remove button on hover */
.wishlist-item:hover .remove-btn {
    opacity: 1; /* Show the button on hover */
}

/* Movie title styling */
.wishlist-item .movie-title {
    position: absolute;
    bottom: -50px; /* Initially position the title below the item */
    left: 0;
    width: 100%; /* Full width of the item */
    color: #fff; /* White text for better contrast */
    font-size: 14px;
    font-weight: bold;
    text-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
    background-color: rgba(0, 0, 0, 0.6); /* Semi-transparent background */
    padding: 4px 6px;
    border-radius: 5px;
    text-align: center;
    transition: bottom 0.3s ease-in-out, opacity 0.3s ease-in-out; /* Smooth transition for visibility */
    opacity: 0; /* Initially hide the title */
}

/* Show movie title on hover */
.wishlist-item:hover .movie-title {
    bottom: 0; /* Move title into view */
    opacity: 1; /* Show the title on hover */
}

/* Notification at the bottom of the screen */
.notification {
    position: fixed;
    bottom: 20px; /* Space from the bottom of the screen */
    left: 50%;
    transform: translateX(-50%);
    background-color: red; /* Dark background */
    color: #fff; /* White text */
    padding: 15px;
    border-radius: 5px;
    box-shadow: 0 2px 10px rgba(0, 0, 0, 0.2);
    opacity: 0; /* Hidden by default */
    visibility: hidden; /* Hide notification */
    transition: opacity 0.5s ease, visibility 0.5s ease; /* Smooth transition */
    z-index: 2000;
    font-size: 1rem;
    text-align: center;
}

.notification.show {
    opacity: 1; /* Make notification visible */
    visibility: visible; /* Ensure it's visible */
}

.notification.error {
    background-color: #f44336; /* Red background for error messages */
}
</style>
