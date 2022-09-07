<template>
    <div class="liste">
        <i-button outline color="secondary" @click="visible = true"> {{ project_name }} </i-button>

        <Project
            v-model="visible"
            @delete="deleteProject"
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
            visible: false,
        }
    },
    methods: {
        deleteProject() {
            this.$emit('delete', this.project_id);
        },
    },
}
</script>