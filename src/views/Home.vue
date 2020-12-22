<template>
    <div class="home">
        <keep-alive>
            <component :is="CurrentComponent"></component>
        </keep-alive>
        
        <div class="nav">
            <div class="navItem" @click="CurrentComponent = Home1">
                <span class="iconfont iconzhuyequan"></span>
                <div>首页</div>
            </div>
            <div class="navItem"  @click="CurrentComponent = Home2">
                <span class="iconfont iconzujian"></span>
                <div>组件</div>
            </div>
            <div class="navItem"  @click="CurrentComponent = Home3">
                <span class="iconfont iconicon_huabanfuben"></span>
                <div>数据</div>
            </div>
            <div class="navItem"  @click="CurrentComponent = Home4">
                <span class="iconfont iconmy-fill"></span>
                <div>我的</div>
            </div>
        </div>
    </div>
</template>

<script>
// @ is an alias to /src
import Home1 from "@/views/Home1";
import Home2 from "@/views/Home2";
import Home3 from "@/views/Home3";
import Home4 from "@/views/Home4";


export default {
    name: "Home",
    data() {
        return {
            CurrentComponent: Home1,
            Home1,
            Home2,
            Home3,
            Home4,
        };
    },
    components: {},
};
</script>

<style lang='stylus' scoped>
/* 底部导航栏 */
.nav {
    position: fixed;
    left: 0;
    bottom: 0;
    width: 100%;
    box-sizing: border-box;
    height: 1.1rem;
    display: flex;
    align-items: center;
    justify-content: space-around;
    text-align: center;
    background-color: #f5f5f5;

    .navItem {
        flex: 1;
        height: 100%;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;

        .iconfont {
            font-size: 0.42rem;
            display: block;
            margin-bottom: 5px;
        }

        &.link-active {
            color: #42b983;
        }
    }
}
</style>
