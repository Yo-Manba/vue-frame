<template>
    <div>
        <HomePage
            ref="homePage"
        >
            <div class="scroll-item" v-for="(item, index) of 100" :key="index" @click="toInner1">
                {{ item }}home1
            </div>
        </HomePage>
    </div>
</template>

<script>
import HomePage from "@/components/HomePage";

export default {
    name: "Home1",
    data() {
        return {};
    },
    components: {
        HomePage,
    },
    mounted() {
        console.log("mounted");
        this.$refs.homePage.init();
    },
    methods: {

        toInner1() {
            this.$router.push({
                name: 'Inner1'
            })
        },

        /**
         * 页面相关事件处理函数--监听用户下拉动作
         */
        async onPullDownRefresh() {
            console.log("onPullDownRefresh");

            return new Promise(resolve => {
                setTimeout(() => {
                    resolve();
                }, 800);
            });
        },

        /**
         * 页面上拉触底事件的处理函数
         */
        async onReachBottom() {
            console.log("onReachBottom");

            return new Promise(resolve => {
                setTimeout(() => {
                    resolve(false);
                }, 1800);
            });
        }
    },
};
</script>

<style lang="stylus" scoped>
.scroll-item {
    height: 1rem;
    line-height: 1rem;
    font-size: 0.48rem;
    font-weight: bold;
    border-bottom: 0.02rem solid #eee;
    text-align: center;

    &:nth-child(2n) {
        background-color: #f3f5f7;
    }

    &:nth-child(2n+1) {
        background-color: #42b983;
    }
}
</style>>