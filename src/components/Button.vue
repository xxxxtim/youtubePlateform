<template>
<div>
    <button v-if="state==='home'" @click="changePage">{{pageNumber}}</button>
    <button v-if="state==='like'" @click="changeLikePage">{{pageNumber}}</button>
</div>
</template>

<script>
import store from "@/store";
export default {
    props: ["pageNumber", "state"],
    created() {},
    methods: {
        changePage() {
            this.$store.commit("setNowPage", this.pageNumber);
        },
        changeLikePage() {
            this.$store.commit("setNowLikePage", this.pageNumber);
        }
    }
};
</script>

<style lang="scss" scoped>
button {
    width: 50px;
    height: 50px;
    line-height: 50px;
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 3px;

    &:hover {
        color: red;
    }
}
</style>
