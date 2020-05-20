<template>
  <q-tabs>
    <q-route-tab
      :to="link"
      exact
    >
      <q-item
        clickable
        tag="a"
      >
        <q-item-section
          v-if="img"
          avatar
        >
          <q-icon :name="img"/>
        </q-item-section>

        <q-item-section>
          <q-item-label>{{ name }}</q-item-label>
        </q-item-section>
      </q-item>
    </q-route-tab>
  </q-tabs>
</template>

<script>
  export default {
    name: 'Links',
    props: {
      name: {
        type: String,
        required: true
      },

      link: {
        type: String,
        default: '#'
      },

      img: {
        type: String,
        default: ''
      }
    }
  }
</script>
