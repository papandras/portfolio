<script setup>
import { RouterLink, RouterView } from 'vue-router'
import { useStore } from "@/stores/lang.js"
import AOS from "aos";

AOS.init();

const store = useStore()
store.getLang()
</script>

<template>
    <header>
        <ul class="menu">
            <li>
                <!-- <RouterLink to="/" id="name">{{
                        store.texts.name
                }}</RouterLink> -->
                <a @click="showmenu" href="/" id="menu-item-name" class="menu-item">{{
                        store.texts.name
                }}</a>
            </li>
            <li class="menu-hided" id="hidable">
                <a @click="showmenu" href="/#aboutme" id="menu-item-home" class="menu-item">{{
                        store.texts.menu.about
                }}</a>
                <a @click="showmenu" href="/#timeline" id="menu-item-home" class="menu-item">{{
                        store.texts.menu.experience
                }}</a>
                <a @click="showmenu" href="/#skills" id="menu-item-home" class="menu-item">{{
                        store.texts.menu.skills
                }}</a>
                <a @click="showmenu" href="/#contact" id="menu-item-contact"
                    class="menu-item hero__scroll aos-init aos-animate">{{
                            store.texts.menu.contact
                    }}</a>
                <a @click="setLang" id="menu-item-contact"
                    class="menu-item hero__scroll aos-init aos-animate">{{
                            store.texts.menu.language
                    }}</a>
                <a @click="showmenu" v-if="store.isAdmin" href="/admin" id="menu-item-admin"
                    class="menu-item hero__scroll aos-init aos-animate">{{
                            store.texts.menu.admin
                    }}</a>
            </li>
            <li id="hamburger">
                <img src="@/assets/icon/hamburger.svg" alt="Menu icon" class="menu-icon" @click="showmenu">
            </li>
        </ul>
    </header>

  

    <main>
        <Cookiebar />
        <RouterView />
    </main>

    <footer>
        <p>© {{ currentYear }} {{ store.texts.name }}</p>
        <div>
            <a href="https://www.linkedin.com/in/andr%C3%A1s-pap-519a7b240/" target="_blank"><i class="fa-brands fa-linkedin-in"></i></a>
            <a href="http://m.me/may.rls.andras" target="_blank"><i class="fa-brands fa-facebook-messenger"></i></a>
            <a href="mailto:papandras01@gmail.com"><i class="fa-solid fa-at"></i></a>
        </div>
    </footer>
</template>

<script>
import Cookiebar from './components/Cookiebar.vue'

export default {
    data() {
        return {
            store: useStore(),
            currentYear: new Date().getFullYear()
        }
    },
    components: {
        Cookiebar
    },
    methods: {
        showmenu() {
            document.getElementById("hidable").classList.toggle("menu-hided")
            document.getElementById("hidable").classList.toggle("menu-visible")
            document.getElementsByTagName("main")[0].classList.toggle("menu-hided")
            // document.getElementsByTagName("footer")[0].classList.toggle("footer")
        },
        setLang() {
            this.store.setLang()
        }
    },
    async mounted () {
        this.store.getIsAdmin()

        const { isAdmin } = this.store

        console.log('isAdmin', isAdmin)

        const myIp = await fetch('https://api.ipify.org?format=json')
            .then(response => response.json())
            // .then(data => console.log(data.ip));

        if (myIp?.ip === '82.131.152.7') {
            localStorage.setItem('isAdmin', 'true')
        } else {
            localStorage.setItem('isAdmin', 'false')
        }


    },
    beforeMount() {

    }
}
</script>

<style scoped>
    footer > a {
        padding: none;
    }
    footer > div {
        display: flex;
        justify-content: center;
        gap: 5%;
    }
</style>