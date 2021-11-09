<template>
<div class="container-auth">
  <div class="card" style="width: 40rem">
    <div class="card-body">
      <form v-on:submit.prevent="handleSubmit">
        <div class="alert alert-danger" v-if="error">{{ error }}</div>
        <h3 class="h3 mb-3 fw-normal text-center mb-4">Login</h3>
        <div class="form-floating mb-2">
          <input type="email" class="form-control" v-model="email" />
          <label for="">Email Address</label>
        </div>
        <div class="form-floating mb-2">
          <input type="password" class="form-control" v-model="password" />
          <label for="">password</label>
        </div>
        <button class="w-100 btn btn-lg btn-primary mt-2" type="submit">
          Login
        </button>
      </form>
    </div>
  </div>
</div>
</template>


<script>
import useLogin from "../../composable/useLogin.js";
import { ref } from "vue";

export default {
  setup(props, context) {
    const email = ref("");
    const password = ref("");
    const { error, login } = useLogin();

    const handleSubmit = async () => {
      await login(email.value, password.value);
      if (!error.value) {
        context.emit("login");
      }
    };
    return { email, password, error, handleSubmit };
  },
};
</script>

<style>
</style>