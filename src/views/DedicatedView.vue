<template>
    <Header :isAuthOpen="isAuthOpen" @handleAuth="handleAuth" @closeAuth="closeAuth"/>
        <DedicatedHero />
        <DedicatedServersList />
        <VirtualOs />
        <DedicatedBenefits />
        <DedicatedFaq />
    <Footer />
    <transition name="popup-anim">
        <Auth v-if="isAuthOpen" @handleAuth="handleAuth"/>
    </transition>
</template>

<script setup>

import Header from "../components/HomePage/Header/Header.vue";
import Footer from "../components/HomePage/Footer/Footer.vue";
import DedicatedHero from "../components/DedicatedPage/DedicatedHero/DedicatedHero.vue";
import DedicatedServersList from "../components/DedicatedPage/DedicatedServersList/DedicatedServersList.vue";
import VirtualOs from "../components/VirtualServerPage/VirtualOs/VirtualOs.vue";
import DedicatedBenefits from "../components/DedicatedPage/DedicatedBenefits/DedicatedBenefits.vue";
import DedicatedFaq from "../components/DedicatedPage/DedicatedFaq/DedicatedFaq.vue";
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