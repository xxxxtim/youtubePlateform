<template>
<div>
    <Header />
    <div>
        <div class="cardsContainer">
            <Context :key="item.id" v-for="(item) in $store.getters.getVideosDatas" :item="item" status="videoPage" />
        </div>
    </div>
    <Footer />
</div>
</template>

<script>
import Header from "@/components/Header.vue";
import Context from "@/components/Context.vue";
import Footer from "@/components/Footer.vue";

export default {
    components: {
        Header,
        Context,
        Footer
    },
    created() {
        this.$store.dispatch("getVideosAPI");
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

.card {
    cursor: pointer;

    @include break-point(md) {
        width: 400px;
    }

    @include break-point(lg) {
        width: 300px;
    }
}
</style>
