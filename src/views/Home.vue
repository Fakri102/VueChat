<template>
  <div class="container">
    <div class="container-title">
      <h1 class="h1-title text-primary fs-1 text-center m-5">VueChat</h1>
    </div>
    <div v-if="showLogin">
      <Login @login="accessRoom" />
      <div class="text-auth">
        <p>
          Don't have an account?
          <a v-on:click="showLogin = false" href="#">Register here</a>
        </p>
      </div>
    </div>
    <div v-else>
      <Register @register="accessRoom" />
      <div class="text-auth">
        <p>
          Alredy have an account?
          <a v-on:click="showLogin = true" href="#">Login here</a>
        </p>
      </div>
    </div>
  </div>
</template>

<script>
import Register from "../components/auth/Register.vue";
import Login from "../components/auth/Login.vue";
import { ref } from "vue";
import { useRouter } from "vue-router";

export default {
  name: "Home",
  setup() {
    const showLogin = ref(false);
    const router = useRouter();

    const accessRoom = () => {
      router.push({ name: "Room" });
    };
    return { showLogin, accessRoom };
  },
  components: {
    Login,
    Register,
  },
};
</script>

<style>
.text-auth {
  width: 100%;
  display: flex;
  justify-content: center;
}
.h1-title {

}
</style>
