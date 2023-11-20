<template>
    <div class="Panel">
        <aside class="PanelAside">
            <PanelAside :isPanelOpen="isPanelOpen" @handlePopup="handlePanelToggle" />
            <PanelMobile v-if="isMobile" @handlePopup="handlePanelToggle"/>
        </aside>
        <main class="PanelContent">
            <RouterView />
        </main>
    </div>
</template>

<script setup>
import PanelAside from "./Panel/PanelAside.vue";
import PanelMobile from "./Panel/PanelMobile.vue";
import {ref} from "vue";

const isMobile = window.innerWidth < 1200;

const isPanelOpen = ref(false);

const handlePanelToggle = () => {
    isPanelOpen.value = !isPanelOpen.value
}


</script>

<style lang="scss" scoped>
.Panel {
    display: flex;
    @media screen and (max-width: 1200px) {
        flex-direction: column;
    }
}

.PanelAside {
    flex: 0 0 auto;
    height: 100%;
}

.PanelContent {
    padding: 40px 24px 100px 24px;
    width: 100%;
    max-width: calc(100% - 276px);
    margin-left: auto;
    flex: 1;

    @media screen and (max-width: 1200px) {
        max-width: 100%;
    }
}
</style>