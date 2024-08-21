<script>
import axios from 'axios';


export default{
    data() {
        return{
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
    <section class="container" >

        <article class="singleCard" v-for="project in projects">
            <p>
                {{ project.id }}
            </p>
            <p>
                {{ project.nome }}
            </p>
            <p>
                <a :href="project.url_repo">{{ project.url_repo }}</a>
            </p>
        </article >
            
        <div>
            
        </div>
    </section>
</template>

<style lang="scss">


    .container{
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
        margin: 0 auto;
        width: 80vw;
        
    }

    .singleCard{
        display: flex;
        align-items: center;
        margin-bottom: 0.3rem;
        width: 100%;
        height: 40px;
        background-color: antiquewhite;
        border: .5px solid rgb(253, 217, 169);
        p:nth-child(1){
                width: 20%;
                flex-grow: 1;
                margin: 1rem;
        }
        p:nth-child(2){
            width: 40%;
                flex-grow: 2;
                margin-right: 1rem;
        }
        p:nth-child(3){
            width: 40%;
                flex-grow: 3;
                margin-right: 1rem;
        }
    }
</style>