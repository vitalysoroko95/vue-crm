<template>
  <form class="card auth-card" @submit.prevent="submitHandler">
    <div class="card-content">
      <span class="card-title">Домашняя бухгалтерия</span>

      <div class="input-field">
        <input id="name" type="text" v-model.trim="name" />
        <small class="helper-text invalid" v-if="v$.name.$error">{{
          v$.name.$errors[0].$message
        }}</small>
        <label for="name">Имя</label>
      </div>

      <div class="input-field">
        <input id="email" type="text" v-model.trim="email" />
        <small class="helper-text invalid" v-if="v$.email.$error">{{
          v$.email.$errors[0].$message
        }}</small>
        <label for="email">Email</label>
      </div>

      <div class="input-field">
        <input id="password" type="password" v-model.trim="password" />
        <label for="password">Пароль</label>
        <small class="helper-text invalid" v-if="v$.password.$error">{{
          v$.password.$errors[0].$message
        }}</small>
      </div>

      <p>
        <label for="agree">
          <input id="agree" type="checkbox" v-model="agree" />
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

<script>
import { useVuelidate } from '@vuelidate/core';
import { required, email, minLength } from '@vuelidate/validators';


export default {
  setup: () => ({
    v$: useVuelidate(),
  }),
  data: () => ({
    name: '',
    email: '',
    password: '',
    agree: false,
  }),
  validations: () => ({
    name: { required },
    email: { email, required },
    password: { required, minLength: minLength(6) },
    agree: { cheked: (v) => v },
  }),
  methods: {
    submitHandler() {
      this.v$.$validate();
      const formData = {
        email: this.email,
        password: this.password,
        name: this.name,
      };
      if (!this.v$.$error) {
        console.log(formData);
        this.$router.push('/');
      }
    },
  },
};
</script>
