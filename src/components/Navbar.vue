<template>
  <div>
    <nav class="navbar navbar-expand-lg navbar-dark bg-primary">
      <a class="navbar-brand brand" href="#">Vuechat</a>
      <div class="navbar-collapse">
        <ul class="navbar-nav me-auto">
          <li class="nav-item">
            <a class="nav-link active info" href="#">{{ user.displayName }}</a>
          </li>
        </ul>
      </div>
      <div class="navbar-collapse active info" style="justify-content :right">
        <ul class="navbar-nav">
          <li class="nav-item">
            <a class="nav-link" href="#" @click="handleLogout">Logout</a>
          </li>
        </ul>
      </div>
    </nav>
  </div>
</template>

<script>

import useLogout from "../composable/useLogout.js";
import getUser from '../composable/getUser'

export default {
setup() {
  const {error, logout} = useLogout()
  const { user } = getUser()

  const handleLogout = async () => {
    await logout()
    if(!error.value) {
      console.log('user logged out');
    }
  }

  return {handleLogout, error, user}
}

};
</script>

<style>
.brand {
  margin-left: 10px;
  font-weight: 700;
  color: azure;
}


.info {
  margin-left: 10px;
  font-weight: 400;
  color: azure;
}

a{
  font-size: 20px;
}
</style>