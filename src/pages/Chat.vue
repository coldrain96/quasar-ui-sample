<template>
  <q-page padding>
    <div class="chat row">
      <q-card class="col-5 q-mx-auto">

        <div class="q-pa-md row justify-center">
          <div style="width: 100%; max-width: 400px">
            <q-chat-message
              name="Jane"
              avatar="https://cdn.quasar.dev/img/avatar5.jpg"
              :text="['Сколько программистов надо, чтобы заменить лампочку?']"
              stamp="7 minutes ago"
              sent
              bg-color="amber-7"
            />
            <q-chat-message
              name="me"
              avatar="https://cdn.quasar.dev/img/avatar1.jpg"
              :text="['Трое. Один стоит на столе и держит лампочку. Второй зачитывает алгоритм вкручивания лампочки. А третий проводит бета-тестирование в реальном времени: непрерывно щелкает выключателем, пока не загорится свет.']"
              stamp="4 minutes ago"
              text-color="white"
              bg-color="primary"
            />
          </div>
        </div>
      </q-card>
    </div>
  </q-page>
</template>

<script>
  export default {
  }
</script>
