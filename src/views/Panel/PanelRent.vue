<template>
    <div class="PanelRent">
        <div class="PanelRent__title">Аренда</div>
        <div class="PanelRent__descr">Если вы хотите создать свой собственный хостинг, мы готовы помочь вам. Для
            ознакомления с информацией, <router-link to="/rent">нажмите тут</router-link>, а для размещения заказа нажмите на кнопку ниже.
        </div>
        <PrimaryButton button-text="Открыть свой хост-сервис" />
    </div>
</template>

<script setup>

import PrimaryButton from "../../components/Others/PrimaryButton.vue";
</script>

<style lang="scss" scoped>
.PanelRent {
    &__title {
        color: $white;
        font-size: 32px;
        font-weight: 500;
        line-height: 110%;
    }
    &__descr {
        margin-top: 16px;
        color: $gray;
        font-size: 16px;
        font-weight: 400;
        line-height: 140%;
        max-width: 621px;
        & a {
            text-decoration: none;
            color: $white;
            transition: all 250ms ease-in-out;

            &:hover {
                color: $buttons-normal;
            }
            &:active {
                color: $buttons_click;
            }
        }
    }
    &:deep(.PrimaryButton) {
        margin-top: 32px;
        padding: 8px 16px;
    }
}

</style>