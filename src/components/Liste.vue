<template>
    <div class="liste">
        <button @click="showProject"> {{ project_name }} </button>

        <Project
            @delete="deleteProject"
            v-show="isProjectVisible"
            @close="closeProject"
            :project_name="project_name"
            :project_description="project_description"
            :project_id="project_id"
        />
    </div>
</template>

<script>
import Project from '../components/Project.vue'

export default {
    name: 'Liste',
    props: {
        project_name: String,
        project_description: String,
        project_id: Number,
    },
    components: {
        Project,
    },
    data() {
        return {
            isProjectVisible: false,
        }
    },
    methods: {
        deleteProject() {
            this.$emit('delete', this.project_id);
        },

        showProject() {
            this.isProjectVisible = true;
        },
        
        closeProject() {
            this.isProjectVisible = false;
        },
    },
}
</script>