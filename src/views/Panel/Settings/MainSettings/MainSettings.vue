<template>
    <div class="MainSettings">
        <div class="MainSettings__title">
            Данные профиля
        </div>
        <div class="MainSettings__info">
            <div class="MainSettings__item">
                <div class="MainSettings__item-name">{{ shortName }}</div>
                <div class="MainSettings__item-value">392558</div>
            </div>
            <div class="MainSettings__item">
                <div class="MainSettings__item-name">Email</div>
                <div class="MainSettings__item-value">email@gmail.com</div>
            </div>
        </div>
        <div class="MainSettings__lang">
            <div class="MainSettings__lang-title">Язык</div>
            <div class="MainSettings__lang-items">
                <div class="MainSettings__lang-item active">
                    🇷🇺 Русский
                </div>
                <div class="MainSettings__lang-item">
                    🇺🇸 English
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>

import {computed} from "vue";

const isMobile = computed(() => {
    return window.innerWidth <= 500
})

const shortName = computed(() => {
    return isMobile.value ? 'ID' : 'Уникальный ID'
})


</script>

<style lang="scss" scoped>
.MainSettings {
    &__title {
        color: $white;
        font-size: 24px;
        font-weight: 500;
        line-height: 120%;
    }
    &__info {
        margin-top: 20px;
        display: flex;
        flex-direction: column;
        gap: 8px;
    }
    &__item {
        padding: 16px;
        display: grid;
        grid-template-columns: repeat(2, 1fr);
        max-width: 630px;
        background: $background_dark;
        border-radius: 8px;
        &-name {
            color: $gray;
            font-size: 18px;
            font-weight: 400;
            line-height: 24px;
        }
        &-value {
            color: $white;
            font-size: 18px;
            font-weight: 400;
            line-height: 24px;
        }
    }
    &__lang {
        margin-top: 40px;
        &-title {
            color: $white;
            font-size: 24px;
            font-weight: 500;
            line-height: 120%;
        }
        &-items {
            margin-top: 20px;
            display: flex;
            gap: 8px;
        }
        &-item {
            padding: 8px 14px;
            background: $background_dark;
            border-radius:40px;
            color: $gray;
            font-size: 18px;
            font-weight: 400;
            line-height: 24px;
            transition: all 250ms ease-in-out;
            &:hover {
                cursor: pointer;
                color: $buttons_normal;
                background: $yellowBg;
            }
            &.active {
                color: $buttons_normal;
                background: $yellowBg;
            }
        }
    }
}

</style>