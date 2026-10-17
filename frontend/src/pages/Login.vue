<template>
  <main>
    <h1>Вход</h1>
    <form @submit.prevent>
      <label for="login">Логин</label>
      <input id="login" name="login" autofocus>

      <label for="password">Пароль</label>
      <input id="password" name="password" type="password">

      <button type="submit">Войти</button>
    </form>
  </main>
</template>