<template>
  <q-page padding>
    <div class="profile">
      <q-card class="my-card">
        <q-item>

          <q-item-section class="col-1">
            <q-avatar>
              <img :src="getUserData.portraitUrl">
            </q-avatar>
          </q-item-section>

          <q-item-section class="col-11">
            <q-item-label>{{ getUserData.name }}</q-item-label>
            <q-item-label>{{ getUserData.position }}</q-item-label>
          </q-item-section>

        </q-item>

        <q-separator spaced/>

        <q-item>

          <q-item-section class="col-3">
            <q-item-label caption>Hard skills:</q-item-label>
            <q-item-label v-for="skill in getUserData.skillsArr.hardSkills">
              {{ skill }}
            </q-item-label>
          </q-item-section>

          <q-item-section class="col-3 q-mb-auto">
            <q-item-label caption>Soft skills:</q-item-label>
            <q-item-label v-for="skill in getUserData.skillsArr.softSkills">
              {{ skill }}
            </q-item-label>
          </q-item-section>

        </q-item>

      </q-card>
    </div>
  </q-page>
</template>

<script>
  import { mapGetters } from 'vuex'

  export default {
    computed: mapGetters([
      'getUserData',
    ])
  }
</script>
