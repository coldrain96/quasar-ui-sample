<template>
  <q-page padding>
    <div class="documents">
      <div class="q-pa-md">
        <q-table
          title="Treats"
          :data="getAllItems"
          :columns="getColumns"
          row-key="name"
        />
      </div>
    </div>
  </q-page>
</template>

<script>
  import { mapGetters } from 'vuex'

  export default {
    computed: mapGetters([
      'getColumns',
      'getAllItems'
    ])
  }
</script>
