<template>
  <form class="card auth-card">
    <div class="card-content">
      <span class="card-title">Домашняя бухгалтерия</span>
      <div class="input-field">
        <input id="email" type="text" v-model.trim="email" />
        <small class="helper-text invalid" v-if="v$.email.$error">{{
          v$.email.$errors[0].$message
        }}</small>
        <label for="email">Email</label>
      </div>
      <div class="input-field">
        <input id="password" type="password" class="validate" />
        <label for="password">Пароль</label>
        <small class="helper-text invalid">Password</small>
      </div>
      <div class="input-field">
        <input id="password" type="password" v-model.trim="password" />
        <label for="password">Пароль</label>
        <small class="helper-text invalid" v-if="v$.password.$error">{{
          v$.password.$errors[0].$message
        }}</small>
      </div>
      <p>
        <label>
          <input type="checkbox" />
          <span>С правилами согласен</span>
        </label>
      </p>
    </div>
    <div class="card-action">
      <div>
        <button class="btn waves-effect waves-light auth-submit" type="submit">
          Зарегистрироваться
          <i class="material-icons right">send</i>
        </button>
      </div>

      <p class="center">
        Уже есть аккаунт?
        <router-link to="/login">Войти</router-link>
      </p>
    </div>
  </form>
</template>
