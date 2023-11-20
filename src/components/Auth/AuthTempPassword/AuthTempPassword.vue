<template>
    <div class="AuthTempPassword">
        <div class="AuthTempPassword__head">
            {{ $t('auth.letterSendText') }}
        </div>
        <div class="AuthTempPassword__body">
            <div class="AuthTempPassword__body-item">
                <input class="AuthTempPassword__body-item-input"
                       :class="{'error' : errors.tempCode}"
                       v-bind="tempCode"
                       type="text"
                       placeholder="0000"
                >
                <span>{{ errors.tempCode }}</span>
            </div>
        </div>
        <PrimaryButton
            :button-text="$t('auth.continue')"
            :disabled="false"
        />
        <div class="AuthTempPassword__text disabled">
            Отправить ссылку повторно можно через 54 сек.
        </div>
    </div>
</template>

<script setup>
import PrimaryButton from "../../Others/PrimaryButton.vue";
import { useForm } from "vee-validate";

const { errors, defineInputBinds } = useForm({
    validationSchema: {
        tempCode: (val) => (val && val.length <= 4 ? 'Некорректный код' : true),
    },
});

const tempCode = defineInputBinds('tempCode');
</script>

<style lang="scss" scoped>

.AuthTempPassword {
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
    &__text {
        margin-top: 16px;
        color: $white;
        font-size: 14px;
        font-weight: 400;
        line-height: 140%;
        text-align: center;
        &.disabled {
            color: $gray;
        }
    }
    :deep(.PrimaryButton) {
        margin-top: 31px;
    }
}

</style>