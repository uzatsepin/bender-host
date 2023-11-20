<template>
    <section class="VirtualFaq">
        <div class="container">
            <div class="VirtualFaq__container">
                <div class="VirtualFaq__text">
                    <h3 class="VirtualFaq__text-title">Частые вопросы</h3>
                    <p class="VirtualFaq__text-descr">Если не нашли ответы на свой вопрос — пишите в поддержку, мы подскажем.</p>
                </div>
                <div class="VirtualFaq__wrapper">
                    <div class="VirtualFaq__item" @click="toggleFaq(index)" :class="{active: isFaqActive === index}" v-for="(faqItem, index) in faqItems" :key="index">
                        <div class="VirtualFaq__item-top">{{ faqItem.top }}</div>
                        <div class="VirtualFaq__item-bottom">{{ faqItem.bottom }}</div>
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
        top: 'Есть ли тестовый период?',
        bottom: 'Для всех облачных серверов используется виртуализация KVM, за счет чего каждый сервер полностью изолирован от других. Вы получаете полный доступ к ядру системы и фаерволлу.'
    },
    {
        top: 'Есть ли DDoS-защита?',
        bottom: 'Для всех облачных серверов используется виртуализация KVM, за счет чего каждый сервер полностью изолирован от других. Вы получаете полный доступ к ядру системы и фаерволлу.'
    },
    {
        top: 'Чем отличаются тарифы Shared и Dedicated?',
        bottom: 'Для всех облачных серверов используется виртуализация KVM, за счет чего каждый сервер полностью изолирован от других. Вы получаете полный доступ к ядру системы и фаерволлу.'
    },
    {
        top: 'Помогаете ли вы с переносом сайтов?',
        bottom: 'Для всех облачных серверов используется виртуализация KVM, за счет чего каждый сервер полностью изолирован от других. Вы получаете полный доступ к ядру системы и фаерволлу.'
    },
    {
        top: 'Какая используется виртуализация?',
        bottom: 'Для всех облачных серверов используется виртуализация KVM, за счет чего каждый сервер полностью изолирован от других. Вы получаете полный доступ к ядру системы и фаерволлу.'
    },
    {
        top: 'Можно ли установить свою ОС?',
        bottom: 'Для всех облачных серверов используется виртуализация KVM, за счет чего каждый сервер полностью изолирован от других. Вы получаете полный доступ к ядру системы и фаерволлу.'
    },
    {
        top: 'Есть ли оверселл на тарифах виртуальных серверов?',
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
.VirtualFaq {
    background: $background_black;
    padding: 160px 0;

    @media screen and (max-width: 1090px) {
        padding: 100px 0;
    }
    &__container {
        display: flex;
        justify-content: space-between;
        gap: 16px;
        @media screen and (max-width: 1090px) {
            flex-direction: column;
            gap: 32px;
        }
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
        @media screen and (max-width: 1090px) {
            width: 100%;
            max-width: 100%;
        }

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