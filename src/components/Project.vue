<template>
<i-modal v-model="visible">
  <template #header>
    {{ project_name }}
  </template>

    Description :
    {{ project_description }}


    <div class="subparts" v-if="checkProject[0] != null">
        <h2>Mes sous-parties :</h2>
        
        <div class="subpart" v-for="(subpart) in checkProject" :key="subpart">
          <h4>{{ subpart.nameSubpart }}</h4>

          <i-button-group>
            <!-- TODO go to subpart -->
            <i-button color="secondary">Aller</i-button>

            <!-- TODO add delete subpart obviously -->
            <i-button color="danger">Supprimer</i-button>
          </i-button-group>
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
  export default {
    name: 'Project',
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

        var newSubpart = { "nameSubpart": this.nameSubpart, "counters": null };

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
      // var data = [];
      // var tempCount = 0;
      var countSubpart = JSON.parse(localStorage.getItem("project_" + this.project_id));
      // console.log(countSubpart.subparts.length)
      
      // while(countCounter >= tempCount){
      //     var temp = JSON.parse(localStorage.getItem('project_' + tempCount));

      //     if (temp != null) {
      //         data.push(temp);
      //     }

      //     tempCount++;
      // }

      // console.log(data)
      return countSubpart.subparts
      }
    },
  };
</script>