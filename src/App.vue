<template>
  <div id="app">
    <Navbar />
    <router-view />
    
    <footer class="footer">
      <p>&copy; 2024 Muhammad Rafi'i Rafta. All rights reserved.</p>
    </footer>
  </div>
</template>

<script>
import Navbar from './components/Navbar.vue'

export default {
  name: 'App',
  components: {
    Navbar
  }
}
</script>

<style>
#app {
  font-family: 'Arial', sans-serif;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
}

.footer {
  background: linear-gradient(45deg, #6a11cb 0%, #2575fc 100%);
  padding: 20px 0;
  color: #ffffff;
  text-align: center;
  position: fixed;
  bottom: 0;
  width: 100%;
}

.footer p {
  margin: 0;
}

</style>
