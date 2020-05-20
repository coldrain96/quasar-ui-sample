<template>
  <q-layout view="hHr lpR fFf">

    <q-header bordered class="bg-primary text-white">
      <q-toolbar>
        <q-toolbar-title>
          <q-avatar>
            <img src="https://cdn.quasar.dev/logo/svg/quasar-logo.svg">
          </q-avatar>
          quasar-ui-sample
        </q-toolbar-title>

        <q-btn dense flat round icon="menu" @click="rightDrawer = !rightDrawer"/>
      </q-toolbar>
    </q-header>

    <q-drawer
      show-if-above
      v-model="rightDrawer"
      side="right"
      bordered>
      <q-list>

        <Links
          v-for="link in getAllDrawerLinks"
          :key="link.id"
          v-bind="link"
        />
      </q-list>
    </q-drawer>

    <q-page-container>
      <router-view/>
    </q-page-container>

  </q-layout>
</template>

<script>
  import { mapGetters } from 'vuex'
  import Links from 'components/Links'

  export default {
    components: {
      Links
    },
    data: () => ({
      rightDrawer: false,
    }),
    computed: mapGetters([
      'getAllDrawerLinks'
    ])
  }
</script>
