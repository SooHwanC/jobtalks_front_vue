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
          <input type="text" placeholder="아이디를 입력해주세요." />
        </div>
        <div class="input_box">
          <h3>비밀번호</h3>
          <input type="password" placeholder="비밀번호를 입력해주세요." />
        </div>
        <div class="input_box">
          <h3>비밀번호 확인</h3>
          <input type="password" placeholder="비밀번호를 한번 더 입력해주세요." />
        </div>
      </div>
      <div class="submit_btn_box">
        <div class="submit_btx">회원가입</div>
      </div>
    </div>
  </div>
</template>

<script>
import "../SCSS/pages/Join.scss";

export default {};
</script>

<style></style>