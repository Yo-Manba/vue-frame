<template>
    <div id="app">
        <transition :name="transitionName">
            <keep-alive :include="include">
                <router-view class="routerView" />
            </keep-alive>
        </transition>
    </div>
</template>

<script>
export default {
    data() {
        return {
            transitionName: "",
        };
    },

    components: {},

    computed: {
        include() {
            return this.$store.state.catch_components;
        },
    },

    mounted() {},

    methods: {},

    watch: {
        $route(to, from) {
            // console.log("to", to);
            // console.log("from", from);

            // 如果to索引大于from索引,判断为前进状态,反之则为后退状态
            if (to.meta.index > from.meta.index) {
                this.transitionName = "slide-left";
            } else if (to.meta.index == from.meta.index) {
                this.transitionName = "";
            } else {
                this.transitionName = "slide-right";
            }
        },
    },
}
</script>

<style lang="stylus">
.slide-right-enter-active, .slide-right-leave-active, .slide-left-enter-active, .slide-left-leave-active {
    transition: all 0.4s;
    position: absolute;
    width: 100%;
    left: 0;
    box-shadow: 0 0 0.2rem #949494;
}

.slide-left-enter {
    transform: translate3d(100%, 0, 0);
}

.slide-right-enter {
    transform: translate3d(-35%, 0, 0);
    z-index: -1;
}

.slide-left-leave-active {
    transform: translate3d(-35%, 0, 0);
}

.slide-right-leave-active {
    transform: translate3d(100%, 0, 0);
    z-index: 1;
}

// 整体页面
body {
    margin: 0;
    height: 100%;
}

#app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    width: 100%;
    height: 100%;
    position: fixed;
    top: 0;
    left: 0;
}

// router-view 视口
.routerView {
    height: 100%;
    box-sizing: border-box;
}

</style>
