<template>
  <div :class="['left_bar', folded ? 'folded' : '']">
    <div class="logo_wrapper">
      <div @click="foldBoxClickHandler" :class="['fold_wrapper', folded ? 'folded' : '']">
        <img v-if="theme === 'white'" src="../assets/images/hamburger.svg" />
        <img v-else src="../assets/images/hamburger_dark.svg" />
      </div>
      <router-link to="/">
        <div class="title_box">
          <img v-if="theme === 'white'" src="../assets/images/CI_LOGO_BLACK.svg" alt="logo" />
          <img v-else src="../assets/images/CI_LOGO_WHITE.svg" alt="logo" />
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
import { useStore } from "vuex";
import "../SCSS/components/LeftBar.scss";
import { computed, ref } from "vue";

export default {
  setup() {
    const store = useStore()
    const folded = ref(false)

    const theme = computed(() => store.state.theme)
    const foldBoxClickHandler = () => {
      folded.value = !folded.value
    }
    return {
      theme,
      folded,
      foldBoxClickHandler
    }
  }

  // data() {
  //   return {
  //     folded: false,
  //   };
  // },
  // methods: {
  //   foldBoxClickHandler() {
  //     this.folded = !this.folded;
  //     console.log("폴드확인", this.folded);
  //   },
  // },
};
</script>

<style scoped></style>