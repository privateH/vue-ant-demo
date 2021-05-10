<template>
    <div class="login">
        <div class="login-box">
            <a-form :form="form" :label-col="{ span: 6 }" :wrapper-col="{ span: 13 }" @submit="handleSubmit">
                <a-form-item label="name">
                    <a-input v-decorator="['name', {rules: [{required: true, message: 'Please input your name!'}] }]"/>
                </a-form-item>
                <a-form-item label="password">
                    <a-input type="password" v-decorator="['password', { rules: [{ required: true, message: 'Please input your password!' }] }]" />
                </a-form-item>
                <a-form-item :wrapper-col="{ span: 13, offset: 6 }">
                    <a-button type="primary" html-type="submit">login</a-button>
                </a-form-item>
            </a-form>
        </div>
    </div>
</template>

<script>
    import { mapActions } from 'vuex';
    export default {
        name: 'login',
        data() {
            return {
                form: this.$form.createForm(this, { name: 'loginForm' })
            }
        },
        methods: {
            ...mapActions([
                'login'
            ]),
            handleSubmit(e) {
                e.preventDefault();
                this.form.validateFields((err, values) => {
                    if (!err) {
                        this.login(values).then(() => {
                            this.$router.push({name: 'index'});
                        }).catch((e) => {
                            this.$router.push({name: 'error'});
                        })
                    }
                });
            },
        }
    }
</script>

<style scoped lang="less">
    @import "./../assets/less/colors.less";
    .login {
        height: 100%;
        width: 100%;
        overflow: auto;
        background-image: url("../assets/imgs/dota2.jpg");
        background-size: cover;
        background-repeat: no-repeat;
        background-position: center center;
        background-attachment: fixed;
        text-align: center;
        .login-box {
            width: 40%;
            margin: 10% auto auto auto;
            background-color: @white;
            overflow-y: hidden;
            form {
                text-align: center;
                margin: 20% auto;
            }
        }
    }
</style>
