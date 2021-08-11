import { createApp } from 'vue'
import App from './App'
import components from '@/components/UI'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faTrash } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'


const app = createApp(App)

library.add(faTrash)
app.component('font-awesome-icon', FontAwesomeIcon)

components.forEach(component => {
    app.component(component.name, component)
})


app.mount('#app') //Root component
