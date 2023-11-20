<template>
    <div class="DedicatedHero">
        <div class="container">
            <div class="DedicatedHero__container">
                <div class="DedicatedHero__text">
                    <div class="DedicatedHero__wrapper">
                        <h1 class="DedicatedHero__title">Выделенные сервера</h1>
                        <p class="DedicatedHero__descr">Наш сервис предоставляет доступ к выделенным серверам высокой мощности.</p>
                    </div>

                    <div class="DedicatedHero__register" v-if="!isMobile">
                        <input class="DedicatedHero__input"
                               :class="{'error' : errors.email}"
                               v-bind="email"
                               type="text"
                               :placeholder="$t('auth.email')"
                        >

                        <span class="DedicatedHero__register-error">{{ errors.email }}</span>

                        <PrimaryButton :button-text="$t('virtual.register')" />
                    </div>
                </div>
                <div class="DedicatedHero__img">
                </div>
                <div class="DedicatedHero__register" v-if="isMobile">
                    <input class="DedicatedHero__input"
                           :class="{'error' : errors.email}"
                           v-bind="email"
                           type="text"
                           :placeholder="$t('auth.email')"
                    >

                    <span class="DedicatedHero__register-error">{{ errors.email }}</span>

                    <PrimaryButton :button-text="$t('virtual.register')" />
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

const isMobile = window.innerWidth < 580;
</script>

<style lang="scss" scoped>

.DedicatedHero {
    margin-top: 40px;

    &__container {
        padding: 24px 60px 24px 24px;
        display: flex;
        justify-content: space-between;
        align-items: center;
        background: $background-dark;
        border-radius: 24px;
        min-height: 400px;

        @media screen and (max-width: 900px) {
            flex-direction: column;
            gap: 32px;
            align-items: baseline;
            padding: 24px 20px;
        }
        @media screen and (max-width: 580px) {
            min-height: unset;
        }
    }
    &__text {
        max-width: 494px;
        display: flex;
        flex-direction: column;
        @media screen and (max-width: 580px) {
            max-width: 100%;
        }
    }
    &__title {
        color: $white;
        font-size: 60px;
        font-weight: 500;
        line-height: 120%;
        text-transform: uppercase;
        @media screen and (max-width: 580px) {
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
    &__register {
        display: flex;
        gap: 8px;
        margin-top: 86px;
        position: relative;

        @media screen and (max-width: 580px) {
            flex-direction: column;
            margin-top: 40px;
            width: 100%;
        }

        &-error {
            position: absolute;
            top: 45px;
            margin-top: 6px;
            color: $redError;
            font-size: 14px;
            font-weight: 400;
            line-height: 24px;
            display: block;
        }
    }

    &__input {
        font-weight: 400;
        font-size: 16px;
        color: #FFFFFF;
        width: 272px;
        min-width: 272px;
        padding: 14px;
        display: flex;
        align-items: center;
        justify-content: space-around;
        background: $background_dark_light;
        border-radius: 8px;
        transition: all 250ms ease-in-out;
        border: 2px solid transparent;
        position: relative;

        @media screen and (max-width: 580px) {
            width: 100%;
            min-width: 100%;
        }

        &::placeholder {
            color: $gray;
            font-weight: 400;
            font-size: 16px;
            transition: all 250ms ease-in-out;
        }

        &:hover {
            background: #343434;
            border: 2px solid rgba(250, 204, 97, 0.75);;
        }

        &:focus {
            outline: none;
            border: 2px solid rgba(250, 204, 97, 0.75);;

            &::placeholder {
                color: transparent;
            }
        }

        &.error {
            border: 2px solid rgba(235, 111, 111, 0.75);;
        }
        &.last {
            margin-top: 16px;
        }
    }

    &__img {
        border-radius: 500px;
        width: 500px;
        height: 336px;
        background-image: url('../../../assets/images/dedicated/dedicated-img.png');
        background-position: center;
        background-size: 500px 336px;
        background-repeat: no-repeat;

        @media screen and (max-width: 580px) {
            width: 100%;
            background-size: 100%;
            height: 210px;
        }

        @media screen and (max-width: 414px) {
            height: 230px;
        }

    }
    &:deep(.PrimaryButton) {
        width: 214px;
        padding: 14px 24px;
        @media screen and (max-width: 580px) {
            width: 100%;
        }
    }
}

</style>