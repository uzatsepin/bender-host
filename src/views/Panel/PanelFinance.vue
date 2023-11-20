<template>
    <div class="PanelFinance">
        <h2 class="PanelFinance__title">Финансы</h2>
        <div class="PanelFinance__balance">
            <div class="PanelFinance__balance-count">1 100 ₽</div>
            <div class="PanelFinance__balance-text">Баланс</div>
        </div>
        <div class="PanelFinance__buttons">
            <PrimaryButton button-text="Пополнить" />
            <PrimaryButton button-text="Применить промокод" />
        </div>
        <div class="PanelFinance__history">
            <h3 class="PanelFinance__history-title">
                История операций
            </h3>
            <p class="PanelFinance__history-descr">
                Здесь отображаются ваши последние совершенные транзакции
            </p>
            <div class="PanelFinance__history-list" v-if="!isMobile">
                <div class="PanelFinance__history-item" v-for="(item, index) in balance" :key="index">
                    <div class="PanelFinance__history-item-date">{{ item.date }}</div>
                    <div class="PanelFinance__history-item-descr">{{ item.descr }}</div>
                    <div class="PanelFinance__history-item-price" :class="{'income': item.type === 'income'}">{{ item.price }}</div>
                </div>
            </div>
            <div class="PanelFinance__history-list-mob" v-if="isMobile">
                <div class="PanelFinance__history-item-mob" v-for="(item, index) in balance" :key="index">
                    <div class="PanelFinance__history-item-date-mob">
                        <p>Дата:</p>
                        <p>{{ item.date }}</p>
                    </div>
                    <div class="PanelFinance__history-item-price-mob" :class="{'income': item.type === 'income'}">
                        <p>Сумма:</p>
                        <p>{{ item.price }}</p>
                    </div>
                    <div class="PanelFinance__history-item-descr-mob">
                        <p>Действие:</p>
                        <p>{{ item.descr }}</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>

import PrimaryButton from "../../components/Others/PrimaryButton.vue";
import {computed} from "vue";

const balance = [
    {
        date: '07/06/2023 12:24',
        descr: 'Пополнение баланса',
        price: '+102 ₽',
        type: 'income'
    },
    {
        date: '06/06/2023 15:05',
        descr: 'Оплата заказа',
        price: '-256 ₽',
        type: 'withdrawal'
    },
    {
        date: '006/06/2023 13:44',
        descr: 'Пополнение баланса',
        price: '+311 ₽',
        type: 'income'
    },
    {
        date: '05/06/2023 19:56',
        descr: 'Оплата заказа',
        price: '-1 056 ₽',
        type: 'withdrawal'
    },
    {
        date: '03/06/2023 07:58',
        descr: 'Оплата заказа',
        price: '+532 ₽',
        type: 'income'
    },
    {
        date: '02/06/2023 23:23',
        descr: 'Пополнение баланса',
        price: '+120 ₽',
        type: 'income'
    },
    {
        date: '02/06/2023 23:12',
        descr: 'Пополнение баланса',
        price: '+120 ₽',
        type: 'income'
    }
]

const isMobile = computed(() => {
    return window.innerWidth <= 930
})
</script>

<style lang="scss" scoped>
.PanelFinance {
    &__title {
        color: $white;
        font-size: 32px;
        font-weight: 500;
        line-height: 120%;
    }
    &__balance {
        margin-top: 32px;
        padding: 16px;
        display: flex;
        flex-direction: column;
        gap: 12px;
        width: 412px;
        background: $background_dark;
        border-radius: 8px;
        @media screen and (max-width: 480px) {
            width: 100%;
        }
        &-count {
            width: 100%;
            font-size: 52px;
            font-weight: 500;
            line-height: 110%;
            text-transform: uppercase;
            color: $white;
        }
        &-text {
            color: $gray;
            width: 100%;
            font-size: 18px;
            font-weight: 400;
            line-height: 24px;
        }
    }
    &__buttons {
        display: flex;
        gap: 8px;
        margin-top: 24px;
        &:deep(.PrimaryButton) {
            padding: 8px 16px;
        }

        @media screen and (max-width: 480px) {
            width: 100%;
            flex-direction: column;
        }
    }
    &__history {
        margin-top: 60px;
        &-title {
            color: $white;
            font-size: 24px;
            font-weight: 500;
            line-height: 120%;
        }
        &-descr {
            margin-top: 8px;
            color: $gray;
            font-size: 14px;
            font-weight: 400;
            line-height: 140%;
        }
        &-list {
            margin-top: 20px;
        }
        &-item {
            display: grid;
            grid-template-columns: 218px 330px 300px;
            padding: 16px;
            border-bottom: 1px solid $stroke_one;
            align-items: center;

            @media screen and (max-width: 930px) {
                display: flex;
                flex-direction: column;
            }

            &:last-child {
                border-bottom: none;
            }

            &-price {
                justify-self: flex-end;
                font-size: 18px;
                font-weight: 400;
                line-height: 24px;
                color: $white;

                &.income {
                   color: $green;
                }
            }
            &-date {
                color: $gray;
                font-size: 18px;
                font-weight: 400;
                line-height: 24px;
            }
            &-descr {
                color: $white;
                font-size: 18px;
                font-weight: 400;
                line-height: 24px;
            }
            &-date-mob, &-descr-mob, &-price-mob {
                display: flex;
                padding: 16px;
                justify-content: space-between;
                font-size: 14px;
                line-height: 24px;
                font-weight: 400;
            }
            &-date-mob {

                p {
                    &:last-child {
                        color: $gray;
                    }
                }
            }
            &-price-mob {
                border-top: 1px solid $stroke_one;
                &.income {
                    p {
                        &:last-child {
                            color: $green;
                        }
                    }
                }
            }
            &-descr-mob {
                border-top: 1px solid $stroke_one;
            }
        }
        &-item-mob {
            border: 1px solid $stroke_one;
            border-radius: 8px;
            margin-top: 20px;
        }
    }
}

</style>