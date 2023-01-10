<template>
    <h1>Bienvenue !</h1>

    <i-button color="secondary" @click="visible = true">+ Créer un projet</i-button>

    <Modal
      v-model="visible"
    />

    <div class="projects" v-if="allProjects[0] != null">
        <h2>Mes projets :</h2>
        
        <div class="project" v-for="(project) in checkProjects" :key="project">
            <Liste @delete="visibilityHidden(project.idProject)"
                :id="project.idProject"
                :project_name="project.nameProject" 
                :project_description="project.descriptionProject"
                :project_id="project.idProject"
            />
        </div>
    </div>
</template>

<script>
import Modal from '../components/Modal.vue'
import Liste from '../components/Liste.vue'

export default {
    components: {
        Modal,
        Liste,
    },
    computed: {
        checkProjects() {
            var data = [];
            var tempCount = 0;
            while(localStorage.count >= tempCount){
                var temp = JSON.parse(localStorage.getItem('project_' + tempCount));

                if (temp != null) {
                    data.push(temp);
                }

                tempCount++;
            }

            // eslint-disable-next-line
            this.allProjects = data;

            // return this.allProjects = data;
            return this.allProjects
        }
    },
    data() {
        return {
            nbProjects: 0,
            // isModalVisible: false,
            isProjectVisible: false,
            allProjects: data,
            visible : false,
        }
    },
    created() {
        // console.log(this.allProjects)
    },
    methods: {
        visibilityHidden(id) {
            var element = document.getElementById(id);

            element.style.display = "none";
        },

        showModal() {
            this.isModalVisible = true;
        },

        closeModal() {
            this.isModalVisible = false;

            var data = [];
            var tempCount = 0;
            while(localStorage.count >= tempCount){
                var temp = JSON.parse(localStorage.getItem('project_' + tempCount));

                if (temp != null) {
                    data.push(temp);
                }

                tempCount++;
            }

            this.allProjects = data;
        },
    },
}

var data = [];

var tempCount = 0;
while(localStorage.count >= tempCount){
    var temp = JSON.parse(localStorage.getItem('project_' + tempCount));

    if (temp != null) {
        data.push(temp);
    }
    
    tempCount++;
}
</script>