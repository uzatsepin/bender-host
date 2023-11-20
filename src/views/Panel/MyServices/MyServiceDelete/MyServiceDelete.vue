<template>
    <div class="MyServiceDelete">
        <div class="MyServiceDelete__text">
            Примите во внимание, что при удалении услуги, средства за неиспользованный период сгорят.
        </div>
        <div class="MyServiceDelete__items">
            <div class="MyServiceDelete__input-name">
                <input
                    class="MyServiceDelete__input-name-input"
                    id="passwordInDelete1"
                    v-model="passToDelete1"
                    type="text"
                    :placeholder="passToDelete1"
                    readonly
                />
                <span class="MyServiceDelete__input-name-copy" @click="handleCopyPass">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                      <path
                          d="M19.9439 16.8353V5.4C19.9439 4.07452 18.8695 3 17.5439 3H7.09688M5.54297 6.86484H14.5782C15.4067 6.86484 16.0782 7.53642 16.0782 8.36484V19.3766C16.0782 20.2051 15.4067 20.8766 14.5782 20.8766H5.54297C4.71454 20.8766 4.04297 20.2051 4.04297 19.3766V8.36484C4.04297 7.53642 4.71454 6.86484 5.54297 6.86484Z"
                          stroke="#858892" stroke-width="1.5" stroke-linecap="round"/>
                    </svg>
                </span>
            </div>
            <div class="MyServiceDelete__input-pass">
                <div class="MyServiceDelete__input-pass-text">
                    Введите фразу выше для подтверждения удаления
                </div>
                <div class="MyServiceDelete__input-pass-item">
                    <input
                        class="MyServiceDelete__input-name-input pass"
                        id="passwordInDelete2"
                        v-model="passToDelete2"
                        type="password"
                        :placeholder="$t('auth.password')"
                    />
                </div>
                <span v-if="isPasswordError">Пароли не совпадают</span>
            </div>
        </div>
        <div class="MyServiceDelete__btns">
            <SecondaryButton button-text="Отмена" @click="$emit('close')"/>
            <PrimaryButton button-text="Удалить" @click="handleDelete" />
        </div>
    </div>
</template>

<script setup>

import { ref} from "vue";
import PrimaryButton from "../../../../components/Others/PrimaryButton.vue";
import SecondaryButton from "../../../../components/Others/SecondaryButton.vue";


const passToDelete1 = ref('oceanic-weight')
const passToDelete2 = ref('');
const isPasswordError = ref(false)

const handleCopyPass = () => {
    navigator.clipboard.writeText(passToDelete1.value)
}

defineEmits(['close'])

const handleDelete = () => {
    isPasswordError.value = passToDelete1.value !== passToDelete2.value;
}

</script>

<style lang="scss" scoped>
.MyServiceDelete {
    &__text {
        color: $gray;
        font-size: 16px;
        font-weight: 400;
        line-height: 140%;
    }

    &__items {

    }

    &__input-name {
        position: relative;
        margin-top: 16px;

        &-input {
            margin-top: 8px;
            font-weight: 400;
            font-size: 16px;
            color: $gray;
            width: 100%;
            padding: 14px;
            display: flex;
            align-items: center;
            justify-content: space-around;
            background: $background_dark_light;
            border-radius: 8px;
            transition: all 250ms ease-in-out;
            border: 2px solid transparent;

            &.pass {
                color: $white;
            }

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
        &-copy {
            position: absolute;
            top: 50%;
            transform: translateY(-50%);
            right: 14px;
            & path {
                transition: all 250ms ease-in-out;
            }
            &:hover {
                cursor: pointer;
                path {
                    stroke: $buttons_normal;
                }
            }
        }
    }

    &__input-pass {
        margin-top: 16px;
        &-text {
            color: $gray;
            font-size: 14px;
            font-weight: 400;
            line-height: 24px;
        }
        & span {
            margin-top: 8px;
            display: block;
            color: $red;
            font-size: 14px;
            font-weight: 400;
            line-height: 24px;
        }
    }
    &__btns {
        display: flex;
        justify-content: space-between;
        width: 100%;
        gap: 8px;
        margin-top: 32px;

        &:deep(.PrimaryButton) {
            width: 100%;
        }

    }
}

</style>