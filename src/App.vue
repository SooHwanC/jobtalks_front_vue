<template>
    <div :data-theme="theme" style="height: 100vh;">
        <TopBanner v-if="!hideTopBannerPath.includes($route.path)" @toggle-theme="toggleTheme" />  
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
    data() {
        return {
            theme: 'white'
        }
    },
    computed: {
        hideTopBannerPath() {
            return ["/login", "/join"];
        },
    },
    methods: {
        toggleTheme() {
            this.theme = this.theme === 'white' ? 'dark' : "white";
            localStorage.setItem('theme', this.theme);
        },

        loadTheme() {
            const savedTheme = localStorage.getItem('theme');
            if (savedTheme) {
                this.theme = savedTheme
            }
        }
    },
    mounted() {
        this.loadTheme();
    }
};
</script>

<style></style>
