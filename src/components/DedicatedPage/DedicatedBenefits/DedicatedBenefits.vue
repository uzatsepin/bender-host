<template>
    <section class="DedicatedBenefits">
        <div class="container">
            <div class="DedicatedBenefits__container">
                <div class="DedicatedBenefits__text">
                    <h2 class="DedicatedBenefits__text-title">Почему наши серверы?</h2>
                    <p class="DedicatedBenefits__text-descr">Наш продукт предлагает не только широкий функционал, но и
                        прозрачное ценообразование, которое позволяет нашим клиентам точно знать, сколько они платят за
                        каждую услугу.</p>
                </div>
                <div class="DedicatedBenefits__wrapper">
                    <div class="DedicatedBenefits__item ">
                        <div class="DedicatedBenefits__item-img ddos"></div>
                        <div class="DedicatedBenefits__item-title">Anti-DDoS защита</div>
                        <div class="DedicatedBenefits__item-descr">Мы хорошо защищены от DDOS-атак, поэтому продолжаем работать стабильно даже в условиях массовых атак.</div>
                    </div>
                    <div class="DedicatedBenefits__item">
                        <div class="DedicatedBenefits__item-img payment"></div>
                        <div class="DedicatedBenefits__item-title">Почасовая оплата</div>
                        <div class="DedicatedBenefits__item-descr">Быстрые облачные серверы, масштабируются на лету. Заказывайте сколько хотите, платите только за то, что используете</div>
                    </div>
                    <div class="DedicatedBenefits__item">
                        <div class="DedicatedBenefits__item-img equipment"></div>
                        <div class="DedicatedBenefits__item-title">Современное оборудование</div>
                        <div class="DedicatedBenefits__item-descr">Современное оборудование, у нас не оверселлах как у других хостинг-провайдеров.</div>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<script setup>

</script>

<style lang="scss" scoped>

.DedicatedBenefits {
    background: $background_dark;
    margin-top: 160px;
    padding: 60px 0;

    @media screen and (max-width: 767px) {
        margin-top: 100px;
        padding: 40px 0;
    }
    &__text {
        display: flex;
        justify-content: space-between;
        align-items: flex-end;
        @media screen and (max-width: 767px) {
            flex-direction: column;
            align-items: baseline;
            gap: 16px;
        }
        &-title {
            max-width: 518px;
            color: $white;
            font-size: 60px;
            font-weight: 500;
            line-height: 120%;
            text-transform: uppercase;
            @media screen and (max-width: 850px) {
                font-size: 50px;
            }

            @media screen and (max-width: 767px) {
                font-size: 40px;
                width: 100%;
            }
        }
        &-descr {
            color: $gray;
            font-size: 18px;
            font-weight: 400;
            line-height: 140%;
            margin-bottom: 8px;
            max-width: 518px;

            @media screen and (max-width: 850px) {
                max-width: 320px;
            }

            @media screen and (max-width: 767px) {
                max-width: 100%;
            }
        }
    }

    &__wrapper {
        display: grid;
        grid-template-columns: repeat(3, 1fr);
        gap: 16px;
        margin-top: 60px;

        @media screen and (max-width: 730px) {
            display: flex;
            gap: 16px;
            width: 100%;
            position: relative;
            overflow-y: auto;
            scroll-behavior: smooth;
        }

        &::-webkit-scrollbar {
            display: none;
        }

        @media screen and (max-width: 767px) {
            margin-top: 32px;
        }

    }
    &__item {
        background: $background_dark_light;
        border-radius: 16px;
        padding: 16px;
        width: 100%;

        @media screen and (max-width: 730px) {
            max-width: 280px;
            min-width: 280px;
        }


        &-img {
            width: 72px;
            height: 72px;
            background-color: $background_dark;
            border-radius: 50%;
            background-size: 32px 32px;
            background-repeat: no-repeat;
            background-position: center;

            &.support {
                background-image: url("../../../assets/images/benefits/support.svg");
            }
            &.ddos {
                background-image: url("../../../assets/images/benefits/ddos.svg");
            }
            &.payment {
                background-image: url("../../../assets/images/benefits/payment.svg");
            }
            &.equipment {
                background-image: url("../../../assets/images/benefits/equipment.svg");
            }
            &.backup {
                background-image: url("../../../assets/images/benefits/backup.svg");
            }
        }
        &-title {
            color: $white;
            font-size: 24px;
            font-weight: 500;
            line-height: 120%;
            margin-top: 24px;
        }
        &-descr {
            margin-top: 8px;
            color: $gray;
            font-size: 16px;
            font-weight: 400;
            line-height: 140%;

            @media screen and (max-width: 500px) {
                font-size: 14px;
            }
        }
    }
}

</style>