<template>
    <section class="benefits">
        <div class="container">
            <div class="benefits__text">
                <h2 class="benefits__title">{{ $t('benefits.title') }}</h2>
                <p class="benefits__descr">{{ $t('benefits.descr') }}</p>
            </div>
            <div class="benefits__wrapper">
                <div class="benefits__item">
                    <div class="benefits__item-img"></div>
                    <div class="benefits__item-title">{{ $t('benefits.freeBackups') }}</div>
                    <div class="benefits__item-descr">{{ $t('benefits.freeBackupsText') }}</div>
                </div>
                <div class="benefits__item">
                    <div class="benefits__item-img support"></div>
                    <div class="benefits__item-title">{{ $t('benefits.support') }}</div>
                    <div class="benefits__item-descr">{{ $t('benefits.supportText') }}</div>
                </div>
                <div class="benefits__item">
                    <div class="benefits__item-img ddos"></div>
                    <div class="benefits__item-title">{{ $t('benefits.ddos') }}</div>
                    <div class="benefits__item-descr">{{ $t('benefits.ddosText') }}</div>
                </div>
                <div class="benefits__item">
                    <div class="benefits__item-img payment"></div>
                    <div class="benefits__item-title">{{ $t('benefits.payment') }}</div>
                    <div class="benefits__item-descr">{{ $t('benefits.paymentText') }}</div>
                </div>
            </div>
        </div>
    </section>
</template>

<script setup>

</script>

<style lang="scss" scoped>
.benefits {
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
    }
    &__title {
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
    &__descr {
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
    &__wrapper {
        display: flex;
        gap: 16px;
        margin-top: 60px;
        width: 100%;
        position: relative;
        overflow-y: auto;
        scroll-behavior: smooth;

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
        max-width: 318px;
        min-width: 318px;

        @media screen and (max-width: 500px) {
            max-width: 280px;
            min-width: 280px;
        }

        &-img {
            width: 72px;
            height: 72px;
            background-color: $background_dark;
            border-radius: 50%;
            background-image: url("../../../assets/images/benefits/backup.svg");
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