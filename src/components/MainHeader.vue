<script>
export default{
    data() {
        return{
            navLinkNames: [
                {
                    label: "Home",
                    name: "home"

                },
                {
                    label: "Project",
                    name: "project"

                },
                {
                    label: "About",
                    name: "about"

                },
            ]
        }
    }
}
</script>

<template>
    <header class="container">
        <nav>
            <ul>
                <li v-for="navItem in navLinkNames">
                    <RouterLink :to="{ name: navItem.name }">
                        {{ navItem.label }}
                    </RouterLink>
                </li>
            </ul>
        </nav>
    </header>
</template>

<style lang="scss">
    .container{
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    
}
nav{
    margin: .5rem 0;
    background: #fff;
    border-radius: 50px;
    padding: 10px;
    box-shadow: 0 25px 20px -20px rgba(0, 0, 0, 0.4);
}
nav ul li{
    list-style: none;
    display: inline-block;
    padding: 13px 35px;
    margin: 10px;
    font-size: 18px;
    font-weight: 500;
    color: #777;
    cursor: pointer;
    position: relative;
    z-index: 2;
    transition: color 0.5s;
}
nav ul li:after{
    content: '';
    background-color: #19978F;
    width: 100%;
    height: 100%;
    border-radius: 30px;
    position: absolute;
    top: 100%;
    left: 50%;
    transform: translate(-50%, -50%);
    z-index: -1;
    opacity: 0;
    transition: top 0.5s, opacity 0.5s;
}
nav ul li:hover{
    color: #fff;
}
nav ul li:hover::after{
    top: 50%;
    opacity: 1;
}
</style>