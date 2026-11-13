<script setup>
import { ref, onMounted } from 'vue'
import { items } from '../ticketsStore.js'
import { getTickets, errorMessage } from '../api/tickets.js'
import TicketTable from '../components/TicketTable.vue'

// loading | empty | data | error
const state = ref('loading')
const errorText = ref('')

async function load() {
  state.value = 'loading'
  try {
    const data = await getTickets()
    items.value = data
    state.value = data.length === 0 ? 'empty' : 'data'
  } catch (err) {
    errorText.value = errorMessage(err)
    state.value = 'error'
  }
}

onMounted(load)
</script>

<template>
  <main>
    <h1>Заявки на услуги</h1>

    <p v-if="state === 'loading'">Загрузка…</p>
    <p v-else-if="state === 'empty'">Записей пока нет</p>
    <TicketTable v-else-if="state === 'data'" :items="items" />
    <div v-else>
      <p>{{ errorText }}</p>
      <button type="button" @click="load">Повторить</button>
    </div>
  </main>
</template>