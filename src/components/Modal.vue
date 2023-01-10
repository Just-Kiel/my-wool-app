<template>
  <i-modal v-model="visible">
    <template #header>
    Créer un nouveau projet
    </template>

    <i-form-group>
      <i-input v-model="nameProject" placeholder="Nom du projet..." />
      <br>
      <i-input v-model="descriptionProject" placeholder="Description du projet..." />
      <br>
      <i-button color="secondary" placement="right" @click="createProject">Création</i-button>
      <!-- TODO why need to recharge page when project created ? for subparts also -->
    </i-form-group>

    <template #footer v-if="pseudo != undefined">
      My Wool App - {{ pseudo }}
    </template>
  </i-modal>
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