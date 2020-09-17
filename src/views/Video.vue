<template>
<div>
    <Header />
    <div>
        <Context :videos="$store.getters.getVideosDatas" status="videoPage" />
        <!-- <button slot="likeBtn">加入最愛</button> -->
        <!-- </Context> -->
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
// $mobile-width: 768px;
// $computer-width: 1024px;

// @mixin break-point($temp) {
//     @if $temp==xl {
//         @media only screen and (min-width: 1200px) {
//             @content;
//         }
//     }

//     @else if $temp==lg {
//         @media only screen and (min-width: 992px) {
//             @content;
//         }
//     }

//     @else if $temp==md {
//         @media only screen and (min-width: 768px) {
//             @content;
//         }
//     }

//     @else if $temp==sm {
//         @media only screen and (min-width: 540px) {
//             @content;
//         }
//     }
// }

// .cardContainer {
//     display: flex;
//     justify-content: center;
//     align-items: center;
//     flex-wrap: wrap;
// }

// .card {

//     // flex: 1;
//     @include break-point(md) {
//         width: 400px;
//     }

//     @include break-point(lg) {
//         width: 300px;
//     }
// }
</style>
