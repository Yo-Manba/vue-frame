<template>
  <div>
      <Header :hasBack="true" :title="'二级页面'" />
      <InnerPage ref="innerPage">
            <div
                class="scroll-item"
                v-for="(item, index) of 100"
                :key="index"
                @click="toFourPage(item)"
            >
                {{ item }}二级页面
            </div>
        </InnerPage>
  </div>
</template>

<script>
import Header from "@/components/Header";
import InnerPage from "@/components/InnerPage";
import { addComponent, delComponent } from "@/common/keepAliveContro"

export default {
    name: "Inner1",
    data() {
        return {};
    },
    components: {
        Header,
        InnerPage,
    },

    methods: {
        toFourPage(item) {
            this.$router.push({ name: "Inner2", params: { info: item } });
        },
    },

    beforeCreate() {
        console.log("threePage beforeCreate");
    },

    created() {
        console.log("threePage created");
    },

    beforeMount() {
        console.log("threePage beforeMount");
    },

    mounted() {
        console.log("threePage mounted");
        this.$refs.innerPage.init();
    },

    beforeUpdate() {
        console.log("threePage beforeUpdate");
    },

    updated() {
        console.log("threePage updated");
    },

    beforeDestroy() {
        console.log("threePage beforeDestroy");
    },

    destroyed() {
        console.log("threePage destroyed");
    },

    activated() {
        console.log("threePage activated");
    },

    beforeRouteEnter(to, from, next) {
        delComponent(to, from, next, "/inner2");
    },

    beforeRouteLeave(to, from, next) {
        addComponent(to, from, next, "/inner2");
    },
}   
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
</style>