<template>
  <header>
    <router-link to="/">Список</router-link>
    <router-link to="/new">Создать</router-link>
    <router-link to="/login">Вход</router-link>
  </header>
</template>

<style scoped>
header {
  display: flex;
  gap: 12px;
  margin-bottom: 16px;
}
</style>