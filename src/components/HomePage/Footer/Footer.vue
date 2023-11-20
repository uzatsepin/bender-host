<template>
    <footer class="footer">
        <div class="container">
            <div class="footer__top">
                <div class="footer__logo">BenderPremium</div>
                <div class="footer__items">
                    <div class="footer__links">
                        <div class="footer__links-title">{{ $t('header.info') }}</div>
                        <div class="footer__list">
                            <a href="#" class="footer__list-link">{{ $t('footer.contact') }}</a>
                            <a href="#" class="footer__list-link">{{ $t('footer.referal') }}</a>
                            <a href="#" class="footer__list-link">FAQ</a>
                        </div>
                    </div>
                    <div class="footer__links">
                        <div class="footer__links-title">{{ $t('header.services') }}</div>
                        <div class="footer__list">
                            <a href="#" class="footer__list-link">{{ $t('services.virtualServers') }}</a>
                            <a href="#" class="footer__list-link">{{ $t('services.dedicatedServers') }}</a>
                            <a href="#" class="footer__list-link">{{ $t('services.rent') }}</a>
                        </div>
                    </div>
                    <div class="footer__links">
                        <div class="footer__links-title">Соц. сети</div>
                        <div class="footer__list">
                            <a href="#" class="footer__list-link">Telegram</a>
                            <a href="#" class="footer__list-link">Bot telegram</a>
                        </div>
                    </div>
                </div>
            </div>
            <div class="footer__bottom">
                <div class="footer__bottom-copyright">
                    © BenderPremium 2023
                </div>
                <div class="footer__bottom-links">
                    <a href="#" class="footer__bottom-link">{{ $t('footer.terms') }}</a>
                    <a href="#" class="footer__bottom-link">{{ $t('footer.rules') }}</a>
                </div>
            </div>
        </div>
    </footer>
</template>

<script setup>

</script>

<style lang="scss" scoped>
.footer {
    margin-top: 160px;
    padding-bottom: 24px;

    @media screen and (max-width: 767px) {
        margin-top: 100px;
    }
    &__top {
        display: flex;
        justify-content: space-between;
        padding: 40px 40px 80px 0;

        @media screen and (max-width: 949px) {
            flex-direction: column;
            gap: 24px;
        }

        @media screen and (max-width: 767px) {
            padding: 32px 0 60px 0;
        }
    }
    &__items {
        display: flex;
        justify-content: space-between;
        gap: 150px;
        @media screen and (max-width: 1200px) {
            gap: 70px;
        }
        @media screen and (max-width: 1024px) {
            gap: 32px;
        }

        @media screen and (max-width: 645px) {
            flex-direction: column;
        }
    }
    &__logo {
        color: $white;
        font-size: 32px;
        font-weight: 500;
        line-height: 120%;
        text-transform: uppercase;
    }
    &__links {
        &-title {
            color: $white;
            font-size: 16px;
            font-weight: 500;
            line-height: 120%;
            text-transform: uppercase;
        }
    }
    &__list {
        display: flex;
        flex-direction: column;
        gap: 8px;
        margin-top: 24px;
        &-link {
            color: $gray;
            font-size: 16px;
            font-weight: 400;
            line-height: 24px;
            text-decoration: none;
            transition: all 250ms ease-in-out;

            &:hover {
                color: $white;
            }
        }
    }
    &__bottom {
        padding-top: 14px;
        border-top: 1px solid $stroke_one;
        display: flex;
        justify-content: space-between;
        align-items: center;

        @media screen and (max-width: 586px) {
            flex-direction: column;
            align-items: baseline;
            gap: 12px;
        }

        &-copyright {
            color: $gray;
            font-size: 14px;
            font-weight: 400;
            line-height: 24px;
        }
        &-links {
            display: flex;
            gap: 32px;

            @media screen and (max-width: 500px) {
                flex-direction: column;
                gap: 8px;
            }
        }
        &-link {
            color: $gray;
            font-size: 14px;
            font-weight: 400;
            line-height: 24px;
            text-decoration: none;
        }
    }

}

</style>