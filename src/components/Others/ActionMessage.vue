<template>
    <span class="ActionMessage">
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
            <path d="M20 6L9 17L4 12" stroke="#25282B" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
        </svg>
        Скопировано
    </span>
</template>

<script setup>

</script>

<style lang="scss" scoped>
.ActionMessage {
    display: flex;
    align-items: center;
    gap: 8px;
    position: absolute;
    top: 60px;
    right: -30px;
    background: $buttons_normal;
    color: $background_black;
    padding: 14px;
    border-radius: 100px;
    z-index: 3;
}
</style>