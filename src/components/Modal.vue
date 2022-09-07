<template>
  <transition name="modal-fade">
    <div class="modal-backdrop">
      <div class="modal"
        role="dialog"
        aria-labelledby="modalTitle"
        aria-describedby="modalDescription"
      >
        <header
          class="modal-header"
          id="modalTitle"
        >
          <slot name="header">
            Créer un nouveau projet
          </slot>
          <button
            type="button"
            class="btn-close"
            @click="close"
            aria-label="Close modal"
          >
            Retour
          </button>
        </header>

        <section
          class="modal-body"
          id="modalDescription"
        >
          <slot name="body">
            <div class="form-row">
                <input v-model="nameProject" class="form-row__input" type="text" placeholder="Nom du projet">
            </div>
            
            <div class="form-row">
                <input v-model="descriptionProject" class="form-row__input" type="textarea" placeholder="Description du projet">
            </div>

            <div class="form-row">
                <button @click="createProject()" class="button" :class="{'button--disabled' : !validatedFields}">
                    <span>Création</span>
                </button>
            </div>
          </slot>
        </section>

        <footer class="modal-footer" v-if="pseudo != undefined">
          <slot name="footer">
            My Wool App - {{ pseudo }}
          </slot>
        </footer>
      </div>
    </div>
  </transition>
</template>

<script>
  export default {
    name: 'Modal',
    data() {
        return {
            pseudo : localStorage.pseudo,
            nameProject: '',
            descriptionProject: '',
            countProject: localStorage.count
        }
    },
    props: {
    },
    methods: {
      close() {
        this.$emit('close');
      },
      createProject: function() {
        if(this.countProject == undefined){
            this.countProject = 0;
            localStorage.setItem('count', this.countProject);
        } else {
            this.countProject ++;
            localStorage.setItem('count', this.countProject);
        }
        var tempName = 'project_' + this.countProject;

        let data = '{ "idProject": ' + this.countProject + ', "nameProject": "' + this.nameProject + '", "descriptionProject": "' + this.descriptionProject +'", "subparts": []}';

        localStorage.setItem(tempName, data);
        // console.log(localStorage);

        // var test = JSON.parse(data)
        // console.log(test)
      }
    },
    computed: {
    validatedFields: function () {
        if (this.nameProject != "" && this.descriptionProject != "") {
          return true;
        } else {
          return false;
        }
    },
    },
  };
</script>

<style>
  /* .modal-backdrop {
    position: absolute;
    left: 50vw;
    min-height: 40vh;
    width: 100vw;
    transform: translate(-50%,-25%);
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 3;
    font-family: sans-serif;
  }
  .modal {
    background: #FFFFFF;
    box-shadow: 2px 2px 20px 1px;
    overflow-y: scroll;
    display: flex;
    flex-direction: column;
    position: fixed; 
  }
  .modal-header,
  .modal-footer {
    padding: 15px;
    display: flex;
  }
  .modal-header {
    position: relative;
    border-bottom: 1px solid #eeeeee;
    color: #00aced;
    justify-content: space-between;
  }
  .modal-footer {
    border-top: 1px solid #eeeeee;
    flex-direction: column;
  }
  .modal-body {
    position: relative;
    padding: 20px 10px;
    height: 60vh;
    min-width: 90vw;
    max-width: 90vw;
    overflow-y: auto;
  }
  .btn-close {
    position: absolute;
    top: 0;
    right: 0;
    border: none;
    font-size: 20px;
    padding: 10px;
    cursor: pointer;
    font-weight: bold;
    color: #00aced;
    background: transparent;
  }
  .btn-green {
    color: white;
    background-color: #00aced;
    border: 1px solid #00aced;
    border-radius: 2px;
  }
  .modal-fade-enter,
  .modal-fade-leave-to {
    opacity: 0;
  }
  .modal-fade-enter-active,
  .modal-fade-leave-active {
    transition: opacity .5s ease;
  }
  * {
    font-weight: bold;
  }

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
  } */
</style>