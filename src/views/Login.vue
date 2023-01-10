<template>
  <div class="card">
    <h1 class="card__title" v-if="mode == 'login'">Connexion</h1>
    <h1 class="card__title" v-else>Inscription</h1>
    <p class="card__subtitle" v-if="mode == 'login'">Tu n'as pas encore de compte ? <span class="card__action" @click="switchToCreateAccount()">Créer un compte</span></p>
    <p class="card__subtitle" v-else>Tu as déjà un compte ? <span class="card__action" @click="switchToLogin()">Se connecter</span></p>
    <div class="form-row">
      <input v-model="email" class="form-row__input" type="text" placeholder="Adresse mail"/>
    </div>
    <div class="form-row" v-if="mode == 'create'">
      <input v-model="pseudo" class="form-row__input" type="text" placeholder="Pseudo"/>
    </div>
    <div class="form-row">
      <input v-model="password" class="form-row__input" type="password" placeholder="Mot de passe"/>
    </div>
    <div class="form-row" v-if="mode == 'create'">
      <input v-model="confirmpassword" class="form-row__input" type="password" placeholder="Confirmer mot de passe"/>
    </div>
    
    <!-- TODO status handle -->
    <div class="form-row" v-if="mode == 'login' && status == 'error_login'">
      Adresse mail et/ou mot de passe invalide
    </div>
    <div class="form-row" v-if="mode == 'create' && status == 'error_create'">
      Adresse mail déjà utilisée
    </div>
    <div class="form-row">
      <button @click="login()" class="button" :class="{'button--disabled' : !validatedFields}" v-if="mode == 'login'">
        <span v-if="status == 'loading'">Connexion en cours...</span>
        <span v-else>Connexion</span>
      </button>
      <button @click="createAccount()" class="button" :class="{'button--disabled' : !validatedFields}" v-else>
        <span v-if="status == 'loading'">Création en cours...</span>
        <span v-else>Créer mon compte</span>
      </button>
    </div>
  </div>
</template>

<script>
import axios from "axios";
const customConfig = {
    headers: {
    'Content-Type': 'application/x-www-form-urlencoded'
    }
};

export default{
    data() {
        return {
            mode: 'login',
            email: '',
            pseudo: '',
            password: '',
            confirmpassword: '',
        }
    },
    computed: {
    validatedFields: function () {
      if (this.mode == 'create') {
        if (this.email != "" && this.pseudo != "" && this.password != "" && this.confirmpassword != "") {
          return true;
        } else {
          return false;
        }
      } else {
        if (this.email != "" && this.password != "") {
          return true;
        } else {
          return false;
        }
      }
    },
    },
    methods: {
        switchToCreateAccount: function () {
            this.mode = 'create';
        },
        switchToLogin: function () {
            this.mode = 'login';
        },

        createAccount: function () {
            var data = new FormData();
            data.append('pseudo', this.pseudo);
            data.append('email', this.email);
            data.append('password', this.password);
            data.append('confirmpassword', this.confirmpassword);
            axios.post('http://api-wool.just-kiel.fr/router/' + 'adduser', data, customConfig)
            .then(function (response) {
                console.log(response);
                console.log(response.data);
            })
            .catch(function (error) {
                console.log(error);
            });
        },
        
        login: function () {
            var data = new FormData();
            data.append('email', this.email);
            data.append('password', this.password);

            axios.post('http://api-wool.just-kiel.fr/router/' + 'connect', data, customConfig)
            .then(function (response) {
                console.log(response);
                localStorage.setItem('userID', response.data.userID);
                localStorage.setItem('pseudo', response.data.pseudo);
                localStorage.setItem('email', response.data.mail);
                window.location.href = "/profile";
            })
            .catch(function (error) {
                console.log(error);
            });
        },
    },
}
</script>


<style scoped>
  .form-row {
    display: flex;
    margin: 16px 0px;
    gap:16px;
    flex-wrap: wrap;
  }
  .form-row__input {
    padding:8px;
    border: none;
    border-radius: 8px;
    background:#f2f2f2;
    font-weight: 500;
    font-size: 16px;
    flex:1;
    min-width: 100px;
    color: black;
  }
  .form-row__input::placeholder {
    color:#aaaaaa;
  }
</style>