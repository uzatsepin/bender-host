<template>
    <div class="MyServiceReinstall">
        <div class="MyServiceReinstall__container">
            <div class="MyServiceReinstall__item" v-for="(item, index) in os" :key="index">
                <div class="MyServiceReinstall__item-name" :class="item.name.toLowerCase()">
                    {{ item.name }}
                </div>
                <div class="MyServiceReinstall__os">
                    <select name="12" id="os" class="MyServiceReinstall__os-select">
                        <option
                            v-for="(osItem, index) in item.version"
                            :key="index"
                            :value="osItem"
                            class="MyServiceReinstall__os-select-item"
                        >
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                                <path d="M6 10L12 14L18 10" fill="white"/>
                            </svg>
                            {{ osItem.name }}
                        </option>
                    </select>
                </div>
            </div>
        </div>
        <div class="MyServiceReinstall__password">
            <div class="MyServiceReinstall__password-input">
                <label for="passwordInput" class="MyServiceReinstall__password-input-label">Новый пароль</label>
                <input
                    class="MyServiceReinstall__password-input-item"
                    :class="{'error' : errors.password}"
                    v-model="generatedPassword"
                    type="password"
                    :placeholder="$t('auth.password')"
                    :id="inputId"
                >

                <span class="MyServiceReinstall__password-input-btn" @click="handleCopyPass">
                    <ActionMessage v-if="isShowedActionMessage" />
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                      <path
                          d="M19.9439 16.8353V5.4C19.9439 4.07452 18.8695 3 17.5439 3H7.09688M5.54297 6.86484H14.5782C15.4067 6.86484 16.0782 7.53642 16.0782 8.36484V19.3766C16.0782 20.2051 15.4067 20.8766 14.5782 20.8766H5.54297C4.71454 20.8766 4.04297 20.2051 4.04297 19.3766V8.36484C4.04297 7.53642 4.71454 6.86484 5.54297 6.86484Z"
                          stroke="#858892" stroke-width="1.5" stroke-linecap="round"/>
                    </svg>
                </span>
                <span class="MyServiceReinstall__password-input-error">{{ errors.password }}</span>
                <div class="MyServiceReinstall__password-generate" @click="handleGeneratePassword">Генерировать пароль</div>
            </div>
        </div>
        <div class="MyServiceReinstall__btn">
            <PrimaryButton button-text="Переустановить" />
        </div>

    </div>
</template>

<script setup>

import {computed, ref} from "vue";

const os = [
    {
        name: "Ubuntu",
        version: [
            {name: "18.04"},
            {name: "20.04"},
            {name: "22.04"},
        ],
    },
    {
        name: "Debian",
        version: [
            {name: "9"},
            {name: "10"},
            {name: "11"},
        ],
    },
    {
        name: "CentOS",
        version: [
            {name: "7"},
            {name: "stream 8"},
            {name: "stream 9"},
        ],
    },
    {
        name: "Alma",
        version: [
            {name: "8"},
            {name: "9"},
        ],
    },
    {
        name: "Windows Server",
        version: [
            {name: "2022"},
            {name: "2019"},
            {name: "2016"},
            {name: "2012 R2"},
        ],
    },
    {
        name: "Windows",
        version: [
            {name: "10"},
        ],
    },
    {
        name: "Freebsd",
        version: [
            {name: "12"},
            {name: "13"},
        ],
    },
    {
        name: "Astra",
        version: [
            {name: "CE"},
        ],
    },
    {
        name: "Rocky",
        version: [
            {name: "8"},
        ],
    }
]

import {useForm} from "vee-validate";
import ActionMessage from "../../../../components/Others/ActionMessage.vue";
import PrimaryButton from "../../../../components/Others/PrimaryButton.vue";

const generatedPassword = ref('');
const isShowedActionMessage = ref(false);
const inputId = `passwordInput-${Math.random().toString(36).substr(2, 9)}`;

const handleGeneratePassword = () => {
    const length = 8;
    const charset = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*()_-+=";

    let password = "";
    for (let i = 0; i < length; i++) {
        const randomIndex = Math.floor(Math.random() * charset.length);
        password += charset[randomIndex];
    }

    generatedPassword.value = password;
};

const handleCopyPass = () => {
    if (generatedPassword.value) {
        navigator.clipboard.writeText(generatedPassword.value);
    }
};


const { errors, defineInputBinds } = useForm({
    validationSchema: {
        password: (val) => (val && val.length >= 8 ? true : 'Пароль должен содержать как минимум 8 символов'),
    },
});

const passwordModel = defineInputBinds("password").value;

</script>

<style lang="scss" scoped>
.MyServiceReinstall {
    &__container {
        display: grid;
        grid-template-columns: repeat(2, 1fr);
        gap: 16px;
    }

    &__item {
        background: $background_black;
        border-radius: 8px;

        &-name {
            padding: 20px 12px;
            color: $white;
            font-size: 18px;
            font-weight: 500;
            line-height: 120%;
            display: flex;
            gap: 14px;
            align-items: center;

            &:before {
                content: "";
                display: flex;
                width: 40px;
                height: 40px;
                background-size: contain;
                background-repeat: no-repeat;
                background-position: center;
            }

            &.ubuntu:before {
                background-image: url("../../../../assets/images/MyServices/ubuntu-icon.svg")
            }

            &.debian:before {
                background-image: url("../../../../assets/images/MyServices/debian-icon.svg")
            }

            &.centos:before {
                background-image: url("../../../../assets/images/MyServices/centos-icon.svg")
            }

            &.alma:before {
                background-image: url("../../../../assets/images/MyServices/alma-icon.svg")
            }

            &.alma:before {
                background-image: url("../../../../assets/images/MyServices/alma-icon.svg")
            }

            &.windows:before {
                background-image: url("../../../../assets/images/MyServices/windows-icon.svg")
            }

            &.freebsd:before {
                background-image: url("../../../../assets/images/MyServices/freebsd-icon.svg")
            }

            &.astra:before {
                background-image: url("../../../../assets/images/MyServices/astra-icon.svg")
            }

            &.rocky:before {
                background-image: url("../../../../assets/images/MyServices/rocky-icon.svg")
            }
        }
    }

    &__os {
        padding: 8px 12px;
        border-top: 1px solid $stroke_one;
        &-select {
            background-color: transparent;
            outline: none;
            border: none;
            color: $white;
            font-size: 18px;
            font-weight: 400;
            line-height: 24px;
            appearance: none;
            background-image: url("../../../../assets/images/MyServices/arrow-select.svg");
            background-position: 100%;
            background-repeat: no-repeat;
            width: 100%;
        }
    }

    &__password {
        &-head {
            padding: 20px 12px;
            color: $white;
            font-size: 18px;
            font-weight: 500;
            line-height: 120%;
        }

        &-input {
            margin-top: 16px;
            position: relative;

            &-label {
                color: $gray;
                font-size: 16px;
                font-weight: 400;
                line-height: 24px;
                position: relative;

            }

            &-item {
                margin-top: 8px;
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

            }
            &-btn {
                display: block;
                position: absolute;
                top: 45px;
                right: 14px;
                &:deep(.ActionMessage) {
                    top: 30px;
                    right: -11px;
                }

                & svg {
                    path {
                        transition: all 250ms ease-in-out;
                    }
                }
                &:hover {
                    cursor: pointer;
                    svg {
                        path {
                            stroke: $buttons_normal;
                        }
                    }
                }
            }

            &-error {
                margin-top: 6px;
                color: $redError;
                font-size: 14px;
                font-weight: 400;
                line-height: 24px;
                display: block;
            }
        }
        &-generate {
            margin-top: 8px;
            color: $white;
            font-size: 14px;
            font-weight: 400;
            line-height: 24px;
            transition: all 250ms ease-in-out;

            &:hover {
                cursor: pointer;
                color: $buttons_normal;
            }

            &:active {
                color: $buttons_click;
            }
        }
    }

    &__btn {
        :deep(.PrimaryButton) {
            width: 100%;
            margin-top: 32px;
        }
    }
}

</style>