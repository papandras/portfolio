<script setup>
import { useStore } from "@/stores/lang.js"

const store = useStore()
store.getLang()
</script>

<template>
    <div class="admin text-center">
        <div class="adminBar">
            <ul>
                <li>Menüpont 1</li>
                <li>Menüpont 2</li>
                <li>Menüpont 3</li>
                <li>Menüpont 4</li>
                <li>Menüpont 5</li>
            </ul>
        </div>
        <div class="adminMain">
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

.adminMain {
    grid-area: adminContent;
    height: 100%;

    display: grid;
    grid-template-areas: 
        "adminMenu content"
        ;
    grid-template-columns: 20% 80%;
}
.adminBar {
    color: var(--navColor);
    display: flex;
    align-items: center;
    justify-content: center;
    backdrop-filter: sepia(10%);

    /* height: 200%; */
    /* width: 100%;
    height: 40px;
    background-color: #FFFF;
    color: rgb(46, 46, 214);
    display: flex;
    align-items: center;
    justify-content: center;
    grid-area: adminBar; */
}

.adminBar > ul {
    display: flex;
    flex-direction: row;
    list-style-type: none;
    /* font-size: 60%; */
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
}

.adminMenu > ul {
    display: flex;
    flex-direction: column;
    list-style-type: none;
    /* font-size: 60%; */
    width: 100%;
    height: 100%;
    /* background-color: #fff; */
    backdrop-filter: sepia(10%);

}

.adminMenu > ul > li {
    /* height: 150%; */
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
    box-shadow: 2px 0px 2px 0px var(--navColor);
    padding-inline: 10px;
}
</style>
