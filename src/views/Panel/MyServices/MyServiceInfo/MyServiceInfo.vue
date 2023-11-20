<template>
    <div class="MyServiceInfo">
        <div class="MyServiceInfo__title">
            Общая информация о сервере
        </div>
        <div class="MyServiceInfo__items">
            <div class="MyServiceInfo__items-left">
                <div class="MyServiceInfo__item">
                    <div class="MyServiceInfo__item-name">Имя</div>
                    <div class="MyServiceInfo__item-value" :class="getStatusClass(info.status)">{{ info.status }}</div>
                </div>
                <div class="MyServiceInfo__item">
                    <div class="MyServiceInfo__item-name">Стоимость:</div>
                    <div class="MyServiceInfo__item-value">{{ info.price }}</div>
                </div>
                <div class="MyServiceInfo__item">
                    <div class="MyServiceInfo__item-name">Действует до:</div>
                    <div class="MyServiceInfo__item-value">{{ info.activeTo }}</div>
                </div>
                <div class="MyServiceInfo__item">
                    <div class="MyServiceInfo__item-name">Действует до:</div>
                    <div class="MyServiceInfo__item-value copy" @click="copyValue(info.ipAddress, 'ipAddress')">{{ info.ipAddress }}</div>
                    <ActionMessage v-if="isCopied && activeMessage === 'ipAddress'"/>
                </div>
                <div class="MyServiceInfo__item">
                    <div class="MyServiceInfo__item-name">Имя пользователя:</div>
                    <div class="MyServiceInfo__item-value copy" @click="copyValue(info.userName, 'userName')">{{ info.userName }}</div>
                    <ActionMessage v-if="isCopied && activeMessage === 'userName'"/>
                </div>
                <div class="MyServiceInfo__item">
                    <div class="MyServiceInfo__item-name">Пароль:</div>
                    <div class="MyServiceInfo__item-value password" @click="handleShowPassword">{{ isPasswordShowed ? info.password : '********' }}</div>
                </div>
            </div>
            <div class="MyServiceInfo__items-right">
                <div class="MyServiceInfo__item">
                    <div class="MyServiceInfo__item-name">Тариф:</div>
                    <div class="MyServiceInfo__item-value">{{ info.name }}</div>
                </div>
                <div class="MyServiceInfo__item">
                    <div class="MyServiceInfo__item-name">RAM:</div>
                    <div class="MyServiceInfo__item-value">{{ info.tariff }}</div>
                </div>
                <div class="MyServiceInfo__item">
                    <div class="MyServiceInfo__item-name">Хранилище:</div>
                    <div class="MyServiceInfo__item-value">{{ info.storage }}</div>
                </div>
                <div class="MyServiceInfo__item">
                    <div class="MyServiceInfo__item-name">Процессор:</div>
                    <div class="MyServiceInfo__item-value">{{ info.processor }}</div>
                </div>
                <div class="MyServiceInfo__item">
                    <div class="MyServiceInfo__item-name">Система:</div>
                    <div class="MyServiceInfo__item-value">{{ info.system }}</div>
                </div>
            </div>
        </div>

        <PrimaryButton button-text="Продлить" />
    </div>
</template>

<script setup>

import {ref} from "vue";
import ActionMessage from "../../../../components/Others/ActionMessage.vue";
import PrimaryButton from "../../../../components/Others/PrimaryButton.vue";

const props =  defineProps({
    info: {
        type: Object,
        required: true
    }
})

const isPasswordShowed = ref(false);

const isCopied = ref(false);
const activeMessage = ref('');

const handleShowPassword = () => {
    isPasswordShowed.value = !isPasswordShowed.value
}

const getStatusClass = (status) => {
    return {
        'active': status === 'Активен',
        'pending': status === 'Ожидается',
        'off': status === 'Отключен'
    };
};

const copyValue = (value, messageName) => {
    navigator.clipboard.writeText(value)
    isCopied.value = true
    activeMessage.value = messageName

    setTimeout(() => {
        isCopied.value = false
        activeMessage.value = ''
    }, 2000)

}

</script>

<style lang="scss" scoped>

.MyServiceInfo {
    &__title {
        font-size: 24px;
        font-weight: 500;
        line-height: 120%;
        color: $white;
    }
    &__items {
        width: 100%;
        display: flex;
        gap: 24px;
        margin-top: 20px;

        @media screen and (max-width: 900px) {
            flex-direction: column;
            gap: 8px;
        }
        &-right, &-left {
            display: flex;
            flex-direction: column;
            gap: 8px;
        }
    }
    &__item {
        display: grid;
        grid-template-columns: minmax(100px, 218px) minmax(200px, 412px);
        grid-gap: 8px;
        background: $background_dark;
        border-radius: 8px;
        padding: 16px;
        position: relative;

        @media screen and (max-width: 900px) {
            grid-template-columns: 1fr 1fr;
        }

        @media screen and (max-width: 500px) {
            display: flex;
            flex-direction: column;
        }

        &:deep(.ActionMessage) {
            top: 45px;
            right: 0;
            height: 44px;
            max-height: 44px;

            @media screen and (max-width: 500px) {
                top: 80px;
            }
        }
        &-name {
            color: $gray;
            font-size: 18px;
            font-weight: 400;
            line-height: 24px;

            @media screen and (max-width: 500px) {
                font-size: 16px;
            }
        }
        &-value {
            color: $white;
            font-size: 18px;
            font-weight: 400;
            line-height: 24px;
            display: flex;
            justify-content: space-between;

            @media screen and (max-width: 500px) {
                font-size: 16px;
            }

            &:after {
                content: "";
                display: block;
                width: 24px;
                height: 24px;
                background-size: 100% 100%;
                background-repeat: no-repeat;
                background-position: center;
                transition: all 250ms ease-in-out;
            }

            &.active {
                color: $green;
            }
            &.pending {
                color: $orange;
            }
            &.off {
                color: $red;
            }

            &.password:hover {
                cursor: pointer;
                &:after {
                    background-image: url("../../../../assets/images/MyServices/password-icon-hover.svg");
                }
            }

            &.password:after {
                background-image: url("../../../../assets/images/MyServices/password-icon.svg");
            }

            &.copy:hover {
                cursor: pointer;
                &:after {
                    background-image: url("../../../../assets/images/MyServices/copy-icon-hover.svg");
                }
            }

            &.copy:after {
                background-image: url("../../../../assets/images/MyServices/copy-icon.svg");
            }
        }

    }
    &:deep(.PrimaryButton) {
        margin-top: 32px;
        @media screen and (max-width: 500px) {
            width: 100%;
        }
    }
}


</style>