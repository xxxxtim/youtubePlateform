<template>
<div>
    <div class="headerContainer">
        <span @click="$router.push('/video')">首頁</span>
        <span @click="$router.push('/like')">收藏頁</span>
    </div>
</div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.headerContainer {
    display: flex;
    justify-content: space-around;
    align-items: center;
    padding: 30px 0;
    background-color: pink;
    margin-bottom: 10px;
}

span {
    cursor: pointer;

    &:hover {
        color: blue;
    }
}
</style>
