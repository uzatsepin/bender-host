<template>
    <div class="TariffItem" :class="{'selected': selectedTariff.name === tariff.name}">
        <div class="TariffItem__name">
            <div class="TariffItem__name-title">{{ tariff.name }}</div>
            <span v-if="tariff.isPopular">Популярное</span>
        </div>
        <div class="TariffItem__bottom">
            <div class="TariffItem__bottom-char">
                <div class="TariffItem__bottom-char-item">
                    {{ tariff.core }} <span>ядро</span>
                </div>
                <div class="TariffItem__bottom-char-item">
                    {{ tariff.ram }} <span>GB RAM</span>
                </div>
                <div class="TariffItem__bottom-char-item">
                    {{ tariff.storage }} <span>GB NVMe</span>
                </div>
                <div class="TariffItem__bottom-char-item">
                    <span>Интернет до</span>
                    {{ tariff.internet }}
                </div>
            </div>
            <div class="TariffItem__bottom-price">
                <p class="TariffItem__bottom-price-value">{{ tariff.priceMonth }} <span>месяц</span></p>
                <p class="TariffItem__bottom-price-value">{{ tariff.priceHour ? tariff.priceHour : tariff.priceInstall }} <span>{{ tariff.priceHour ? 'час' : 'установка' }}</span></p>
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

.TariffItem {
    border-radius: 8px;
    background: $background_dark;
    padding: 16px;
    width: 100%;
    border: 1px solid transparent;
    transition: all 250ms ease-in-out;

    &.selected {
        border: 1px solid rgba(250, 204, 97, 0.35);

        .TariffItem__name-title {
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
        justify-content: space-between;
        align-items: center;
        margin-top: 20px;

        &-char {
            display: flex;
            align-items: center;
            gap: 8px;

            &-item {
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

        &-price {
            display: flex;
            align-items: center;
            gap: 8px;

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