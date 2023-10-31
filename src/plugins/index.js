
import { loadFonts } from './webfontloader'
import vuetify from './vuetify'
import store from '@/store/index'
import router from '../router'

export function registerPlugins (app) {
  loadFonts()
  app
    .use(vuetify)
    .use(store)
    .use(router)
}
