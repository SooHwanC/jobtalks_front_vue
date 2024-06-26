<template>
<div class="Main">
    <left-bar />
    <div class="right_wrapper">
        <div class="ex_content_wrapper">
            <div class="ex_content_box">
                <div class="job_input_wrapper">
                    <div class="job_input_box">
                        <h2>1. 성장과정</h2>
                        <div class="text_wrapper">
                            <textarea placeholder="성장과정을 입력해주세요."></textarea>
                        </div>
                        <div class="charCount">
                            0/1000
                        </div>
                    </div>
                    <div class="job_input_box">
                        <h2>2. 성격의 장단점</h2>
                        <div class="text_wrapper">
                            <textarea placeholder="성격의 장단점을 입력해주세요."></textarea>
                        </div>
                        <div class="charCount">
                            0/1000
                        </div>
                    </div>
                    <div class="job_input_box">
                        <h2>3. 지원동기</h2>
                        <div class="text_wrapper">
                            <textarea placeholder="지원동기를 입력해주세요."></textarea>
                        </div>
                        <div class="charCount">
                            0/1000
                        </div>
                    </div>
                    <div class="job_input_box">
                        <h2>4. 입사 후 포부</h2>
                        <div class="text_wrapper">
                            <textarea placeholder="입사 후 포부를 입력해주세요."></textarea>
                        </div>
                        <div class="charCount">
                            0/1000
                        </div>
                    </div>
                </div>
                <div class="submit_btn_wrapper">
                    <div class="submit_btn_box">
                        제출하기
                    </div>
                </div>

            </div>
        </div>

    </div>

</div>
</template>

<script>
import LeftBar from '../components/LeftBar.vue'
import "@/SCSS/pages/EssayInput.scss"

export default {
    components: {
        LeftBar
    },

}
</script>

<style>

</style>
