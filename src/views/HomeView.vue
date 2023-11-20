<script setup>
import Header from "../components/HomePage/Header/Header.vue";
import Hero from "../components/HomePage/Hero/Hero.vue";
import Services from "../components/HomePage/Services/Services.vue";
import Benefits from "../components/HomePage/Benefits/Benefits.vue";
import Footer from "../components/HomePage/Footer/Footer.vue";
import Auth from "../components/Auth/Auth.vue";
import {ref} from "vue";

const isAuthOpen = ref(false)

const handleAuth = () => {
    isAuthOpen.value = !isAuthOpen.value
}

const closeAuth = () => {
    isAuthOpen.value = false
}

</script>

<template>
    <div class="Home">
        <Header :isAuthOpen="isAuthOpen" @handleAuth="handleAuth" @closeAuth="closeAuth"/>
        <Hero/>
        <Services/>
        <Benefits/>
        <Footer/>
        <transition name="popup-anim">
            <Auth v-if="isAuthOpen" @handleAuth="handleAuth"/>
        </transition>
    </div>
</template>

<style lang="scss" scoped>
.Home {
    .popup-anim-enter-active,
    .popup-anim-leave-active {
        transition: opacity 300ms ease-in-out, transform 300ms ease-in-out;
    }

    .popup-anim-enter,
    .popup-anim-leave-to {
        opacity: 0;
        transform: scale(0.8);
    }
}

</style>
