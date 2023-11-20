<template>
    <div class="DedicatedServersList">
        <div class="container">
            <div class="DedicatedServersList__container">
                <div class="DedicatedServersList__head">
                    <div class="DedicatedServersList__type" v-if="false">
                        <div class="DedicatedServersList__type-item active">Обычные</div>
                        <div class="DedicatedServersList__type-item">Абузоустойчивые</div>
                    </div>
                    <div class="DedicatedServersList__country">
                        <div class="DedicatedServersList__country-item sweden active">Швеция</div>
                        <div class="DedicatedServersList__country-item finland">Финляндия</div>
                    </div>
                </div>
                <div class="DedicatedServersList__info">
                    <div class="DedicatedServersList__text">
                        <h2 class="DedicatedServersList__text-title">Швеция</h2>
                        <ul class="DedicatedServersList__text-list">
                            <li class="DedicatedServersList__text-list-item">Защита от DDoS</li>
                            <li class="DedicatedServersList__text-list-item">Интернет до 1 Гбит/с</li>
                            <li class="DedicatedServersList__text-list-item">Возможность продления</li>
                        </ul>
                    </div>
                    <div class="DedicatedServersList__list">
                        <div class="DedicatedServersList__list-item">
                            <div class="DedicatedServersList__list-item-name">2x Xeon-2678v3 <span v-if="!isMobile">(установка: 1 150₽)</span></div>
                            <div class="DedicatedServersList__list-item-wrapper">
                                <div class="DedicatedServersList__list-item-char" v-if="!isMobile">
                                    <p>24 cores</p>
                                    <p>128 GB RAM</p>
                                    <p>1000 GB NVMe</p>
                                    <p>1 Gbit/s</p>
                                </div>
                                <div class="DedicatedServersList__list-item-char-mob" v-if="isMobile">
                                    <div class="DedicatedServersList__list-item-char-mob-item">
                                        <p class="DedicatedServersList__list-item-char-mob-item-name">Ядро</p>
                                        <p class="DedicatedServersList__list-item-char-mob-item-value">24</p>
                                    </div>
                                    <div class="DedicatedServersList__list-item-char-mob-item">
                                        <p class="DedicatedServersList__list-item-char-mob-item-name">Интернет до</p>
                                        <p class="DedicatedServersList__list-item-char-mob-item-value">1 Гбит/с</p>
                                    </div>
                                    <div class="DedicatedServersList__list-item-char-mob-item">
                                        <p class="DedicatedServersList__list-item-char-mob-item-name">GB RAM</p>
                                        <p class="DedicatedServersList__list-item-char-mob-item-value">128</p>
                                    </div>
                                    <div class="DedicatedServersList__list-item-char-mob-item">
                                        <p class="DedicatedServersList__list-item-char-mob-item-name">GB NVMe</p>
                                        <p class="DedicatedServersList__list-item-char-mob-item-value">1 000</p>
                                    </div>

                                </div>
                                <div class="DedicatedServersList__list-item-price">
                                    <p>
                                        <span>месяц</span> 20 074 ₽
                                    </p>
                                    <p>
                                        <span v-if="isMobile">установка</span> 1 150 ₽
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div class="DedicatedServersList__list-item">
                            <div class="DedicatedServersList__list-item-name">AMD Ryzen 7 3700X <span v-if="!isMobile">(установка: 1 150₽)</span></div>
                            <div class="DedicatedServersList__list-item-wrapper">
                                <div class="DedicatedServersList__list-item-char" v-if="!isMobile">
                                    <p>8 cores</p>
                                    <p>128 GB RAM</p>
                                    <p>2 000 GB NVMe</p>
                                    <p>1 Gbit/s</p>
                                </div>
                                <div class="DedicatedServersList__list-item-char-mob" v-if="isMobile">
                                    <div class="DedicatedServersList__list-item-char-mob-item">
                                        <p class="DedicatedServersList__list-item-char-mob-item-name">Ядро</p>
                                        <p class="DedicatedServersList__list-item-char-mob-item-value">8</p>
                                    </div>
                                    <div class="DedicatedServersList__list-item-char-mob-item">
                                        <p class="DedicatedServersList__list-item-char-mob-item-name">Интернет до</p>
                                        <p class="DedicatedServersList__list-item-char-mob-item-value">1 Гбит/с</p>
                                    </div>
                                    <div class="DedicatedServersList__list-item-char-mob-item">
                                        <p class="DedicatedServersList__list-item-char-mob-item-name">GB RAM</p>
                                        <p class="DedicatedServersList__list-item-char-mob-item-value">128</p>
                                    </div>
                                    <div class="DedicatedServersList__list-item-char-mob-item">
                                        <p class="DedicatedServersList__list-item-char-mob-item-name">GB NVMe</p>
                                        <p class="DedicatedServersList__list-item-char-mob-item-value">2 000</p>
                                    </div>

                                </div>
                                <div class="DedicatedServersList__list-item-price">
                                    <p>
                                        <span>месяц</span> 13 800 ₽
                                    </p>
                                    <p>
                                        <span v-if="isMobile">установка</span> 1 150 ₽
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div class="DedicatedServersList__list-item popular">
                            <div class="DedicatedServersList__list-item-name">2x Xeon-2678v3 2X RAM <span class="popular">(Популярное)</span> <span v-if="!isMobile">(установка: 1 150₽)</span></div>
                            <div class="DedicatedServersList__list-item-wrapper">
                                <div class="DedicatedServersList__list-item-char" v-if="!isMobile">
                                    <p>24 core</p>
                                    <p>256 GB RAM</p>
                                    <p>2 000 GB NVMe</p>
                                    <p>1 Gbit/s</p>
                                </div>
                                <div class="DedicatedServersList__list-item-char-mob" v-if="isMobile">
                                    <div class="DedicatedServersList__list-item-char-mob-item">
                                        <p class="DedicatedServersList__list-item-char-mob-item-name">Ядро</p>
                                        <p class="DedicatedServersList__list-item-char-mob-item-value">24</p>
                                    </div>
                                    <div class="DedicatedServersList__list-item-char-mob-item">
                                        <p class="DedicatedServersList__list-item-char-mob-item-name">Интернет до</p>
                                        <p class="DedicatedServersList__list-item-char-mob-item-value">1 Гбит/с</p>
                                    </div>
                                    <div class="DedicatedServersList__list-item-char-mob-item">
                                        <p class="DedicatedServersList__list-item-char-mob-item-name">GB RAM</p>
                                        <p class="DedicatedServersList__list-item-char-mob-item-value">256</p>
                                    </div>
                                    <div class="DedicatedServersList__list-item-char-mob-item">
                                        <p class="DedicatedServersList__list-item-char-mob-item-name">GB NVMe</p>
                                        <p class="DedicatedServersList__list-item-char-mob-item-value">2 000</p>
                                    </div>

                                </div>
                                <div class="DedicatedServersList__list-item-price">
                                    <p>
                                        <span>месяц</span> 25 466 ₽
                                    </p>
                                    <p>
                                        <span v-if="isMobile">установка</span> 1 150 ₽
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div class="DedicatedServersList__list-item promo">
                            <div class="DedicatedServersList__list-item-name">2x Xeon-2678v3 10 Gbps guaranteed <span class="promo">(Акция!)</span> <span v-if="isMobile">(установка: 1 150₽)</span></div>
                            <div class="DedicatedServersList__list-item-wrapper">
                                <div class="DedicatedServersList__list-item-char" v-if="!isMobile">
                                    <p>24 core</p>
                                    <p>128 GB RAM</p>
                                    <p>8 000 GB NVMe</p>
                                    <p>10 Gbit/s</p>
                                </div>
                                <div class="DedicatedServersList__list-item-char-mob" v-if="isMobile">
                                    <div class="DedicatedServersList__list-item-char-mob-item">
                                        <p class="DedicatedServersList__list-item-char-mob-item-name">Ядро</p>
                                        <p class="DedicatedServersList__list-item-char-mob-item-value">24</p>
                                    </div>
                                    <div class="DedicatedServersList__list-item-char-mob-item">
                                        <p class="DedicatedServersList__list-item-char-mob-item-name">Интернет до</p>
                                        <p class="DedicatedServersList__list-item-char-mob-item-value">1 Гбит/с</p>
                                    </div>
                                    <div class="DedicatedServersList__list-item-char-mob-item">
                                        <p class="DedicatedServersList__list-item-char-mob-item-name">GB RAM</p>
                                        <p class="DedicatedServersList__list-item-char-mob-item-value">128</p>
                                    </div>
                                    <div class="DedicatedServersList__list-item-char-mob-item">
                                        <p class="DedicatedServersList__list-item-char-mob-item-name">GB NVMe</p>
                                        <p class="DedicatedServersList__list-item-char-mob-item-value">8 000</p>
                                    </div>

                                </div>
                                <div class="DedicatedServersList__list-item-price">
                                    <span class="promo">70 000 ₽ за первый месяц</span>
                                    <p>
                                        <span>месяц</span> 98 431 ₽
                                    </p>
                                    <p>
                                        <span v-if="isMobile">установка</span> 1 150 ₽
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div class="DedicatedServersList__list-item">
                            <div class="DedicatedServersList__list-item-name">2x Xeon-2678v3 20 Gbps guaranteed <span v-if="!isMobile">(установка: 1 150₽)</span></div>
                            <div class="DedicatedServersList__list-item-wrapper">
                                <div class="DedicatedServersList__list-item-char" v-if="!isMobile">
                                    <p>24 core</p>
                                    <p>256 GB RAM</p>
                                    <p>8 000 GB NVMe</p>
                                    <p>20 Gbit/s</p>
                                </div>
                                <div class="DedicatedServersList__list-item-char-mob" v-if="isMobile">
                                    <div class="DedicatedServersList__list-item-char-mob-item">
                                        <p class="DedicatedServersList__list-item-char-mob-item-name">Ядро</p>
                                        <p class="DedicatedServersList__list-item-char-mob-item-value">24</p>
                                    </div>
                                    <div class="DedicatedServersList__list-item-char-mob-item">
                                        <p class="DedicatedServersList__list-item-char-mob-item-name">Интернет до</p>
                                        <p class="DedicatedServersList__list-item-char-mob-item-value">10 Гбит/с</p>
                                    </div>
                                    <div class="DedicatedServersList__list-item-char-mob-item">
                                        <p class="DedicatedServersList__list-item-char-mob-item-name">GB RAM</p>
                                        <p class="DedicatedServersList__list-item-char-mob-item-value">256</p>
                                    </div>
                                    <div class="DedicatedServersList__list-item-char-mob-item">
                                        <p class="DedicatedServersList__list-item-char-mob-item-name">GB NVMe</p>
                                        <p class="DedicatedServersList__list-item-char-mob-item-value">8 000</p>
                                    </div>

                                </div>
                                <div class="DedicatedServersList__list-item-price">
                                    <p>
                                        <span>месяц</span> 185 408 ₽
                                    </p>
                                    <p>
                                        <span v-if="isMobile">установка</span> 1 150 ₽
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>

const isMobile = window.innerWidth < 900


</script>

<style lang="scss" scoped>
.DedicatedServersList {
    margin-top: 60px;
    &__head {
        display: flex;
        justify-content: space-between;
        align-items: center;
    }
    &__type {
        display: flex;
        gap: 8px;
        &-item {
            padding: 8px 14px;
            border-radius: 40px;
            background: $background_dark;
            color: $gray;
            font-size: 18px;
            font-weight: 400;
            line-height: 24px;
            transition: all 250ms ease-in-out;

            &:hover {
                background: $yellowBg;
                color: $buttons_normal;
                cursor: pointer;
            }

            &.active {
                background: $yellowBg;
                color: $buttons_normal;
            }
        }
    }
    &__country {
        display: flex;
        gap: 8px;
        &-item {
            padding: 8px 14px;
            background: $background_dark;
            color: $gray;
            border-radius: 40px;
            display: flex;
            align-items: center;
            transition: all 250ms ease-in-out;
            &:hover {
                background: $yellowBg;
                color: $buttons_normal;
                cursor: pointer;
            }

            &:before {
                content: "";
                width: 18px;
                height: 24px;
                background-position: center;
                background-repeat: no-repeat;
                background-size: 18px 24px;
                margin-right: 6px;
            }

            &.active {
                background: $yellowBg;
                color: $buttons_normal;
            }

            &.germany:before {
                background-image: url('@/assets/images/virtual/germany-icon.svg');
            }
            &.swiss:before {
                background-image: url('@/assets/images/virtual/swiss-icon.svg');
            }
            &.sweden:before {
                background-image: url('@/assets/images/virtual/sweden-icon.svg');
            }
            &.finland:before {
                background-image: url('@/assets/images/virtual/finland-icon.svg');
            }
        }
    }
    &__info {
        display: flex;
        justify-content: space-between;
        margin-top: 24px;
        padding: 24px;
        background: $background_dark;
        border-radius: 24px;

        @media screen and (max-width: 1030px) {
            flex-direction: column;
            gap: 24px;
        }
    }
    &__text {
        max-width: 175px;
        &-title {
            color: $white;
            font-size: 32px;
            font-weight: 500;
            line-height: 120%;
        }
        &-list {
            margin-top: 16px;
            display: flex;
            flex-direction: column;
            &-item {
                color: $gray;
                font-size: 14px;
                font-weight: 400;
                line-height: 24px;
            }
        }
    }
    &__list {
        display: flex;
        flex-direction: column;
        gap: 8px;
        @media screen and (max-width: 900px) {
            flex-direction: row;
            flex-wrap: wrap;
        }

        @media screen and (max-width: 730px) {
            flex-direction: column;
            gap: 16px;
        }
        &-item {
            padding: 16px;
            background: $stroke_one;
            border-radius: 16px;
            width: 762px;

            @media screen and (max-width: 900px) {
                width: 49%;
            }

            @media screen and (max-width: 730px) {
                width: 100%;
            }

            &.popular & {
                &-price {
                    p {
                        background: $buttons_normal;
                        color: $background-black;
                        & span {
                            color: $background-black;
                        }

                        &:last-child {
                            background: $background_dark;
                            color: $white;
                            & span {
                                color: $gray
                            }
                        }
                    }
                }
                &-name {
                    .popular {
                        color: $buttons-normal
                    }
                }
            }

            &.promo {
                @media screen and (max-width: 900px) {
                    display: none;
                }
            }
            &.promo & {
                &-name {
                    .promo {
                        color: $green;
                    }
                }
                &-price {
                    position: relative;
                    .promo {
                        position: absolute;
                        bottom: 33px;
                        right: 0;
                        font-size: 14px;
                        color: $green;
                        font-weight: 400;
                        line-height: 24px;
                        width: 182px;
                    }
                }
            }

            &-name {
                color: $gray;
                font-size: 14px;
                font-weight: 400;
                line-height: 24px;
                & span {
                    color: $gray;
                    margin-left: 6px;
                }
            }
            &-wrapper {
                display: flex;
                justify-content: space-between;
                align-items: center;
                @media screen and (max-width: 900px) {
                    flex-direction: column;
                    gap: 8px;
                    align-items: baseline;
                }
            }
            &-char {
                display: flex;
                gap: 24px;
                & p {
                    color: $white;
                    font-size: 18px;
                    font-weight: 400;
                    line-height: 24px;
                }
                &-mob {
                    width: 100%;
                    display: flex;
                    flex-direction: column;
                    gap: 8px;
                    margin-top: 6px;

                    &-item {
                        display: flex;
                        justify-content: space-between;
                        &-name {
                            color: $gray;
                            font-size: 18px;
                            font-weight: 400;
                            line-height: 24px;

                        }
                        &-value {
                            color: $white;
                            font-size: 18px;
                            font-weight: 400;
                            line-height: 24px;
                            padding: 4px 12px;
                            border-radius: 40px;
                            background: $background-dark_light;

                        }
                    }
                }
            }
            &-price {
                display: flex;
                gap: 8px;

                @media screen and (max-width: 900px) {
                    display: flex;
                    flex-direction: column;
                    gap: 6px;
                }
                & p {
                    padding: 4px 8px;
                    border-radius: 8px;
                    background: $background-dark;
                    color: $white;
                    font-size: 18px;
                    font-weight: 400;
                    line-height: 24px;
                    & span {
                        color: $gray;
                        font-size: 14px;
                    }
                }
            }
        }
    }

}

</style>