<template>
    <div class="Periods">
        <h3 class="Periods__title">Периода оплаты и оформление заказа</h3>
        <p class="Periods__descr">Выберите на какой срок хотите купить сервер, ниже будут детали вашего
            заказа.</p>

        <div class="Periods__container">
            <div class="Periods__item" v-for="period in periods" :key="period.name" @click="handleSelectPeriod(period.name)" :class="{'selected': period.name === selectedPeriod}">{{ period.name }}</div>
        </div>
    </div>
</template>

<script setup>

import {onMounted, ref} from "vue";

const props = defineProps({
    periods: {
        type: Object,
        required: true,
    }
})
const emit = defineEmits(['selectPeriod'])

const selectedPeriod = ref('Месяц')

const handleSelectPeriod = (period) => {
    selectedPeriod.value = period
    emit('selectPeriod', period)
}

onMounted(() => {
    handleSelectPeriod(selectedPeriod.value)
})

</script>

<style lang="scss" scoped>

.Periods {
    margin-top: 60px;
    margin-bottom: 32px;
    &__title {
        color: $white;
        font-size: 24px;
        font-weight: 500;
        line-height: 120%;
    }
    &__descr {
        margin-top: 8px;
        color: $gray;
        font-size: 14px;
        font-weight: 400;
        line-height: 140%;
    }
    &__container {
        margin-top: 20px;
        display: flex;
        gap: 8px;

        width: 100%;
        position: relative;
        overflow-y: auto;
        scroll-behavior: smooth;

        &::-webkit-scrollbar {
            display: none;
        }
    }
    &__item {
        padding: 8px 14px;
        border-radius: 40px;
        background: $background_dark;
        color: $gray;
        font-size: 18px;
        font-weight: 400;
        line-height: 24px;
        transition: all 250ms ease-in-out;
        min-width: fit-content;

        &:hover {
            cursor: pointer;
            background: $yellowBg;
            color: $buttons_normal;
        }

        &:active {
            color: $buttons_click;
        }

        &.selected {
            background: $yellowBg;
            color: $buttons_normal;
        }
    }
}

</style>