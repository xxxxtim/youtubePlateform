<template>
<div>
    <div class="headerContainer">
        <span @click="$router.push('/video')">首頁</span>
        <!-- <span @click="$router.push('/like')">收藏頁</span> -->
        <span @click="$router.push('/like')">收藏頁</span>
    </div>
</div>
</template>

<script>
export default {
    methods: {
        toLikePage() {
            this.$router.push("/like");
            this.$store.commit("saveDatas2Sotrage");
        }
    }
};
</script>

<style lang="scss" scoped>
.headerContainer {
    display: flex;
    justify-content: space-around;
    align-items: center;
    padding: 30px 0;
    background-color: gray;
    margin-bottom: 10px;
    color: white;
    font-size: 25px;
}

span {
    cursor: pointer;

    &:hover {
        color: blue;
    }
}
</style>
