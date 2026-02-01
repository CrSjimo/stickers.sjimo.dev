import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'
import { create, NButton, NConfigProvider, NGi, NGrid, NImage, NModal } from 'naive-ui'

const app = createApp(App)

const naive = create({
	components: [NButton, NConfigProvider, NGi, NGrid, NImage, NModal]
})

app.use(naive)
app.mount('#app')
