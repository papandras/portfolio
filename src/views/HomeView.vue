<script setup>
import { useStore } from "@/stores/lang.js"

const store = useStore()
store.getLang()
</script>

<template>
    <div>
        <div class="section" id="aboutme">
            <a href="#aboutme" class="section-header">{{ store.texts.about }}</a>
            <img src="@/assets/img/profilpic.jpg" :alt="'Me'.split('').reverse().join('')">
            <img src="@/assets/img/profilpic2.jpg" :alt="'Me'.split('').reverse().join('')">
            <p>{{ store.texts.introduction }}</p>

        </div>
        <div class="section" id="timeline">
            <a href="#timeline" class="section-header">{{ store.texts.experience.title }}</a>
            <Timeline />
        </div>
        <div class="section" id="skills" data-aos="fade-up">
            <a href="#skills" class="section-header">{{ store.texts.skills.title }}</a>
            <Skills />
        </div>
        <div class="section" id="contact" data-aos="fade-up">
            <a href="#contact" class="section-header">{{ store.texts.contact.title }}</a>
            <Contact />
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
#aboutme {
    /* margin: 50px 0 10px 0; */
    text-align: center;
}

#aboutme p {
    width: 40%;
    text-align: center;
    margin: 0 30px;
}

#aboutme img {
    transform: rotateY(180deg);
    border-radius: 10px;
    box-shadow: 0 0 3px 3px var(--navColor);
    margin: 20px 0 30px 0;
    max-width: 90%;
    height: auto;
    max-height: 400px;
    transition: transform 100ms ease-in-out;
}

#aboutme img:hover {
    transform: rotateY(180deg) rotate(-10deg);
    transition: transform 300ms linear;
}

#aboutme img:hover+p {
    transform: rotate(0deg);
}

@media only screen and (max-width: 1200px) {
        @media (orientation: landscape) {
        #aboutme img {
            max-height: 60vh;
            max-width: auto;
        }
    }
}

@media only screen and (max-width: 600px) {

    #aboutme p,
    #timeline,
    #skills {
        width: 100%;
    }

    #aboutme p {
        margin: 0;
        padding: 10px;
        text-align: center;
    }

    #aboutme img {
        max-width: 50%;
    }
}
</style>
