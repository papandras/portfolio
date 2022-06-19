<script setup>
import { RouterLink, RouterView } from 'vue-router'
import { useStore } from "@/stores/lang.js"

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
            <li id="hidable">
                <RouterLink to="/" id="menu-item-home" class="menu-item">{{
                        store.texts.menu.home
                }}</RouterLink>
                <RouterLink to="/contact" id="menu-item-contact" class="menu-item">{{
                        store.texts.menu.contact
                }}</RouterLink>
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

    <RouterView />

    <footer>
        <p>© 2022 {{ store.texts.name }}</p>
    </footer>
</template>

<script>
export default {
    data() {
        return {
            windowWidth: window.innerWidth
        }
    },
    methods: {
        showmenu() {
            if (document.getElementById("hidable").style.display == "block") {
                document.getElementById("hidable").style.display = "none"
            } else {
                document.getElementById("hidable").style.display = "block"
            }
        }
    },
    mounted() {
        setTimeout(() => {
            document.getElementsByTagName("header")[0].classList.add("header")
        }, 5000)
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