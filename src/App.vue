<template>
    <div :data-theme="theme" style="height: 100vh;">
        <TopBanner v-if="!hideTopBannerPath.includes($route.path)" />
        <router-view />
    </div>
</template>

<script>
import { useStore } from "vuex";
import TopBanner from "./components/TopBanner.vue";
import { computed, onMounted } from "vue";

export default {
    name: "App",
    components: {
        TopBanner,
    },

    setup() {
        const store = useStore()

        const theme = computed(() => store.state.theme)
        const hideTopBannerPath = ['/login', '/join']

        onMounted(() => {
            store.dispatch('initTheme')
        })

        return {
            theme,
            hideTopBannerPath
        }
    }

    // data() {
    //     return {
    //         theme: 'white',
    //         hideTopBannerPath: ['/login', '/join']
    //     }
    // },
    // computed: {
    //     hideTopBannerPath() {
    //         return ["/login", "/join"];
    //     },
    // },
    // methods: {
    //     toggleTheme() {
    //         this.theme = this.theme === 'white' ? 'dark' : "white";
    //         localStorage.setItem('theme', this.theme);
    //     },

    //     loadTheme() {
    //         const savedTheme = localStorage.getItem('theme');
    //         if (savedTheme) {
    //             this.theme = savedTheme
    //         }
    //     }
    // },
    // mounted() {
    //     this.loadTheme();
    // }
};
</script>

<style></style>
