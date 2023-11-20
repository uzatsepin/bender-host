<template>
    <div class="MyServicesStatus">
        <div class="MyServicesStatus__item" :class="status">
            <p class="MyServicesStatus__item-text">{{ showedText() }}</p>
        </div>
    </div>
</template>

<script setup>

const props = defineProps({
    status: {
        type: String,
        default: "creating"
    }
})

const showedText = () => {
    switch (props.status) {
        case "creating":
            return "Создание";
        case "active":
            return "Активен";
        default:
            return "Не оплачен";
    }
};

</script>

<style lang="scss" scoped>
.MyServicesStatus {
    &__item {
        padding: 2px 8px;
        border-radius: 100px;
        width: fit-content;

        &-text {
            color: $white;
            font-size: 14px;
            font-weight: 400;
            line-height: 24px;
            display: flex;
            align-items: center;
            gap: 6px;

            &:before {
                content: "";
                width: 16px;
                height: 16px;
                display: flex;
                background-color: transparent;
                background-size: 100%;
                background-repeat: no-repeat;
                background-position: center;
            }
        }
        &.creating {
            background-color: rgba(255, 122, 0, 0.15);
        }

        &.creating & {
            &-text {
                color: $orange;
            }
            &-text:before {
                background-image: url("../../../../assets/images/MyServices/creating-icon.svg");
            }
        }

        &.active {
            background-color: rgba(116, 205, 122, 0.15);
        }

        &.active & {
            &-text {
                color: $green;
            }
            &-text:before {
                background-image: url("../../../../assets/images/MyServices/active-icon.svg");
            }
        }

        &.notPaid {
            background: rgba(243, 73, 73, 0.15);
        }

        &.notPaid & {
            &-text {
                color: $red;
            }
            &-text:before {
                background-image: url("../../../../assets/images/MyServices/notpaid-icon.svg");
            }
        }
    }
}

</style>