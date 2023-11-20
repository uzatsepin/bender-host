<template>
    <header class="header">
        <div class="container">
            <div class="header__container">
                <div class="header__menu">
                    <a href="#" class="header__menu-link" @click="isHeaderDropdownOpen = !isHeaderDropdownOpen">{{ $t('header.services') }}</a>
                    <transition>
                        <div class="header__dropdown" v-if="isHeaderDropdownOpen" v-click-away="closeDropdown">
                            <router-link to="/virtual" class="header__dropdown-item">
                                Виртуальные сервера
                            </router-link>
                            <router-link to="/dedicated" class="header__dropdown-item">
                                Выделенные сервера
                            </router-link>
                            <router-link to="/rent" class="header__dropdown-item">
                                Аренда
                            </router-link>
                        </div>
                    </transition>
                    <a href="#" class="header__menu-link">{{ $t('header.info') }}</a>
                </div>
                <div class="header__menu-mob">
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
                        <path d="M2.5 10L17.5 10" stroke="#858892" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                        <path d="M2.5 5.00001L17.5 5.00001" stroke="#858892" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                        <path d="M2.5 15L17.5 15" stroke="#858892" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                    </svg>
                </div>
                <div class="header__buttons">
                    <div class="header__buttons-lang">To english</div>
                    <div class="header__buttons-auth" v-if="!isMobile">
                        <div class="header__auth-btn signin" @click="emit('handleAuth')">Войти</div>
                        <span>/</span>
                        <div class="header__auth-btn signout" @click="emit('handleAuth')">Регистрация</div>
                    </div>
                    <div class="header__buttons-auth-mobile" v-if="isMobile" @click="emit('handleAuth')">
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
                            <g clip-path="url(#clip0_853_7370)">
                                <path d="M6.66667 16.25C4.70248 16.25 3.72039 16.25 3.11019 15.6398C2.5 15.0296 2.5 14.0475 2.5 12.0833L2.5 7.91668C2.5 5.95249 2.5 4.9704 3.11019 4.36021C3.72039 3.75001 4.70248 3.75001 6.66667 3.75001" stroke="#858892" stroke-width="1.5"/>
                                <path d="M6.6665 13.3333C6.6665 15.6904 6.6665 16.8689 7.39874 17.6011C8.13097 18.3333 9.30948 18.3333 11.6665 18.3333H12.4998C14.8569 18.3333 16.0354 18.3333 16.7676 17.6011C17.4998 16.8689 17.4998 15.6904 17.4998 13.3333V6.66668C17.4998 4.30965 17.4998 3.13114 16.7676 2.39891C16.0354 1.66668 14.8569 1.66668 12.4998 1.66668H11.6665C9.30948 1.66668 8.13097 1.66668 7.39874 2.39891C6.6665 3.13114 6.6665 4.30965 6.6665 6.66668" stroke="#858892" stroke-width="1.5" stroke-linecap="round"/>
                                <path d="M5 10L12.5 10M12.5 10L10.4167 12.0833M12.5 10L10.4167 7.91668" stroke="#858892" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                            </g>
                            <defs>
                                <clipPath id="clip0_853_7370">
                                    <rect y="1.14441e-05" width="20" height="20" rx="5" fill="white"/>
                                </clipPath>
                            </defs>
                        </svg>
                    </div>
                </div>
            </div>
        </div>
    </header>
</template>

<script setup>

import {ref} from "vue";

const props = defineProps({
    isAuth: {
        type: Boolean,
        default: false
    }
})

const emit = defineEmits(['handleAuth'])


const isHeaderDropdownOpen = ref(false)

const closeDropdown = (event) => {
    isHeaderDropdownOpen.value = false
}

const isMobile = window.innerWidth < 645;

</script>

<style lang="scss" scoped>
.header {
    height: 72px;
    border-bottom: 1px solid $stroke_one;
    backdrop-filter: blur(10px);

    @media screen and (max-width: 645px) {
        height: 64px;
    }

    &__container {
        display: flex;
        align-items: center;
        justify-content: space-between;
        padding: 24px 0;

        @media screen and (max-width: 645px) {
            padding: 14px 0;
        }
    }

    &__menu {
        display: flex;
        gap: 32px;
        position: relative;

        @media screen and (max-width: 645px) {
            display: none;
        }

        &-link {
            color: $gray;
            font-size: 16px;
            font-weight: 500;
            line-height: 24px;
            text-decoration: none;
            display: flex;
            align-items: center;
            gap: 4px;
            transition: all 250ms ease-in-out;


            &:hover {
                color: $white;
            }

            &:after {
                content: '';
                display: flex;
                background-image: url('../../../assets/images/header/arrow-down-icon.svg');
                height: 16px;
                width: 16px;
            }
        }
        &-mob {
            width: 36px;
            height: 36px;
            background: $background_dark;
            padding: 8px;
            border-radius: 40px;
            display: none;
            & svg {
                & path {
                    transition: all 250ms ease-in-out;
                }
            }
            &:active {
                path {
                    stroke: $buttons_normal;
                }
            }
            @media screen and (max-width: 645px) {
                display: block;
            }
        }
    }

    &__buttons {
        display: flex;
        gap: 40px;

        &-lang {
            color: $gray;
            font-size: 16px;
            font-weight: 500;
            line-height: 24px;
            display: flex;
            align-items: center;
            gap: 6px;

            &:before {
                content: '';
                display: flex;
                background-image: url('../../../assets/images/header/lang-icon.svg');
                height: 24px;
                width: 24px;
            }

            &:hover {
                cursor: pointer;
            }
        }

        &-auth {
            display: flex;
            color: $gray;
            font-size: 16px;
            font-weight: 500;
            line-height: 24px;
            gap: 6px;

            & span {
                color: $background_dark_light
            }
            &-mobile {
                width: 36px;
                height: 36px;
                background: $background_dark;
                padding: 8px;
                border-radius: 40px;
                & svg {
                    & path {
                        transition: all 250ms ease-in-out;
                    }
                }
                &:active {
                    path {
                        stroke: $buttons_normal;
                    }
                }
            }
        }
    }

    &__auth {
        &-btn {
            &:hover {
                cursor: pointer;
            }

            &.signin {
                display: flex;
                align-items: center;
                gap: 6px;

                &:before {
                    content: '';
                    display: flex;
                    background-image: url('../../../assets/images/header/login-icon.svg');
                    height: 24px;
                    width: 24px;
                }
            }
        }
    }

    &__dropdown {
        position: absolute;
        top: 30px;
        left: 40px;
        border: 1px solid $stroke_one;
        background: $background_dark;
        border-radius: 8px;
        width: 260px;
        z-index: 10;

        &-item {
            padding: 20px 16px;
            color: $white;
            font-size: 16px;
            font-weight: 400;
            line-height: 24px;
            text-decoration: none;
            display: block;
            transition: all 250ms ease-in-out;
            &:first-child {
                border-radius: 8px 8px 0 0;
            }
            &:last-child {
                border-radius: 0 0 8px 8px;
            }

            &:not(:first-child) {
                border-top: 1px solid $stroke_one;
            }
         &:hover {
             cursor: pointer;
             color: $buttons_normal;
             background: $background_dark_light;
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
        transform: translateY(-100%);
    }
}
</style>