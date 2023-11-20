<template>
    <div class="FormSwitch">
        <label class="FormSwitch__item">
            <input type="checkbox" v-model="isAutoRenewal" @input="changeStatusAutoRenewal"/>
            <i></i>
            {{ text }}
        </label>
    </div>
</template>

<script setup>

import {ref} from "vue";

const props = defineProps({
    text: {
        type: String,
        required: true,
    },
    status: {
        type: Boolean,
    }
})

const isAutoRenewal = ref(false)

const changeStatusAutoRenewal = () => {
    isAutoRenewal.value = !isAutoRenewal.value
}

if(props.status) {
    isAutoRenewal.value = true
}


</script>

<style lang="scss" scoped>

.FormSwitch {
    &__item {
        position: relative;
        display: flex;
        gap: 16px;
        align-items: center;
        cursor: pointer;
        white-space: nowrap;
        color: #ffffff;

        i {
            position: relative;
            display: inline-block;
            width: 48px;
            height: 24px;
            background-color: $background_dark_light;
            border-radius: 12px;
            transition: all 250ms ease-in-out;
            border: 1px solid transparent;

            &::after {
                content: "";
                position: absolute;
                left: 4px;
                top: 3px;
                width: 16px;
                height: 16px;
                border-radius: 12px;
                background: $white;
                transition: all 250ms ease-in-out;
            }
        }

        input {
            position: absolute;
            opacity: 0;
            pointer-events: none;

            &:checked + i {
                border: 1px solid transparent;
                background: $green;

                &::after {
                    background: $white;
                    left: 27px;
                }
            }
            &:hover + i {
                background: #8FE395;
            }
        }

        &.disabled {
            display: none;
        }
    }

}

</style>