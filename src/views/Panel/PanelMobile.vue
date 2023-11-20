<template>
    <div class="PanelMobile">
        <div class="PanelMobile__menu" @click="emit('handlePopup')">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                <path d="M3 12H21" stroke="#858892" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                <path d="M3 6H21" stroke="#858892" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                <path d="M3 18H21" stroke="#858892" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
        </div>
        <div class="PanelMobile__info">
            <router-link to="/panel/finance" class="PanelMobile__balance">
                1 100₽
            </router-link>
            <div class="PanelMobile__user" @click="handleUserDropdown" :class="{'active': isUserDropdownOpen}">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
                    <path
                        d="M16.6673 17.5V15.8333C16.6673 14.9493 16.3161 14.1014 15.691 13.4763C15.0659 12.8512 14.218 12.5 13.334 12.5H6.66732C5.78326 12.5 4.93542 12.8512 4.31029 13.4763C3.68517 14.1014 3.33398 14.9493 3.33398 15.8333V17.5"
                        stroke="#858892" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                    <path
                        d="M9.99935 9.16667C11.8403 9.16667 13.3327 7.67428 13.3327 5.83333C13.3327 3.99238 11.8403 2.5 9.99935 2.5C8.1584 2.5 6.66602 3.99238 6.66602 5.83333C6.66602 7.67428 8.1584 9.16667 9.99935 9.16667Z"
                        stroke="#858892" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
            </div>
        </div>
        <transition name="popup-anim">
            <div class="PanelMobile__user-dropdown" v-if="isUserDropdownOpen">
                <router-link to="/panel/settings" class="PanelMobile__user-dropdown-item">
                    email@gmail.com
                </router-link>
                <div class="PanelMobile__user-dropdown-item exit">
                    Выйти
                </div>
            </div>
        </transition>
    </div>
</template>

<script setup>

import {ref} from "vue";

const isUserDropdownOpen = ref(false);

const emit = defineEmits(['handlePopup']);

const handleUserDropdown = () => {
    isUserDropdownOpen.value = !isUserDropdownOpen.value
}

</script>

<style lang="scss" scoped>
.PanelMobile {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 14px 20px;
    border-bottom: 1px solid $stroke_one;
    position: relative;

    &__menu, &__user {
        width: 36px;
        height: 36px;
        background: $background_dark;
        border-radius: 50%;
        display: flex;
        align-items: center;
        justify-content: center;
        cursor: pointer;

        path {
            transition: all 250ms ease-in-out;
        }

        &:active {
            path {
                stroke: $buttons_normal;
            }
        }
        &.active {
            path {
                stroke: $buttons_normal;
            }
        }
    }

    &__info {
        display: flex;
        align-items: center;
        gap: 6px;
    }

    &__balance {
        padding: 6px 14px;
        color: $white;
        background: $background_dark;
        border-radius: 100px;
        font-size: 18px;
        font-weight: 400;
        text-decoration: none;
    }

    &__user-dropdown {
        position: absolute;
        top: 80px;
        right: 20px;
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
            &:not(:first-child) {
                border-top: 1px solid $stroke_one;
            }
            &.exit {
                color: $red;
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