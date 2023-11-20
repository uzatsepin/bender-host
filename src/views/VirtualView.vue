<template>
    <Header :isAuthOpen="isAuthOpen" @handleAuth="handleAuth" @closeAuth="closeAuth"/>
    <VirtualHero />
    <VirtualServersList />
    <VirtualOs />
    <VirtualBenefits />
    <VirtualFaq />
    <transition name="popup-anim">
        <Auth v-if="isAuthOpen" @handleAuth="handleAuth"/>
    </transition>
    <Footer />
</template>

<script setup>

import Header from "../components/HomePage/Header/Header.vue";
import Footer from "../components/HomePage/Footer/Footer.vue";
import VirtualHero from "../components/VirtualServerPage/VirtualHero/VirtualHero.vue";
import VirtualServersList from "../components/VirtualServerPage/VirtualServersList/VirtualServersList.vue";
import VirtualOs from "../components/VirtualServerPage/VirtualOs/VirtualOs.vue";
import VirtualBenefits from "../components/VirtualServerPage/VirtualBenefits/VirtualBenefits.vue";
import VirtualFaq from "../components/VirtualServerPage/VirtualFaq/VirtualFaq.vue";
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