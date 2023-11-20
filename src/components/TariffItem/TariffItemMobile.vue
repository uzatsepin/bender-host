<template>
    <div class="TariffItemMobile" :class="{'selected': selectedTariff.name === tariff.name}">
        <div class="TariffItemMobile__name">
            <div class="TariffItemMobile__name-title">{{ tariff.name }}</div>
            <span v-if="tariff.isPopular">Популярное</span>
        </div>
        <div class="TariffItemMobile__bottom">
            <div class="TariffItemMobile__bottom-char">
                <div class="TariffItemMobile__bottom-char-item">
                    <p class="TariffItemMobile__bottom-char-item-name">Ядер</p>
                    <p class="TariffItemMobile__bottom-char-item-value">{{ tariff.core }}</p>
                </div>
                <div class="TariffItemMobile__bottom-char-item">
                    <p class="TariffItemMobile__bottom-char-item-name">GB RAM</p>
                    <p class="TariffItemMobile__bottom-char-item-value">{{ tariff.ram }}</p>
                </div>
                <div class="TariffItemMobile__bottom-char-item">
                    <p class="TariffItemMobile__bottom-char-item-name">GB NVMe</p>
                    <p class="TariffItemMobile__bottom-char-item-value">{{ tariff.storage }}</p>
                </div>
                <div class="TariffItemMobile__bottom-char-item">
                    <p class="TariffItemMobile__bottom-char-item-name">Интернет до</p>
                    <p class="TariffItemMobile__bottom-char-item-value">{{ tariff.internet }}</p>
                </div>
            </div>
            <div class="TariffItemMobile__bottom-price">
                <p class="TariffItemMobile__bottom-price-value">{{ tariff.priceMonth }} <span>месяц</span></p>
                <p class="TariffItemMobile__bottom-price-value">{{ tariff.priceHour }} <span>час</span></p>
            </div>
        </div>
    </div>
</template>

<script setup>

const props = defineProps({
    tariff: {
        type: Object,
        required: true
    },
    selectedTariff: {
        type: Object,
    }
})

</script>

<style lang="scss" scoped>

.TariffItemMobile {
    border-radius: 8px;
    background: $background_dark;
    padding: 16px;
    width: 100%;
    border: 1px solid transparent;
    transition: all 250ms ease-in-out;

    &.selected {
        border: 1px solid rgba(250, 204, 97, 0.35);

        .TariffItemMobile__name-title {
            border: 1px solid $buttons_normal;
            color: $buttons_normal;
        }

    }

    &:hover {
        cursor: pointer;
        border: 1px solid rgba(250, 204, 97, 0.35);
    }

    &__name {
        display: flex;
        align-items: center;
        gap: 6px;

        &-title, span {
            color: $gray;
            font-size: 18px;
            line-height: 24px;
            font-weight: 400;
            border: 1px solid $stroke_two;
            border-radius: 8px;
            padding: 4px 12px;
            display: flex;
            justify-content: space-between;
            align-items: center;
        }

        & span {
            color: $purple;
            border: 1px solid $purple;
        }
    }

    &__bottom {
        display: flex;
        flex-direction: column;
        margin-top: 16px;

        &-char {
            display: flex;
            flex-direction: column;
            gap: 8px;

            &-item {
                display: flex;
                justify-content: space-between;
                align-items: center;
                &-name {

                }
                &-value {
                    padding: 4px 12px;
                    background: $stroke_one;
                    border-radius: 40px;
                    color: $white;
                    font-size: 18px;
                    font-weight: 400;
                    line-height: 24px;

                    & span {
                        color: $gray;
                    }
                }
            }
        }

        &-price {
            display: flex;
            align-items: center;
            gap: 8px;
            margin-top: 32px;

            &-value {
                color: $white;
                font-size: 24px;
                font-weight: 500;
                line-height: 120%;
                padding: 3px 8px;
                background: $background_dark_light;
                border-radius: 8px;

                & span {
                    color: $gray;
                    font-size: 14px;
                    font-weight: 400;
                    line-height: 24px;
                }
            }
        }

    }
}

</style>