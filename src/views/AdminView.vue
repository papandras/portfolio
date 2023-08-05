<script setup>
import { useStore } from "@/stores/lang.js"

const store = useStore()
store.getLang()
</script>

<template>
    <div class="admin text-center">
        <div class="adminBar">
            <img src="@/assets/icon/hamburger.svg" alt="Menu icon" class="menu-icon" id="admin-menu-icon" @click="showAdminMenu">
            <ul>
                <li>Menüpont 1</li>
                <li>Menüpont 2</li>
                <li>Menüpont 3</li>
                <li>Menüpont 4</li>
                <li>Menüpont 5</li>
            </ul>
        </div>
        <div class="admin-main-menu-visible" id="admin-main">
            <div class="adminMenu">
                <ul>
                    <li>Almenü 1</li>
                    <li>Almenü 2</li>
                    <li>Almenü 3</li>
                    <li>Almenü 4</li>
                    <li>Almenü 5</li>
                </ul>
            </div>
            <div class="adminContent">
                <h1>Admin panel</h1>
            </div>
        </div>
    </div>
</template>

<script>
import Skills from "@/components/Skills.vue"
import Timeline from "@/components/Timeline.vue"
import Contact from "@/components/Contact.vue"
export default {
    components: {
        Skills, Timeline
    },
    methods: {
        showAdminMenu() {
            const adminMenu = document.getElementById("admin-main");

            adminMenu.classList.toggle("admin-main-menu-hided");
            adminMenu.classList.toggle("admin-main-menu-visible");
        }
    },
    mounted() {
        //document.getElementById("menu-item-home").classList.add("active-menu-item")
        //document.getElementById("menu-item-contact").classList.remove("active-menu-item")

        if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
            document.getElementById("aboutme").getElementsByTagName("img")[1].style.display = "none"
        }
        else {
             document.getElementById("aboutme").getElementsByTagName("img")[0].style.display = "none"
        }
    }
}
</script>

<style scoped>
.admin {
    display: grid;
    grid-template-areas: 
        "adminBar"
        "adminContent"
        ;
    grid-template-columns: 100%;
    grid-template-rows: 10% 90%;
    flex-basis: 100%;
}

.admin-main-menu-visible {
    grid-area: adminContent;
    height: 100%;

    display: grid;
    grid-template-areas: 
        "adminMenu content"
        ;
    grid-template-columns: 20% 80%;
    transition: all 1s ease-in-out;
}

.admin-main-menu-hided {
    grid-area: adminContent;
    /* height: 100%; */

    display: grid;
    grid-template-areas: 
        "adminMenu content"
        ;
    grid-template-columns: 0% 100%;
    transition: all 1s ease-in-out;
}

.admin-main-menu-visible .adminMenu {
    transition-delay: 0.5s;
}

.admin-main-menu-hided .adminMenu {
    visibility: hidden;
}

.adminBar {
    color: var(--navColor);
    display: flex;
    align-items: center;
    justify-content: center;
    backdrop-filter: sepia(10%);
    grid-area: adminBar;
    position: relative;
}

.adminBar > ul {
    display: flex;
    flex-direction: row;
    list-style-type: none;
}

.adminBar > ul > li {
    margin-inline: 1em;
}

.adminMenu {
    height: 100%;
    color: var(--navColor);
    box-shadow: 2px 0px 2px 0px var(--navColor);
    display: flex;
    align-items: flex-start;
    justify-content: center;
    grid-area: adminMenu;
    transition: all 0.5s ease-in-out;
}

.adminMenu > ul {
    display: flex;
    flex-direction: column;
    list-style-type: none;
    width: 100%;
    height: 100%;
    backdrop-filter: sepia(10%);

}

.adminMenu > ul > li {
    padding-inline: 20px;
    padding-block: 20px;
    box-shadow: 1px 0px 1px 0px var(--navColor);
}

.adminMenu > ul > li:hover {
    box-shadow: 1px 0px 1px 0px var(--backgroundColor);
    color: var(--backgroundColor);
    background-color: var(--navColor);
}

.adminContent {
    grid-area: content;
    /* box-shadow: 2px 0px 2px 0px var(--navColor); */
    padding-inline: 10px;
    height: 100%;
}

#admin-menu-icon {
    display: block;
    background-color: var(--navColor);
    position: absolute;
    left: calc(20% - 40px);
    padding: 5px;
    border-radius: 5px;
}

@media only screen and (max-width: 600px) {
    .adminBar > ul {
        flex-direction: column;
    }
}
</style>
