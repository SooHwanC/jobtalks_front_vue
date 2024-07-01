<template>
<div class="login_main_wrapper">
    <div class="login_main">
        <div class="logo_wrapper">
            <img src="../assets/images/CI_심볼마크.png" alt="logo" />
        </div>

        <div class="title_wrapper">
            <h1>로그인</h1>
        </div>

        <form @submit.prevent="handleLogin" class="login_form">
            <div class="input_wrapper">
                <div class="input_box">
                    <h3>아이디</h3>
                    <input type="text" v-model="username" placeholder="아이디를 입력해주세요." />
                </div>
                <div class="input_box">
                    <h3>비밀번호</h3>
                    <input type="password" v-model="password" placeholder="비밀번호를 입력해주세요." @keyup.enter="handleLogin" />
                </div>
            </div>
            <div class="submit_btn_box">
                <div class="submit_btx" @click="handleLogin">로그인</div>
            </div>
        </form>
        <div class="social_login_wrapper">
            <div class="kakao_login_box">
                <img src="../assets/images/kakao_loginsvg.svg" alt="kakao_login" />
            </div>
            <!-- <h2>or</h2> -->
            <div class="google_login_box">
                <img src="../assets/images/web_light_sq_SI.svg" alt="google_login" />
            </div>
        </div>
    </div>
</div>
</template>

<script>
import "../SCSS/pages/Login.scss";
import axios from 'axios';

export default {
    data() {
        return {
            username: "",
            password: "",
        };
    },

    methods: {
        async handleLogin() {
            try {
                const response = await axios.post('http://localhost:8088/member/login', {
                    member_id: this.username,
                    password: this.password
                });
                console.log('로그인', response);

            } catch (error) {
                console.error('에러', error)
            }

        }

    }

};
</script>

<style>
</style>
