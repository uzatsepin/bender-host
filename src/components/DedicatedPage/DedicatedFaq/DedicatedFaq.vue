<template>
    <section class="DedicatedFaq">
        <div class="container">
            <div class="DedicatedFaq__container">
                <div class="DedicatedFaq__text">
                    <h3 class="DedicatedFaq__text-title">Частые вопросы</h3>
                    <p class="DedicatedFaq__text-descr">Если не нашли ответы на свой вопрос — пишите в поддержку, мы подскажем.</p>
                </div>
                <div class="DedicatedFaq__wrapper">
                    <div class="DedicatedFaq__item" @click="toggleFaq(index)" :class="{active: isFaqActive === index}" v-for="(faqItem, index) in faqItems" :key="index">
                        <div class="DedicatedFaq__item-top">{{ faqItem.top }}</div>
                        <div class="DedicatedFaq__item-bottom">{{ faqItem.bottom }}</div>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<script setup>

import {ref} from "vue";

const isFaqActive = ref(null)

const faqItems = [
    {
        top: 'Что такое выделенный сервер?',
        bottom: 'Для всех облачных серверов используется виртуализация KVM, за счет чего каждый сервер полностью изолирован от других. Вы получаете полный доступ к ядру системы и фаерволлу.'
    },
    {
        top: 'Есть ли DDoS-защита?',
        bottom: 'Для всех облачных серверов используется виртуализация KVM, за счет чего каждый сервер полностью изолирован от других. Вы получаете полный доступ к ядру системы и фаерволлу.'
    },
    {
        top: 'Помогаете ли вы с переносом сайтов?',
        bottom: 'Для всех облачных серверов используется виртуализация KVM, за счет чего каждый сервер полностью изолирован от других. Вы получаете полный доступ к ядру системы и фаерволлу.'
    }
]

function toggleFaq(event) {
    if (isFaqActive.value === event) {
        isFaqActive.value = null;
    } else {
        isFaqActive.value = event;
    }
}

</script>

<style lang="scss" scoped>
.DedicatedFaq {
    background: $background_black;
    padding: 160px 0;
    &__container {
        display: flex;
        justify-content: space-between;
        gap: 16px;
    }
    &__text {
        width: 518px;
        max-width: 518px;
        &-title {
            color: $white;
            font-size: 60px;
            font-weight: 500;
            line-height: 120%;
            text-transform: uppercase;
        }
        &-descr {
            margin-top: 12px;
            color: $gray;
            font-size: 16px;
            font-weight: 400;
            line-height: 140%;
            max-width: 365px;
        }
    }
    &__wrapper {
        display: flex;
        flex-direction: column;
        gap: 8px;
    }
    &__item {
        background: $background_dark;
        border-radius: 16px;
        width: 738px;
        max-width: 738px;

        &.active & {
            &-top {
                color: $white;

                &:after {
                    background: url("../../../assets/images/virtual/minus-icon.svg");
                }
            }

            &-bottom {
                max-height: 9999px;
                padding-bottom: 20px;

                @media screen and (max-width: 1365px){
                    padding-bottom: 10px;
                }
            }
        }
        &-top {
            padding: 24px;
            display: flex;
            justify-content: space-between;
            font-weight: 500;
            font-size: 18px;
            line-height: 120%;
            color: $white;
            align-items: center;
            transition: all 250ms ease-in-out;

            &:hover {
                cursor: pointer;
            }

            &:after {
                width: 24px;
                min-width: 24px;
                height: 24px;
                background: url("../../../assets/images/virtual/plus-icon.svg");
                display: flex;
                content: "";
                margin-left: 15px;
                transition: all 250ms ease-in-out;
            }
        }
        &-bottom {
            padding: 0 24px 0 24px;
            display: flex;
            flex-direction: column;
            font-weight: 400;
            font-size: 16px;
            line-height: 140%;
            color: $gray;
            max-height: 0;
            overflow: hidden;
            transition: all 250ms ease-in-out;
        }

    }
}

</style>