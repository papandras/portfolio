<script setup>
import { useStore } from "@/stores/lang.js"

const store = useStore()
store.getLang()
</script>

<template>
    <div>
        <form id="contactform">
            <label for="contactname">{{ store.texts.contact.name }}</label>
            <input type="text" name="name" id="contactname" v-model="name" required>
            <label for="email">{{ store.texts.contact.email }}</label>
            <input type="text" name="email" id="email" v-model="email" required>
            <label for="subject">{{ store.texts.contact.subject }}</label>
            <textarea name="subject" id="subject" cols="30" rows="10" v-model="message" form="contactform" required></textarea>
            <button @click.prevent="sendEmail">{{ store.texts.contact.send }}</button>
        </form>
    </div>
</template>

<style scoped>
form {
    display: flex;
    flex-direction: column;
    align-content: center;
    text-align: center;
}

button {
    margin: 20px;
    padding: 20px;
    cursor: pointer;
    border: 1px solid var(--navColor) !important;
}

button:hover {
    color: var(--backgroundColor);
    background-color: var(--navColor);
    border: 1px solid var(--backgroundColor) !important;
    transition: 400ms ease-in-out;
}

input,
textarea,
button {
    min-width: 300px;
    color: var(--navColor);
    background-color: var(--backgroundColor);
    border: none;
    border-radius: 10px;
    padding: 10px;
    margin: 10px;
    text-align: center;
}

input:focus,
textarea:focus {
    outline: none;
    border: 1px solid var(--backgroundColor);
}

input[type=button] {
    border: 2px solid black;
}
</style>

<script>
import emailjs from 'emailjs-com';

export default {
    name: 'ContactUs',
    data() {
        return {
            name: '',
            email: '',
            message: ''
        }
    },
    methods: {
        sendEmail(e) {
            try {
                emailjs.send('service_8fwu3ga', 'template_5kb0nxf', {
                    from_name: this.name,
                    to_name: "András",
                    reply_to: this.email,
                    message: this.message
                }, 't2HAmbTmFBtrCgt3-')

            } catch (error) {
                console.log({ error })
            }
            // Reset form field
            this.name = ''
            this.email = ''
            this.message = ''
        },
    }
}
</script>