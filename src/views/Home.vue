<template>
    <h1>Bienvenue !</h1>

    <button @click="newProject">+ Créer un projet</button>

    <textarea name="" id="" cols="30" rows="1" v-if="mode == 'yes'"></textarea>

    <li v-for="(index) in nbProjects" :key="index">Projet {{ index }} </li>
</template>

<script>
export default {
    data() {
        return {
            nbProjects: 0,
            mode: 'no'
        }
    },
    methods: {
        newProject(){
            this.mode = 'yes';
            this.nbProjects++;
        }
    },
}
</script>