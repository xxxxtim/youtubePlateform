<template>
<div>
    <Header />
    <div class="cardsContainer">
        <Context :key="item.id" v-for="(item) in $store.getters.getlikeDatas" :item="item" :videos="$store.getters.getlikeDatas" />
    </div>
</div>
</template>

<script>
import Header from "@/components/Header.vue";
import Context from "@/components/Context.vue";
export default {
    components: {
        Header,
        Context
    },
    created() {
        // $store.getters.getlikeDatas
        this.$store.commit("upDateLikeDatas");
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
</style>
