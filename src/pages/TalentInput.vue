<template>
<div class="Main">
    <LeftBar />
    <div class="right_wrapper">
        <div class="ex_content_wrapper">
            <div class="ex_content_box">
                <div class="talent_search_wrapper">
                    <div class="talent_search_box">
                        <h2>회사 검색</h2>
                        <div class="search_btn">
                            <img src="../assets/images/search_btn.svg" alt="Search">
                        </div>
                        <div class="search_ai_robot_img">
                            <img src="../assets/images/ai_search_btn.svg" alt="robot">
                        </div>

                    </div>
                    <div class="company_btn_box">
                        회사이름
                    </div>
                    <div class="company_talent_box">
                        인재상
                    </div>
                    <div class="company_url_box">
                        <span>주소이동</span>
                    </div>
                </div>
                <div class="user_text_wrapper">
                    <div class="user_text_box">
                        <h2>수정할 문장을 입력해 주세요.</h2>
                        <textarea placeholder="수정할 문장을 입력해 주세요"></textarea>
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
import LeftBar from '../components/LeftBar.vue';
import '@/SCSS/pages/TalentInput.scss';

export default {
    components: {
        LeftBar
    }
}
</script>

<style>

</style>
