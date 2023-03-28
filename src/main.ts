import { createApp } from 'vue'
import ViewUIPlus from 'view-ui-plus'
import App from './App.vue'

import 'view-ui-plus/dist/styles/viewuiplus.css'
import './assets/main.css'

import RuleEditor from '../packages/index'

const app = createApp(App)

app.use(ViewUIPlus)

app.use(RuleEditor)

app.mount('#app')
