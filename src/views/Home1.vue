<template>
    <div>
        <div 
            class="team" 
            v-for="(team, tindex) in teamDataArr" 
            :key="tindex"  
            :data-id="tindex"
            @dragover.prevent
            @drop="onTeamDrop"
            >
            <div
                class="member"
                v-for="(item, cindex) in team.children"
                :key="cindex"
                :data-id="tindex + '-' + cindex"
                draggable="true"
                @dragstart="onDragstart"
                @dragend="onDragend"
                @drop.stop="onDrop"
                @dragenter.capture="onDragenter"
                @dragleave.capture="onDragLeave"
                >
                <div>{{ item.id }}</div>
                <div>{{ item.name }}</div>
                <div>{{ item.mobile }}</div>
            </div>
        </div>
    </div>
</template>

<script>
import HomePage from "@/components/HomePage";
// import { throttle } from "../common/throttle";

export default {
    name: "Home1",
    data() {
        return {
            startExchangeIndex: "",
            endExchangeIndex: "",
            teamDataArr: [
                {
                    teamName: "A队",
                    children: [
                        {
                            id: 1,
                            name: "aaa",
                            mobile: "18662245790",
                        },
                        {
                            id: 2,
                            name: "bbb",
                            mobile: "18662245791",
                        },
                        {
                            id: 3,
                            name: "ccc",
                            mobile: "18662245792",
                        },
                        {
                            id: 4,
                            name: "ddd",
                            mobile: "18662245793",
                        },
                        {
                            id: 5,
                            name: "eee",
                            mobile: "18662245794",
                        },
                    ],
                },
                {
                    teamName: "B队",
                    children: [
                        {
                            id: 6,
                            name: "fff",
                            mobile: "18662245795",
                        },
                        {
                            id: 7,
                            name: "ggg",
                            mobile: "18662245796",
                        },
                        {
                            id: 8,
                            name: "hhh",
                            mobile: "18662245797",
                        },
                        {
                            id: 9,
                            name: "iii",
                            mobile: "18662245798",
                        },
                        {
                            id: 10,
                            name: "jjj",
                            mobile: "18662245799",
                        },
                    ],
                },
                {
                    teamName: "C队",
                    children: [
                        {
                            id: 11,
                            name: "kkk",
                            mobile: "18662245780",
                        },
                        {
                            id: 12,
                            name: "lll",
                            mobile: "18662245781",
                        },
                        {
                            id: 13,
                            name: "mmm",
                            mobile: "18662245782",
                        },
                        {
                            id: 14,
                            name: "nnn",
                            mobile: "18662245783",
                        },
                        {
                            id: 15,
                            name: "ooo",
                            mobile: "18662245784",
                        },
                    ],
                },
            ],
        };
    },
    components: {
        HomePage,
    },
    computed: {
        text: {
            get() {
                return this.$store.state.text;
            },
            set(value) {
                this.$store.commit("updateText", value);
            },
        },
    },
    mounted() {
        console.log("mounted");
    },
    methods: {
        onDragstart(event) {
            console.log("开始拖拽的元素", event.target);
            this.startExchangeIndex = event.target.getAttribute("data-id") || event.target.parentNode.getAttribute("data-id");
            console.log("开始拖拽的坐标", this.startExchangeIndex);
        },
        onDragend(event) {
            // 判断结束拖拽时是否存在可替换的元素坐标
            if (this.endExchangeIndex) {
                console.log("结束拖拽的元素", event.target);
                console.log("下标" + this.startExchangeIndex + " 和 " + this.endExchangeIndex + "进行替换");

                // 保存拖拽前后坐标
                let startTeamIndex = parseInt(this.startExchangeIndex.split("-")[0]);
                let startMemberIndex = parseInt(this.startExchangeIndex.split("-")[1]);
                let endTeamIndex = parseInt(this.endExchangeIndex.split("-")[0]);
                let endMemberIndex = parseInt(this.endExchangeIndex.split("-")[1]);

                // 保存需要被拖拽的元素的数据
                let startObj = {
                    id: this.teamDataArr[startTeamIndex].children[startMemberIndex].id,
                    name: this.teamDataArr[startTeamIndex].children[startMemberIndex].name,
                    mobile: this.teamDataArr[startTeamIndex].children[startMemberIndex].mobile
                }

                // 拖拽结束时，将被拖拽的元素从数据原始坐标位中删除
                this.teamDataArr[startTeamIndex].children.splice(startMemberIndex, 1);

                // 判断拖拽前后是否还在同一个的表格内
                if(startTeamIndex === endTeamIndex){
                    // 拖拽结束时，将被拖拽的元素添加到数据新的坐标位中（同一个表格内）
                    this.teamDataArr[endTeamIndex].children.splice(endMemberIndex, 0, startObj);
                }else{
                    // 拖拽结束时，将被拖拽的元素添加到数据新的坐标位中（另外的表格内）
                    this.teamDataArr[endTeamIndex].children.splice(endMemberIndex + 1, 0, startObj);
                }

                // 将上一次结束拖拽时下面的元素的坐标清空
                this.endExchangeIndex = '';

                console.log("拖拽结束");
            }else{
                console.log("无效拖拽");
            }

        },
        onDrop(event) {
            // event.target 都返回目标元素
            console.log("结束拖拽时下面的元素", event.target);
            
            // 记录结束拖拽时下面的元素的坐标
            this.endExchangeIndex = event.target.getAttribute("data-id") || event.target.parentNode.getAttribute("data-id");
            console.log("结束拖拽时下面的元素的坐标", this.endExchangeIndex);

            event.target.parentNode.className = 'member';

        },
        onDragenter(event) {
            console.log(event.target.parentNode.className)
            if( event.target.className === 'member'){
                event.target.className += ' drag-enter';
            } else if(event.target.parentNode.className === 'member'){
                event.target.parentNode.className += ' drag-enter';
            }
        },
        onDragLeave(event) {
            console.log(event)
            if(event.target.className === 'member drag-enter'){
                event.target.className = 'member';
            } else if (event.target.parentNode.className === 'member  drag-enter') {
                event.target.parentNode.className = 'member';
            }
        },


        onTeamDrop(event) {
            console.log("结束拖拽时下面的元素", event.target);
            this.endExchangeIndex = `${event.target.getAttribute("data-id")}-${event.target.childNodes.length}`
            console.log(this.endExchangeIndex)
        },




        /**
         * 页面相关事件处理函数--监听用户下拉动作
         */
        async onPullDownRefresh() {
            console.log("onPullDownRefresh");

            return new Promise((resolve) => {
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

            return new Promise((resolve) => {
                setTimeout(() => {
                    resolve(false);
                }, 1800);
            });
        },
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

.team {
    float: left;
    border: 1px solid black;
    margin-right: 20px;
    min-width: 200px;
    min-height: 100px;
    // padding 50px;
}

.member {
    overflow: hidden;
    display flex
    align-items center
    justify-content space-around
    height 30px
    border 1px solid #ddd

}

.drag-enter{
    border-bottom: 2px solid #ccc;
    margin-bottom 20px;
}

.member > div {
    flex 1
    height 100%
    display flex
    align-items center
    justify-content center
}
</style>>