<script>
import axios from 'axios';


export default {
    data() {
        return {
            projects: [],
            currentPage: 1,
            totalPages: 1
        }
    },
    methods: {
        getProject(page = 1) {
            axios.get('http://127.0.0.1:8000/api/project/', {
                params: {
                    page: page
                }
            })
                .then((response) => {
                    console.log(response.data.results.data);
                    this.projects.push(...response.data.results.data);
                    console.log(this.currentPage, page);
                    this.currentPage = page;
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
    created() {
        this.getProject();
    }
}
</script>

<template>
    <section class="container">

        <article class="singleCard" v-for="project in projects">
            <p>
                {{ project.id }}
            </p>
            <p>
                <RouterLink :to="{name: 'single-project', params: {id: project.id}}">
                    {{ project.nome }}
                </RouterLink>
            </p>
            <p>
                <a :href="project.url_repo">{{ project.url_repo }}</a>
            </p>
        </article>

        <div>
            <button @click.prevent="getProject(currentPage +1)" class="custom-btn btn-2">Carica altro</button>
        </div>
    </section>
</template>

<style lang="scss">
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


/* bottone */
.custom-btn {
    margin-top: 1rem;
    width: 130px;
    height: 40px;
    color: #fff;
    border-radius: 5px;
    padding: 10px 25px;
    font-family: 'Lato', sans-serif;
    font-weight: 500;
    background: transparent;
    cursor: pointer;
    transition: all 0.3s ease;
    position: relative;
    display: inline-block;
    box-shadow: inset 2px 2px 2px 0px rgba(255, 255, 255, .5),
        7px 7px 20px 0px rgba(0, 0, 0, .1),
        4px 4px 5px 0px rgba(0, 0, 0, .1);
    outline: none;
    font-size: 15px;
}

.btn-2 {
    background: #004dff;
    background: linear-gradient(0deg, #004dff 0%, #004dff 100%);
    border: none;
}

.btn-2:before {
    height: 0%;
    width: 2px;
}

.btn-2:hover {
    box-shadow: 4px 4px 6px 0 rgba(255, 255, 255, .5),
        -4px -4px 6px 0 rgba(116, 125, 136, .5),
        inset -4px -4px 6px 0 rgba(255, 255, 255, .2),
        inset 4px 4px 6px 0 rgba(0, 0, 0, .4);
}
</style>