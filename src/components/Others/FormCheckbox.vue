<template>
    <div class="FormCheckbox">
        <label class="FormCheckbox__container">
            <input type="checkbox"
                   :checked="checkBoxChecked"
                   @input="inputHandle"
            >
            <span class="FormCheckbox__container-checkmark"></span>
        </label>
        <div class="FormCheckbox__container-text">
            {{ text }}
        </div>
    </div>
</template>

<script setup>

const props = defineProps({
    checkBoxChecked: {
        type: Boolean,
        default: false
    },
    text: {
        type: String,
        required: true
    }
})

</script>

<style lang="scss" scoped>

.FormCheckbox {
    display: flex;
    align-items: center;
    margin-top: 24px;

    &.full:hover {
        cursor: pointer;
    }

    &.full:hover input ~ &__container-checkmark {
        border: 2px solid $buttons_normal;
    }

    &.full & {
        &__container {
            pointer-events: none;
        }
    }

    &__container {
        display: block;
        position: relative;
        padding-left: 20px;
        margin-bottom: 20px;
        cursor: pointer;
        font-size: 22px;
        -webkit-user-select: none;
        -moz-user-select: none;
        -ms-user-select: none;
        user-select: none;

        input {
            position: absolute;
            opacity: 0;
            cursor: pointer;
            height: 0;
            width: 0;
        }

        &-checkmark {
            position: absolute;
            top: 0;
            left: 2px;
            width: 20px;
            height: 20px;
            background: $background_dark_light;
            border-radius: 4px;
            box-sizing: border-box;
            transition: all 250ms ease-in-out;
        }

        &:hover input ~ &-checkmark {
            border: 2px solid $buttons_normal;
        }

        & input:checked ~ &-checkmark {
            background: $purple;
            border: 2px solid $purple;
        }

        &-checkmark:after {
            content: "";
            position: absolute;
            display: none;
        }

        & input:checked ~ &-checkmark:after {
            display: block;
        }

        & &-checkmark:after {
            left: 3px;
            top: 3px;
            width: 10px;
            height: 7px;
            border: solid white;
            border-width: 0 0 2px 2px;
            -webkit-transform: rotate(-45deg);
            -ms-transform: rotate(-45deg);
            transform: rotate(-45deg);
        }

        &-text {
            font-weight: 400;
            line-height: 24px;
            font-size: 16px;
            color: $white;
            margin-left: 12px;
        }
    }

}

</style>