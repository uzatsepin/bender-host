<template>
    <div class="MyServiceItem">
        <div class="MyServiceItem__head">
            <div class="MyServiceItem__head-text">
                {{ aboutService.info.name }}
                <span class="MyServiceItem__head-edit">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                        <path
                            d="M11.4001 18.1612L11.4001 18.1612L18.796 10.7653C17.7894 10.3464 16.5972 9.6582 15.4697 8.53068C14.342 7.40298 13.6537 6.21058 13.2348 5.2039L5.83882 12.5999L5.83879 12.5999C5.26166 13.1771 4.97307 13.4657 4.7249 13.7838C4.43213 14.1592 4.18114 14.5653 3.97634 14.995C3.80273 15.3593 3.67368 15.7465 3.41556 16.5208L2.05445 20.6042C1.92743 20.9852 2.0266 21.4053 2.31063 21.6894C2.59466 21.9734 3.01478 22.0726 3.39584 21.9456L7.47918 20.5844C8.25351 20.3263 8.6407 20.1973 9.00498 20.0237C9.43469 19.8189 9.84082 19.5679 10.2162 19.2751C10.5343 19.0269 10.823 18.7383 11.4001 18.1612Z"
                            fill="#858892"/>
                        <path
                            d="M20.8482 8.71306C22.3839 7.17735 22.3839 4.68748 20.8482 3.15178C19.3125 1.61607 16.8226 1.61607 15.2869 3.15178L14.3999 4.03882C14.4121 4.0755 14.4246 4.11268 14.4377 4.15035C14.7628 5.0875 15.3763 6.31601 16.5303 7.47002C17.6843 8.62403 18.9128 9.23749 19.85 9.56262C19.8875 9.57563 19.9245 9.58817 19.961 9.60026L20.8482 8.71306Z"
                            fill="#858892"/>
                    </svg>
                </span>
            </div>
            <div class="MyServiceItem__head-btns">
                <FormSwitch :text="aboutService.info.status" :status="true"/>
                <div class="MyServiceItem__head-btns-edit">
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
                        <path
                            d="M9.99935 10.8333C10.4596 10.8333 10.8327 10.4602 10.8327 10C10.8327 9.53976 10.4596 9.16667 9.99935 9.16667C9.53911 9.16667 9.16602 9.53976 9.16602 10C9.16602 10.4602 9.53911 10.8333 9.99935 10.8333Z"
                            stroke="#858892" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                        <path
                            d="M15.8333 10.8333C16.2936 10.8333 16.6667 10.4602 16.6667 10C16.6667 9.53976 16.2936 9.16667 15.8333 9.16667C15.3731 9.16667 15 9.53976 15 10C15 10.4602 15.3731 10.8333 15.8333 10.8333Z"
                            stroke="#858892" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                        <path
                            d="M4.16732 10.8333C4.62756 10.8333 5.00065 10.4602 5.00065 10C5.00065 9.53976 4.62756 9.16667 4.16732 9.16667C3.70708 9.16667 3.33398 9.53976 3.33398 10C3.33398 10.4602 3.70708 10.8333 4.16732 10.8333Z"
                            stroke="#858892" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                    </svg>
                </div>
            </div>
        </div>
        <div class="MyServiceItem__links">
            <div class="MyServiceItem__links-item"
                 @click="selectPage('Info')"
                 :class="{'active': selectedPage === 'Info'}">
                Информация
            </div>
            <div class="MyServiceItem__links-item"
                 @click="selectPage('Backups')"
                 :class="{'active': selectedPage === 'Backups'}"
                 v-if="false">
                Бэкапы
            </div>
        </div>
        <div class="MyServiceItem__container">
            <MyServiceInfo v-if="selectedPage === 'Info'" :info="aboutService?.info"/>
            <MyServiceBackups v-if="selectedPage === 'Backups'" />

        </div>
    </div>
</template>

<script setup>

import {computed, onMounted, ref} from "vue";
import {useRouter} from "vue-router";
import FormSwitch from "../../../../components/Others/FormSwitch.vue";
import MyServiceInfo from "../MyServiceInfo/MyServiceInfo.vue";
import MyServiceBackups from "../MyServiceBackups/MyServiceBackups.vue";

const router = useRouter();
const itemId = ref(null)
const routerParams = router.currentRoute.value.params.id;

const aboutService = computed(() => {
    return getOneService.find(item => item.id === routerParams)
})

const getOneService = [
    {
        id: '1',
        info: {
            name: "comfortable-plot",
            status: "Активен",
            price: "35,9 ₽ / Час",
            activeTo: "28 июн. 2023 г., 1:15",
            ipAddress: "24.134.112.404",
            userName: "Admin",
            password: "2312312",
            tariff: "VIEs-1",
            ram: "2GB",
            storage: "30GB",
            processor: "1 Ядро",
            system: "Ubuntu 20.04"
        }
    },
    {
        id: '2',
        info: {
            name: "use-hardserv-1",
            status: "Активен",
            price: "45,9 ₽ / Час",
            activeTo: "23 окт. 2023 г., 12:15",
            ipAddress: "24.232.112.404",
            userName: "User",
            password: "333333",
            tariff: "DEs-2",
            ram: "4GB",
            storage: "60GB",
            processor: "2 Ядро",
            system: "Ubuntu 21.04"
        }
    },
    {
        id: '3',
        info: {
            name: "use-hardserv-2",
            status: "Отключен",
            price: "212 ₽ / Час",
            activeTo: "2 авг. 2023 г., 3:15",
            ipAddress: "192.232.112.404",
            userName: "Катерина",
            password: "sdasd12231",
            tariff: "AMD Ryzen 7 3700X",
            ram: "6GB",
            storage: "12GB",
            processor: "12 Ядер",
            system: "Windows 10"
        }
    },
    {
        id: '4',
        info: {
            name: "use-hardserv-3",
            status: "Ожидается",
            price: "2 312 ₽ / Час",
            activeTo: "22 сент. 2023 г., 3:15",
            ipAddress: "92.131.112.404",
            userName: "HackerUser",
            password: "ddqw21312",
            tariff: "Intel Core i9-9900k",
            ram: "8GB",
            storage: "1000GB",
            processor: "8 Ядер",
            system: "Freebsd"
        }
    }
]

onMounted(() => {
    itemId.value = routerParams;

})

const selectedPage = ref('Info');

const selectPage = (page) => {
    selectedPage.value = page;
}

</script>

<style lang="scss" scoped>

.MyServiceItem {
    &__head {
        display: flex;
        align-items: center;
        justify-content: space-between;

        @media screen and (max-width: 570px) {
            flex-direction: column;
            align-items: baseline;
            gap: 20px;
        }
        &-text {
            display: flex;
            gap: 12px;
            align-items: center;
            color: $white;
            font-size: 32px;
            font-weight: 500;
            line-height: 120%;

        }
        &-edit {
            & svg {
                & path {
                    transition: all 250ms ease-in-out;
                }
            }
            &:hover {
                cursor: pointer;
                & svg {
                    & path {
                        fill: $buttons_normal;
                    }
                }
            }
        }
        &-btns {
            display: flex;
            gap: 24px;
            align-items: center;

            @media screen and (max-width: 570px) {
                justify-content: space-between;
                width: 100%;
            }
            &-edit {
                padding: 6px;
                border-radius: 50%;
                background: $background_dark;
                min-width: 32px;
                width: 32px;
                height: 32px;
                transition: all 250ms ease-in-out;

                & path {
                    transition: all 250ms ease-in-out;
                }
                &:hover {
                    background: $yellowBg;
                    cursor: pointer;
                    & path {
                        stroke: $buttons_normal;
                    }
                }
            }
            &:deep(.FormSwitch__item) {
                color: $green;
            }
        }
    }
    &__links {
        margin-top: 32px;
        display: flex;
        gap: 40px;
        padding-bottom: 12px;
        border-bottom: 1px solid $stroke_one;
        max-width: 848px;
        &-item {
            color: $gray;
            font-size: 16px;
            font-weight: 400;
            line-height: 24px;
            transition: all 250ms ease-in-out;
            &:hover {
                cursor: pointer;
                color: $buttons_normal;
            }

            &.active {
                color: $buttons_normal;
                position: relative;
                &:after {
                    content: "";
                    width: 100%;
                    height: 3px;
                    background: $buttons_normal;
                    position: absolute;
                    bottom: -14px;
                    border-radius: 4px;
                    left: 0;
                }
            }
        }
    }
    &__container {
        margin-top: 32px;
    }
}

</style>