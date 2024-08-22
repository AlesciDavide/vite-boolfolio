<script>
import axios from 'axios';

export default{
    data() {
        return{
            project: [],
            img: 'http://127.0.0.1:8000/storage/',
        }
    },
    methods: {
        getProject(id) {
            axios.get(`http://127.0.0.1:8000/api/project/${id}`, {
                params: {
                }
            })
                .then((response) => {
                    console.log(response.data.results);
                    this.project = response.data.results;
                    console.log(this.project);
                    this.img += this.project.img;
                    
                })
                .catch((error) => {
                    this.$router.push({name: "404"});
                    console.log(error);
                })
                .finally(function () {
                    // always executed
                });
        },
    },
    created(){
        this.getProject( this.$route.params.id );
        
    }
}
</script>

<template>
    <section class="container">

<article class="singleCard">
    <p>
        {{ this.project.id }}
    </p>
    <p>
        {{ project.nome }}
    </p>
    <p>
        <a :href="project.url_repo">{{ project.url_repo }}</a>
    </p>
</article>

<img :src="img" alt="Immagine non ancora aggiunta">

</section>
</template>

<style lang="scss" scoped>
    .container {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    margin: 0 auto;
    width: 80vw;

}

.singleCard {
    display: flex;
    align-items: center;
    margin-bottom: 0.3rem;
    width: 100%;
    height: 40px;
    background-color: antiquewhite;
    border: .5px solid rgb(253, 217, 169);
    p:nth-child(1) {
        width: 20%;
        flex-grow: 1;
        margin: 1rem;
    }
    
    p:nth-child(2) {
        width: 40%;
        flex-grow: 2;
        margin-right: 1rem;
    }
    

    p:nth-child(3) {
        width: 40%;
        flex-grow: 3;
        margin-right: 1rem;
    }
}
img{
    margin: 0 auto;
    width: 80vw;
    justify-content: center;
    display: flex;
}

</style>