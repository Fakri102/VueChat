<template>
  <div class="container-auth">
    <div class="card" style="width: 40rem">
      <div class="card-body">
        <form @submit.prevent="handleSubmit">
          <div class="alert alert-danger" v-if="error">{{ error }}</div>
          <h3 class="h3 mb-3 fw-normal text-center mb-4">Register</h3>
          <div class="form-floating mb-2">
            <input type="text" class="form-control" v-model="name" />
            <label for="">Name</label>
          </div>
          <div class="form-floating mb-2">
            <input type="email" class="form-control" v-model="email" />
            <label for="">Email Address</label>
          </div>
          <div class="form-floating mb-2">
            <input type="password" class="form-control" v-model="password" />
            <label for="">password</label>
          </div>
          <button class="w-100 btn btn-lg btn-primary mt-2" type="submit">
            Register
          </button>
        </form>
      </div>
    </div>
  </div>
</template>


<script>
import useRegister from "../../composable/useRegister.js";
import { ref } from "vue";

export default {
  setup(props, context) {
    const name = ref("");
    const email = ref("");
    const password = ref("");

    const { error, register } = useRegister();

    const handleSubmit = async () => {
      await register(name.value, email.value, password.value);
      if (!error.value) {
        context.emit("register");
      }
    };

    return { name, email, password, error, handleSubmit };
  },
};
</script>

<style>
</style>