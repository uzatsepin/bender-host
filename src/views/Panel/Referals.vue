<template>
    <div class="Referals">
        <div class="Referals__title">
            Рефералы
        </div>
        <div class="Referals__container">
            <div class="Referals__item">
                <div class="Referals__item-price">120 ₽</div>
                <div class="Referals__item-descr">Заработано</div>
            </div>
            <div class="Referals__item">
                <div class="Referals__item-price">12</div>
                <div class="Referals__item-descr">Регистраций</div>
            </div>
            <div class="Referals__item">
                <div class="Referals__item-price">2 400 ₽</div>
                <div class="Referals__item-descr">Всего заработано</div>
            </div>
        </div>
        <div class="Referals__link">
            <div class="Referals__link-title">
                Ваша реферальная ссылка
            </div>
            <div class="Referals__link-descr">
                После регистрации Ваш реферал получит бонус 10% к пополнению баланса, который будет действовать 24 часа.
            </div>
            <div class="Referals__link-input">
                <input
                    @focus="$event.target.select()"
                    ref="myinput"
                    readonly
                    :value="text"/>
                <div @click="copy" class="Referals__link-input-btn">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                        <path
                            d="M19.9439 16.8353V5.4C19.9439 4.07452 18.8695 3 17.5439 3H7.09688M5.54297 6.86484H14.5782C15.4067 6.86484 16.0782 7.53642 16.0782 8.36484V19.3766C16.0782 20.2051 15.4067 20.8766 14.5782 20.8766H5.54297C4.71454 20.8766 4.04297 20.2051 4.04297 19.3766V8.36484C4.04297 7.53642 4.71454 6.86484 5.54297 6.86484Z"
                            stroke="#858892" stroke-width="1.5" stroke-linecap="round"/>
                    </svg>
                </div>
                <transition name="popup-anim">
                    <ActionMessage v-if="isCopied" />
                </transition>
            </div>
        </div>
        <div class="Referals__list" v-if="!isMobile">
            <div class="Referals__list-item first">
                <div class="Referals__list-item-date">Дата</div>
                <div class="Referals__list-item-user">Пользователь</div>
                <div class="Referals__list-item-action">Действие</div>
                <div class="Referals__list-item-money">Заработок</div>
            </div>
            <div class="Referals__list-item" v-for="(item, index) in referalsUsers" :key="index">
                <div class="Referals__list-item-date">{{ item.date }}</div>
                <div class="Referals__list-item-user">{{ item.user }}</div>
                <div class="Referals__list-item-action">{{ item.action }}</div>
                <div class="Referals__list-item-money" :class="{'earned': item.money > 0}">{{ item.money > 0 ? '+' : '' }}{{ item.money }} ₽</div>
            </div>
        </div>
        <div class="Referals__list-mob" v-if="isMobile">
            <div class="Referals__list-mob-item" v-for="(item, index) in referalsUsers" :key="index">
                <div class="Referals__list-mob-item-date">
                    <p>Дата:</p>
                    <p>{{ item.date }}</p>
                </div>
                <div class="Referals__list-mob-item-user">
                    <p>Пользователь:</p>
                    <p>{{ item.user }}</p>
                </div>
                <div class="Referals__list-mob-item-action">
                    <p>Действие:</p>
                    <p>{{ item.action }}</p>
                </div>
                <div class="Referals__list-mob-item-money" :class="{'earned': item.money > 0}">
                    <p>Сумма:</p>
                    <p>{{ item.money > 0 ? '+' : '' }}{{ item.money }} ₽</p>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
import {computed, ref} from 'vue';
import ActionMessage from "../../components/Others/ActionMessage.vue";

const text = ref('https://bender.com/?ref=392251');
const myinput = ref(null);
const isCopied = ref(false);

const isMobile = computed(() => {
    return window.innerWidth < 950
})

const referalsUsers = [
    {
        date: '07/06/2023 12:24',
        user: 'ja**********************',
        action: 'Регистрация',
        money: 100
    },
    {
        date: '07/06/2023 12:24',
        user: 'ja**********************',
        action: 'Регистрация',
        money: 0
    },
    {
        date: '07/06/2023 12:24',
        user: 'ja**********************',
        action: 'Регистрация',
        money: 0
    },
    {
        date: '07/06/2023 12:24',
        user: 'ja**********************',
        action: 'Регистрация',
        money: 20
    },
    {
        date: '07/06/2023 12:24',
        user: 'ja**********************',
        action: 'Регистрация',
        money: 330
    },
    {
        date: '07/06/2023 12:24',
        user: 'ja**********************',
        action: 'Регистрация',
        money: 0
    },
    {
        date: '07/06/2023 12:24',
        user: 'ja**********************',
        action: 'Регистрация',
        money: 0
    },
    {
        date: '07/06/2023 12:24',
        user: 'ja**********************',
        action: 'Регистрация',
        money: 22
    },
    {
        date: '07/06/2023 12:24',
        user: 'ja**********************',
        action: 'Регистрация',
        money: 0
    },
    {
        date: '07/06/2023 12:24',
        user: 'ja**********************',
        action: 'Регистрация',
        money: 15
    },
    {
        date: '07/06/2023 12:24',
        user: 'ja**********************',
        action: 'Регистрация',
        money: 0
    },
    {
        date: '07/06/2023 12:24',
        user: 'ja**********************',
        action: 'Регистрация',
        money: 0
    },
    {
        date: '07/06/2023 12:24',
        user: 'ja**********************',
        action: 'Регистрация',
        money: 0
    },
    {
        date: '07/06/2023 12:24',
        user: 'ja**********************',
        action: 'Регистрация',
        money: 0
    },
    {
        date: '07/06/2023 12:24',
        user: 'ja**********************',
        action: 'Регистрация',
        money: 0
    }
]

const copy = () => {
    myinput.value.focus();
    document.execCommand('copy');

    isCopied.value = true;

    setTimeout(() => {
        isCopied.value = false;
    }, 2000);
};
</script>

<style lang="scss" scoped>

.Referals {
    &__title {
        color: $white;
        font-size: 32px;
        font-weight: 500;
        line-height: 120%;
    }

    &__container {
        margin-top: 32px;
        display: grid;
        grid-template-columns: repeat(3, 1fr);
        grid-gap: 24px;

        @media screen and (max-width: 790px) {
            display: flex;
            flex-direction: column;
        }
    }

    &__item {
        padding: 16px;
        border-radius: 8px;
        background: $background_dark;

        &-price {
            color: $white;
            font-size: 52px;
            font-weight: 500;
            line-height: 110%;
            text-transform: uppercase;
        }

        &-descr {
            color: $gray;
            font-size: 18px;
            font-weight: 400;
            line-height: 24px;
            margin-top: 12px;
        }
    }

    &__link {
        margin-top: 60px;
        max-width: 540px;

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

        &-input {
            margin-top: 20px;
            width: 100%;
            max-width: 412px;
            position: relative;

            & input {
                font-weight: 400;
                font-size: 16px;
                color: $gray;
                width: 100%;
                padding: 14px;
                display: flex;
                align-items: center;
                justify-content: space-around;
                background: $background_dark_light;
                border-radius: 8px;
                transition: all 250ms ease-in-out;
                border: 2px solid transparent;
                position: relative;


                &::placeholder {
                    color: $gray;
                    font-weight: 400;
                    font-size: 16px;
                    transition: all 250ms ease-in-out;
                }

                &:hover {
                    cursor: pointer;
                }

                &:focus {
                    outline: none;

                    &::placeholder {
                        color: transparent;
                    }
                }
            }

            &-btn {
                position: absolute;
                top: 14px;
                right: 14px;
                display: block;

                & svg {
                    path {
                        transition: all 250ms ease-in-out;
                    }
                }

                &:hover {
                    cursor: pointer;

                    & svg {
                        path {
                            stroke: $buttons_normal;
                        }
                    }
                }
            }

            &-copied {
                position: absolute;
                top: 60px;
                right: -30px;
                background: $green;
                color: $white;
                padding: 14px;
                border-radius: 100px;
            }
        }
    }

    &__list {
        margin-top: 40px;

        &::-webkit-scrollbar {
            display: none;
        }

        &-item {
            display: grid;
            grid-template-columns: 1fr 1fr 1fr 1fr;
            padding: 16px;
            border-top: 1px solid $stroke_one;

            &.first & {
                &-date, &-money, &-user, &-action {
                    color: $gray;
                    font-size: 18px;
                    font-weight: 400;
                    line-height: 24px;
                }
            }

            &:first-child {
                border-top: 1px solid transparent;
            }

            &-date, &-user, &-action, &-money {
                color: $white;
                font-size: 18px;
                font-weight: 400;
                line-height: 24px;
            }

            &-money {
                justify-self: flex-end;

                &.earned {
                    color: $green;
                }
            }
        }
    }

    &__list-mob {
        margin-top: 40px;
        display: flex;
        flex-direction: column;
        gap: 16px;
        &-item {
            border: 1px solid $stroke_one;
            border-radius: 8px;
            display: flex;
            flex-direction: column;
            &-date, &-money, &-user, &-action {
                display: flex;
                justify-content: space-between;
                padding: 16px;
                border-top: 1px solid $stroke_one;
            }
            &-date {
                border-top: 1px solid transparent;
                p {
                    &:last-child {
                        color: $gray;
                    }
                }
            }
            &-user {
                p {
                    &:last-child {
                        color: $gray;
                        margin-left: 14px;
                        overflow: hidden;
                    }
                }
            }
            &-money {
                &.earned {
                    p {
                        &:last-child {
                            color: $green;
                        }
                    }
                }
            }
        }
    }


    .popup-anim-enter-active,
    .popup-anim-leave-active {
        transition: opacity 300ms ease-in-out, transform 300ms ease-in-out;
    }

    .popup-anim-enter,
    .popup-anim-leave-to {
        opacity: 0;
        transform: scale(0.8);
    }
}


</style>