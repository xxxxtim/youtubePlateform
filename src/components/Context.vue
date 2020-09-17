<template>
<div>
    <!-- <div class="cardContainer"> -->
    <!-- card1 -->
    <div class="card">
        <!-- <div class="card" :key="index" v-for="(item, index) in videos"> -->
        <div>
            <!-- <img src="https://i.ytimg.com/vi/6ymPLmf55PM/sddefault.jpg" alt /> -->
            <img :src="item.snippet.thumbnails.standard.url" alt />
            <!-- {{videos}} -->
            <!-- {{ item.snippet.thumbnails.standard}} -->
        </div>
        <div class="caption">
            <!-- <input @click="changeState(item)" :checked="isChecked?true:false" type="checkbox" :name="item.id" />
        {{checkStatus}}-->
            <h2>{{item.snippet.title}}</h2>
            <h3>簡介:{{item.snippet.description}}</h3>
            <div class="buttonContainer">
                <button @click="toPlayPage(item)">播放影片</button>
                <!-- <button @click="$store.commit('setlikeDatas', item)" v-if="status==='videoPage'">加入珍藏</button> -->
                <button @click.self="addLikeDatas(item)" :disabled="isDisable" v-if="status==='videoPage'">加入珍藏</button>
                <button @click="removeLikeDatas(item)" v-if="status!=='videoPage'">刪除最愛</button>
            </div>
        </div>
    </div>
    <!-- </div> -->
</div>
</template>

<script>
export default {
    props: ["videos", "status", "item"],
    data() {
        return {
            like: [],
            checkStatus: false,
            imgUrl: "",
            title: "",
            description: "",
            isChecked: false,
            isDisable: false
        };
    },
    methods: {
        toPlayPage(item) {
            console.log(item.snippet.resourceId.videoId);
            this.$router.push({
                // name: "RoomDetails",
                path: "/play",
                query: {
                    videoId: item.snippet.resourceId.videoId
                }
            });
        },
        changeState(item) {
            // this.isChecked = !this.isChecked;
            this.$store.commit("setlikeDatas", item);
        },
        addLikeDatas(item) {
            this.isDisable = true;
            this.$store.commit("setlikeDatas", item);
            this.$store.commit("saveDatas2Sotrage");
        },
        removeLikeDatas(item) {
            this.$store.commit("removeLikeDatas", item);
            this.$store.commit("saveDatas2Sotrage");
        }
    }
};
</script>

<style lang="scss" scoped>
@import "../assets/css/mixin.scss";

.buttonContainer {
    display: flex;
    justify-content: space-between;
}

.card {
    // flex: 1;
    cursor: pointer;

    @include break-point(md) {
        width: 400px;
    }

    @include break-point(lg) {
        width: 400px;
    }

    @include break-point(sm) {
        width: 400px;
    }

    @include break-point(mobile) {
        width: 300px;
    }
}

h2 {
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
    font-size: 20px;
    font-weight: bold;
}

.caption {
    padding: 10px;
}

h3 {
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
    font-size: 16px;
}
</style>
