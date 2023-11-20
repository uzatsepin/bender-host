<template>
    <div class="MyServicesEmpty">
        <div class="MyServicesEmpty__item" v-for="(item, index) in services" :key="index" v-if="!isMobile">
            <div class="MyServicesEmpty__item-name">{{ item.name }}</div>
            <div class="MyServicesEmpty__item-status">{{ item.status }}</div>
            <div class="MyServicesEmpty__item-btn">Заказать</div>
        </div>

        <div class="MyServicesEmpty__item-mob" v-for="(item, index) in services" :key="index" v-if="isMobile">
            <div class="MyServicesEmpty__item-mob-info">
                <div class="MyServicesEmpty__item-mob-info-name">{{ item.name }}</div>
                <div class="MyServicesEmpty__item-mob-info-status">{{ item.status }}</div>
            </div>
            <PrimaryButton button-text="Заказать" />
        </div>

    </div>
</template>

<script setup>

import PrimaryButton from "../../../../components/Others/PrimaryButton.vue";

const services = [
    {
        name: "Виртуальные сервера",
        status: "Нет",
    },
    {
        name: "Выделенные сервера",
        status: "Нет",
    },
    {
        name: "Аренда",
        status: "Нет",
    }
]

const isMobile = window.innerWidth < 500;

</script>

<style lang="scss" scoped>

.MyServicesEmpty {
    display: flex;
    flex-direction: column;
    gap: 8px;
    &__item {
        max-width: 630px;
        display: grid;
        grid-template-columns: 259px 1fr 1fr;
        padding: 16px;
        border-radius: 8px;
        background: $background_dark;
        &-name {
            color: $gray;
            font-size: 18px;
            font-weight: 400;
            line-height: 24px;
        }
        &-status {
            color: $white;
            font-size: 18px;
            font-weight: 400;
            line-height: 24px;
        }
        &-btn {
            justify-self: flex-end;
            color: $buttons-normal;
            font-size: 18px;
            font-weight: 400;
            line-height: 24px;
            transition: all 250ms ease-in-out;

            &:hover {
                cursor: pointer;
                color: $buttons-hover;
            }
            &:active {
                color: $buttons-click;
            }
        }
    }
    &__item-mob {
        display: flex;
        flex-direction: column;
        gap: 16px;
        &-info {
            display: flex;
            align-items: center;
            justify-content: space-between;
            padding: 16px;
            background: $background_dark;
            border-radius: 8px;
            &-name {
                color: $gray;
                font-size: 18px;
                font-weight: 400;
                line-height: 24px;
            }
            &-status {
                color: $white;
                font-size: 18px;
                font-weight: 400;
                line-height: 24px;
            }
            &:deep(.PrimaryButton) {
                width: 100%;
                padding: 8px 16px;
            }
        }
    }
}

</style>