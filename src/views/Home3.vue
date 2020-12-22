<template>
    <div>
        <HomePage
            ref="homePage"
        >
            <div class="scroll-item" v-for="(item, index) of 100" :key="index">
                {{ item }}home3
            </div>
        </HomePage>
    </div>
</template>

<script>
import HomePage from "@/components/HomePage";

export default {
    name: "Home3",
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