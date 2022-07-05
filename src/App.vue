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
                <RouterLink to="/" id="name">{{
                        store.texts.name
                }}</RouterLink>
            </li>
            <li class="menu-hided" id="hidable">
                <a @click="showmenu" href="#aboutme" id="menu-item-home" class="menu-item">{{
                        store.texts.menu.about
                }}</a>
                <a @click="showmenu" href="#timeline" id="menu-item-home" class="menu-item">{{
                        store.texts.menu.experience
                }}</a>
                <a @click="showmenu" href="#skills" id="menu-item-home" class="menu-item">{{
                        store.texts.menu.skills
                }}</a>
                <a @click="showmenu" href="#contact" id="menu-item-contact"
                    class="menu-item hero__scroll aos-init aos-animate">{{
                            store.texts.menu.contact
                    }}</a>
            </li>
            <li id="hamburger">
                <div id="menu_button">
                    <input type="checkbox" id="menu_checkbox">
                    <label for="menu_checkbox" id="menu_label" @click="showmenu">
                        <div id="menu_text_bar"></div>
                    </label>
                </div>
            </li>
        </ul>
    </header>

    <Cookiebar />

    <main>
        <RouterView />
    </main>



    <footer>
        <p>© 2022 {{ store.texts.name }}</p>
        <div>
            <a href="https://www.linkedin.com/in/andr%C3%A1s-pap-519a7b240/" target="_blank"><i class="fa-brands fa-linkedin-in"></i></a>
            <a href="http://m.me/may.rls.andras" target="_blank"><i class="fa-brands fa-facebook-messenger"></i></a>
            <a href="mailto:pap.andras@novalabs.hu"><i class="fa-solid fa-at"></i></a>
        </div>
    </footer>
</template>

<script>
import Cookiebar from './components/Cookiebar.vue'

export default {
    data() {
        return {
            windowWidth: window.innerWidth
        }
    },
    components: {
        Cookiebar,
    },
    methods: {
        showmenu() {
            document.getElementById("hidable").classList.toggle("menu-hided")
            document.getElementById("hidable").classList.toggle("menu-visible")
            document.getElementsByTagName("main")[0].classList.toggle("menu-hided")
            document.getElementsByTagName("footer")[0].classList.toggle("footer")
        }
    },
    mounted() {
        /*setTimeout(() => {
            document.getElementsByTagName("header")[0].classList.add("header")
        }, 5000)*/
    },
    watch: {
        windowWidth(newval, oldval) {
            if (newval != oldval) {
                console.log(newval)
            }
        }
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