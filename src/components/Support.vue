<script setup>
import { reactive } from 'vue';

import wallpaper from '@/assets/img/wallpaper.jpg';

const form = reactive({
  name: '',
  email: '',
  subject: '',
  message: ''
});

const handleSubmit = () => {
  if (form.name && form.email && form.subject && form.message) {
    alert('Thank you for your message! We will get back to you shortly.');
    form.name = '';
    form.email = '';
    form.subject = '';
    form.message = '';
  } else {
    alert('Please fill in all fields.');
  }
};


</script>

<template>
  <div class="background-container">
    <div class="contact-container">
      <div class="form-header">
        <h2>Contact Us</h2>
        <p>We would love to hear from you!</p>
      </div>
      <form @submit.prevent="handleSubmit" class="contact-form">
        <div class="form-group">
          <label for="name">Your Name</label>
          <input v-model="form.name" type="text" id="name" name="name" placeholder="Enter your name" required />
        </div>
        <div class="form-group">
          <label for="email">Your Email</label>
          <input v-model="form.email" type="email" id="email" name="email" placeholder="Enter your email" required />
        </div>
        <div class="form-group">
          <label for="subject">Subject</label>
          <input v-model="form.subject" type="text" id="subject" name="subject" placeholder="Enter the subject" required />
        </div>
        <div class="form-group">
          <label for="message">Your Message</label>
          <textarea v-model="form.message" id="message" name="message" placeholder="Enter your message" rows="5" required></textarea>
        </div>
        <div class="form-footer">
          <button type="submit" class="submit-btn">Send Message</button>
          <router-link to="/" class="back-btn">Back to Movies</router-link>
        </div>
      </form>
    </div>
  </div>
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
    background: rgba(0, 0, 0, 0.6); 
    z-index: -1; 
}

.contact-container {
    background: rgba(0, 0, 0, 0.8); 
    padding: 30px;
    border-radius: 10px;
    box-shadow: 0 8px 16px rgba(0, 0, 0, 0.1);
    max-width: 500px;
    width: 100%;
    margin-left: 50px;
    backdrop-filter: blur(10px); 
    color: #ffffff; 
}

.form-header h2 {
    margin: 0 0 10px;
    font-size: 24px;
    color: white; 
}

.form-header p {
    margin: 0 0 20px;
    font-size: 16px;
    color: #dddddd; 
}

.contact-form .form-group {
    margin-bottom: 20px;
    margin-right: 20px;
}

.contact-form .form-group label {
    display: block;
    font-weight: bold;
    margin-bottom: 8px;
    color: #bbbbbb; 
}

.contact-form .form-group input,
.contact-form .form-group textarea {
    width: 100%;
    padding: 10px;
    border: 1px solid #444;
    border-radius: 5px;
    font-size: 16px;
    color: #ffffff; 
    background-color: rgba(0, 0, 0, 0.7); 
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.05);
    transition: border-color 0.3s ease, box-shadow 0.3s ease;
}

.contact-form .form-group input:focus,
.contact-form .form-group textarea:focus {
    border-color: #007BFF;
    box-shadow: 0 0 5px rgba(0, 123, 255, 0.5);
    outline: none;
}

.form-footer {
    display: flex;
    justify-content: space-between;
    align-items: center;
}

.submit-btn {
    background: red;
    color: #fff;
    padding: 10px 20px;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    font-size: 16px;
    transition: background 0.3s ease;
}

.submit-btn:hover {
    background: red;
}

.back-btn {
    text-decoration: none;
    color: white;
    font-size: 16px;
    transition: color 0.3s ease;
}

.back-btn:hover {
    color: red;
}
</style>