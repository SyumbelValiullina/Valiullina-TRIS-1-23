<script setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import { addItem } from '../ticketsStore.js'

const router = useRouter()

const form = ref({
  title: '',
  categoryId: 0,
  description: ''
})

const error = ref('')

function onCreate() {
  const title = form.value.title.trim()

  if (title.length < 5 || title.length > 80) {
    error.value = 'Тема: от 5 до 80 символов'
    return
  }
  if (!Number.isInteger(form.value.categoryId) || form.value.categoryId <= 0) {
    error.value = 'Категория: целое число больше нуля'
    return
  }
  const description = form.value.description.trim()
  if (description.length < 10 || description.length > 500) {
    error.value = 'Описание: от 10 до 500 символов'
    return
  }

  addItem(title, form.value.categoryId, description)

  error.value = ''
  form.value = { title: '', categoryId: 0, description: '' }
  router.push('/')
}
</script>

<template>
  <main>
    <h1>Новая заявка</h1>
    <form @submit.prevent="onCreate">
      <label for="title">Тема, 5–80 символов</label>
      <input id="title" v-model="form.title" autofocus>

      <label for="categoryId">Номер категории услуги</label>
      <input id="categoryId" type="number" v-model.number="form.categoryId">

      <label for="description">Описание, 10–500 символов</label>
      <textarea id="description" v-model="form.description"></textarea>

      <p v-if="error" style="color: red">{{ error }}</p>

      <button type="submit">Создать</button>
    </form>
  </main>
</template>

<style scoped>
form {
  display: flex;
  flex-direction: column;
  gap: 8px;
  max-width: 400px;
}
</style>