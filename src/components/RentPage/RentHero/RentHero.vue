<template>
    <div class="RentHero">
        <div class="container">
            <div class="RentHero__container">
                <div class="RentHero__text">
                    <div class="RentHero__wrapper">
                        <h1 class="RentHero__title">Аренда оборудования</h1>
                        <p class="RentHero__descr">Наш сервис предоставляет доступ к аренде оборудования и сетей.</p>
                    </div>

                    <div class="RentHero__button" v-if="!isMobile">
                        <PrimaryButton button-text="Открыть свой хост-сервис" />
                    </div>
                </div>
                <div class="RentHero__img">
                </div>
                <div class="RentHero__button" v-if="isMobile">
                    <PrimaryButton button-text="Открыть свой хост-сервис" />
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>

import PrimaryButton from "../../Others/PrimaryButton.vue";

import {useForm} from "vee-validate";

const isMobile = window.innerWidth < 769

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

        @media screen and (max-width: 768px) {
            flex-direction: column;
            height: auto;
            padding: 24px 20px;
            align-items: baseline;
            gap: 32px;
        }
    }
    &__text {
        max-width: 593px;
        display: flex;
        flex-direction: column;
        height: 100%;

        @media screen and (max-width: 768px) {
            width: 100%;
        }
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

        @media screen and (max-width: 768px) {
            font-size: 32px;
        }
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

        @media screen and (max-width: 768px) {
            width: 100%;
        }
    }

    &__img {
        border-radius: 500px;
        width: 500px;
        height: 336px;
        background-image: url('../../../assets/images/rent/rent-img.png');
        background-position: center;
        background-size: 500px 336px;
        background-repeat: no-repeat;

        @media screen and (max-width: 768px) {
            width: 100%;
            border-radius: 50%;
        }
        @media screen and (max-width: 430px) {
            height: 240px;
        }
        @media screen and (max-width: 390px) {
            height: 218px;
        }

    }
    &:deep(.PrimaryButton) {
        width: 263px;
        padding: 14px 24px;
        @media screen and (max-width: 768px) {
            width: 100%;
        }
    }
}

</style>