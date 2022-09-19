<template>
  <form class="card auth-card" @submit.prevent="submitHandler">
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
        <input id="password" type="password" v-model.trim="password" />
        <label for="password">Пароль</label>
        <small class="helper-text invalid" v-if="v$.password.$error">{{
          v$.password.$errors[0].$message
        }}</small>
      </div>
    </div>
    <div class="card-action">
      <div>
        <button class="btn waves-effect waves-light auth-submit" type="submit">
          Войти
          <i class="material-icons right">send</i>
        </button>
      </div>

      <p class="center">
        Нет аккаунта?
        <router-link to="/register">Зарегистрироваться</router-link>
      </p>
    </div>
  </form>
</template>

<script>
import { useVuelidate } from '@vuelidate/core';
import { required, email, minLength } from '@vuelidate/validators';
import messages from '../utils/messages';

export default {
  setup: () => ({
    v$: useVuelidate(),
  }),
  data: () => ({
    email: '',
    password: '',
  }),
  validations: () => ({
    email: { email, required },
    password: { required, minLength: minLength(6) },
  }),
  mounted() {
    if (messages[this.$route.query.message]) {
      this.$message(messages[this.$route.query.message]);
    }
  },
  methods: {
    submitHandler() {
      this.v$.$validate();
      const formData = {
        email: this.email,
        password: this.password,
      };
      if (!this.v$.$error) {
        console.log(formData);
        this.$router.push('/');
      }
    },
  },
};
</script>
