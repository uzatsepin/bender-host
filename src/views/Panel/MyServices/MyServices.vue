<template>
    <div class="MyServices">
        <div class="MyServices__title">
            Мои услуги
        </div>
        <div class="MyServices__empty">
            <MyServicesEmpty v-if="false"/>
        </div>
        <div class="MyServices__table">
            <MyServicesTable v-if="true"/>
        </div>
    </div>
</template>

<script setup>

import MyServicesEmpty from "./MyServicesEmpty/MyServicesEmpty.vue";
import MyServicesTable from "./MyServicesTable/MyServicesTable.vue";
</script>

<style lang="scss" scoped>
.MyServices {
    &__title {
        color: $white;
        font-size: 32px;
        font-weight: 500;
        line-height: 120%;
    }
    &__empty {
        margin-top: 32px;
    }
}

</style>