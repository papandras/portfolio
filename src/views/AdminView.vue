<script setup>
import { useStore } from "@/stores/lang.js"

const store = useStore()
store.getLang()
</script>

<template>
    <div class="admin-bar-visible text-center" id="admin-container">
        <div class="adminBar">
            <img src="@/assets/icon/hamburger.svg" alt="Menu icon" class="menu-icon" id="admin-sub-menu-icon"
                @click="showAdminSubMenu">
            <img src="@/assets/icon/hamburger.svg" alt="Menu icon" class="menu-icon" id="admin-menu-icon"
                @click="showAdminMenu">
            <ul>
                <li>Menüpont 1</li>
                <li>Menüpont 2</li>
                <li>Menüpont 3</li>
                <li>Menüpont 4</li>
                <li>Menüpont 5</li>
            </ul>
        </div>
        <AdminMenu />
    </div>
</template>

<script>
import AdminMenu from "@/components/Admin/AdminMenu.vue"
export default {
    components: {
        AdminMenu
    },
    methods: {
        showAdminSubMenu() {
            const adminMenu = document.getElementById("admin-main");

            adminMenu.classList.toggle("admin-main-menu-hided");
            adminMenu.classList.toggle("admin-main-menu-visible");
        },
        showAdminMenu() {
            const adminMenu = document.getElementById("admin-container");

            adminMenu.classList.toggle("admin-bar-visible");
            adminMenu.classList.toggle("admin-bar-hided");
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
.admin-bar-visible {
    display: grid;
    grid-template-areas:
        "adminBar"
        "adminContent"
    ;
    grid-template-columns: 100%;
    grid-template-rows: 10% 90%;
    flex-basis: 100%;
    transition: all 1s ease-in-out;
}

.admin-bar-hided {
    display: grid;
    grid-template-areas:
        "adminBar"
        "adminContent"
    ;
    grid-template-columns: 100%;
    grid-template-rows: 0% 100%;
    flex-basis: 100%;
    position: relative;
    transition: all 1s ease-in-out;
}

.admin-bar-hided>.adminBar {
    visibility: hidden;
}

.admin-bar-hided #admin-menu-icon {
    visibility: visible;
}

.admin-bar-visible ul {
    transition-delay: 0.7s;
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

.adminBar>ul {
    display: flex;
    flex-direction: row;
    list-style-type: none;
    height: 100%;
}

.adminBar>ul>li {
    padding-inline: 1em;
    display: flex;
    align-items: center;
    height: 100%;
}

.adminBar>ul>li:hover {
    background-color: var(--navColor);
    color: var(--backgroundColor);
    border-bottom: 8px solid var(--backgroundColor);
    border-top: 8px solid var(--backgroundColor);
    transition: all 100ms ease-in-out;
}

#admin-sub-menu-icon {
    display: block;
    background-color: var(--navColor);
    position: absolute;
    left: calc(20% - 40px);
    padding: 5px;
    border-radius: 5px;
}

#admin-menu-icon {
    display: block;
    background-color: var(--navColor);
    position: absolute;
    right: 3%;
    top: 6px;
    padding: 5px;
    border-radius: 5px;
    display: none;
}

@media only screen and (max-width: 600px) {
    .adminBar>ul {
        flex-direction: column;
    }

    .adminBar {}

    .admin-bar-visible {
        display: grid;
        grid-template-areas:
            "adminBar"
            "adminContent"
        ;
        grid-template-columns: 100%;
        grid-template-rows: 30% 70%;
        flex-basis: 100%;
    }

    #admin-sub-menu-icon {
        bottom: 5%;
    }

    #admin-menu-icon {
        display: block;
    }
}
</style>
