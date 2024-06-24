<template>
    <section class="hero">
        <div class="container">
            <div class="hero__text">
                <h1 class="hero__title">{{ $t('hero.title')}}</h1>
                <div class="hero__price">
                    <div class="hero__price-item month">{{ $t('hero.priceFrom') }} 7 {{ $t('hero.currencyMonth') }}</div>
                    <div class="hero__price-item hour">{{ $t('hero.priceFrom') }} 0.125 {{ $t('hero.currencyMonth') }}</div>
                </div>
            </div>
            <div class="hero__banner">
                <div class="hero__banner-container">
                    <div class="hero__banner-info">Виртуальные</div>
                    <div class="hero__banner-info">Выделенные сервера</div>
                    <div class="hero__banner-info">Аренда оборудования и сетей</div>
                </div>
            </div>
            <div class="hero__button">
                <PrimaryButton :buttonText="$t('hero.button')"/>
            </div>
        </div>
    </section>
</template>

<script setup>

import PrimaryButton from "../../Others/PrimaryButton.vue";
</script>

<style lang="scss" scoped>
    .hero {
        margin-top: 40px;
        &__text {
            display: flex;
            justify-content: space-between;
            align-items: flex-end;
            @media screen and (max-width: 1133px) {
                align-items: center;
            }

            @media screen and (max-width: 700px) {
                flex-direction: column;
                align-items: baseline;
                gap: 9px;
            }
        }
        &__title {
            color: $white;
            font-size: 70px;
            font-weight: 500;
            line-height: 120%;
            text-transform: uppercase;
            max-width: 786px;
            @media screen and (max-width: 1133px) {
                max-width: 500px;
            }
            @media screen and (max-width: 850px) {
                max-width: 300px;
                font-size: 50px;
            }

            @media screen and (max-width: 500px) {
                font-size: 40px;
                max-width: 100%;
            }
        }
        &__price {
            display: flex;
            gap: 8px;
            margin-bottom: 27px;
            &-item {
                border-radius: 40px;
                padding: 8px 16px;
                background: $greenBg;
                color: $green;
                font-size: 18px;
                font-weight: 400;
                line-height: 24px;
                &.hour {
                    background: $purpleBg;
                    color: $purple;
                }

                @media screen and (max-width: 500px) {
                    padding: 4px 12px;
                    font-size: 16px;
                }
            }
        }
        &__banner {
            background-image: url('../../../assets/images/banner/banner-img.png');
            background-repeat: no-repeat;
            height: 350px;
            background-size: 100%;
            background-position: 50% 50%;
            border-radius: 24px;
            position: relative;
            margin-top: 26px;

            @media screen and (max-width: 700px) {
                margin-top: 0;
            }

            @media screen and (max-width: 390px){
                background-size: cover;
            }
            &-container {
                display: flex;
                position: absolute;
                bottom: 24px;
                left: 24px;
                gap: 8px;
                width: 100%;
            }
            &-info {
                color: $background_black;
                font-size: 18px;
                font-weight: 400;
                line-height: 24px;
                padding: 8px 16px;
                border-radius: 40px;
                background: rgba(255, 255, 255, 0.25);
                backdrop-filter: blur(10px);
                max-width: 300px;
                &:last-child {
                    margin-right: 48px;
                    margin-left: auto;
                }

                @media screen and (max-width: 767px) {
                    display: none;
                }
            }
        }
        &__button {

            &:deep(.PrimaryButton) {
                width: 100%;
            }
            margin-top: 44px;
            @media screen and (max-width: 645px) {
                margin-top: 32px;
            }
        }
    }
</style>
