import Vue from 'vue'
import Vuex from 'vuex'
import profile from 'src/store/profile/profile'
import links from 'src/store/drawer-links/drawer-links'
import documents from 'src/store/documents/documents'

Vue.use(Vuex)

export default function (/* { ssrContext } */) {
  const Store = new Vuex.Store({
    modules: {
      profile,
      links,
      documents
    },
    // enable strict mode (adds overhead!)
    // for dev mode only
    strict: process.env.DEV
  })
  return Store
}
