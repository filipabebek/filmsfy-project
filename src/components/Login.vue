<script setup>
import { ref, onMounted } from 'vue';
import { useRouter } from 'vue-router';

const isLoginForm = ref(true);
const loginEmail = ref('');
const loginPassword = ref('');
const signupEmail = ref('');
const signupPassword = ref('');
const loginMessage = ref('');
const signupMessage = ref('');
const router = useRouter();

// Function to check login status
const checkLoginStatus = () => {
  const loggedIn = localStorage.getItem('loggedIn') === 'true';
  if (loggedIn) {
    // If user is already logged in, redirect to home
    router.push('/');
  }
};

// Initialize login status on component mount
onMounted(() => {
  checkLoginStatus();
});

const handleLogin = () => {
  const storedUser = JSON.parse(localStorage.getItem(loginEmail.value));

  if (!loginEmail.value || !loginPassword.value) {
    loginMessage.value = 'Please fill in all fields.';
    return;
  }

  if (!storedUser || storedUser.password !== loginPassword.value) {
    loginMessage.value = 'Account does not exist or incorrect password.';
    return;
  }

  localStorage.setItem('loggedIn', 'true');
  localStorage.setItem('userEmail', loginEmail.value);

  // Trigger a recheck of login status in navbar
  const event = new Event('loginStatusChanged');
  window.dispatchEvent(event);

  router.push('/'); // Redirect to home page
};

const handleSignUp = () => {
  if (!signupEmail.value || !signupPassword.value) {
    signupMessage.value = 'Please fill in all fields.';
    return;
  }

  const existingUser = localStorage.getItem(signupEmail.value);
  if (existingUser) {
    signupMessage.value = 'Account with this email already exists.';
    return;
  }

  const user = {
    email: signupEmail.value,
    password: signupPassword.value,
  };

  localStorage.setItem(signupEmail.value, JSON.stringify(user));
  localStorage.setItem('loggedIn', 'true');
  localStorage.setItem('userEmail', signupEmail.value);

  // Trigger a recheck of login status in navbar
  const event = new Event('loginStatusChanged');
  window.dispatchEvent(event);

  router.push('/'); // Redirect to home page
};
</script>

<template>
  <main>
    <div class="background-container">
      <section class="auth-form">
        <div id="authContainer">
          <div v-if="isLoginForm" class="form-container">
            <h3>Login</h3>
            <form @submit.prevent="handleLogin">
              <label for="loginEmail">Email:</label>
              <input type="email" id="loginEmail" v-model="loginEmail" required />
              <label for="loginPassword">Password:</label>
              <input type="password" id="loginPassword" v-model="loginPassword" required />
              <button type="submit">Login</button>
              <p v-if="loginMessage" class="message">{{ loginMessage }}</p>
            </form>
            <p>Don't have an account? <a href="#" @click="isLoginForm = false">Sign Up</a></p>
          </div>

          <div v-else class="form-container">
            <h3>Sign Up</h3>
            <form @submit.prevent="handleSignUp">
              <label for="signupEmail">Email:</label>
              <input type="email" id="signupEmail" v-model="signupEmail" required />
              <label for="signupPassword">Password:</label>
              <input type="password" id="signupPassword" v-model="signupPassword" required />
              <button type="submit">Sign Up</button>
              <p v-if="signupMessage" class="message">{{ signupMessage }}</p>
            </form>
            <p>Already have an account? <a href="#" @click="isLoginForm = true">Login</a></p>
          </div>
        </div>
      </section>
    </div>
  </main>
</template>

<style scoped>
.background-container{
  background-image: url('@/assets/img/wallpaper.jpg');
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  background-attachment: fixed;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  margin: 0;
}


.background-container::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.6); /* Dark overlay with 60% opacity */
    z-index: 0; /* Place overlay behind other content */
}

/* Styling for the auth-form section */
.auth-form {
    background: rgba(0, 0, 0, 0.85); /* Darker background with slight transparency */
    border-radius: 8px;
    box-shadow: 0 4px 20px rgba(0, 0, 0, 0.5);
    max-width: 400px;
    width: 100%;
    padding: 40px;
    box-sizing: border-box;
    position: relative;
}

/* Header styling inside form */
.auth-form h2 {
    margin-bottom: 30px;
    font-size: 32px;
    color: #e50914; /* Netflix red */
    text-align: center;
    font-weight: bold;
}

/* Form container styling */
.form-container {
    display: flex;
    flex-direction: column;
}

/* Form section heading */
.form-container h3 {
    margin-bottom: 30px;
    font-size: 32px;
    color: #fff;
    font-weight: bold;
    text-align: center;
}

/* Styling for labels */
.form-container label {
    margin-bottom: 8px;
    color: #ddd;
}

/* Styling for input fields */
.form-container input {
    padding: 15px;
    border: 1px solid #444;
    border-radius: 5px;
    margin-bottom: 20px;
    font-size: 16px;
    width: 100%;
    background: #333; /* Dark background for inputs */
    color: #fff; /* Light text color */
}

/* Button styling */
.form-container button {
    padding: 15px;
    border: none;
    border-radius: 5px;
    background: #e50914; /* Netflix red */
    color: #fff;
    font-size: 18px;
    cursor: pointer;
    transition: background 0.3s, transform 0.3s;
    width: 100%;
}

/* Button hover effect */
.form-container button:hover {
    background: #f40612; /* Slightly lighter red */
    transform: scale(1.02); /* Slightly enlarge on hover */
}

/* Error message styling */
.message {
    color: #f40612; /* Bright red for error messages */
    font-size: 14px;
    margin-top: -10px;
    margin-bottom: 20px;
}

/* Styling for links */
.form-container p {
    font-size: 14px;
    text-align: center;
    margin-top: 10px;
}

.form-container a {
    color: #e50914; /* Match button color for consistency */
    text-decoration: none;
    font-weight: bold;
}

.form-container a:hover {
    text-decoration: underline;
}
</style>