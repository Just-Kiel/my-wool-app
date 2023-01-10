<template>
<i-modal v-model="visible">
  <template #header>
    {{ project_name }}
  </template>

    Description :
    {{ project_description }}


    <div class="subparts" v-if="checkProject[0] != null">
        <h2>Mes sous-parties :</h2>
        
        <div class="subpart" v-for="(subpart, index) in checkProject" :key="subpart">

          <Subpart
            :project_name="project_name"
            :subpart_name="subpart.nameSubpart"
            :project_id="project_id"
            :subpart_id="index"
          />
        </div>
    </div>

    <br>
    <i-form-group inline>
      <i-input v-model="nameSubpart" placeholder="Nom de la sous-partie..." />
      <i-button color="secondary" placement="right" @click="createSubpart">Ajouter une sous-partie</i-button>
    </i-form-group>

    <br>

    <i-button color="danger" @click="deleteProject()">Supprimer</i-button>

  <template #footer v-if="pseudo != undefined">
    My Wool App - {{ pseudo }}
  </template>
</i-modal>
</template>

<script>
import Subpart from './Subpart.vue'
  export default {
    name: 'Project',
    components: {
      Subpart,
    },
    data() {
        return {
            pseudo : localStorage.pseudo,
            nameSubpart: ''
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
      },

      createSubpart: function() {
        var tempName = 'project_' + this.project_id;

        var newSubpart = { "nameSubpart": this.nameSubpart, "counters": [] };

        var sessionData = JSON.parse(localStorage.getItem(tempName));

        var tempSubpart = sessionData.subparts;

        tempSubpart.push(newSubpart);

        sessionData.subparts = tempSubpart;

        localStorage.setItem(tempName, JSON.stringify(sessionData));
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

    checkProject() {
      var countSubpart = JSON.parse(localStorage.getItem("project_" + this.project_id));

      return countSubpart.subparts
      }
    },
  };
</script>