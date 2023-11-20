<template>
    <div class="RentNode">
        <div class="container">
            <div class="RentNode__container">
                <div class="RentNode__info">
                    <div class="RentNode__text">
                        <h2 class="RentNode__text-title">Доступные узлы</h2>
                        <ul class="RentNode__text-list">
                            <li class="RentNode__text-list-item">Защита от DDoS</li>
                            <li class="RentNode__text-list-item">Интернет до 1 Гбит/с</li>
                            <li class="RentNode__text-list-item">Возможность продления</li>
                        </ul>
                    </div>
                    <div class="RentNode__list">
                        <div class="RentNode__list-item">
                            <div class="RentNode__list-item-name">Number 1</div>
                            <div class="RentNode__list-item-wrapper">
                                <div class="RentNode__list-item-char">
                                    <p>i9 9900k</p>
                                    <p>128 GB RAM</p>
                                    <p>2x1TB NVMe</p>
                                </div>
                                <div class="RentNode__list-item-price">
                                    <p>
                                        $ 150
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div class="RentNode__list-item">
                            <div class="RentNode__list-item-name">Number 2</div>
                            <div class="RentNode__list-item-wrapper">
                                <div class="RentNode__list-item-char">
                                    <p>R5 3600</p>
                                    <p>64 GB RAM</p>
                                    <p>2x512GB NVMe</p>
                                </div>
                                <div class="RentNode__list-item-price">
                                    <p>
                                        $ 100
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div class="RentNode__list-item">
                            <div class="RentNode__list-item-name">Number 3</div>
                            <div class="RentNode__list-item-wrapper">
                                <div class="RentNode__list-item-char">
                                    <p>R7 7700</p>
                                    <p>64 GB RAM</p>
                                    <p>2x1TB NVMe</p>
                                </div>
                                <div class="RentNode__list-item-price">
                                    <p>
                                        $ 170
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div class="RentNode__list-item">
                            <div class="RentNode__list-item-name">Number 4</div>
                            <div class="RentNode__list-item-wrapper">
                                <div class="RentNode__list-item-char">
                                    <p>R9 7950x3d</p>
                                    <p>128GB RAM DDR5</p>
                                    <p>2x2TB NVMe</p>
                                </div>
                                <div class="RentNode__list-item-price">
                                    <p>
                                        $ 250
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div class="RentNode__list-item">
                            <div class="RentNode__list-item-name">Number 5</div>
                            <div class="RentNode__list-item-wrapper">
                                <div class="RentNode__list-item-char">
                                    <p>R9 5950x</p>
                                    <p>128 GB RAM</p>
                                    <p>2x3.84TB NVMe</p>
                                </div>
                                <div class="RentNode__list-item-price">
                                    <p>
                                        $ 220
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


</script>

<style lang="scss" scoped>
.RentNode {
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
        &-item {
            padding: 16px;
            background: $stroke_one;
            border-radius: 16px;
            width: 762px;

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
                &-name {
                    .popular {
                        color: $buttons-normal
                    }
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