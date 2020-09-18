<template>
<div>
    <Header />
    <div>
        <div class="cardsContainer">
            <Context :key="item.id" v-for="(item) in $store.getters.getVideosDatas" :item="item" status="videoPage" />
        </div>
    </div>
    <div class="footerContainer">
        <Button :key="n" v-for="n in $store.getters.getTotalPages" :pageNumber="n" state="home" />
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
        this.$store.dispatch("getAllDatas");
    }
};
</script>

<style lang="scss" scoped>
@import "../assets/css/mixin.scss";

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
