<template>
  <div class="card">
    <h1 class="card__title">Espace Perso</h1>
    <p class="card__subtitle">Voilà donc qui je suis...</p>
    <p>{{pseudo}} {{email}}</p>
    <!-- <img :src="user.photo"/> -->
    <div class="form-row">
      <button @click="logout()" class="button">
        Déconnexion
      </button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Profile',
  data() {
    return {
        pseudo : localStorage.pseudo,
        email: localStorage.email,
    }
  },
  methods: {
    logout: function () {
        localStorage.clear();
        window.location.href = "/";
    }
  }
}
</script>

<style scoped>
</style>