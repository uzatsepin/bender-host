<template>
    <div class="Security">
        <h2 class="Security__title">
            Связанные аккаунты
        </h2>
        <div class="Security__accounts">
            <div class="Security__accounts-item">
                <div class="Security__accounts-item-name">Telegram</div>
                <div class="Security__accounts-item-status">Не привязан</div>
                <div class="Security__accounts-item-btn" v-if="!isMobile">Подключить</div>
            </div>
            <PrimaryButton button-text="Подключить" v-if="isMobile" />
        </div>
        <h2 class="Security__title">Смена пароля</h2>
        <div class="Security__password">
            <input class="Security__password-input"
                   :class="{'error' : errors.passwordOne}"
                   v-model="passwordOneValue"
                   @input="passwordOneBlur"
                   type="password"
                   placeholder="Текущий пароль"
            >
            <span>{{ errors.passwordOne }}</span>

            <input class="Security__password-input"
                   :class="{'error' : errors.passwordTwo}"
                   v-model="passwordTwoValue"
                   @input="passwordTwoBlur"
                   type="password"
                   placeholder="Новый пароль"
            >
            <span>{{ errors.passwordTwo }}</span>
            <PrimaryButton
                button-text="Изменить пароль"
                :disabled="!passwordOneValue || !passwordTwoValue || errors.passwordOne || errors.passwordTwo"
            />
        </div>
        <div class="Security__twofactor">
            <h2 class="Security__title">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="25" viewBox="0 0 24 25" fill="none">
                    <path opacity="0.5" d="M21 12.4914V10.9167C21 7.71907 21 6.12028 20.6225 5.58241C20.245 5.04454 18.7417 4.52996 15.7351 3.50079L15.1623 3.30472C13.595 2.76824 12.8114 2.5 12 2.5V22.5C13.0193 22.5 13.38 22.3424 14.1014 22.0273C16.761 20.8655 21 18.1294 21 12.4914Z" fill="#858892"/>
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M3.37752 5.58241C3 6.12028 3 7.71907 3 10.9167V12.4914C3 18.1294 7.23896 20.8655 9.89856 22.0273C10.62 22.3424 10.9807 22.5 12 22.5V2.5C11.1886 2.5 10.405 2.76824 8.83772 3.30472L8.26491 3.50079C5.25832 4.52996 3.75503 5.04454 3.37752 5.58241Z" fill="#858892"/>
                </svg>
                Двухфакторная аутентификация
            </h2>
            <p class="Security__twofactor-descr">
                Двухфакторная аутентификация улучшает безопасность аккаунта через дополнительный код для подтверждения личности, что защищает от несанкционированного доступа при утечке пароля.
            </p>
            <PrimaryButton button-text="Подключить" />
            <div class="Security__twofactor-checkbox">
                <label class="Security__twofactor-checkbox-container">
                    <input type="checkbox"
                           :checked="checkBoxChecked"
                           @input="inputHandle"
                    >
                    <span class="Security__twofactor-checkbox-container-checkmark"></span>
                </label>
                <div class="Security__twofactor-checkbox-text">
                    Подтверждение входа через телеграм
                </div>
            </div>
            <p class="Security__twofactor-descr">
                Для активации необходимо привязать телеграм-аккаунт
            </p>
        </div>
        <div class="Security__session">
            <h2 class="Security__title">Сессии</h2>
            <div class="Security__session-container" v-if="!isMobile">
                <div class="Security__session-item">
                    <div class="Security__session-item-device active">
                        <p class="Security__session-item-device-name">Windows, Edge</p>
                        <p class="Security__session-item-device-value">5 мин. назад</p>
                    </div>
                    <div class="Security__session-item-ip">
                        <p class="Security__session-item-device-name">24.13.112.40</p>
                        <p class="Security__session-item-device-value">Москва, Россия</p>
                    </div>
                    <div class="Security__session-item-status">
                        <p class="Security__session-item-status-btn">Текущая</p>
                    </div>
                </div>
                <div class="Security__session-item">
                    <div class="Security__session-item-device">
                        <p class="Security__session-item-device-name">Windows, Edge</p>
                        <p class="Security__session-item-device-value">2 дня назад</p>
                    </div>
                    <div class="Security__session-item-ip">
                        <p class="Security__session-item-device-name">24.13.112.40</p>
                        <p class="Security__session-item-device-value">Москва, Россия</p>
                    </div>
                    <div class="Security__session-item-status">
                        <p class="Security__session-item-status-btn active">Завершить</p>
                    </div>
                </div>
            </div>
            <div class="Security__session-container-mob" v-if="isMobile">
                <div class="Security__session-container-mob-item">
                    <div class="Security__session-container-mob-item-device">
                        <p class="Security__session-container-mob-item-device-name">Windows, Edge</p>
                        <p class="Security__session-container-mob-item-device-value">5 мин. назад</p>
                    </div>
                    <div class="Security__session-container-mob-item-ip">
                        <p class="Security__session-container-mob-item-ip-name">24.13.112.40</p>
                        <p class="Security__session-container-mob-item-ip-value">Москва, Россия</p>
                    </div>
                    <div class="Security__session-container-mob-item-status">
                        <p class="Security__session-container-mob-item-status-btn">Текущая</p>
                    </div>
                </div>

                <div class="Security__session-container-mob-item">
                    <div class="Security__session-container-mob-item-device">
                        <p class="Security__session-container-mob-item-device-name">Windows, Edge</p>
                        <p class="Security__session-container-mob-item-device-value">2 дня назад</p>
                    </div>
                    <div class="Security__session-container-mob-item-ip">
                        <p class="Security__session-container-mob-item-ip-name">24.13.112.40</p>
                        <p class="Security__session-container-mob-item-ip-value">Москва, Россия</p>
                    </div>
                    <div class="Security__session-container-mob-item-status">
                        <p class="Security__session-container-mob-item-status-btn active">Завершить</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
import { useForm, useField } from "vee-validate";
import PrimaryButton from "../../../../components/Others/PrimaryButton.vue";
import {computed, ref} from "vue";

const { errors, values, validate } = useForm({
    validationSchema: {
        passwordOne: (val) =>
            val && val.length <= 8
                ? "Длина пароля должна быть от 8 до 32 символов"
                : true,
        passwordTwo: (val) =>
            val && val !== values.passwordOne
                ? "Пароли не совпадают"
                : true,
    },
});

const {
    value: passwordOneValue,
    errorMessage: passwordOneError,
    handleBlur: passwordOneBlur,
} = useField("passwordOne", validate);

const {
    value: passwordTwoValue,
    errorMessage: passwordTwoError,
    handleBlur: passwordTwoBlur,
} = useField("passwordTwo", validate);

const checkBoxChecked = ref(false);

const isMobile = computed(() => {
    return window.innerWidth < 650;
});

</script>

<style lang="scss" scoped>
.Security {
    &__title {
        color: $white;
        font-size: 24px;
        font-weight: 500;
        line-height: 120%;
        &:not(:first-child) {
            margin-top: 40px;
        }
    }
    &__accounts {
        margin-top: 20px;

        &:deep(.PrimaryButton) {
            padding: 8px 16px;
            margin-top: 24px;
            width: 100%;
        }
        &-item {
            padding: 16px;
            display: grid;
            grid-template-columns: 1fr 1fr 142px;
            max-width: 630px;
            background: $background_dark;
            border-radius: 8px;
            align-items: center;

            @media screen and (max-width: 650px) {
                grid-template-columns: 1fr 1fr;
                max-width: 100%;
            }

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
                color: $buttons_normal;
                font-size: 18px;
                font-weight: 400;
                line-height: 24px;
                transition: all 250ms ease-in-out;
                justify-self: flex-end;

                &:hover {
                    cursor: pointer;
                    color: $buttons_hover;
                }
                &:active {
                    color: $buttons_click;
                }
            }
        }
    }
    &__password {
        margin-top: 20px;
        &-input {
            font-weight: 400;
            font-size: 16px;
            color: #FFFFFF;
            width: 100%;
            max-width: 384px;
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
        &:deep(.PrimaryButton) {
            margin-top: 24px;
            padding: 8px 16px;
        }
    }
    &__twofactor {
        margin-top: 40px;
        max-width: 630px;
        .Security__title {
            display: flex;
            align-items: center;
            gap: 6px;
        }
        &-descr {
            margin-top: 8px;
            color: $gray;
            font-size: 14px;
            font-weight: 400;
            line-height: 140%;
        }
        &:deep(.PrimaryButton) {
            margin-top: 24px;
            padding: 8px 16px;
        }
        &-checkbox {
            display: flex;
            align-items: center;
            margin-top: 24px;

            &.full:hover {
                cursor: pointer;
            }

            &.full:hover input ~ &__container-checkmark {
                border: 2px solid $buttons_normal;
            }

            &.full &{
                &__container {
                    pointer-events: none;
                }
            }

            &-container {
                display: block;
                position: relative;
                padding-left: 20px;
                margin-bottom: 20px;
                cursor: pointer;
                font-size: 22px;
                -webkit-user-select: none;
                -moz-user-select: none;
                -ms-user-select: none;
                user-select: none;

                input {
                    position: absolute;
                    opacity: 0;
                    cursor: pointer;
                    height: 0;
                    width: 0;
                }

                &-checkmark {
                    position: absolute;
                    top: 0;
                    left: 2px;
                    width: 20px;
                    height: 20px;
                    background: $background_dark_light;
                    border-radius: 4px;
                    box-sizing: border-box;
                    transition: all 250ms ease-in-out;
                }

                &:hover input ~ &-checkmark {
                    border: 2px solid $buttons_normal;
                }

                & input:checked ~ &-checkmark {
                    background: $purple;
                    border: 2px solid $purple;
                }

                &-checkmark:after {
                    content: "";
                    position: absolute;
                    display: none;
                }

                & input:checked ~ &-checkmark:after {
                    display: block;
                }

                & &-checkmark:after {
                    left: 3px;
                    top: 3px;
                    width: 10px;
                    height: 7px;
                    border: solid white;
                    border-width: 0 0 2px 2px;
                    -webkit-transform: rotate(-45deg);
                    -ms-transform: rotate(-45deg);
                    transform: rotate(-45deg);
                }
            }

            &-text {
                font-weight: 400;
                line-height: 24px;
                font-size: 16px;
                color: $white;
                margin-left: 12px;
        }
        }
    }
    &__session {
        margin-top: 40px;
        max-width: 848px;
        &-container {
            margin-top: 20px;
        }
        &-item {
            display: grid;
            grid-template-columns: repeat(3, 1fr);
            padding: 16px;
            border-bottom: 1px solid $stroke_one;
            align-items: center;
            &-device, &-ip, &-status {
                display: flex;
                flex-direction: column;
                &-name {
                    color: $white;
                    font-size: 18px;
                    font-weight: 400;
                    line-height: 24px;
                }
                &-value {
                    color: $gray;
                    font-size: 14px;
                    font-weight: 400;
                    line-height: 24px;
                }
            }
            &-device {
                position: relative;
                margin-left: 22px;
                &:before {
                    content: "";
                    position: absolute;
                    top: 50%;
                    transform: translateX(-50%);
                    left: -17px;
                    width: 10px;
                    height: 10px;
                    border-radius: 50%;
                    background: $gray;
                }
                &.active:before {
                    background: $green;
                }
            }
            &-status {
                &-btn {
                    color: $gray;
                    font-size: 18px;
                    font-weight: 400;
                    line-height: 24px;
                    &.active {
                        color: $buttons_normal;
                        font-size: 18px;
                        font-weight: 400;
                        line-height: 24px;
                        transition: all 250ms ease-in-out;
                        &:hover {
                            cursor: pointer;
                            color: $buttons_hover
                        }
                        &:active {
                            color: $buttons_click;
                        }
                    }
                }
            }
        }

        &-container-mob {
            margin-top: 20px;
            &-item {
                border: 1px solid $stroke_one;
                border-radius: 8px;
                margin-top: 16px;
                &:first-child {
                    margin-top: 0;
                }
                &-device, &-ip, &-status {
                    display: flex;
                    flex-direction: column;
                    padding: 16px;

                    &:not(:first-child) {
                        border-top: 1px solid $stroke_one;
                    }
                    &-name {
                        color: $white;
                        font-size: 18px;
                        font-weight: 400;
                        line-height: 24px;
                    }
                    &-value {
                        color: $gray;
                        font-size: 14px;
                        font-weight: 400;
                        line-height: 24px;
                    }
                }
                &-status {
                    &-btn {
                        color: $gray;
                        font-size: 18px;
                        font-weight: 400;
                        line-height: 24px;
                        &.active {
                            color: $buttons_normal;
                            font-size: 18px;
                            font-weight: 400;
                            line-height: 24px;
                            transition: all 250ms ease-in-out;
                            &:hover {
                                cursor: pointer;
                                color: $buttons_hover
                            }
                            &:active {
                                color: $buttons_click;
                            }
                        }
                    }
                }
            }
        }
    }
}

</style>