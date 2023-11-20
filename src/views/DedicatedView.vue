<template>
    <Header />
        <DedicatedHero />
        <DedicatedServersList />
        <VirtualOs />
        <DedicatedBenefits />
        <DedicatedFaq />
    <Footer />
</template>

<script setup>

import Header from "../components/HomePage/Header/Header.vue";
import Footer from "../components/HomePage/Footer/Footer.vue";
import DedicatedHero from "../components/DedicatedPage/DedicatedHero/DedicatedHero.vue";
import DedicatedServersList from "../components/DedicatedPage/DedicatedServersList/DedicatedServersList.vue";
import VirtualOs from "../components/VirtualServerPage/VirtualOs/VirtualOs.vue";
import DedicatedBenefits from "../components/DedicatedPage/DedicatedBenefits/DedicatedBenefits.vue";
import DedicatedFaq from "../components/DedicatedPage/DedicatedFaq/DedicatedFaq.vue";
</script>

<style lang="scss" scoped>

</style>