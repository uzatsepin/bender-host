<template>
    <section class="services">
        <div class="container">
            <div class="services__container">
                <router-link to="/virtual" class="services__item">
                    <h2 class="services__item-title">{{ $t('services.virtualServers') }}</h2>
                    <div class="services__item-bottom">
                        <p class="services__item-descr">{{ $t('services.virtualServersText') }}</p>
                        <div class="services__item-btn">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                                <path d="M5 12H19M19 12L12 5M19 12L12 19" stroke="#0C0E11" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                            </svg>
                        </div>
                    </div>
                </router-link>
                <router-link to="/dedicated" class="services__item">
                    <h2 class="services__item-title">{{ $t('services.dedicatedServers') }}</h2>
                    <div class="services__item-bottom">
                        <p class="services__item-descr">{{ $t('services.dedicatedServersText') }}</p>
                        <div class="services__item-btn">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                                <path d="M5 12H19M19 12L12 5M19 12L12 19" stroke="#0C0E11" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                            </svg>
                        </div>
                    </div>
                </router-link>
                <router-link to="/rent" class="services__item">
                    <h2 class="services__item-title">{{ $t('services.rent') }}</h2>
                    <div class="services__item-bottom">
                        <p class="services__item-descr">{{ $t('services.rentText') }}</p>
                        <div class="services__item-btn">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                                <path d="M5 12H19M19 12L12 5M19 12L12 19" stroke="#0C0E11" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                            </svg>
                        </div>
                    </div>
                </router-link>
            </div>
        </div>
    </section>
</template>

<script setup>

</script>

<style lang="scss" scoped>
.services {
    margin-top: 160px;

    @media screen and (max-width: 768px) {
        margin-top: 100px;
    }
    &__container {
        display: grid;
        grid-template-columns: 1fr 1fr;
        grid-template-rows: 1fr 1fr;
        gap: 16px;

        @media screen and (max-width: 500px) {
            display: flex;
            flex-direction: column;
        }
    }
    &__item {
        border-radius: 24px;
        border: 1px solid $stroke_one;
        padding: 24px;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        gap: 117px;
        transition: all 250ms ease-in-out;
        text-decoration: none;

        &:hover {
            background: $background_dark;
            cursor: pointer;
        }

        &:hover & {
            &-btn {
                cursor: pointer;
                background: $buttons-hover;
                & svg {
                    path {
                        stroke: $background_black;
                    }
                }
            }
        }
        &:last-child {
            grid-column: span 2;
        }

        @media screen and (max-width: 645px) {
            gap: 40px;
            padding: 16px;
        }


        &-title {
            color: $white;
            font-size: 32px;
            font-weight: 500;
            line-height: 120%;
            text-transform: uppercase;
            @media screen and (max-width: 645px) {
                font-size: 24px;
            }

        }
        &-bottom {
            display: flex;
            justify-content: space-between;
            align-items: center;
        }
        &-descr {
            color: $gray;
            font-size: 18px;
            font-weight: 400;
            line-height: 140%;
            max-width: 390px;

            @media screen and (max-width: 645px) {
                font-size: 16px;
            }
        }
        &-btn {
            border-radius: 50%;
            background: $background-dark_light;
            width: 40px;
            height: 40px;
            display: flex;
            align-items: center;
            justify-content: center;
            transition: all 250ms ease-in-out;
            min-width: 40px;
            margin-left: 4px;

            @media screen and (max-width: 500px) {
                margin-left: 16px;
            }
        }
    }
}

</style>