<script setup>
import { ref } from 'vue'

const screen = ref('list') // 'list' | 'new' | 'login'

const items = ref([
  { id: 1, number: 'ЗЯВ-0001', title: 'Нужна консультация бухгалтера', categoryId: 1, status: 'New' },
  { id: 2, number: 'ЗЯВ-0002', title: 'Разработать логотип', categoryId: 3, status: 'InProgress' }
])
</script>

<template>
  <div>
    <header>
      <button type="button" @click="screen = 'list'">Список</button>
      <button type="button" @click="screen = 'new'">Создать</button>
      <button type="button" @click="screen = 'login'">Вход</button>
    </header>

    <main v-if="screen === 'list'">
      <h1>Заявки на услуги</h1>
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
    </main>

    <main v-else-if="screen === 'new'">
      <h1>Новая заявка</h1>
      <form @submit.prevent>
        <label for="title">Тема, 5–80 символов</label>
        <input id="title" name="title" autofocus>

        <label for="categoryId">Номер категории услуги</label>
        <input id="categoryId" name="categoryId" type="number">

        <label for="description">Описание, 10–500 символов</label>
        <textarea id="description" name="description"></textarea>

        <button type="submit">Создать</button>
      </form>
    </main>

    <main v-else>
      <h1>Вход</h1>
      <form @submit.prevent>
        <label for="login">Логин</label>
        <input id="login" name="login" autofocus>

        <label for="password">Пароль</label>
        <input id="password" name="password" type="password">

        <button type="submit">Войти</button>
      </form>
    </main>
  </div>
</template>

<style scoped>
header {
  display: flex;
  gap: 8px;
  margin-bottom: 16px;
}
form {
  display: flex;
  flex-direction: column;
  gap: 8px;
  max-width: 400px;
}
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