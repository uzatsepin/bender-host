<template>
    <div class="MyServicesTable">
        <div class="MyServicesTable__container" v-if="!isAdaptive">
            <div class="MyServicesTable__item first">
                <div class="MyServicesTable__item-name">Название</div>
                <div class="MyServicesTable__item-tariff">Тариф</div>
                <div class="MyServicesTable__item-type">Тип</div>
                <div class="MyServicesTable__item-ip">IP</div>
                <div class="MyServicesTable__item-price">Цена</div>
                <div class="MyServicesTable__item-active">Активен до</div>
                <div class="MyServicesTable__item-status">Состояние</div>
                <div class="MyServicesTable__item-btns"></div>
            </div>
            <div class="MyServicesTable__item" v-for="(item, index) in myServiceItems" :key="index">
                <div class="MyServicesTable__item-name">{{ item.name }}</div>
                <div class="MyServicesTable__item-tariff">{{ item.tariff }}</div>
                <div class="MyServicesTable__item-type">{{ item.type }}</div>
                <div class="MyServicesTable__item-ip">{{ item.ip }}</div>
                <div class="MyServicesTable__item-price">{{ item.price }}</div>
                <div class="MyServicesTable__item-active">{{ item.activeTo }}</div>
                <div class="MyServicesTable__item-status">
                    <MyServicesStatus :status="item.status"/>
                </div>
                <div class="MyServicesTable__item-btns">
                    <svg class="MyServicesTable__item-btns-settings" xmlns="http://www.w3.org/2000/svg" width="24"
                         height="24" viewBox="0 0 24 24" fill="none"
                         @click="handleDropDown(index)">
                        <path
                            d="M12 13C12.5523 13 13 12.5523 13 12C13 11.4477 12.5523 11 12 11C11.4477 11 11 11.4477 11 12C11 12.5523 11.4477 13 12 13Z"
                            stroke="#858892" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                        <path
                            d="M19 13C19.5523 13 20 12.5523 20 12C20 11.4477 19.5523 11 19 11C18.4477 11 18 11.4477 18 12C18 12.5523 18.4477 13 19 13Z"
                            stroke="#858892" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                        <path
                            d="M5 13C5.55228 13 6 12.5523 6 12C6 11.4477 5.55228 11 5 11C4.44772 11 4 11.4477 4 12C4 12.5523 4.44772 13 5 13Z"
                            stroke="#858892" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                    </svg>

                    <router-link :to="`/panel/myservices/${item.id}`">
                        <svg class="MyServicesTable__item-btns-arrows" xmlns="http://www.w3.org/2000/svg" width="24"
                             height="24" viewBox="0 0 24 24" fill="none">
                            <path d="M5 12H19M19 12L12 5M19 12L12 19" stroke="#858892" stroke-width="1.5"
                                  stroke-linecap="round" stroke-linejoin="round"/>
                        </svg>
                    </router-link>
                    <transition name="popup-anim">
                        <div class="MyServicesTable__item-dropdown" v-if="isDropDownOpen(index)" v-click-away="testClick">
                            <ul class="MyServicesTable__item-dropdown-list">
                                <li class="MyServicesTable__item-dropdown-item">
                                    <div class="MyServicesTable__item-dropdown-link">
                                        <FormSwitch text="Автопродление"/>
                                    </div>
                                </li>
                                <li class="MyServicesTable__item-dropdown-item">
                                    <router-link to="/" class="MyServicesTable__item-dropdown-link">
                                        На страницу услуги
                                    </router-link>
                                </li>
                                <li class="MyServicesTable__item-dropdown-item">
                                    <div class="MyServicesTable__item-dropdown-link"
                                         @click="() => { openPopupImprove(); handleDropDown(index); }">
                                        Улучшить тариф
                                    </div>
                                </li>
                                <li class="MyServicesTable__item-dropdown-item">
                                    <div class="MyServicesTable__item-dropdown-link">
                                        Перезагрузить
                                    </div>
                                </li>
                                <li class="MyServicesTable__item-dropdown-item">
                                    <div class="MyServicesTable__item-dropdown-link"
                                         @click="() => { openPopupReinstall(); handleDropDown(index); }">
                                        Переустановить
                                    </div>
                                </li>
                                <li class="MyServicesTable__item-dropdown-item">
                                    <div class="MyServicesTable__item-dropdown-link" @click="() => { openPopupChangePass(); handleDropDown(index); }">
                                        Сменить пароль
                                    </div>
                                </li>
                                <li class="MyServicesTable__item-dropdown-item">
                                    <div class="MyServicesTable__item-dropdown-link"
                                         @click="() => { openPopupDelete(); handleDropDown(index); }">
                                        Удалить услугу
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </transition>
                </div>
            </div>
        </div>
        <div class="MyServicesTable__container-mob" v-if="isAdaptive">
            <div class="MyServicesTable__container-mob-item" v-for="(item, index) in myServiceItems" :key="index">
                <div class="MyServicesTable__container-mob-section">
                    <div class="MyServicesTable__container-mob-section-name">Имя</div>
                    <div class="MyServicesTable__container-mob-section-value">{{ item.name }}</div>
                </div>
                <div class="MyServicesTable__container-mob-section">
                    <div class="MyServicesTable__container-mob-section-name">Тариф</div>
                    <div class="MyServicesTable__container-mob-section-value">{{ item.tariff }}</div>
                </div>
                <div class="MyServicesTable__container-mob-section">
                    <div class="MyServicesTable__container-mob-section-name">Тип</div>
                    <div class="MyServicesTable__container-mob-section-value">{{ item.type }}</div>
                </div>
                <div class="MyServicesTable__container-mob-section">
                    <div class="MyServicesTable__container-mob-section-name">IP</div>
                    <div class="MyServicesTable__container-mob-section-value">{{ item.ip }}</div>
                </div>
                <div class="MyServicesTable__container-mob-section">
                    <div class="MyServicesTable__container-mob-section-name">Цена</div>
                    <div class="MyServicesTable__container-mob-section-value">{{ item.price }}</div>
                </div>
                <div class="MyServicesTable__container-mob-section">
                    <div class="MyServicesTable__container-mob-section-name">Активен до</div>
                    <div class="MyServicesTable__container-mob-section-value">{{ item.activeTo }}</div>
                </div>
                <div class="MyServicesTable__container-mob-section">
                    <div class="MyServicesTable__container-mob-section-name">Состояние</div>
                    <div class="MyServicesTable__container-mob-section-value">
                        <MyServicesStatus :status="item.status"/>
                    </div>
                </div>
                <div class="MyServicesTable__container-mob-section">
                    <div class="MyServicesTable__container-mob-section-btns">
                        <svg class="MyServicesTable__item-btns-settings" xmlns="http://www.w3.org/2000/svg" width="24"
                             height="24" viewBox="0 0 24 24" fill="none"
                             @click="handleDropDown(index)">
                            <path
                                d="M12 13C12.5523 13 13 12.5523 13 12C13 11.4477 12.5523 11 12 11C11.4477 11 11 11.4477 11 12C11 12.5523 11.4477 13 12 13Z"
                                stroke="#858892" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                            <path
                                d="M19 13C19.5523 13 20 12.5523 20 12C20 11.4477 19.5523 11 19 11C18.4477 11 18 11.4477 18 12C18 12.5523 18.4477 13 19 13Z"
                                stroke="#858892" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                            <path
                                d="M5 13C5.55228 13 6 12.5523 6 12C6 11.4477 5.55228 11 5 11C4.44772 11 4 11.4477 4 12C4 12.5523 4.44772 13 5 13Z"
                                stroke="#858892" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                        </svg>

                        <router-link :to="`/panel/myservices/${item.id}`">
                            <svg class="MyServicesTable__item-btns-arrows" xmlns="http://www.w3.org/2000/svg" width="24"
                                 height="24" viewBox="0 0 24 24" fill="none">
                                <path d="M5 12H19M19 12L12 5M19 12L12 19" stroke="#858892" stroke-width="1.5"
                                      stroke-linecap="round" stroke-linejoin="round"/>
                            </svg>
                        </router-link>
                    </div>
                </div>
                <transition name="popup-anim">
                    <div class="MyServicesTable__item-dropdown" v-if="isDropDownOpen(index)">
                        <ul class="MyServicesTable__item-dropdown-list">
                            <li class="MyServicesTable__item-dropdown-item">
                                <div class="MyServicesTable__item-dropdown-link">
                                    <FormSwitch text="Автопродление"/>
                                </div>
                            </li>
                            <li class="MyServicesTable__item-dropdown-item">
                                <router-link to="/" class="MyServicesTable__item-dropdown-link">
                                    На страницу услуги {{index}}
                                </router-link>
                            </li>
                            <li class="MyServicesTable__item-dropdown-item">
                                <div class="MyServicesTable__item-dropdown-link"
                                     @click="() => { openPopupImprove(); handleDropDown(index); }">
                                    Улучшить тариф
                                </div>
                            </li>
                            <li class="MyServicesTable__item-dropdown-item">
                                <div class="MyServicesTable__item-dropdown-link">
                                    Перезагрузить
                                </div>
                            </li>
                            <li class="MyServicesTable__item-dropdown-item">
                                <div class="MyServicesTable__item-dropdown-link"
                                     @click="() => { openPopupReinstall(); handleDropDown(index); }">
                                    Переустановить
                                </div>
                            </li>
                            <li class="MyServicesTable__item-dropdown-item">
                                <div class="MyServicesTable__item-dropdown-link" @click="() => { openPopupChangePass(); handleDropDown(index); }">
                                    Сменить пароль
                                </div>
                            </li>
                            <li class="MyServicesTable__item-dropdown-item">
                                <div class="MyServicesTable__item-dropdown-link"
                                     @click="() => { openPopupDelete(); handleDropDown(index); }">
                                    Удалить услугу
                                </div>
                            </li>
                        </ul>
                    </div>
                </transition>
            </div>

        </div>
        <MyServicesModal v-if="isPopupImprove || isPopupReinstall || isPopupDelete || isPopupChangePass"
                         @closePopup="closePopup" :isPopupImprove="isPopupImprove"
                         :isPopupReinstall="isPopupReinstall" :isPopupDelete="isPopupDelete"
                         :isPopupChangePass="isPopupChangePass"/>
    </div>
</template>

<script setup>

import MyServicesStatus from "../MyServicesStatus/MyServicesStatus.vue";
import FormSwitch from "../../../../components/Others/FormSwitch.vue";
import {onMounted, ref} from "vue";
import MyServicesModal from "../MyServicesModal/MyServicesModal.vue";

const myServiceItems = [
    {
        id: '1',
        name: 'comfortable-plot',
        tariff: 'VIEs-1',
        type: 'Виртуальный',
        ip: '24.134.112.404',
        price: '3,5 ₽ / час',
        activeTo: '07 июн. 2023 г., 12:24',
        status: 'creating'
    },
    {
        id: '2',
        name: 'use-hardserv',
        tariff: 'Name',
        type: 'Аренда',
        ip: '24.134.112.421',
        price: '3 126 ₽ / месяц',
        activeTo: '07 июн. 2023 г., 12:24',
        status: 'active'
    },
    {
        id: '3',
        name: 'use-hardserv',
        tariff: 'AMD Ryzen 7 3700X',
        type: 'Выделенные',
        ip: '24.134.112.425',
        price: '3 126 ₽ / месяц',
        activeTo: '07 июн. 2023 г., 12:24',
        status: 'notPaid'
    },
    {
        id: '4',
        name: 'use-hardserv',
        tariff: 'AMD Ryzen 7 3700X',
        type: 'Выделенные',
        ip: '24.134.112.425',
        price: '3 126 ₽ / месяц',
        activeTo: '07 июн. 2023 г., 12:24',
        status: 'creating'
    }
]

const isAdaptive = window.innerWidth < 1400;


const isDropDownShowed = ref({});

const isPopupImprove = ref(false);
const isPopupReinstall = ref(false);
const isPopupDelete = ref(false)
const isPopupChangePass = ref(false);

const handleDropDown = (index) => {
    isDropDownShowed.value[index] = !isDropDownShowed.value[index];
};

const closeDropDown = (index) => {
    isDropDownShowed.value[index] = false
}

const testClick = (event) => {
    if (event) {
        for (let i = 0; i < myServiceItems.length; i++) {
            closeDropDown(i);
        }
    }
}


const isDropDownOpen = (index) => {
    return isDropDownShowed.value[index];
}

const openPopupImprove = () => {
    isPopupImprove.value = true;
}

const openPopupReinstall = () => {
    isPopupReinstall.value = true;
}

const openPopupDelete = () => {
    isPopupDelete.value = true;
}

const openPopupChangePass = () => {
    isPopupChangePass.value = true;
}

const closePopup = () => {
    isPopupImprove.value = false;
    isPopupReinstall.value = false;
    isPopupDelete.value = false;
    isPopupChangePass.value = false
}

// const closeDropDown = (index) => {
//     if (isDropDownShowed.value[index] === true) {
//         isDropDownShowed.value[index] = false;
//     }
//     console.log(isDropDownShowed.value[index])
// };



</script>

<style lang="scss" scoped>
.MyServicesTable {
    &__container {
        border: 1px solid $stroke_one;
        border-radius: 8px;
    }

    &__item {
        display: grid;
        grid-template-columns: 212px 112px 160px 160px 140px 228px 154px 118px minmax(0, 1fr);
        align-items: center;

        @media screen and (max-width: 1570px) {
            grid-template-columns: 180px 100px 140px 140px 140px 150px 150px 70px minmax(0, 1fr)
        }

        &:not(:last-child) {
            border-bottom: 1px solid $stroke_one;
        }

        &-name, &-tariff, &-type, &-ip, &-price, &-active, &-status {
            font-size: 18px;
            font-weight: 400;
            line-height: 24px;
            color: $white;
            padding: 16px;
        }

        &-btns {
            display: flex;
            gap: 16px;
            align-items: center;
            position: relative;


            &-arrows, &-settings {
                & path {
                    transition: all 250ms ease-in-out;
                }

                &:hover {
                    cursor: pointer;

                    & path {
                        stroke: $buttons-hover;
                    }
                }

                &:active {
                    & path {
                        stroke: $buttons-click;
                    }
                }

            }

        }

        &.first {
            background: $stroke_one;
            color: $gray;
            border-radius: 8px 8px 0 0;
        }

        &.first & {
            &-name, &-tariff, &-type, &-ip, &-price, &-active, &-status {
                font-size: 18px;
                font-weight: 400;
                line-height: 24px;
                color: gray;
                padding: 16px;
            }
        }

        &-dropdown {
            width: 300px;
            height: 456px;
            border-radius: 8px;
            background: $background_dark;
            position: absolute;
            top: 40px;
            right: 15px;

            z-index: 2;
            border: 1px solid $stroke_one;

            &-item {
                padding: 20px 16px;
                border-bottom: 1px solid $stroke_one;

                &:last-child {
                    border-bottom: none;
                }
            }

            &-link {
                color: $white;
                font-size: 18px;
                font-weight: 400;
                line-height: 24px;
                text-decoration: none;
                transition: all 250ms ease-in-out;

                &.disabled {
                    opacity: 0.25;
                    pointer-events: none;
                }

                &:hover {
                    cursor: pointer;
                    color: $buttons_normal;
                }

                &:active {
                    color: $buttons_click;
                }
            }
        }
    }

    &__container-mob {
        display: grid;
        grid-template-columns: repeat(2, 1fr);
        gap: 16px;
        position: relative;

        @media screen and (max-width: 675px) {
            grid-template-columns: 1fr;
        }

        &-item {
            border: 1px solid $stroke_one;
            border-radius: 8px;
        }
        &-section {
            display: flex;
            justify-content: space-between;
            align-items: center;
            gap: 16px;
            padding: 16px;
            border-bottom: 1px solid $stroke_one;

            &-name {
                font-size: 16px;
                font-weight: 400;
                line-height: 24px;
                color: $gray;
            }
            &-value {
                font-size: 14px;
                font-weight: 400;
                line-height: 24px;
                color: $white;
            }
            &:last-child {
                border-bottom: none;
            }
            &-btns {
                display: flex;
                align-items: center;
                gap: 16px;
            }

            &:last-child {
                justify-content: end;
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