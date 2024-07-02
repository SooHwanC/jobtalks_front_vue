<template>
  <div class="join_main_wrapper">
    <div class="join_main">
      <div class="logo_wrapper">
        <img src="../assets/images/CI_심볼마크.png" alt="logo" />
      </div>

      <div class="title_wrapper">
        <h1>회원가입</h1>
      </div>

      <div class="input_wrapper">
        <div class="input_box">
          <h3>아이디</h3>
          <input type="text" v-model="member_id" placeholder="아이디를 입력해주세요." />
        </div>
        <div class="input_box">
          <h3>비밀번호</h3>
          <input type="password" v-model="password" placeholder="비밀번호를 입력해주세요." />
        </div>
        <div class="input_box">
          <h3>비밀번호 확인</h3>
          <input type="password" placeholder="비밀번호를 한번 더 입력해주세요." />
        </div>
      </div>

      <div class="submit_btn_box">
        <div class="submit_btx" @click="handleJoin">회원가입</div>
      </div>

    </div>
  </div>
</template>

<script>
import { ref } from "vue";
import "../SCSS/pages/Join.scss";
import { useRouter } from "vue-router";
import axios from "axios";

export default {
  setup() {
    const member_id = ref('');
    const password = ref('');
    const router = useRouter();

    const handleJoin = async () => {

      try {
        const response = await axios.post(`${import.meta.env.VITE_API_BACK_URL}/member/join`, {
          member_id: member_id.value,
          password: password.value
        })

        if (response.status === 200) {
          alert(response.data)
          router.push('/login')
        }

      } catch (error) {
        if (error.response.status === 409) {
          alert(error.response.data)
        }

      }
    }

    return {
      member_id,
      password,
      handleJoin

    }




  }


};
</script>

<style></style>