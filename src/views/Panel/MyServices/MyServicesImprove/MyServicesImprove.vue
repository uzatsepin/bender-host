<template>
    <div class="MyServicesImprove">
        <div class="MyServicesImprove__input">
            <div class="MyServicesImprove__input-text">
                Новый тариф
            </div>
            <FormSelect :items="tariffs" label="name" v-model="selectedValue" @select="onSelect"/>
        </div>
        <div class="MyServicesImprove__payments">
            <div class="MyServicesImprove__payments-text">
                Способ оплаты
            </div>
            <div class="MyServicesImprove__payments-methods">
                <div class="MyServicesImprove__payments-item active noImg">Баланс вашего аккаунта</div>
                <div class="MyServicesImprove__payments-item crystal">
                    CrystalPay
                </div>
                <div class="MyServicesImprove__payments-item anypay">
                    AnyPay
                </div>
            </div>
        </div>
        <PrimaryButton button-text="Оплатить" />
    </div>
</template>

<script setup>
import FormSelect from "../../../../components/Others/FormSelect.vue";
import { ref } from "vue";
import PrimaryButton from "../../../../components/Others/PrimaryButton.vue";

const tariffs = [
    { name: 'Des-2', id: '1', price: '2 420 ₽' },
    { name: 'Des-3', id: '2', price: '5 420 ₽' },
    { name: 'Des-4', id: '3', price: '3 400 ₽' },
    { name: 'Des-4', id: '3', price: '3 400 ₽' },
    { name: 'Des-4', id: '3', price: '3 400 ₽' },
    { name: 'Des-4', id: '3', price: '3 400 ₽' },
];

const selectedValue = ref({ name: 'Des-2', id: '1', price: '2 420 ₽' });

const onSelect = (value) => {
    selectedValue.value = value;
};
</script>


<style lang="scss" scoped>
.MyServicesImprove {
    height: -webkit-fill-available;
    &__input {
        &-text {
            color: $gray;
            font-size: 16px;
            font-weight: 400;
            line-height: 24px;
            margin-bottom: 8px;
        }
    }
    &__payments {
        margin-top: 16px;
        &-text {
            color: $gray;
            font-size: 16px;
            font-weight: 400;
            line-height: 24px;
        }
        &-methods {
            display: flex;
            flex-wrap: wrap;
            gap: 8px;
            max-width: 264px;
            margin-top: 8px;
        }
        &-item {
            padding: 8px 14px;
            background: $background_dark_light;
            border-radius: 8px;
            color: $gray;
            font-size: 18px;
            font-weight: 400;
            line-height: 24px;
            max-width: 244px;
            display: flex;
            align-items: center;
            gap: 6px;
            transition: all 250ms ease-in-out;

            @media screen and (max-width: 767px) {
                font-size: 16px;
            }

            &:hover {
                cursor: pointer;
                color: $buttons-normal;
                background: rgba(250, 204, 97, 0.15);
            }

            &:before {
                content: '';
                display: flex;
                width: 16px;
                height: 16px;
                background-repeat: no-repeat;
                background-size: contain;
                background-position: center;

            }

            &.active {
                color: $buttons-normal;
                background: rgba(250, 204, 97, 0.15);
            }
            &.crystal:before {
                background-image: url("../../../../assets/images/MyServices/crystal.png");
            }

            &.anypay:before {
                background-image: url("../../../../assets/images/MyServices/anypay-icon.svg");
            }
            &.noImg:before {
                display: none;
            }
        }
    }
    &:deep(.PrimaryButton) {
        width: 100%;
        margin-top: 32px;
    }
}

</style>