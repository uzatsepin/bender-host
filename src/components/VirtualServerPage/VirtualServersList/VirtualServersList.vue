<template>
    <div class="VirtualServersList">
        <div class="container">
            <div class="VirtualServersList__container">
                <div class="VirtualServersList__head">
                    <div class="VirtualServersList__title" v-if="isMobile">Выберите тип сервера</div>
                    <div class="VirtualServersList__type">
                        <div class="VirtualServersList__type-item active">Обычные</div>
                        <div class="VirtualServersList__type-item">Абузоустойчивые</div>
                    </div>
                    <div class="VirtualServersList__title last" v-if="isMobile">Выберите локацию сервера</div>
                    <div class="VirtualServersList__country">
                        <div class="VirtualServersList__country-item germany active">Германия</div>
                        <div class="VirtualServersList__country-item swiss">Швейцария</div>
                        <div class="VirtualServersList__country-item sweden">Швеция</div>
                        <div class="VirtualServersList__country-item finland">Финляндия</div>
                    </div>
                </div>
                <div class="VirtualServersList__info">
                    <div class="VirtualServersList__text">
                        <h2 class="VirtualServersList__text-title">i9-9900K</h2>
                        <ul class="VirtualServersList__text-list">
                            <li class="VirtualServersList__text-list-item">Защита от DDoS</li>
                            <li class="VirtualServersList__text-list-item">Интернет до 1 Гбит/с</li>
                            <li class="VirtualServersList__text-list-item">Возможность продления</li>
                        </ul>
                    </div>
                    <div class="VirtualServersList__list">
                        <div class="VirtualServersList__list-item">
                            <div class="VirtualServersList__list-item-name">VIEs-1</div>
                            <div class="VirtualServersList__list-item-wrapper">
                                <div class="VirtualServersList__list-item-char" v-if="!isMobile">
                                    <p>1 core</p>
                                    <p>2 GB RAM</p>
                                    <p>30 GB NVMe</p>
                                </div>
                                <div class="VirtualServersList__list-item-char-mob" v-if="isMobile">
                                    <div class="VirtualServersList__list-item-char-mob-item">
                                        <p class="VirtualServersList__list-item-char-mob-item-name">Ядро</p>
                                        <p class="VirtualServersList__list-item-char-mob-item-value">1</p>
                                    </div>
                                    <div class="VirtualServersList__list-item-char-mob-item">
                                        <p class="VirtualServersList__list-item-char-mob-item-name">GB RAM</p>
                                        <p class="VirtualServersList__list-item-char-mob-item-value">2</p>
                                    </div>
                                    <div class="VirtualServersList__list-item-char-mob-item">
                                        <p class="VirtualServersList__list-item-char-mob-item-name">GB NVMe</p>
                                        <p class="VirtualServersList__list-item-char-mob-item-value">30</p>
                                    </div>
                                </div>
                                <div class="VirtualServersList__list-item-price">
                                    <p>
                                        <span>час</span> 0.9 ₽
                                    </p>
                                    <p>
                                        <span>месяц</span> 391 ₽
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div class="VirtualServersList__list-item">
                            <div class="VirtualServersList__list-item-name">VIEs-2</div>
                            <div class="VirtualServersList__list-item-wrapper">
                                <div class="VirtualServersList__list-item-char" v-if="!isMobile">
                                    <p>2 core</p>
                                    <p>4 GB RAM</p>
                                    <p>60 GB NVMe</p>
                                </div>
                                <div class="VirtualServersList__list-item-char-mob" v-if="isMobile">
                                    <div class="VirtualServersList__list-item-char-mob-item">
                                        <p class="VirtualServersList__list-item-char-mob-item-name">Ядро</p>
                                        <p class="VirtualServersList__list-item-char-mob-item-value">2</p>
                                    </div>
                                    <div class="VirtualServersList__list-item-char-mob-item">
                                        <p class="VirtualServersList__list-item-char-mob-item-name">GB RAM</p>
                                        <p class="VirtualServersList__list-item-char-mob-item-value">4</p>
                                    </div>
                                    <div class="VirtualServersList__list-item-char-mob-item">
                                        <p class="VirtualServersList__list-item-char-mob-item-name">GB NVMe</p>
                                        <p class="VirtualServersList__list-item-char-mob-item-value">60</p>
                                    </div>
                                </div>
                                <div class="VirtualServersList__list-item-price">
                                    <p>
                                        <span>час</span> 1.8 ₽
                                    </p>
                                    <p>
                                        <span>месяц</span> 782 ₽
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div class="VirtualServersList__list-item popular">
                            <div class="VirtualServersList__list-item-name">VIEs-3 <span>(Популярное)</span></div>
                            <div class="VirtualServersList__list-item-wrapper">
                                <div class="VirtualServersList__list-item-char" v-if="!isMobile">
                                    <p>4 core</p>
                                    <p>8 GB RAM</p>
                                    <p>120 GB NVMe</p>
                                </div>
                                <div class="VirtualServersList__list-item-char-mob" v-if="isMobile">
                                    <div class="VirtualServersList__list-item-char-mob-item">
                                        <p class="VirtualServersList__list-item-char-mob-item-name">Ядро</p>
                                        <p class="VirtualServersList__list-item-char-mob-item-value">4</p>
                                    </div>
                                    <div class="VirtualServersList__list-item-char-mob-item">
                                        <p class="VirtualServersList__list-item-char-mob-item-name">GB RAM</p>
                                        <p class="VirtualServersList__list-item-char-mob-item-value">8</p>
                                    </div>
                                    <div class="VirtualServersList__list-item-char-mob-item">
                                        <p class="VirtualServersList__list-item-char-mob-item-name">GB NVMe</p>
                                        <p class="VirtualServersList__list-item-char-mob-item-value">120</p>
                                    </div>
                                </div>
                                <div class="VirtualServersList__list-item-price">
                                    <p>
                                        <span>час</span> 3.59 ₽
                                    </p>
                                    <p>
                                        <span>месяц</span> 1 563 ₽
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div class="VirtualServersList__list-item">
                            <div class="VirtualServersList__list-item-name">VIEs-4</div>
                            <div class="VirtualServersList__list-item-wrapper">
                                <div class="VirtualServersList__list-item-char" v-if="!isMobile">
                                    <p>8 core</p>
                                    <p>16 GB RAM</p>
                                    <p>240 GB NVMe</p>
                                </div>
                                <div class="VirtualServersList__list-item-char-mob" v-if="isMobile">
                                    <div class="VirtualServersList__list-item-char-mob-item">
                                        <p class="VirtualServersList__list-item-char-mob-item-name">Ядро</p>
                                        <p class="VirtualServersList__list-item-char-mob-item-value">8</p>
                                    </div>
                                    <div class="VirtualServersList__list-item-char-mob-item">
                                        <p class="VirtualServersList__list-item-char-mob-item-name">GB RAM</p>
                                        <p class="VirtualServersList__list-item-char-mob-item-value">16</p>
                                    </div>
                                    <div class="VirtualServersList__list-item-char-mob-item">
                                        <p class="VirtualServersList__list-item-char-mob-item-name">GB NVMe</p>
                                        <p class="VirtualServersList__list-item-char-mob-item-value">240</p>
                                    </div>
                                </div>
                                <div class="VirtualServersList__list-item-price">
                                    <p>
                                        <span>час</span> 7.2 ₽
                                    </p>
                                    <p>
                                        <span>месяц</span> 3 126 ₽
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div class="VirtualServersList__list-item">
                            <div class="VirtualServersList__list-item-name">VIEs-5</div>
                            <div class="VirtualServersList__list-item-wrapper">
                                <div class="VirtualServersList__list-item-char" v-if="!isMobile">
                                    <p>16 core</p>
                                    <p>32 GB RAM</p>
                                    <p>480 GB NVMe</p>
                                </div>
                                <div class="VirtualServersList__list-item-char-mob" v-if="isMobile">
                                    <div class="VirtualServersList__list-item-char-mob-item">
                                        <p class="VirtualServersList__list-item-char-mob-item-name">Ядро</p>
                                        <p class="VirtualServersList__list-item-char-mob-item-value">16</p>
                                    </div>
                                    <div class="VirtualServersList__list-item-char-mob-item">
                                        <p class="VirtualServersList__list-item-char-mob-item-name">GB RAM</p>
                                        <p class="VirtualServersList__list-item-char-mob-item-value">32</p>
                                    </div>
                                    <div class="VirtualServersList__list-item-char-mob-item">
                                        <p class="VirtualServersList__list-item-char-mob-item-name">GB NVMe</p>
                                        <p class="VirtualServersList__list-item-char-mob-item-value">480</p>
                                    </div>
                                </div>
                                <div class="VirtualServersList__list-item-price">
                                    <p>
                                        <span>час</span> 14.39 ₽
                                    </p>
                                    <p>
                                        <span>месяц</span> 6 252 ₽
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="VirtualServersList__info">
                    <div class="VirtualServersList__text">
                        <h2 class="VirtualServersList__text-title">R9-7950x</h2>
                        <ul class="VirtualServersList__text-list">
                            <li class="VirtualServersList__text-list-item">Защита от DDoS</li>
                            <li class="VirtualServersList__text-list-item">Интернет до 1 Гбит/с</li>
                            <li class="VirtualServersList__text-list-item">Возможность продления</li>
                        </ul>
                    </div>
                    <div class="VirtualServersList__list">
                        <div class="VirtualServersList__list-item">
                            <div class="VirtualServersList__list-item-name">VIEs-1</div>
                            <div class="VirtualServersList__list-item-wrapper">
                                <div class="VirtualServersList__list-item-char" v-if="!isMobile">
                                    <p>1 core</p>
                                    <p>2 GB RAM</p>
                                    <p>30 GB NVMe</p>
                                </div>
                                <div class="VirtualServersList__list-item-char-mob" v-if="isMobile">
                                    <div class="VirtualServersList__list-item-char-mob-item">
                                        <p class="VirtualServersList__list-item-char-mob-item-name">Ядро</p>
                                        <p class="VirtualServersList__list-item-char-mob-item-value">1</p>
                                    </div>
                                    <div class="VirtualServersList__list-item-char-mob-item">
                                        <p class="VirtualServersList__list-item-char-mob-item-name">GB RAM</p>
                                        <p class="VirtualServersList__list-item-char-mob-item-value">2</p>
                                    </div>
                                    <div class="VirtualServersList__list-item-char-mob-item">
                                        <p class="VirtualServersList__list-item-char-mob-item-name">GB NVMe</p>
                                        <p class="VirtualServersList__list-item-char-mob-item-value">30</p>
                                    </div>
                                </div>
                                <div class="VirtualServersList__list-item-price">
                                    <p>
                                        <span>час</span> 1.13 ₽
                                    </p>
                                    <p>
                                        <span>месяц</span> 559 ₽
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div class="VirtualServersList__list-item">
                            <div class="VirtualServersList__list-item-name">VIEs-2</div>
                            <div class="VirtualServersList__list-item-wrapper">
                                <div class="VirtualServersList__list-item-char" v-if="!isMobile">
                                    <p>2 core</p>
                                    <p>4 GB RAM</p>
                                    <p>60 GB NVMe</p>
                                </div>
                                <div class="VirtualServersList__list-item-char-mob" v-if="isMobile">
                                    <div class="VirtualServersList__list-item-char-mob-item">
                                        <p class="VirtualServersList__list-item-char-mob-item-name">Ядро</p>
                                        <p class="VirtualServersList__list-item-char-mob-item-value">2</p>
                                    </div>
                                    <div class="VirtualServersList__list-item-char-mob-item">
                                        <p class="VirtualServersList__list-item-char-mob-item-name">GB RAM</p>
                                        <p class="VirtualServersList__list-item-char-mob-item-value">4</p>
                                    </div>
                                    <div class="VirtualServersList__list-item-char-mob-item">
                                        <p class="VirtualServersList__list-item-char-mob-item-name">GB NVMe</p>
                                        <p class="VirtualServersList__list-item-char-mob-item-value">60</p>
                                    </div>
                                </div>
                                <div class="VirtualServersList__list-item-price">
                                    <p>
                                        <span>час</span> 2.25 ₽
                                    </p>
                                    <p>
                                        <span>месяц</span> 1 118 ₽
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div class="VirtualServersList__list-item">
                            <div class="VirtualServersList__list-item-name">VIEs-3</div>
                            <div class="VirtualServersList__list-item-wrapper">
                                <div class="VirtualServersList__list-item-char" v-if="!isMobile">
                                    <p>4 core</p>
                                    <p>8 GB RAM</p>
                                    <p>120 GB NVMe</p>
                                </div>
                                <div class="VirtualServersList__list-item-char-mob" v-if="isMobile">
                                    <div class="VirtualServersList__list-item-char-mob-item">
                                        <p class="VirtualServersList__list-item-char-mob-item-name">Ядро</p>
                                        <p class="VirtualServersList__list-item-char-mob-item-value">4</p>
                                    </div>
                                    <div class="VirtualServersList__list-item-char-mob-item">
                                        <p class="VirtualServersList__list-item-char-mob-item-name">GB RAM</p>
                                        <p class="VirtualServersList__list-item-char-mob-item-value">8</p>
                                    </div>
                                    <div class="VirtualServersList__list-item-char-mob-item">
                                        <p class="VirtualServersList__list-item-char-mob-item-name">GB NVMe</p>
                                        <p class="VirtualServersList__list-item-char-mob-item-value">120</p>
                                    </div>
                                </div>
                                <div class="VirtualServersList__list-item-price">
                                    <p>
                                        <span>час</span> 4.52 ₽
                                    </p>
                                    <p>
                                        <span>месяц</span> 2 235 ₽
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div class="VirtualServersList__list-item popular">
                            <div class="VirtualServersList__list-item-name">VIEs-4 <span>(Популярное)</span></div>
                            <div class="VirtualServersList__list-item-wrapper">
                                <div class="VirtualServersList__list-item-char" v-if="!isMobile">
                                    <p>8 core</p>
                                    <p>16 GB RAM</p>
                                    <p>240 GB NVMe</p>
                                </div>
                                <div class="VirtualServersList__list-item-char-mob" v-if="isMobile">
                                    <div class="VirtualServersList__list-item-char-mob-item">
                                        <p class="VirtualServersList__list-item-char-mob-item-name">Ядро</p>
                                        <p class="VirtualServersList__list-item-char-mob-item-value">8</p>
                                    </div>
                                    <div class="VirtualServersList__list-item-char-mob-item">
                                        <p class="VirtualServersList__list-item-char-mob-item-name">GB RAM</p>
                                        <p class="VirtualServersList__list-item-char-mob-item-value">16</p>
                                    </div>
                                    <div class="VirtualServersList__list-item-char-mob-item">
                                        <p class="VirtualServersList__list-item-char-mob-item-name">GB NVMe</p>
                                        <p class="VirtualServersList__list-item-char-mob-item-value">240</p>
                                    </div>
                                </div>
                                <div class="VirtualServersList__list-item-price">
                                    <p>
                                        <span>час</span> 9 ₽
                                    </p>
                                    <p>
                                        <span>месяц</span> 4 470 ₽
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div class="VirtualServersList__list-item">
                            <div class="VirtualServersList__list-item-name">VIEs-5</div>
                            <div class="VirtualServersList__list-item-wrapper">
                                <div class="VirtualServersList__list-item-char" v-if="!isMobile">
                                    <p>16 core</p>
                                    <p>32 GB RAM</p>
                                    <p>480 GB NVMe</p>
                                </div>
                                <div class="VirtualServersList__list-item-char-mob" v-if="isMobile">
                                    <div class="VirtualServersList__list-item-char-mob-item">
                                        <p class="VirtualServersList__list-item-char-mob-item-name">Ядро</p>
                                        <p class="VirtualServersList__list-item-char-mob-item-value">16</p>
                                    </div>
                                    <div class="VirtualServersList__list-item-char-mob-item">
                                        <p class="VirtualServersList__list-item-char-mob-item-name">GB RAM</p>
                                        <p class="VirtualServersList__list-item-char-mob-item-value">32</p>
                                    </div>
                                    <div class="VirtualServersList__list-item-char-mob-item">
                                        <p class="VirtualServersList__list-item-char-mob-item-name">GB NVMe</p>
                                        <p class="VirtualServersList__list-item-char-mob-item-value">480</p>
                                    </div>
                                </div>
                                <div class="VirtualServersList__list-item-price">
                                    <p>
                                        <span>час</span> 18.02 ₽
                                    </p>
                                    <p>
                                        <span>месяц</span> 8 941 ₽
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
.VirtualServersList {
    margin-top: 60px;
    &__head {
        display: flex;
        justify-content: space-between;
        align-items: center;

        @media screen and (max-width: 900px) {
            flex-direction: column;
            gap: 8px;
            align-items: baseline;
        }
    }
    &__title {
        color: $gray;
        font-size: 14px;
        font-weight: 400;
        line-height: 24px;

        &.last {
            margin-top: 12px;
        }
    }
    &__type {
        display: flex;
        gap: 8px;

        &::-webkit-scrollbar {
            display: none;
        }

        @media screen and (max-width: 900px) {
            overflow-x: auto;
            scroll-behavior: smooth;
            width: 100%;
        }
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

        &::-webkit-scrollbar {
            display: none;
        }

        @media screen and (max-width: 900px) {
            overflow-x: auto;
            scroll-behavior: smooth;
            width: 100%;
        }
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
        @media screen and (max-width: 900px) {
            flex-direction: column;
            gap: 32px;
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

        //@media screen and (max-width: 670px) {
        //    flex-wrap: nowrap;
        //}

        &-item {
            padding: 16px;
            background: $stroke_one;
            border-radius: 16px;
            width: 762px;

            @media screen and (max-width: 1090px) {
                width: 100%;
            }
            @media screen and (max-width: 900px) {
                width: 49%;
            }

            @media screen and (max-width: 670px) {
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
                    }
                }
            }

            &-name {
                color: $gray;
                font-size: 14px;
                font-weight: 400;
                line-height: 24px;
                & span {
                    color: $buttons-normal;
                    margin-left: 6px;
                }
            }
            &-wrapper {
                display: flex;
                justify-content: space-between;
                align-items: center;

                @media screen and (max-width: 1090px) {
                    gap: 16px;
                }
                @media screen and (max-width: 900px) {
                    flex-direction: column;
                    gap: 16px;
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