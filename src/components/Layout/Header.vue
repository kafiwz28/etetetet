<template>
    <div class="row" id="header">
      <nav class="nav nav-pills flex-column flex-sm-row">
        <a class="flex-sm-fill text-sm-center nav-link"> <router-link to="/">Home</router-link></a>
        <a class="flex-sm-fill text-sm-center nav-link"><router-link to="/profile">Profile</router-link></a>
        <a class="flex-sm-fill text-sm-center nav-link"><router-link to="/contact">Contact</router-link></a>
        <a class="flex-sm-fill text-sm-center nav-link"><router-link to="/register">Register</router-link></a>
      </nav>
    </div>
</template>

<script>
export default {
    name: 'Header'
}
</script>

<style scoped>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>