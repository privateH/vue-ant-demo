<template>
    <div class="index">
        <div class="user-info-box">
            <p>name: {{login_user.name}}</p>
            <p>real_name: {{login_user.real_name}}</p>
            <p>sex: {{login_user.sex}}</p>
            <p>age: {{login_user.age}}</p>
        </div>
    </div>
</template>

<script>
    import { mapState } from 'vuex';
    export default {
        name: 'index',
        data() {
            return {

            }
        },
        computed: {
            ...mapState({
                login_user: state => state.login_user
            })
        },
        mounted() {
            if (!this.login_user) {
                this.$router.push({name: 'login'});
            }
        }
    }
</script>

<style scoped lang="less">
    @import "./../assets/less/colors.less";
    .index {
        height: 100%;
        width: 100%;
        overflow: auto;
        background-image: url("../assets/imgs/dota2.jpg");
        background-size: cover;
        background-repeat: no-repeat;
        background-position: center center;
        background-attachment: fixed;
        text-align: center;
        .user-info-box {
            width: 40%;
            margin: 10% auto auto auto;
            background-color: @white;
            overflow-y: hidden;
            p {
                margin: 20px;
                font-size: 25px;
                font-weight: bolder;
            }
            p:nth-child(1) {
                margin-top: 20%;
            }
            p:nth-last-child(1) {
                margin-bottom: 20%;
            }
        }
    }
</style>
