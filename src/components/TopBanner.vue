<template>
  <div class="login_wrapper">
    <div class="dark_btn">
      <img src="../assets/images/darkmode.svg" alt="darkmode" />
    </div>

    <div class="login_box">
      <router-link to="/login">
        <h2>LOGIN</h2>
      </router-link>
    </div>

    <div class="join_box">
      <router-link to="/join">
        <h2>JOIN</h2>
      </router-link>
    </div>
  </div>
</template>

<script>
import "../SCSS/components/TopBanner.scss";
export default {};
</script>

<style>
</style>