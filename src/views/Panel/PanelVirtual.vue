<template>
    <div class="PanelVirtual">
        <div class="PanelVirtual__title">Ваш новый виртуальный сервер</div>
        <div class="PanelVirtual__input">
            <div class="PanelVirtual__input-title">Название</div>
            <input type="text" class="PanelVirtual__input-value" placeholder="Hostname" v-model="hostname">
        </div>
        <div class="PanelVirtual__types">
            <h3 class="PanelVirtual__types-title">Локация и тариф</h3>
            <p class="PanelVirtual__types-descr">Выберите тип и месторасположение вашего сервера, ниже будут
                представлены тарифы.</p>
            <div class="PanelVirtual__types-items">
                <div class="PanelVirtual__types-item">
                    <div class="PanelVirtual__types-item-name"
                         v-for="type in typesOfServers" :key="type.name"
                         @click="handleSelectType(type)"
                         :class="{'active': selectedType.name === type.name}">{{ type.name }}
                    </div>
                </div>
                <p class="PanelVirtual__types-item-descr" v-if="isTablet">Выберите локацию сервера</p>
                <div class="PanelVirtual__types-item">
                    <div class="PanelVirtual__types-item-name"
                         v-for="country in serverCountries" :key="country.name"
                         @click="handleSelectCountry(country)"
                         :class="{'active': selectedCountry.name === country.name}">
                        <span>{{ country.flag }}</span>
                        {{ country.name }}
                    </div>
                </div>
            </div>
        </div>
        <div class="PanelVirtual__servers">
            <div class="PanelVirtual__servers-item"
                 v-for="server in serverList" :key="server.name"
                 :class="{'active': selectedServer.name === server.name}"
                 @click="handleSelectServer(server)">
                <h4 class="PanelVirtual__servers-item-title">{{ server.name }}</h4>
                <div class="PanelVirtual__servers-item-benefits">
                    <p class="PanelVirtual__servers-item-benefits-item" v-for="benefit in server.benefits"
                       :key="benefit">{{ benefit }}</p>
                </div>
            </div>
        </div>
        <div class="PanelVirtual__tariff" v-if="!isMobile">
            <TariffItem v-for="tariff in tariffsList" :key="tariff.name" :tariff="tariff"
                        @click="handleSelectTariff(tariff)" :selectedTariff="selectedTariff"/>
        </div>
        <div class="PanelVirtual__tariff-mobile" v-if="isMobile">
            <TariffItemMobile v-for="tariff in tariffsList" :key="tariff.name" :tariff="tariff"
                              @click="handleSelectTariff(tariff)" :selectedTariff="selectedTariff"/>
        </div>
        <div class="PanelVirtual__os">
            <h3 class="PanelVirtual__os-title">Операционная система</h3>
            <div class="PanelVirtual__os-descr">Какую операционную систему и версию вы бы хотели установить на сервер?
            </div>

            <div class="PanelVirtual__os-container">
                <OSItem v-for="os in osList" :key="os.name" :os="os" @click="handleSelectOs(os)"
                        :selectedOs="selectedOs"/>
            </div>
        </div>
        <Periods :periods="periodsForPay" @selectPeriod="handleSelectPeriod"/>

        <div class="PanelVirtual__price">
            <div class="PanelVirtual__price-title">
                Итого
            </div>
            <div class="PanelVirtual__price-container">
                <div class="PanelVirtual__price-count">
                    <div class="PanelVirtual__price-count-input">
                        <p class="PanelVirtual__price-count-input-name">VIEs-1</p>
                        <input type="number" class="PanelVirtual__price-count-input-value"
                               placeholder="1" v-model="quantityServers">
                        <span>шт.</span>
                    </div>
                    <ul class="PanelVirtual__price-benefits">
                        <li class="PanelVirtual__price-benefits-item">
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
                                <path d="M2.5 8.25L6 11.75L13.5 4.25" stroke="#858892" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                            </svg>
                            Защита от DDoS
                        </li>
                        <li class="PanelVirtual__price-benefits-item">
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
                                <path d="M2.5 8.25L6 11.75L13.5 4.25" stroke="#858892" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                            </svg>
                            Интернет до 1 Гбит/c
                        </li>
                        <li class="PanelVirtual__price-benefits-item">
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
                                <path d="M2.5 8.25L6 11.75L13.5 4.25" stroke="#858892" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                            </svg>
                            Возможность продления
                        </li>
                    </ul>
                </div>
                <div class="PanelVirtual__price-total">
                    <div class="PanelVirtual__price-total-price">{{ totalPrice ? totalPrice : '0' }} ₽</div>
                    <PrimaryButton button-text="Оплатить" />
                    <FormCheckbox text="Автопродление"/>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>

import {computed, ref} from "vue";
import TariffItem from "../../components/TariffItem/TariffItem.vue";
import OSItem from "../../components/OSItem/OSItem.vue";
import Periods from "../../components/Periods/Periods.vue";
import PrimaryButton from "../../components/Others/PrimaryButton.vue";
import FormCheckbox from "../../components/Others/FormCheckbox.vue";
import TariffItemMobile from "../../components/TariffItem/TariffItemMobile.vue";

const hostname = ref('')
const selectedCountry = ref({
    name: 'Германия',
    flag: '🇩🇪',
})
const selectedType = ref({name: "Обычные"})
const selectedServer = ref({
    name: 'i9-9900K',
    benefits: [
        'Защита от DDoS',
        'Интернет до 1 Гбит/с',
        'Возможность продления',
    ]
})
const selectedTariff = ref({})
const selectedOs = ref({})
const selectedPeriod = ref({})
const quantityServers = ref(1);


const typesOfServers = [
    {
        name: 'Обычные'
    },
    {
        name: 'Абузоустойчивые'
    }
]

const serverCountries = [
    {
        name: 'Германия',
        flag: '🇩🇪',
    },
    {
        name: 'Швейцария',
        flag: '🇨🇭',
    },
    {
        name: 'Швеция',
        flag: '🇸🇪',
    },
    {
        name: 'Финляндия',
        flag: '🇫🇮',
    },
]

const serverList = [
    {
        name: 'i9-9900K',
        benefits: [
            'Защита от DDoS',
            'Интернет до 1 Гбит/с',
            'Возможность продления',
        ]
    },
    {
        name: 'R9-7950x',
        benefits: [
            'Защита от DDoS',
            'Интернет до 1 Гбит/с',
            'Возможность продления',
        ]
    },
]

const tariffsList = [
    {
        name: 'VIEs-1',
        core: '1',
        ram: '2',
        storage: '30',
        internet: '1 Гбит/с',
        priceMonth: '391 ₽',
        priceHour: '0.9 ₽',
        isPopular: false,
    },
    {
        name: 'VIEs-2',
        core: '2',
        ram: '4',
        storage: '60',
        internet: '1 Гбит/с',
        priceMonth: '728 ₽',
        priceHour: '1.8 ₽',
        isPopular: false,
    },
    {
        name: 'VIEs-3',
        core: '4',
        ram: '8',
        storage: '120',
        internet: '1 Гбит/с',
        priceMonth: '1 536 ₽',
        priceHour: '3.59 ₽',
        isPopular: true,
    },
    {
        name: 'VIEs-4',
        core: '8',
        ram: '16',
        storage: '240',
        internet: '1 Гбит/с',
        priceMonth: '3 126 ₽',
        priceHour: '7.2 ₽',
        isPopular: false,
    },
    {
        name: 'VIEs-5',
        core: '16',
        ram: '32',
        storage: '480',
        internet: '1 Гбит/с',
        priceMonth: '6 252 ₽',
        priceHour: '14.39 ₽',
        isPopular: false,
    },
]

const osList = [
    {
        name: 'Ubuntu',
        versionList: ['18.04', '20.04', '22.04']
    },
    {
        name: 'Debian',
        versionList: ['9', '10', '11']
    },
    {
        name: 'CentOS',
        versionList: ['7', 'stream 8', 'stream 9']
    },
    {
        name: 'Windows',
        versionList: ['10']
    },
    {
        name: 'Windows Server',
        versionList: ['2012 R2', '2016', '2019', '2022']
    },
    {
        name: 'Almalinux',
        versionList: ['8', '9']
    },
    {
        name: 'RockyLinux',
        versionList: ['8']
    },
    {
        name: 'Freebsd',
        versionList: ['12', '13']
    },
    {
        name: 'Astra linux',
        versionList: ['ce']
    }

]

const periodsForPay = [
    {
        name: 'Час'
    },
    {
        name: 'Неделя'
    },
    {
        name: 'Месяц'
    },
    {
        name: '3 месяца'
    },
    {
        name: '6 месяцев'
    },
]

const handleSelectPeriod = (period) => {
    selectedPeriod.value = period;
};
const handleSelectOs = (os) => {
    selectedOs.value = os
}

const handleSelectTariff = (tariff) => {
    selectedTariff.value = tariff
}

const handleSelectCountry = (country) => {
    selectedCountry.value = country
}

const handleSelectType = (type) => {
    selectedType.value = type
}

const handleSelectServer = (server) => {
    selectedServer.value = server
}

const isTablet = window.innerWidth < 1260;
const isMobile = window.innerWidth < 1000;


const totalPrice = computed(() => {
    if (!selectedTariff.value || !selectedTariff.value.priceMonth) {
        return 0;
    }


    const numericPriceMonth = parseInt(selectedTariff.value.priceMonth.replace(/\D/g, ''));
    const numericPriceHour = parseInt(selectedTariff.value.priceHour.replace(/\D/g, ''));

    let pricePerUnit;

    if (selectedPeriod.value.trim() === 'Час') {
        pricePerUnit = numericPriceHour;
    } else if (selectedPeriod.value.trim() === 'Неделя') {
        pricePerUnit = numericPriceMonth / 4;
    } else if (selectedPeriod.value.trim() === 'Месяц') {
        pricePerUnit = numericPriceMonth;
    } else if (selectedPeriod.value.trim() === '3 месяца') {
        pricePerUnit = numericPriceMonth * 3;
    } else if (selectedPeriod.value.trim() === '6 месяцев') {
        pricePerUnit = numericPriceMonth * 6;
    } else {
        pricePerUnit = 0;
    }
    return pricePerUnit * quantityServers.value;
});


</script>

<style lang="scss" scoped>

.PanelVirtual {
    &__title {
        color: $white;
        font-size: 32px;
        font-weight: 500;
        line-height: 110%;
    }

    &__input {
        margin-top: 20px;

        &-title {
            color: $gray;
            font-size: 16px;
            font-weight: 400;
            line-height: 24px;
        }

        &-value {
            margin-top: 8px;
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
    }

    &__types {
        margin-top: 60px;

        &-title {
            color: $white;
            font-size: 24px;
            font-weight: 500;
            line-height: 120%;
        }

        &-descr {
            margin-top: 8px;
            color: $gray;
            font-size: 14px;
            font-weight: 400;
            line-height: 140%;
        }

        &-items {
            display: flex;
            justify-content: space-between;
            align-items: center;
            @media screen and (max-width: 1260px) {
                flex-direction: column;
                align-items: baseline;
            }
        }

        &-item {
            display: flex;
            gap: 8px;
            margin-top: 16px;

            width: 100%;
            position: relative;
            overflow-y: auto;
            scroll-behavior: smooth;

            &::-webkit-scrollbar {
                display: none;
            }

            &-descr {
                color: $gray;
                font-size: 14px;
                font-weight: 400;
                line-height: 24px;
                @media screen and (max-width: 1260px) {
                    margin-top: 20px;
                }
            }

            &-name {
                color: $gray;
                font-size: 18px;
                font-weight: 400;
                line-height: 24px;
                padding: 8px 14px;
                background: $background_dark;
                border-radius: 40px;
                transition: all 250ms ease-in-out;
                display: flex;
                gap: 6px;

                & span {
                    display: block;
                }

                &:hover {
                    cursor: pointer;
                    background: $yellowBg;
                    color: $buttons_normal;
                }

                &:active {
                    color: $buttons-click;
                }

                &.active {
                    background: $yellowBg;
                    color: $buttons_normal;
                }
            }
        }
    }

    &__servers {
        margin-top: 32px;
        padding: 32px 0;
        border-top: 1px solid $stroke_one;
        border-bottom: 1px solid $stroke_one;
        display: flex;
        gap: 24px;

        @media screen and (max-width: 560px) {
            flex-direction: column;
        }

        &-item {
            border-radius: 8px;
            background: $background_dark;
            padding: 16px;
            width: 100%;
            border: 1px solid transparent;
            transition: all 250ms ease-in-out;

            &:hover {
                cursor: pointer;
                border: 1px solid rgba(250, 204, 97, 0.35);
            }

            &.active {
                border: 1px solid rgba(250, 204, 97, 0.35);
            }

            &-title {
                color: $white;
                font-size: 24px;
                font-weight: 500;
                line-height: 120%;
            }

            &-benefits {
                margin-top: 16px;

                &-item {
                    color: $gray;
                    font-size: 14px;
                    font-weight: 400;
                    line-height: 24px;
                }
            }
        }
    }

    &__tariff {
        margin-top: 32px;
        width: 100%;
        display: flex;
        flex-direction: column;
        gap: 16px;
    }

    &__tariff-mobile {
        display: grid;
        grid-template-columns: repeat(2, 1fr);
        margin-top: 32px;
        grid-gap: 24px;

        @media screen and (max-width: 700px) {
            grid-template-columns: 1fr;
            grid-gap: 16px;
        }
    }

    &__os {
        margin-top: 60px;

        &-title {
            color: $white;
            font-size: 24px;
            font-weight: 500;
            line-height: 120%;
        }

        &-descr {
            margin-top: 8px;
            color: $gray;
            font-size: 14px;
            font-weight: 400;
            line-height: 140%;
        }

        &-container {
            margin-top: 20px;
            display: flex;
            flex-wrap: wrap;
            gap: 16px;

            @media screen and (max-width: 560px) {
                display: grid;
                grid-template-columns: 1fr;
                grid-gap: 16px;
            }
        }

    }

    &__price {
        padding-top: 32px;
        border-top: 1px solid $stroke_one;
        &-title {
            color: $white;
            font-size: 24px;
            font-weight: 500;
            line-height: 120%;
        }
        &-container {
            display: flex;
            justify-content: space-between;
            align-items: center;
            margin-top: 20px;

            @media screen and (max-width: 560px) {
                flex-direction: column;
                align-items: baseline;
                gap: 40px;
            }
        }
        &-count {
            &-input {
                display: flex;
                gap: 12px;
                align-items: center;
                &-name {
                    color: $white;
                    font-size: 18px;
                    font-weight: 400;
                    line-height: 24px;
                }

                &-value {
                    max-width: 60px;
                    width: 60px;
                    padding: 14px;
                    border-radius: 8px;
                    background: $background_dark_light;
                    outline: none;
                    color: $white;
                    font-size: 16px;
                    font-weight: 400;
                    line-height: 24px;
                    transition: all 250ms ease-in-out;
                    border: 2px solid transparent;
                    appearance: none;
                    -webkit-appearance: none;
                    -moz-appearance: none;

                    &::placeholder {
                        color: $gray;
                        font-weight: 400;
                        font-size: 16px;
                        transition: all 250ms ease-in-out;
                    }

                    &:hover {
                        background: #343434;
                        border: 2px solid rgba(250, 204, 97, 0.75);
                        cursor: pointer;
                    }

                    &:focus {
                        outline: none;
                        border: 2px solid rgba(250, 204, 97, 0.75);;

                        &::placeholder {
                            color: transparent;
                        }
                    }
                    &::-webkit-outer-spin-button,
                    &::-webkit-inner-spin-button {
                        -webkit-appearance: none;
                        margin: 0;
                    }
                    & input[type=number] {
                        -moz-appearance: textfield;
                    }
                }

                & span {
                    color: $gray;
                    font-weight: 400;
                    font-size: 14px;
                    line-height: 24px;
                }
            }
        }
        &-benefits {
            margin-top: 16px;
            &-item {
                color: $gray;
                font-size: 14px;
                font-weight: 400;
                line-height: 140%;
            }
        }
        &-total {
            &-price {
                color: $white;
                font-size: 32px;
                font-weight: 500;
                line-height: 120%;
            }
            &:deep(.PrimaryButton) {
                margin-top: 24px;
                padding: 8px 16px;
            }
            &:deep(.FormCheckbox) {
                margin-top: 16px;
            }
        }
    }
}

</style>