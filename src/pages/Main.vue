<template>
<div class="Main">
    <LeftBar />

    <div class="right_wrapper">
        <div class="ex_content_wrapper">
            <div class="ex_content_box">
                <div class="process_wrapper">
                    <div class="process_box">
                        <h2>입력</h2>
                        <div class="svg_box">
                            <img src="../assets/images/process_1.svg" alt="process1">
                        </div>
                        <div class="porcess_explain_wrapp">
                            <h3>Step.1</h3>
                            <p>자기소개서를</p>
                            <p>입력합니다.</p>
                        </div>
                    </div>
                    <div class="process_box">
                        <h2>평가</h2>
                        <div class="svg_box">
                            <img src="../assets/images/process_1.svg" alt="process1">
                        </div>
                        <div class="porcess_explain_wrapp">
                            <h3>Step.2</h3>
                            <p>합격 자기소개서와</p>
                            <p>유사도를</p>
                            <p>판별합니다.</p>
                        </div>
                    </div>
                    <div class="process_box">
                        <h2>분석</h2>
                        <div class="svg_box">
                            <img src="../assets/images/process_1.svg" alt="process1">
                        </div>
                        <div class="porcess_explain_wrapp">
                            <h3>Step.3</h3>
                            <p>문제점을 찾습니다.</p>
                        </div>
                    </div>
                    <div class="process_box">
                        <h2>첨삭</h2>
                        <div class="svg_box">
                            <img src="../assets/images/process_1.svg" alt="process1">
                        </div>
                        <div class="porcess_explain_wrapp">
                            <h3>Step.4</h3>
                            <p>자기소개서를</p>
                            <p>첨삭합니다.</p>
                        </div>
                    </div>
                </div>

                <div class="input_wrapper">
                    <router-link to="/essayinput" class="ai_start_btn_01">
                        <img src="../assets/images/test_01.svg" alt="start">
                        <img src="../assets/images/test_02.svg" alt="start">
                    </router-link>

                    <router-link to="/talentinput">
                        <img src="../assets/images/aitalent.png" alt="start">
                    </router-link>
                </div>
            </div>
        </div>
        <div class="reserved_bo">
            <p>
                Copyright ⓒ 2024 persona ai All Rights Reserved
            </p>
        </div>

    </div>

</div>
</template>

<script>
import LeftBar from "../components/LeftBar.vue";
import "@/SCSS/pages/Main.scss";

export default {
    components: {
        LeftBar
    }
};
</script> 

<style scoped>
</style>
