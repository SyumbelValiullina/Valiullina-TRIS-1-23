<script setup>
defineProps({
  items: { type: Array, required: true }
})
</script>

<template>
  <table>
    <thead>
      <tr>
        <th>Номер</th>
        <th>Тема</th>
        <th>Категория</th>
        <th>Статус</th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="item in items" :key="item.id">
        <td>{{ item.number }}</td>
        <td>{{ item.title }}</td>
        <td>{{ item.categoryId }}</td>
        <td>{{ item.status }}</td>
      </tr>
    </tbody>
  </table>
</template>

<style scoped>
table {
  border-collapse: collapse;
  width: 100%;
}
th, td {
  border: 1px solid #ccc;
  padding: 6px 10px;
  text-align: left;
}
</style>