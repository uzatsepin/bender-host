<template>
    <Header :isAuthOpen="isAuthOpen" @handleAuth="handleAuth" @closeAuth="closeAuth" />
        <RentHero />
        <RentFaq />
        <RentNode />
        <RentBenefits />
    <Footer />
    <transition name="popup-anim">
        <Auth v-if="isAuthOpen" @handleAuth="handleAuth"/>
    </transition>
</template>

<script setup>

import Header from "../components/HomePage/Header/Header.vue";
import Footer from "../components/HomePage/Footer/Footer.vue";
import RentHero from "../components/RentPage/RentHero/RentHero.vue";
import RentFaq from "../components/RentPage/RentFaq/RentFaq.vue";
import RentNode from "../components/RentPage/RentNode/RentNode.vue";
import RentBenefits from "../components/RentPage/RentBenefits/RentBenefits.vue";
import {ref} from "vue";
import Auth from "../components/Auth/Auth.vue";


const isAuthOpen = ref(false)

const handleAuth = () => {
    isAuthOpen.value = !isAuthOpen.value
}

const closeAuth = () => {
    isAuthOpen.value = false
}
</script>

<style lang="scss" scoped>

</style>