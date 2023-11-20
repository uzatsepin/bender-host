<template>
    <div class="Auth">
        <div class="Auth__overlay"></div>
        <div class="Auth__popup">
            <div class="Auth__popup-head">
                <div class="Auth__popup-head-text">
                    Регистрация
                </div>
                <div class="Auth__popup-head-wrapper" @click="emit('handleAuth')"></div>
            </div>
            <div class="Auth__popup-body active">
<!--                <AuthRegister />-->
                <AuthLogin />
<!--                <AuthRecovery />-->
<!--                <AuthTempPassword />-->
<!--                <AuthRecoveryComplete />-->
            </div>
        </div>
    </div>
</template>

<script setup>
import AuthRegister from "./AuthRegister/AuthRegister.vue";
import AuthLogin from "./AuthLogin/AuthLogin.vue";
import AuthRecovery from "./AuthRecovery/AuthRecovery.vue";
import AuthRecoveryComplete from "./AuthRecoveryComplete/AuthRecoveryComplete.vue";
import AuthTempPassword from "./AuthTempPassword/AuthTempPassword.vue";

const emit = defineEmits(['handleAuth'])
</script>

<style lang="scss" scoped>
.Auth {
    display: flex;
    z-index: 999;

    &__overlay {
        width: 100%;
        height: 100vh;
        background: rgba(12, 14, 17, 0.65);
        backdrop-filter: blur(7.5px);
        position: fixed;
        left: 0;
        top: 0;
        z-index: 998;
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
        z-index: 999;
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
                background: url("../../assets/images/auth/close-icon.svg") no-repeat center;
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