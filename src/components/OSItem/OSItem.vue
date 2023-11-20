<template>
    <div class="OSItem" v-click-away="closeDropDown" :class="{'selected': selectedOs.name === os.name}">
        <div class="OSItem__name" :class="os.name.split(' ').join('-').toLowerCase()">
            {{ os.name }}
        </div>
        <div class="OSItem__os">
            <div class="OSItem__os-select" :class="{ 'active': active }">
                <div class="OSItem__os-select-input" :class="{ 'active': active }" @click="listToggle">
                    <input type="text" readonly v-if="false">
                    <span>{{ selectedValue ? selectedValue : os.versionList[os.versionList.length - 1]}}</span>
                </div>
                <ul class="OSItem__os-select-list" :class="{ 'active': active }">
                    <li class="OSItem__os-select-list-item"
                        v-for="(version, index) in os.versionList"
                        :key="index"
                        @click="selectItem(version)">
                        {{ version }}
                    </li>
                </ul>
            </div>
        </div>
    </div>
</template>

<script setup>

import {ref} from "vue";

const props = defineProps({
    os: {
        type: Object,
        required: true
    },
    selectedOs: {
        type: Object,
        required: true
    }
})

const active = ref(false);
const selectedValue = ref(null);


const listToggle = () => {
    active.value = !active.value;
};

const selectItem = (item) => {
    selectedValue.value = item;
    closeDropDown()
};

const closeDropDown = (event) => {
    active.value = false;
};

</script>

<style lang="scss" scoped>
.OSItem {
    background: $background_dark;
    border-radius: 8px;
    min-width: 244px;
    border: 1px solid transparent;
    transition: all 250ms ease-in-out;

    &:hover {
        cursor: pointer;
        border: 1px solid rgba(250, 204, 97, 0.35);
    }

    &.selected {
        border: 1px solid rgba(250, 204, 97, 0.35);
    }

    &__name {
        padding: 20px 12px;
        color: $white;
        font-size: 18px;
        font-weight: 500;
        line-height: 120%;
        display: flex;
        gap: 14px;
        align-items: center;
        border-bottom: 1px solid $stroke_one;


        &:before {
            content: "";
            display: flex;
            width: 40px;
            height: 40px;
            background-size: contain;
            background-repeat: no-repeat;
            background-position: center;
        }

        &.ubuntu:before {
            background-image: url("../../assets/images/MyServices/ubuntu-icon.svg")
        }

        &.debian:before {
            background-image: url("../../assets/images/MyServices/debian-icon.svg")
        }

        &.centos:before {
            background-image: url("../../assets/images/MyServices/centos-icon.svg")
        }

        &.alma:before {
            background-image: url("../../assets/images/MyServices/alma-icon.svg")
        }

        &.almalinux:before {
            background-image: url("../../assets/images/MyServices/alma-icon.svg")
        }

        &.windows:before {
            background-image: url("../../assets/images/MyServices/windows-icon.svg")
        }
        &.windows-server:before {
            background-image: url("../../assets/images/MyServices/windows-server.svg")
        }

        &.freebsd:before {
            background-image: url("../../assets/images/MyServices/freebsd-icon.svg")
        }

        &.astra-linux:before {
            background-image: url("../../assets/images/MyServices/astra-icon.svg")
        }

        &.rockylinux:before {
            background-image: url("../../assets/images/MyServices/rocky-icon.svg")
        }
    }
    &__os {
        &-select {
            width: 100%;
            display: flex;
            flex-direction: column;
            position: relative;
            transition: all 250ms ease-in-out;
            box-sizing: border-box;

            &-input {
                padding: 8px 12px;
                position: relative;
                transition: all 250ms ease-in-out;
                color: #ffffff;
                display: flex;
                justify-content: space-between;
                align-items: center;

                &:hover {
                    cursor: pointer;
                }

                & span {
                    color: $white;
                    font-size: 16px;
                    font-weight: 400;
                    line-height: 24px;
                    display: flex;
                    gap: 8px;

                    &::after {
                        content: "";
                        display: block;
                        width: 24px;
                        height: 24px;
                        background: url("../../assets/images/MyServices/arrow-select.svg");
                        background-size: 100% 100%;
                        transition: all 250ms ease-in-out;
                    }
                }

                &.active span::after {
                    transform: rotate(180deg);
                }



                input {
                    font-weight: 400;
                    font-size: 16px;
                    line-height: 24px;
                    color: #FFFFFF;
                    pointer-events: none;
                    background: none;
                    border: none;
                }
            }

            &-list {
                width: 100%;
                left: 0;
                padding: 8px 0;
                top: calc(100% + 8px);
                border: 1px solid $stroke_one;
                box-sizing: border-box;
                border-radius: 8px;
                flex-direction: column;
                background: $background_dark;
                color: #ffffff;
                position: absolute;
                max-height: 300px;
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
                    background: $background_dark;
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
                }
            }
        }
    }
}



</style>