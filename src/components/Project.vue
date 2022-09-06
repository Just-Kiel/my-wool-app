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
            {{ project_name }}
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

            Description :
            {{ project_description }}

            <div class="form-row">
              <!-- TODO add subpart (and delete subpart obviously) -->
                <button class="button">
                    <span>Ajouter une sous-partie</span>
                </button>
            </div>

            <div class="form-row">
                <button @click="deleteProject()" class="button">
                    <span>Supprimer</span>
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
    name: 'Project',
    data() {
        return {
            pseudo : localStorage.pseudo,
            // nameProject: '',
            // descriptionProject: '',
            // countProject: localStorage.count
        }
    },
    props: {
        project_name: String,
        project_description: String,
        project_id: Number,
    },
    methods: {
      close() {
        this.$emit('close');
      },
      deleteProject() {
        localStorage.removeItem('project_' + this.project_id);
        this.$emit('delete');
      }
    },
    computed: {
    validatedFields: function () {
        // if (this.nameProject != "" && this.descriptionProject != "") {
          return true;
        // } else {
        //   return false;
        // }
    },
    },
  };
</script>

<style>
  .modal-backdrop {
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
  }
</style>