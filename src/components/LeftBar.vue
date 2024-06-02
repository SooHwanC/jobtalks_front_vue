<template>
  <div :class="['left_bar', folded ? 'folded' : '']">
    <div class="logo_wrapper">
      <div
        @click="foldBoxClickHandler"
        :class="['fold_wrapper', folded ? 'folded' : '']"
      >
        <img src="../assets/images/hamburger.svg" />
      </div>
      <router-link to="/">
        <div class="title_box">
          <img src="../assets/images/CI_LOGO_BLACK.svg" alt="logo" />
        </div>
      </router-link>
    </div>
    <div class="history_wrapper">
      <div class="history_job">
        <h2>자소서 첨삭</h2>
        <router-link to="/">
          <div class="history_block">
            <h4>제목</h4>
          </div>
        </router-link>
      </div>
      <div class="history_talent">
        <h2>인재상 분석</h2>
        <router-link to="/">
          <div class="history_block">
            <h4>제목</h4>
          </div>
        </router-link>
      </div>
    </div>
  </div>
</template>
  
  <script>
import "../SCSS/components/LeftBar.scss";

export default {
  data() {
    return {
      folded: false,
    };
  },
  methods: {
    foldBoxClickHandler() {
      this.folded = !this.folded;
      console.log("폴드확인", this.folded);
    },
  },
};
</script>
  
  <style scoped>
</style>
  