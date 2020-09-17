<template>
<div>
    <Header />
    <vue-plyr>
        <div class="plyr__video-embed">
            <iframe :src="'https://www.youtube.com/watch?v='+$route.query.videoId" allowfullscreen allowtransparency allow="autoplay"></iframe>
        </div>
    </vue-plyr>
</div>
</template>

<script>
import Header from "@/components/Header.vue";
export default {
    data() {
        return {
            videoId: ""
        };
    },
    created() {},
    components: {
        Header
    }
};
</script>

<style lang="scss" scoped>
</style>
