<template>
    <div class="RentHero">
        <div class="container">
            <div class="RentHero__container">
                <div class="RentHero__text">
                    <div class="RentHero__wrapper">
                        <h1 class="RentHero__title">Аренда оборудования</h1>
                        <p class="RentHero__descr">Наш сервис предоставляет доступ к аренде оборудования и сетей.</p>
                    </div>

                    <div class="RentHero__button">
                        <PrimaryButton button-text="Открыть свой хост-сервис" />
                    </div>
                </div>
                <div class="RentHero__img">
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>

import PrimaryButton from "../../Others/PrimaryButton.vue";

import {useForm} from "vee-validate";

function isEmail(value) {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
}

const { errors, defineInputBinds } = useForm({
    validationSchema: {
        email: (val) => (isEmail(val) ? true : 'Некорректная электронная почта'),
    },
});

const email = defineInputBinds('email');
</script>

<style lang="scss" scoped>

.RentHero {
    margin-top: 40px;

    &__container {
        padding: 24px 60px 24px 24px;
        display: flex;
        justify-content: space-between;
        align-items: center;
        background: $background-dark;
        border-radius: 24px;
        height: 422px;
    }
    &__text {
        max-width: 593px;
        display: flex;
        flex-direction: column;
        height: 100%;
    }
    &__wrapper {
        flex: 1;
    }
    &__title {
        color: $white;
        font-size: 60px;
        font-weight: 500;
        line-height: 120%;
        text-transform: uppercase;
    }
    &__descr {
        margin-top: 4px;
        color: $gray;
        font-size: 16px;
        font-weight: 400;
        line-height: 140%;
    }
    &__button {
        display: flex;
        gap: 8px;
    }

    &__img {
        border-radius: 500px;
        width: 500px;
        height: 336px;
        background-image: url('../../../assets/images/rent/rent-img.png');
        background-position: center;
        background-size: 500px 336px;
        background-repeat: no-repeat;

    }
    &:deep(.PrimaryButton) {
        width: 263px;
        padding: 14px 24px;
    }
}

</style>