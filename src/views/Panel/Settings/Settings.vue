<template>
    <div class="Settings">
        <div class="Settings__title">
            Настройки
        </div>
        <div class="Settings__link">
            <div class="Settings__link-item"
                 @click="selectPage('MainSettings')"
                 :class="{'active': selectedPage === 'MainSettings'}">
                Основные
            </div>
            <div class="Settings__link-item"
                 @click="selectPage('Security')"
                 :class="{'active': selectedPage === 'Security'}">
                Безопасность
            </div>
        </div>

        <div class="Settings__container">
            <MainSettings v-if="selectedPage === 'MainSettings'" />
            <Security v-if="selectedPage === 'Security'"/>
        </div>
    </div>
</template>

<script setup>
import MainSettings from "./MainSettings/MainSettings.vue";
import Security from "./Security/Security.vue";
import {ref} from "vue";

const selectedPage = ref('MainSettings');

const selectPage = (page) => {
    selectedPage.value = page;
}


</script>

<style lang="scss" scoped>
.Settings {
    max-width: 848px;
    &__title {
        color: $white;
        font-size: 32px;
        font-weight: 500;
        line-height: 120%;
    }
    &__link {
        margin-top: 32px;
        display: flex;
        gap: 40px;
        padding-bottom: 12px;
        border-bottom: 1px solid $stroke_one;
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
        margin-top: 40px;
    }
}

</style>