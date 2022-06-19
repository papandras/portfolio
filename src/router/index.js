import { createRouter, createWebHistory } from 'vue-router'
import { useStore } from '../stores/lang.js'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
      meta: {
        title: {
          hun: "Pap András | Főoldal",
          eng: "András Pap | Home"
        }
      }
    },
    {
      path: '/contact',
      name: 'contact',
      component: () => import('../views/ContactView.vue'),
      meta: {
        title: {
          hun: "Pap András | Kapcsolat",
          eng: "András Pap | Contact"
        }
      }
    }
  ]
})

router.beforeEach((to, from, next) => {
  const store = useStore()
  store.getLang()
  store.lang == "hu" ? document.title = to.meta.title.hun : document.title = to.meta.title.eng
  next()
})

export default router
