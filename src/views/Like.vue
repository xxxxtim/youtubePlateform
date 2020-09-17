<template>
<div>
    <Header />
    <div>
        <Context :videos="$store.getters.getlikeDatas">
            <!-- <button @click="test" slot="likeBtn">刪除最愛</button> -->
        </Context>
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
    },
    methods: {
        test() {
            console.log("delete");
        }
    }
};
</script>

<style lang="scss" scoped>
</style>
