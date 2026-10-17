<template>
  <main>
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
</template>

<style scoped>
form {
  display: flex;
  flex-direction: column;
  gap: 8px;
  max-width: 400px;
}
</style>