<template>
    <div class="AuthRegister">
        <div class="AuthRegister__head">
            {{ $t('auth.authRegisterText') }}
        </div>
        <div class="AuthRegister__body">
            <div class="AuthRegister__body-item">
                <input class="AuthRegister__body-item-input"
                       :class="{'error' : errors.email}"
                       v-bind="email"
                       type="text"
                       :placeholder="$t('auth.email')"
                >
                <span>{{ errors.email }}</span>
            </div>
        </div>
        <PrimaryButton
            :button-text="$t('auth.sendLink')"
            :disabled="email.length < 3"
        />
        <div class="AuthRegister__bottom">
            <div class="AuthRegister__bottom-text">
                {{ $t('auth.authHaveAcc') }}
                <a class="AuthRegister__bottom-link" href="#">{{ $t('auth.authEnter') }}</a>
            </div>
            <div class="AuthRegister__bottom-policy">
                {{ $t('auth.authPolicy') }}
                <a href="#">{{ $t('auth.policy') }}</a>
                {{ $t('auth.authAnd') }}
                <a href="#">{{ $t('auth.terms') }}</a>
            </div>
        </div>
    </div>
</template>

<script setup>

import PrimaryButton from "../../Others/PrimaryButton.vue";
import { useForm } from 'vee-validate';

function isEmail(value) {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
}

const { errors, defineInputBinds } = useForm({
    validationSchema: {
        email: val => (isEmail(val) ? true : 'Некорректная электронная почта'),
    },
});

const email = defineInputBinds('email');


</script>

<style lang="scss" scoped>
.AuthRegister {
    display: flex;
    flex-direction: column;
    width: 100%;

    &__head {
        font-weight: 400;
        font-size: 16px;
        color: $gray;
        line-height: 140%;
    }

    &__body {
        margin-top: 24px;
        display: flex;

        &-item {
            width: 100%;

            &-input {
                font-weight: 400;
                font-size: 16px;
                color: #FFFFFF;
                width: 100%;
                margin: 0 auto;
                padding: 14px;
                display: flex;
                align-items: center;
                justify-content: space-around;
                background: $background_dark_light;
                border-radius: 8px;
                transition: all 250ms ease-in-out;
                border: 2px solid transparent;

                &::placeholder {
                    color: $gray;
                    font-weight: 400;
                    font-size: 16px;
                    transition: all 250ms ease-in-out;
                }

                &:hover {
                    background: #343434;
                    border: 2px solid rgba(250, 204, 97, 0.75);;
                }

                &:focus {
                    outline: none;
                    border: 2px solid rgba(250, 204, 97, 0.75);;

                    &::placeholder {
                        color: transparent;
                    }
                }

                &.error {
                    border: 2px solid rgba(235, 111, 111, 0.75);;
                }
            }

            & span {
                margin-top: 6px;
                color: $redError;
                font-size: 14px;
                font-weight: 400;
                line-height: 24px;
                display: block;
            }
        }
    }
    &__bottom {
        margin-top: 16px;
        &-text {
            color: $gray;
            font-size: 16px;
            font-weight: 400;
            line-height: 140%;
            text-align: center;
            & a {
                color: $white;
                text-decoration: none;
            }
        }
        &-policy {
            margin-top: 24px;
            text-align: center;
            color: $gray;
            font-size: 16px;
            font-weight: 400;
            line-height: 140%;
            & a {
                color: $white;
                text-decoration: none;
            }
        }
    }

    :deep(.PrimaryButton) {
        margin-top: 31px;
    }
}

</style>