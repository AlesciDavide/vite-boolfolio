<script>
import axios from 'axios';

export default {
    data() {
        return {
            projects: [],
        }
    },
    methods: {
        getProject() {
            axios.get('http://127.0.0.1:8000/api/project/', {
                params: {
                    nome: '',
                }
            })
                .then((response) => {
                    console.log(response.data.results.data);
                    this.projects = response.data.results.data;
                })
                .catch(function (error) {
                    console.log(error);
                })
                .finally(function () {
                    // always executed
                });
        }
    },
    created(){
        this.getProject();
    }
}
</script>

<template>
    <main>
        <ul>
            <li v-for="project in projects">
                {{ project.nome }}
            </li>
        </ul>
    </main>
</template>

<style></style>