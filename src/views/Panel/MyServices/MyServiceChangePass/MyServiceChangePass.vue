<template>
    <div class="MyServiceChangePass">
        <div class="MyServiceChangePass__container">
            <div class="MyServiceChangePass__input">
                <input
                    class="MyServiceChangePass__input-item"
                    v-model="newPassword"
                    type="text"
                    :placeholder="$t('auth.password')"
                    id="newPassword"
                >
                <span class="MyServiceChangePass__input-item-btn" @click="handleCopyPass">
<!--                    <ActionMessage v-if="isShowedActionMessage"/>-->
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                      <path
                          d="M19.9439 16.8353V5.4C19.9439 4.07452 18.8695 3 17.5439 3H7.09688M5.54297 6.86484H14.5782C15.4067 6.86484 16.0782 7.53642 16.0782 8.36484V19.3766C16.0782 20.2051 15.4067 20.8766 14.5782 20.8766H5.54297C4.71454 20.8766 4.04297 20.2051 4.04297 19.3766V8.36484C4.04297 7.53642 4.71454 6.86484 5.54297 6.86484Z"
                          stroke="#858892" stroke-width="1.5" stroke-linecap="round"/>
                    </svg>
                </span>

            </div>
            <!--            <span class="MyServiceReinstall__password-input-error">{{ errors.password }}</span>-->
            <div class="MyServiceChangePass__input-item-generate" @click="handleGeneratePassword">Генерировать пароль</div>
            <div class="MyServiceChangePass__btn">
                <PrimaryButton button-text="Подтвердить" />
            </div>
        </div>

    </div>

</template>

<script setup>

import ActionMessage from "../../../../components/Others/ActionMessage.vue";
import {ref} from "vue";
import PrimaryButton from "../../../../components/Others/PrimaryButton.vue";

const newPassword = ref('')

const handleGeneratePassword = () => {
    const length = 8;
    const charset = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*()_-+=";

    let password = "";
    for (let i = 0; i < length; i++) {
        const randomIndex = Math.floor(Math.random() * charset.length);
        password += charset[randomIndex];
    }

    newPassword.value = password;
};

const handleCopyPass = () => {
    if (newPassword.value) {
        navigator.clipboard.writeText(newPassword.value);
    }
};
</script>

<style lang="scss" scoped>

.MyServiceChangePass {
    &__input {
        position: relative;
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
           &-btn {
               display: block;
               position: absolute;
               top: 50%;
               transform: translateY(-50%);
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
    }
    &__btn {
        margin-top: 36px;
        &:deep(.PrimaryButton) {
            width: 100%;
        }
    }
}

</style>