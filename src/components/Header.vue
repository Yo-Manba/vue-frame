
<template>
    <div class="header border-bottom">
        <span v-if="hasBack" class="iconfont iconfanhui" @click="goBack"></span>
        <div class="title" @click="customEvent">{{ title }}</div>
    </div>
</template>

<script>

export default {
    name: "Header",
    props: ["hasBack", "title"],
    data() {
        return {
            text: 122
        };
    },

    components: {},

    computed: {},

    methods: {
        goBack() {
            this.$router.go(-1);
        },

        changeText() {
            this.text = 133
        },

        customEvent() {
            event.$emit('changeInnerPage', '8888')
        }
    },

    beforeCreate() {
        console.log("header beforeCreate");
    },

    created() {
        console.log("header created");
    },

    beforeMount() {
        console.log("header beforeMount");
    },

    mounted() {
        console.log("header mounted");
    },

    beforeUpdate() {
        console.log("header beforeUpdate");
    },

    updated() {
        console.log("header updated");
    },

    beforeDestroy() {
        console.log("header beforeDestroy");
    },

    destroyed() {
        console.log("header destroyed");
    },
};
</script>

<style lang='stylus' scoped>
.header {
    height: 1rem;
    background-color: #f5f5f5;
    text-align: center;
    display: flex;
    align-items: center;
    justify-content: center;
    font-weight: bold;
    position: relative;

    .iconfanhui {
        position: absolute;
        top: 50%;
        transform: translateY(-50%);
        left: 0;
        width: 1rem;
        height: 1rem;
        display: flex;
        align-items: center;
        justify-content: center;
        font-size: 0.3rem;
    }

    .title {
        font-size: 0.31rem;
    }
}
</style>