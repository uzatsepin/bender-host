<template>
    <div class="PanelAside" :class="{'PanelAside--open': isPanelOpen}" v-if="isPanelOpen || !isMobile">
        <div class="PanelAside__container">
            <router-link to="/panel" class="PanelAside__logo">
                Bender Premium
            </router-link>
            <div class="PanelAside__services">
                <p class="PanelAside__services-title">{{ $t('panelAside.services') }}</p>
                <ul class="PanelAside__services-list">
                    <li class="PanelAside__services-item">
                        <router-link to="/panel/virtual" class="PanelAside__services-link" @click="emit('handlePopup')"
                                     :class="{ 'active': isRouteActive('/panel/virtual') }">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
                                 fill="none">
                                <path
                                    d="M2 17C2 15.1144 2 14.1716 2.58579 13.5858C3.17157 13 4.11438 13 6 13H18C19.8856 13 20.8284 13 21.4142 13.5858C22 14.1716 22 15.1144 22 17C22 18.8856 22 19.8284 21.4142 20.4142C20.8284 21 19.8856 21 18 21H6C4.11438 21 3.17157 21 2.58579 20.4142C2 19.8284 2 18.8856 2 17Z"
                                    stroke="#858892" stroke-width="1.5"/>
                                <path
                                    d="M2 6C2 4.11438 2 3.17157 2.58579 2.58579C3.17157 2 4.11438 2 6 2H18C19.8856 2 20.8284 2 21.4142 2.58579C22 3.17157 22 4.11438 22 6C22 7.88562 22 8.82843 21.4142 9.41421C20.8284 10 19.8856 10 18 10H6C4.11438 10 3.17157 10 2.58579 9.41421C2 8.82843 2 7.88562 2 6Z"
                                    stroke="#858892" stroke-width="1.5"/>
                                <path d="M11 6H18" stroke="#858892" stroke-width="1.5" stroke-linecap="round"/>
                                <path d="M6 6H8" stroke="#858892" stroke-width="1.5" stroke-linecap="round"/>
                                <path d="M11 17H18" stroke="#858892" stroke-width="1.5" stroke-linecap="round"/>
                                <path d="M6 17H8" stroke="#858892" stroke-width="1.5" stroke-linecap="round"/>
                            </svg>
                            {{ $t('panelAside.virtualServers') }}
                        </router-link>
                    </li>
                    <li class="PanelAside__services-item">
                        <router-link to="/panel/dedicated" class="PanelAside__services-link" @click="emit('handlePopup')"
                                     :class="{ 'active': isRouteActive('/panel/dedicated') }">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
                                 fill="none">
                                <path
                                    d="M2 17C2 15.1144 2 14.1716 2.58579 13.5858C3.17157 13 4.11438 13 6 13H18C19.8856 13 20.8284 13 21.4142 13.5858C22 14.1716 22 15.1144 22 17C22 18.8856 22 19.8284 21.4142 20.4142C20.8284 21 19.8856 21 18 21H6C4.11438 21 3.17157 21 2.58579 20.4142C2 19.8284 2 18.8856 2 17Z"
                                    stroke="#858892" stroke-width="1.5"/>
                                <path
                                    d="M2 6C2 4.11438 2 3.17157 2.58579 2.58579C3.17157 2 4.11438 2 6 2H18C19.8856 2 20.8284 2 21.4142 2.58579C22 3.17157 22 4.11438 22 6C22 7.88562 22 8.82843 21.4142 9.41421C20.8284 10 19.8856 10 18 10H6C4.11438 10 3.17157 10 2.58579 9.41421C2 8.82843 2 7.88562 2 6Z"
                                    stroke="#858892" stroke-width="1.5"/>
                                <path d="M13.5 6L18 6" stroke="#858892" stroke-width="1.5" stroke-linecap="round"/>
                                <path d="M6 7L6 5" stroke="#858892" stroke-width="1.5" stroke-linecap="round"/>
                                <path d="M9 7L9 5" stroke="#858892" stroke-width="1.5" stroke-linecap="round"/>
                                <path d="M13.5 17H18" stroke="#858892" stroke-width="1.5" stroke-linecap="round"/>
                                <path d="M6 18L6 16" stroke="#858892" stroke-width="1.5" stroke-linecap="round"/>
                                <path d="M9 18L9 16" stroke="#858892" stroke-width="1.5" stroke-linecap="round"/>
                            </svg>
                            {{ $t('panelAside.dedicatedServers') }}
                        </router-link>
                    </li>
                    <li class="PanelAside__services-item">
                        <router-link to="/panel/rent" class="PanelAside__services-link"
                                     :class="{ 'active': isRouteActive('/panel/rent') }" @click="emit('handlePopup')">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
                                 fill="none">
                                <path
                                    d="M2 18C2 17.0681 2 16.6022 2.15224 16.2346C2.35523 15.7446 2.74458 15.3552 3.23463 15.1522C3.60218 15 4.06812 15 5 15H19C19.9319 15 20.3978 15 20.7654 15.1522C21.2554 15.3552 21.6448 15.7446 21.8478 16.2346C22 16.6022 22 17.0681 22 18C22 18.9319 22 19.3978 21.8478 19.7654C21.6448 20.2554 21.2554 20.6448 20.7654 20.8478C20.3978 21 19.9319 21 19 21H5C4.06812 21 3.60218 21 3.23463 20.8478C2.74458 20.6448 2.35523 20.2554 2.15224 19.7654C2 19.3978 2 18.9319 2 18Z"
                                    stroke="#858892" stroke-width="1.5"/>
                                <path
                                    d="M2 12C2 11.0681 2 10.6022 2.15224 10.2346C2.35523 9.74458 2.74458 9.35523 3.23463 9.15224C3.60218 9 4.06812 9 5 9H19C19.9319 9 20.3978 9 20.7654 9.15224C21.2554 9.35523 21.6448 9.74458 21.8478 10.2346C22 10.6022 22 11.0681 22 12C22 12.9319 22 13.3978 21.8478 13.7654C21.6448 14.2554 21.2554 14.6448 20.7654 14.8478C20.3978 15 19.9319 15 19 15H5C4.06812 15 3.60218 15 3.23463 14.8478C2.74458 14.6448 2.35523 14.2554 2.15224 13.7654C2 13.3978 2 12.9319 2 12Z"
                                    stroke="#858892" stroke-width="1.5"/>
                                <path
                                    d="M2 6C2 5.06812 2 4.60218 2.15224 4.23463C2.35523 3.74458 2.74458 3.35523 3.23463 3.15224C3.60218 3 4.06812 3 5 3H19C19.9319 3 20.3978 3 20.7654 3.15224C21.2554 3.35523 21.6448 3.74458 21.8478 4.23463C22 4.60218 22 5.06812 22 6C22 6.93188 22 7.39782 21.8478 7.76537C21.6448 8.25542 21.2554 8.64477 20.7654 8.84776C20.3978 9 19.9319 9 19 9H5C4.06812 9 3.60218 9 3.23463 8.84776C2.74458 8.64477 2.35523 8.25542 2.15224 7.76537C2 7.39782 2 6.93188 2 6Z"
                                    stroke="#858892" stroke-width="1.5"/>
                                <circle cx="5" cy="12" r="1" fill="#858892"/>
                                <circle cx="5" cy="6" r="1" fill="#858892"/>
                                <circle cx="5" cy="18" r="1" fill="#858892"/>
                            </svg>
                            {{ $t('panelAside.rentServer') }}
                        </router-link>
                    </li>
                </ul>
            </div>
            <div class="PanelAside__services">
                <p class="PanelAside__services-title">{{ $t('panelAside.main') }}</p>
                <ul class="PanelAside__services-list">
                    <li class="PanelAside__services-item">
                        <router-link to="/panel/myservices" class="PanelAside__services-link"
                                     :class="{ 'active': isRouteActive('/panel/myservices') }"
                                     @click="emit('handlePopup')">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
                                 fill="none">
                                <path
                                    d="M2 14C2 10.2288 2 8.34315 3.17157 7.17157C4.34315 6 6.22876 6 10 6H14C17.7712 6 19.6569 6 20.8284 7.17157C22 8.34315 22 10.2288 22 14C22 17.7712 22 19.6569 20.8284 20.8284C19.6569 22 17.7712 22 14 22H10C6.22876 22 4.34315 22 3.17157 20.8284C2 19.6569 2 17.7712 2 14Z"
                                    stroke="#858892" stroke-width="1.5"/>
                                <path
                                    d="M21.6618 8.71973C18.6519 10.6761 17.147 11.6543 15.5605 12.1472C13.2416 12.8677 10.7586 12.8677 8.43963 12.1472C6.85313 11.6543 5.34822 10.6761 2.33838 8.71973"
                                    stroke="#858892" stroke-width="1.5" stroke-linecap="round"/>
                                <path d="M8 11V13" stroke="#858892" stroke-width="1.5" stroke-linecap="round"/>
                                <path d="M16 11V13" stroke="#858892" stroke-width="1.5" stroke-linecap="round"/>
                                <path
                                    d="M9.1709 4C9.58273 2.83481 10.694 2 12.0002 2C13.3064 2 14.4177 2.83481 14.8295 4"
                                    stroke="#858892" stroke-width="1.5" stroke-linecap="round"/>
                            </svg>
                            {{ $t('panelAside.myServices') }}
                        </router-link>
                    </li>
                    <li class="PanelAside__services-item">
                        <router-link to="/panel/finance" class="PanelAside__services-link"
                                     :class="{ 'active': isRouteActive('/panel/finance') }"
                                     @click="emit('handlePopup')">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
                                 fill="none">
                                <path d="M6 10H10" stroke="#858892" stroke-width="1.5" stroke-linecap="round"
                                      stroke-linejoin="round"/>
                                <path
                                    d="M20.8333 11H18.2308C16.4465 11 15 12.3431 15 14C15 15.6569 16.4465 17 18.2308 17H20.8333C20.9167 17 20.9583 17 20.9935 16.9979C21.5328 16.965 21.9623 16.5662 21.9977 16.0654C22 16.0327 22 15.994 22 15.9167V12.0833C22 12.006 22 11.9673 21.9977 11.9346C21.9623 11.4338 21.5328 11.035 20.9935 11.0021C20.9583 11 20.9167 11 20.8333 11Z"
                                    stroke="#858892" stroke-width="1.5"/>
                                <circle cx="18" cy="14" r="1" fill="#858892"/>
                                <path
                                    d="M20.965 11C20.8873 9.1277 20.6366 7.97975 19.8284 7.17157C18.6569 6 16.7712 6 13 6H10C6.22876 6 4.34315 6 3.17157 7.17157C2 8.34315 2 10.2288 2 14C2 17.7712 2 19.6569 3.17157 20.8284C4.34315 22 6.22876 22 10 22H13C16.7712 22 18.6569 22 19.8284 20.8284C20.6366 20.0203 20.8873 18.8723 20.965 17"
                                    stroke="#858892" stroke-width="1.5"/>
                                <path d="M6 6L9.73549 3.52313C10.7874 2.82562 12.2126 2.82562 13.2645 3.52313L17 6"
                                      stroke="#858892" stroke-width="1.5" stroke-linecap="round"/>
                            </svg>
                            {{ $t('panelAside.finance') }}
                        </router-link>
                    </li>
                    <li class="PanelAside__services-item">
                        <router-link to="/panel/referals" class="PanelAside__services-link"
                                     :class="{ 'active': isRouteActive('/panel/referals') }"
                                     @click="emit('handlePopup')">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
                                 fill="none">
                                <circle cx="9" cy="6" r="4" stroke="#858892" stroke-width="1.5"/>
                                <path d="M15 9C16.6569 9 18 7.65685 18 6C18 4.34315 16.6569 3 15 3" stroke="#858892"
                                      stroke-width="1.5" stroke-linecap="round"/>
                                <ellipse cx="9" cy="17" rx="7" ry="4" stroke="#858892" stroke-width="1.5"/>
                                <path
                                    d="M18 14C19.7542 14.3847 21 15.3589 21 16.5C21 17.5293 19.9863 18.4229 18.5 18.8704"
                                    stroke="#858892" stroke-width="1.5" stroke-linecap="round"/>
                            </svg>
                            {{ $t('panelAside.referals') }}
                        </router-link>
                    </li>
                    <li class="PanelAside__services-item">
                        <router-link to="/panel/settings" class="PanelAside__services-link"
                                     :class="{ 'active': isRouteActive('/panel/settings') }"
                                     @click="emit('handlePopup')">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
                                 fill="none">
                                <circle cx="12" cy="12" r="3" stroke="#858892" stroke-width="1.5"/>
                                <path
                                    d="M13.7654 2.15224C13.3978 2 12.9319 2 12 2C11.0681 2 10.6022 2 10.2346 2.15224C9.74457 2.35523 9.35522 2.74458 9.15223 3.23463C9.05957 3.45834 9.0233 3.7185 9.00911 4.09799C8.98826 4.65568 8.70226 5.17189 8.21894 5.45093C7.73564 5.72996 7.14559 5.71954 6.65219 5.45876C6.31645 5.2813 6.07301 5.18262 5.83294 5.15102C5.30704 5.08178 4.77518 5.22429 4.35436 5.5472C4.03874 5.78938 3.80577 6.1929 3.33983 6.99993C2.87389 7.80697 2.64092 8.21048 2.58899 8.60491C2.51976 9.1308 2.66227 9.66266 2.98518 10.0835C3.13256 10.2756 3.3397 10.437 3.66119 10.639C4.1338 10.936 4.43789 11.4419 4.43786 12C4.43783 12.5581 4.13375 13.0639 3.66118 13.3608C3.33965 13.5629 3.13248 13.7244 2.98508 13.9165C2.66217 14.3373 2.51966 14.8691 2.5889 15.395C2.64082 15.7894 2.87379 16.193 3.33973 17C3.80568 17.807 4.03865 18.2106 4.35426 18.4527C4.77508 18.7756 5.30694 18.9181 5.83284 18.8489C6.07289 18.8173 6.31632 18.7186 6.65204 18.5412C7.14547 18.2804 7.73556 18.27 8.2189 18.549C8.70224 18.8281 8.98826 19.3443 9.00911 19.9021C9.02331 20.2815 9.05957 20.5417 9.15223 20.7654C9.35522 21.2554 9.74457 21.6448 10.2346 21.8478C10.6022 22 11.0681 22 12 22C12.9319 22 13.3978 22 13.7654 21.8478C14.2554 21.6448 14.6448 21.2554 14.8477 20.7654C14.9404 20.5417 14.9767 20.2815 14.9909 19.902C15.0117 19.3443 15.2977 18.8281 15.781 18.549C16.2643 18.2699 16.8544 18.2804 17.3479 18.5412C17.6836 18.7186 17.927 18.8172 18.167 18.8488C18.6929 18.9181 19.2248 18.7756 19.6456 18.4527C19.9612 18.2105 20.1942 17.807 20.6601 16.9999C21.1261 16.1929 21.3591 15.7894 21.411 15.395C21.4802 14.8691 21.3377 14.3372 21.0148 13.9164C20.8674 13.7243 20.6602 13.5628 20.3387 13.3608C19.8662 13.0639 19.5621 12.558 19.5621 11.9999C19.5621 11.4418 19.8662 10.9361 20.3387 10.6392C20.6603 10.4371 20.8675 10.2757 21.0149 10.0835C21.3378 9.66273 21.4803 9.13087 21.4111 8.60497C21.3592 8.21055 21.1262 7.80703 20.6602 7C20.1943 6.19297 19.9613 5.78945 19.6457 5.54727C19.2249 5.22436 18.693 5.08185 18.1671 5.15109C17.9271 5.18269 17.6837 5.28136 17.3479 5.4588C16.8545 5.71959 16.2644 5.73002 15.7811 5.45096C15.2977 5.17191 15.0117 4.65566 14.9909 4.09794C14.9767 3.71848 14.9404 3.45833 14.8477 3.23463C14.6448 2.74458 14.2554 2.35523 13.7654 2.15224Z"
                                    stroke="#858892" stroke-width="1.5"/>
                            </svg>
                            {{ $t('panelAside.settings') }}
                        </router-link>
                    </li>
                </ul>
            </div>
        </div>
        <div class="PanelAside__account">
            <div class="PanelAside__account-info">
                <div class="PanelAside__account-balance">
                    1 100₽
                </div>
                <div class="PanelAside__account-email">
                    email@gmail.com
                </div>
            </div>
            <div class="PanelAside__account-btn">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                    <path
                        d="M8 19.5C5.64298 19.5 4.46447 19.5 3.73223 18.7678C3 18.0355 3 16.857 3 14.5V9.5C3 7.14298 3 5.96447 3.73223 5.23223C4.46447 4.5 5.64298 4.5 8 4.5"
                        stroke="#858892" stroke-width="1.5"/>
                    <path
                        d="M8 16C8 18.8284 8 20.2426 8.87868 21.1213C9.75736 22 11.1716 22 14 22H15C17.8284 22 19.2426 22 20.1213 21.1213C21 20.2426 21 18.8284 21 16V8C21 5.17157 21 3.75736 20.1213 2.87868C19.2426 2 17.8284 2 15 2H14C11.1716 2 9.75736 2 8.87868 2.87868C8 3.75736 8 5.17157 8 8"
                        stroke="#858892" stroke-width="1.5" stroke-linecap="round"/>
                    <path d="M6 12L15 12M15 12L12.5 14.5M15 12L12.5 9.5" stroke="#858892" stroke-width="1.5"
                          stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
            </div>
        </div>
    </div>
</template>

<script setup>
import {useRoute} from 'vue-router'

const props = defineProps({
    isPanelOpen: Boolean
})

const isMobile = window.innerWidth < 1200;
const route = useRoute();
const isRouteActive = (path) => {
    return route.path.startsWith(path)
}

const emit = defineEmits(['handlePopup']);

</script>

<style lang="scss" scoped>
.PanelAside {
    width: 268px;
    height: -webkit-fill-available;
    min-height: 100vh;
    padding: 16px 16px 32px 16px;
    background: $background_dark;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    position: fixed;

    @media screen and (max-width: 1200px) {
        position: absolute;
        z-index: 0;
        top: 65px;
        opacity: 0;
        transition: all 250ms ease-in-out;
        &--open {
            opacity: 1;
            z-index: 7;
        }
    }

    @media screen and (max-width: 450px) {
        width: 100%;
        background: $background_black;
    }

    &__logo {
        font-size: 32px;
        font-weight: 500;
        line-height: 120%;
        text-transform: uppercase;
        color: $white;
        text-decoration: none;
        @media screen and (max-width: 1200px) {
            display: none;
        }
    }

    &__services {
        margin-top: 40px;

        &:last-child {
            @media screen and (max-width: 1200px) {
                margin-top: 32px;
            }
        }

        &-title {
            color: $disabled;
            font-size: 12px;
            font-weight: 600;
            line-height: 120%;
            letter-spacing: 2.4px;
            text-transform: uppercase;
            padding-left: 14px;
        }

        &-list {
            display: flex;
            flex-direction: column;
            gap: 8px;
            margin-top: 12px;

            &-item {

            }
        }

        &-link {
            padding: 12px 14px;
            border-radius: 6px;
            background: transparent;
            color: $gray;
            font-size: 15px;
            font-weight: 500;
            line-height: 24px;
            text-decoration: none;
            display: flex;
            align-items: center;
            gap: 8px;
            transition: all 250ms ease-in-out;
            border: 1px solid transparent;

            & svg {
                & path, ellipse, circle {
                    transition: all 250ms ease-in-out;
                }
            }

            &:hover {
                background: $yellowBg;
                color: $buttons_normal;

                & svg {
                    & path, ellipse, circle {
                        stroke: $buttons_normal;
                    }
                }
            }

            &.active {
                background: $yellowBg;
                color: $buttons_normal;

                & svg {
                    & path, ellipse, circle {
                        stroke: $buttons_normal;
                    }
                }
            }

        }
    }

    &__account {
        width: 100%;
        padding: 8px 14px;
        border-radius: 6px;
        background: $stroke_one;
        display: flex;
        justify-content: space-between;
        align-items: center;

        @media screen and (max-width: 1200px) {
            display: none;
        }

        &-balance {
            color: $white;
            font-size: 18px;
            font-weight: 400;
            line-height: 24px;
        }

        &-email {
            color: $gray;
            font-size: 14px;
            font-weight: 400;
            line-height: 24px;
        }

        &-btn {
            & svg {
                & path, ellipse, circle {
                    transition: all 250ms ease-in-out;
                }
            }

            &:hover {
                cursor: pointer;

                & svg {
                    & path, ellipse, circle {
                        stroke: $buttons_normal;
                    }
                }
            }

            &:active {
                & svg {
                    & path, ellipse, circle {
                        stroke: $buttons_click;
                    }
                }
            }
        }

    }
}
</style>