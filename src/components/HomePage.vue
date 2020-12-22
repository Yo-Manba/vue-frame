
<template>
    <div class="scroll-wrapper" ref="scroll">
        <div class="scroll-content">
            <!-- 下拉刷新模块 -->
            <div v-if="pulldown" class="pulldown-wrapper">
                <div v-show="beforePullDown"><span>下拉刷新</span></div>
                <div v-show="!beforePullDown">
                    <div v-show="isPullingDown"><span>刷新中...</span></div>
                    <div v-show="!isPullingDown"><span>刷新成功</span></div>
                </div>
            </div>

            <!-- 页面插槽 -->
            <slot />

            <!-- 上拉加载模块 -->
            <div v-if="pullupTxt" class="pullup-wrapper">
                <div v-if="!isPullUpLoad" class="before-trigger">
                    <span class="pullup-txt">{{ pullUpTit }}</span>
                </div>
                <div v-else class="after-trigger">
                    <span class="pullup-txt">加载中...</span>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import BScroll from "@better-scroll/core";
import PullDown from "@better-scroll/pull-down";
import Pullup from "@better-scroll/pull-up";

BScroll.use(PullDown);
BScroll.use(Pullup);

export default {
    name: "HomePage",
    props: ["pulldown", "pullup", "pullupTxt"],
    data() {
        return {
            beforePullDown: true,
            isPullingDown: false,
            TIME_BOUNCE: 800,
            TIME_STOP: 600,
            THRESHOLD: 90,
            STOP: 56,

            isPullUpLoad: false,
            pullUpTit: "上拉加载更多",
            haveResult: true,
        };
    },

    components: {},

    computed: {},

    methods: {
        init() {
            // 实例化better-scroll
            this.bs = new BScroll(this.$refs.scroll, {
                scrollY: true,
                click: true,
                startY: 0,
                probeType: 3, // listening scroll hook

                bounceTime: this.TIME_BOUNCE,
                pullDownRefresh: this.pulldown
                    ? {
                          threshold: this.THRESHOLD,
                          stop: this.STOP,
                      }
                    : false,

                pullUpLoad: this.pullup ? true : false,
            });

            // 监听下拉刷新
            if (this.pulldown) {
                this.bs.on("pullingDown", this.pullingDownHandler);
            }

            // 监听上拉加载
            if (this.pullup) {
                this.bs.on("pullingUp", this.pullingUpHandler);
            }
        },

        // 下拉刷新模块****************************************************************************************************************
        async pullingDownHandler() {
            this.beforePullDown = false;
            this.isPullingDown = true;
            await this.$parent.onPullDownRefresh();
            this.isPullingDown = false;
            this.finishPullDown();
            this.haveResult = true;
            this.pullUpTit = "上拉加载更多";
        },

        async finishPullDown() {
            const stopTime = this.TIME_STOP;
            await new Promise((resolve) => {
                setTimeout(() => {
                    this.bs.finishPullDown();
                    resolve();
                }, stopTime);
            });
            setTimeout(() => {
                this.beforePullDown = true;
                this.bs.refresh();
            }, this.TIME_BOUNCE);
        },

        // 上拉加载模块****************************************************************************************************************
        async pullingUpHandler() {
            console.log(this.haveResult);
            if (this.haveResult) {
                this.isPullUpLoad = true;
                let result = await this.$parent.onReachBottom();
                if (result == false) {
                    this.pullUpTit = "没有更多了";
                    this.haveResult = false;
                }
                this.bs.refresh();
                this.isPullUpLoad = false;
            }
            this.bs.finishPullUp();
        },

        change(e) {
            console.log(e);
            console.log(6666);
        },
    },

    beforeCreate() {
        console.log("home beforeCreate");
    },

    created() {
        console.log("home created");
    },

    beforeMount() {
        console.log("home beforeMount");
    },

    mounted() {
        console.log("home mounted");
    },

    beforeUpdate() {
        console.log("home beforeUpdate");
    },

    updated() {
        console.log("home updated");
    },

    beforeDestroy() {
        console.log("home beforeDestroy");
        console.log(this.bs);
        this.bs.destroy();
    },

    destroyed() {
        console.log("home destroyed");
    },

    activated() {
        console.log("home activated");
        console.log(this.bs);
        this.bs.refresh();
    },
};
</script>

<style lang="stylus" scoped>
.scroll-wrapper {
    position: fixed;
    // top: 1rem;
    left: 0;
    width: 100%;
    height: calc(100% - 1.1rem);
    overflow: hidden;
    z-index: 111;

    .scroll-content {
        min-height: calc(100% + 1px);

        // 下拉刷新模块
        .pulldown-wrapper {
            position: absolute;
            transform: translateY(-100%) translateZ(0);
            width: 100%;
            padding: 20px;
            text-align: center;
            color: #999;
            box-sizing: border-box;
        }

        // 上拉加载模块
        .pullup-wrapper {
            padding: 20px;
            text-align: center;
            color: #999;
        }
    }
}
</style>