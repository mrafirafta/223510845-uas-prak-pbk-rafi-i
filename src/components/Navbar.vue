<template>
  <nav>
    <h2>Widget Weather</h2>
    <div class="dropdown" @click="toggleDropdown">
      <button class="nav-button">Pilih Tugas</button>
      <ul class="dropdown-menu" :class="{ 'show-dropdown': dropdownOpen }">
        <li><a href="https://m-rafi-i-rafta-223510845.vercel.app/">Tugas 1</a></li>
        <li><a href="https://223510845-tgs4pbkprak-mrafiirafta.netlify.app/">Tugas 2</a></li>
        <li><a href="https://223510845-muhammadrafiirafta.netlify.app/">Tugas 3</a></li>
        <li><a href="https://223510845-tgs4pbkprak-mrafiirafta.netlify.app/">Tugas 4</a></li>
        <li><a href="https://prakpbk5dan6.netlify.app/">Tugas 5</a></li>
        <li><a href="https://223510845-muhammadrafi-tgs6.netlify.app/">Tugas 6</a></li>
      </ul>
    </div>
  </nav>
</template>

<script>
export default {
  name: 'Navbar',
  data() {
    return {
      dropdownOpen: false
    }
  },
  methods: {
    toggleDropdown() {
      this.dropdownOpen = !this.dropdownOpen;
    }
  }
}
</script>

<style scoped>
nav {
  background: linear-gradient(135deg, #8e44ad, #3498db);
  padding: 1rem 2rem;
  position: fixed;
  top: 0;
  width: 100%;
  z-index: 1000;
  display: flex;
  justify-content: space-between;
  align-items: center;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
}

h2 {
  color: white;
  margin: 0;
  font-size: 1.5rem;
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
}

.dropdown {
  position: relative;
}

.nav-button {
  background-color: #f39c12;
  color: #fff;
  border: none;
  padding: 0.5rem 1rem;
  font-size: 1rem;
  font-weight: bold;
  border-radius: 25px;
  cursor: pointer;
  transition: background-color 0.3s ease, transform 0.3s ease;
}

.nav-button:hover {
  background-color: #e67e22;
  transform: scale(1.05);
}

.dropdown-menu {
  position: absolute;
  top: calc(100% + 5px);
  right: 0;
  background: linear-gradient(135deg, #3498db, #2980b9);
  box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2);
  border-radius: 8px;
  overflow: hidden;
  z-index: 1001;
  padding: 0.5rem 0;
  opacity: 0;
  transform: translateY(-10px);
  transition: opacity 0.3s ease, transform 0.3s ease;
  width: 160px;
}

.show-dropdown {
  opacity: 1;
  transform: translateY(0);
}

.dropdown-menu li {
  list-style: none;
}

.dropdown-menu li a {
  display: block;
  padding: 0.75rem 1.5rem;
  color: white;
  text-decoration: none;
  font-weight: bold;
  transition: background-color 0.3s ease, color 0.3s ease;
}

.dropdown-menu li a:hover {
  background-color: rgba(255, 255, 255, 0.2);
  color: #f39c12;
}
</style>
