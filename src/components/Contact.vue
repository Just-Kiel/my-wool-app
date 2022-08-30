<template>
    <div>
        <h1>Contact</h1>
        <li v-for="link in links" :key="link">
            <a v-bind:href="link.url">
                <img v-bind:src="link.img" v-bind:alt="link.index">
                {{ link.index }}
            </a>
        </li>
    </div>
</template>

<script>
export default {
    name: "ContactPage",
    props:{

    },
    data() {
        return {
            links:[
                { index: "Github", url:"https://github.com/Just-Kiel", img: "https://github.githubassets.com/favicons/favicon-dark.png"},
                { index: "Instagram", url:"https://www.instagram.com/_just_kiel_", img: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a5/Instagram_icon.png/32px-Instagram_icon.png"},
                { index:"Linkedin", url:"https://www.linkedin.com/in/aurore-lafaurie-68636b197/", img: "https://static-exp1.licdn.com/sc/h/90y3av2ns08iojcadywbxioqh"}
            ]
        }
    }
}
</script>

<style scoped lang="scss">
*{
    margin-top: 5vh;
    padding-top: 1vh;
    padding-bottom: 1vh;
    background-color: #2c3e50;
}
h1{
    margin: 0;
    color: white;
}
img{
  display: block;
  margin-left: auto;
  margin-right: auto;
  margin-top: 0;
}
li {
  list-style-type: none;
  display: inline-block;
  margin: 0 2vw;
}
a {
  color: #42b983;
}
</style>