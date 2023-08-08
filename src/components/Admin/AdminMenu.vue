<template>
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
</template>

<style scoped>
.adminMenu {
    height: 100%;
    color: var(--navColor);
    box-shadow: 2px 0px 2px 0px var(--navColor);
    display: flex;
    align-items: flex-start;
    justify-content: center;
    grid-area: adminMenu;
    /* transition: all 0.5s ease-in-out; */
}

.adminMenu>ul {
    display: flex;
    flex-direction: column;
    list-style-type: none;
    width: 100%;
    height: 100%;
    backdrop-filter: sepia(10%);

}

.adminMenu>ul>li {
    /* padding-inline: 20px;
        padding-block: 20px; */
    padding-inline: 5%;
    padding-block: 5%;
    box-shadow: 1px 0px 1px 0px var(--navColor);
}

.adminMenu>ul>li:hover {
    box-shadow: 1px 0px 1px 0px var(--backgroundColor);
    color: var(--backgroundColor);
    background-color: var(--navColor);
}

.adminContent {
    grid-area: content;
    /* box-shadow: 2px 0px 2px 0px var(--navColor); */
    padding-inline: 10px;
    height: 100%;
    display: flex;
    justify-content: center;
}

.adminContent>h1 {
    margin-top: 5%;
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

.admin-main-menu-visible>.adminMenu {
    transition-delay: 0.5s;
}

.admin-main-menu-hided>.adminMenu {
    visibility: hidden;
    transition: visibility 0.5s ease-in-out;
}

@media only screen and (max-width: 600px) {
    .adminMenu {
        overflow-y: scroll;
    }

    .admin-main-menu-hided>.adminMenu {
        visibility: hidden;
        transition: visibility 0.01s ease-in-out;
    }
}
</style>