import { defineStore } from 'pinia'

export const useStore = defineStore("LangStore", {
  state() {
    return {
      lang: null,
      texts: null
    }
  },
  actions: {
    getLang() {
      decodeURIComponent(document.cookie).split(';').map((cookie) => {
        if(cookie.split('=')[0] == "lang"){
          this.lang = cookie.split('=')[1]
          
          if(this.lang == "hu"){
            this.texts = textlibrary.hun
          }
          else {
            this.texts = textlibrary.eng
          }
        }
      })
    }
  }
})