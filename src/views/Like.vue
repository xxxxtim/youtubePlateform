<template>
<div>
    <Header />
    <div class="cardsContainer">
        <Context :key="item.id" v-for="(item) in $store.getters.getlikeDatas" :item="item" :videos="$store.getters.getlikeDatas" />
    </div>
    <div class="footerContainer">
        <Button :key="m" v-for="m in $store.getters.getTotalLikePage" :pageNumber="m" state="like" />
    </div>
</div>
</template>

<script>
import Header from "@/components/Header.vue";
import Context from "@/components/Context.vue";
import Button from "@/components/Button.vue";
export default {
    components: {
        Header,
        Context,
        Button
    },
    created() {
        this.$store.commit("upDateLikeDatas");
        console.log(this.$store.getters.getTotalLikePage);
    },
    methods: {
        test() {
            console.log("delete");
        }
    }
};
</script>

<style lang="scss" scoped>
.cardsContainer {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
}

.footerContainer {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
    align-items: center;
    padding: 25px;
    font-weight: bold;
}
</style>
