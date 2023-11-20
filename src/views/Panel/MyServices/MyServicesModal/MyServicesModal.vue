<template>
    <div class="MyServicesModal">
        <div class="MyServicesModal__overlay"></div>
        <div class="MyServicesModal__popup" v-click-away="closeAllPopup">
            <div class="MyServicesModal__popup-head">
                <div class="MyServicesModal__popup-head-text">
                    {{ popupHeaderText }}
                </div>
                <div class="MyServicesModal__popup-head-wrapper" @click="emit('closePopup')"></div>
            </div>
            <div class="MyServicesModal__popup-body active">
                <MyServicesImprove v-if="isPopupImprove"/>
                <MyServiceReInstall v-if="isPopupReinstall"/>
                <MyServiceDelete v-if="isPopupDelete" @close="close"/>
                <MyServiceChangePass v-if="isPopupChangePass"/>
            </div>
        </div>
    </div>
</template>

<script setup>

import MyServicesImprove from "../MyServicesImprove/MyServicesImprove.vue";
import MyServiceReInstall from "../MyServiceReInstall/MyServiceReInstall.vue";
import MyServiceDelete from "../MyServiceDelete/MyServiceDelete.vue";
import {computed} from "vue";
import MyServiceChangePass from "../MyServiceChangePass/MyServiceChangePass.vue";
import {defineEmits} from "vue";

const props = defineProps({
    isPopupImprove : {
        type: Boolean,
        required: true,
    },
    isPopupReinstall : {
        type: Boolean,
        required: true,
    },
    isPopupDelete : {
        type: Boolean,
        required: true,
    },
    isPopupChangePass : {
        type: Boolean,
        required: true
    },
})

const emit = defineEmits({
    'closePopup': () => true
})

const close = () => {
    emit('closePopup');

}

const closeAllPopup = (event) => {
    emit('closePopup');
}



const popupHeaderText = computed(() => {
    if (props.isPopupImprove) {
        return 'Улучшение';
    } else if (props.isPopupReinstall) {
        return 'Переустановка';
    } else if (props.isPopupDelete) {
        return 'Удаление';
    } else if (props.isPopupChangePass) {
        return 'Смена пароля';
    } else {
        return 'Информация';
    }
});
</script>

<style lang="scss" scoped>
.MyServicesModal {
    display: flex;
    z-index: 999;

    &__overlay {
        width: 100%;
        height: 100vh;
        //background: rgba(12, 14, 17, 0.65);
        backdrop-filter: blur(7.5px);
        position: fixed;
        left: 0;
        top: 0;
        z-index: 98;
    }

    &__popup {
        width: 500px;
        display: flex;
        flex-direction: column;
        padding: 24px;
        left: 0;
        top: 0;
        bottom: 0;
        right: 0;
        margin: auto;
        z-index: 99;
        position: fixed;
        height: max-content;
        background: $background_dark;
        border-radius: 24px;
        overflow: hidden;

        @media screen and (max-width: 767px){
            width: 320px;
            padding: 16px;
            overflow-y: auto;
        }

        &-head {
            display: flex;
            align-items: center;

            &-text {
                color: $white;
                font-weight: 500;
                font-size: 32px;
                line-height: 120%;

                @media screen and (max-width: 767px){
                    font-size: 24px;
                }
            }

            &-wrapper {
                width: 24px;
                height: 24px;
                margin-left: auto;
                background: url("../../../../assets/images/auth/close-icon.svg") no-repeat center;
                background-size: 24px 24px;
                transition: all 250ms ease-in-out;

                &:hover {
                    cursor: pointer;
                    opacity: 0.5;
                }
            }
        }

        &-body {
            margin-top: 16px;
            max-height: 0;
            overflow: hidden;
            opacity: 0;
            transition: all 500ms ease-in-out;

            @media screen and (max-width: 768px){
                overflow: unset;
            }

            &.active {
                max-height: 999px;
                opacity: 1;
            }
        }
    }
}

</style>