<script>
import ProjectCard from '../components/ProjectCard.vue';

export default {
    components:{
        ProjectCard,
    },
    data() {
        return {

        }
    },
}
</script>

<template>
    <main>
        <h1>I miei progetti</h1>
        <ProjectCard/>
    </main>
</template>

<style lang="scss" scoped>
    h1{
        text-align: center;
    }
</style>