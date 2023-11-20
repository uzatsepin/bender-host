<template>
    <div class="AuthLogin">
        <div class="AuthLogin__body">
            <div class="AuthLogin__body-item">
                <input class="AuthLogin__body-item-input"
                       :class="{'error' : errors.email}"
                       v-bind="email"
                       type="text"
                       :placeholder="$t('auth.email')"
                >
                <span>{{ errors.email }}</span>
                <input class="AuthLogin__body-item-input last"
                       :class="{'error' : errors.password}"
                       v-bind="password"
                       type="password"
                       :placeholder="$t('auth.password')"
                >
                <span>{{ errors.password }}</span>
            </div>
        </div>
        <router-link to="/panel/myservices">
            <PrimaryButton
                button-text="Отправить ссылку"
                :disabled="email.length < 3"
            />
        </router-link>
        <div class="AuthLogin__bottom">
            {{ $t('auth.noAcc') }}
            <a href="#">{{ $t('auth.register') }}</a>
        </div>
    </div>
</template>

<script setup>
import PrimaryButton from "../../Others/PrimaryButton.vue";

import {useForm} from "vee-validate";

function isEmail(value) {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
}

const { errors, defineInputBinds } = useForm({
    validationSchema: {
        email: (val) => (isEmail(val) ? true : 'Некорректная электронная почта'),
        password: (val) => (val.length >= 6 ? true : 'Пароль должен содержать как минимум 6 символов'),
    },
});

const email = defineInputBinds('email');
const password = defineInputBinds('password');
</script>

<style lang="scss" scoped>
.AuthLogin {
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
                &.last {
                    margin-top: 16px;
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
        color: $gray;
        font-size: 16px;
        font-weight: 400;
        line-height: 140%;
        text-align: center;
        & a {
            color: $white;
        }
    }

    & a {
        width: 100%;
        display: block;
        text-decoration: none;
        :deep(.PrimaryButton) {
            margin-top: 31px;
            width: 100%;
        }
    }
}
</style>