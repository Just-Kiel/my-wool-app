<template>
  <!-- Router permettant de diriger vers les différentes views de la web app -->
  <nav>
    <router-link to="/">Accueil</router-link> | 
    <router-link to="/about">A propos</router-link> |
    <router-link to="/profile" v-if="userID != undefined">Profil</router-link>
    <router-link to="/login" v-else>Se connecter</router-link>
    
  </nav>
  <router-view/>
  <Contact />
</template>

<script>
import Contact from './components/Contact.vue'

export default {
  name: 'App',
  data() {
    return {
      userID: localStorage.getItem('userID'),
    }
  },
  components: {
    Contact
  }
}
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>

<style>
@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;800&display=swap');
* {
  font-family: 'Poppins', sans-serif;
  margin:0;
  padding: 0;
  box-sizing: border-box;
}
body {
  background-image: linear-gradient(62deg, #FBAB7E 0%, #F7CE68 100%);
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
  padding:32px;
}
img {
  max-width: 100%;
  border-radius: 8px;
}
/* .card {
  margin: auto;
  max-width: 100%;
  width: 540px;
  background:white;
  border-radius: 16px;
  padding:32px;
}
.card__title {
  text-align:center;
  font-weight: 800;
}
.card__subtitle {
  text-align: center;
  color:#666;
  font-weight: 500;
} */
  
  /* .card__action {
    color:#2196F3;
    text-decoration: underline;
  }
  .card__action:hover {
    cursor:pointer;
  } 
  */
  .button--disabled {
    background:#cecece;
    color:#ececec
  }
  .button--disabled:hover {
    cursor:not-allowed;
    background:#cecece;
  }
</style>
