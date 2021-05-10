<template>
    <p>404 error!</p>
</template>

<script>
    export default {
        name: 'error',
        data() {
            return {

            }
        }
    }
</script>

<style scoped lang="less">
    @import "./../assets/less/colors.less";
    p {
        margin-top: 20%;
        text-align: center;
        color: @red-font;
        font-size: 30px;
        font-weight: bolder;
    }
</style>
