<template>
    <div class="FormSelect" :class="{ 'active': active }">
        <div class="FormSelect__input" :class="{ 'active': active }" @click="listToggle">
            <input v-if="selectedValue" :value="selectedValue[label]" type="text" readonly>
            <span>{{selectedValue.price}}</span>
        </div>
        <ul class="FormSelect__list" :class="{ 'active': active }">
            <li class="FormSelect__list-item" v-for="(item, i) in items" :key="i" @click="selectItem(item)">
                {{ item.name }} <span>{{ item.price }}</span>
            </li>
        </ul>
    </div>
</template>

<script setup>
import { ref, defineProps, defineEmits } from 'vue';

const { items, label, value } = defineProps(['items', 'label', 'value']);
const emit = defineEmits(['input', 'select']);
const selectedValue = ref(value || items[0]);
const active = ref(false);

const listToggle = () => {
    active.value = !active.value;
};

const close = () => {
    active.value = false;
};

const selectItem = (item) => {
    selectedValue.value = item;
    emit('input', item);
    emit('select', item);
    close();
};
</script>


<style lang="scss" scoped>
.FormSelect {
    width: 100%;
    height: 56px;
    display: flex;
    flex-direction: column;
    position: relative;
    background: $background_dark_light;
    border-radius: 8px;
    border: 2px solid transparent;
    transition: all 250ms ease-in-out;
    box-sizing: border-box;

    &:hover {
        border: 2px solid rgba(250, 204, 97, 0.75);
    }

    &.active {
        border: 2px solid rgba(250, 204, 97, 0.75);
    }

    &__input {
        border-radius: 8px;
        padding: 14px;
        position: relative;
        transition: all 250ms ease-in-out;
        color: #ffffff;
        display: flex;
        justify-content: space-between;
        align-items: center;

        &:hover {
            cursor: pointer;
        }

        &::after {
            content: "";
            position: absolute;
            width: 24px;
            height: 24px;
            top: 15px;
            right: 14px;
            background: url("../../assets/images/MyServices/arrow-down.svg");
            background-size: 100% 100%;
            transition: all 250ms ease-in-out;
        }

        & span {
            margin-right: 33px;
            padding: 2px 12px;
            color: $white;
            font-size: 16px;
            font-weight: 400;
            line-height: 24px;
            border-radius: 40px;
            background: $stroke_one;
        }

        input {
            font-weight: 400;
            font-size: 16px;
            line-height: 24px;
            color: #FFFFFF;
            pointer-events: none;
            background: none;
            border: none;
            @media screen and (max-width: 767px)
            {
                max-width: 100px;
            }
        }

        &.active::after {
            transform: rotate(180deg);
        }
    }

    &__list {
        width: 100%;
        left: 0;
        padding: 8px 0;
        top: calc(100% + 8px);
        border: 1px solid $stroke_one;
        box-sizing: border-box;
        box-shadow: 0 8px 24px rgba(47, 45, 64, 0.1);
        border-radius: 8px;
        flex-direction: column;
        background: $background_dark_light;
        color: #ffffff;
        position: absolute;
        max-height: 220px;
        overflow-y: auto;
        opacity: 0;
        display: flex;
        transition: all 250ms ease-in-out;
        pointer-events: none;
        z-index: 2;

        &.active {
            opacity: 1;
            pointer-events: all;
        }

        &-item {
            padding: 20px 16px;
            background: $background_dark_light;
            transition: all 250ms ease-in-out;
            font-size: 18px;
            font-weight: 400;
            line-height: 24px;
            color: #FFFFFF;
            display: flex;
            justify-content: space-between;
            align-items: center;

            &:hover {
                color: $buttons_normal;
                cursor: pointer;
            }

            &.active {
                background: rgba(250, 204, 97, 0.15);
                color: $buttons_normal;
            }
            & span {
                padding: 2px 12px;
                color: $white;
                font-size: 16px;
                font-weight: 400;
                line-height: 24px;
                border-radius: 40px;
                background: $stroke_one;

            }
        }
    }
}
</style>