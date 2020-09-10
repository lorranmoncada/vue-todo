<template>
  <div class="" id="app">
    <div class="container grid-lg">
      <header class="navbar">
        <section class="navbar-section">
          <router-link to = "/" class=" btn btn-link">Home</router-link>
           <router-link to = "kamban" class=" btn btn-link">Kamban</router-link>
        </section>
        <section class="navbar-center">
          <img class="img-responsive  logo" src="@/assets/logo.png" alt="" />
        </section>
      </header>
          <router-view />
    </div>
  </div>
</template>

<script>
export default {
  name: "App",
};
</script>

<style lang="scss">
.logo {
  width: 50px;
}
</style>
