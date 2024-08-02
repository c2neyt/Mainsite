import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'

import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { faStar, faCodeBranch } from '@fortawesome/free-solid-svg-icons'
import { faGithub, faDiscord, faSpotify, faSteam, faPlaystation } from '@fortawesome/free-brands-svg-icons'

library.add(faGithub, faDiscord, faSpotify, faSteam, faPlaystation, faStar, faCodeBranch)

createApp(App)
  .component('font-awesome-icon', FontAwesomeIcon)
  .mount('#app')
