<template>
    <Header />
    <VirtualHero />
    <VirtualServersList />
    <VirtualOs />
    <VirtualBenefits />
    <VirtualFaq />
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
</script>

<style lang="scss" scoped>

</style>