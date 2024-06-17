<template>
  <div :data-theme="theme" style="height: 100vh;">
    <TopBanner v-if="!hideTopBannerPath.includes($route.path)" />
    <router-view />
  </div>
</template>

<script>
import TopBanner from "./components/TopBanner.vue";

export default {
  name: "App",
  components: {
    TopBanner,
  },
  computed: {
    hideTopBannerPath() {
      return ["/login", "/join"];
    },
  },
};
</script>

<style>
</style>