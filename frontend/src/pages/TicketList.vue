<script setup>
import { items } from '../ticketsStore.js'
import TicketTable from '../components/TicketTable.vue'
</script>

<template>
  <main>
    <h1>Заявки на услуги</h1>
    <TicketTable :items="items" />
  </main>
</template>