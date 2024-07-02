<template>
    <div class="login_wrapper">
        <div class="dark_btn">
            <!-- <img src="../assets/images/darkmode.svg" alt="darkmode" /> -->

            <label class="ui_switch">
                <input type="checkbox" :checked="isDarkMode" @click="handleToggleDarkMode">
                <div class="slider">
                    <div class="circle"></div>
                </div>
            </label>
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
import { computed } from "vue";
import "../SCSS/components/TopBanner.scss";
import { useStore } from "vuex";
export default {

    setup() {
        const store = useStore()
        const isDarkMode = computed(() => store.state.theme === 'dark')
        const handleToggleDarkMode = () => {
            store.dispatch('toggleTheme')
        }
        return {
            isDarkMode,
            handleToggleDarkMode
        }
    }

    // methods: {
    //     handleToggleDarkMode() {
    //         this.$emit('toggle-theme')

    //     }

    // }


};
</script>

<style></style>
