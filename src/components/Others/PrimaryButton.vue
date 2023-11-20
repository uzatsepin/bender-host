<template>
    <button class="PrimaryButton">
        {{ buttonText }}
    </button>
</template>

<script setup>

const props = defineProps({
    buttonText: {
        type: String,
        required: true,
    },
})

</script>

<style lang="scss" scoped>
    .PrimaryButton {
        padding: 12px 24px;
        border-radius: 8px;
        display: flex;
        justify-content: center;
        align-items: center;
        background: $buttons-normal;
        transition: all 250ms ease-in-out;
        color: $background_black;
        font-size: 16px;
        font-weight: 500;
        line-height: 24px;
        outline: none;
        border: none;

        &:hover {
            background: $buttons-hover;
            cursor: pointer;
        }

        &:active {
            background: $buttons-click;
        }

        &:disabled {
            background: $buttons-disabled;
            color: $disabled;
            pointer-events: none;
        }
    }
</style>