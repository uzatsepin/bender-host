<template>
    <div class="AuthRecoveryComplete">
        <div class="AuthRecoveryComplete__text">
            {{ $t('auth.recoveryCompleteText') }}
        </div>
        <PrimaryButton :button-text="$t('auth.continue')" />
    </div>
</template>

<script setup>

import PrimaryButton from "../../Others/PrimaryButton.vue";
</script>

<style lang="scss" scoped>

.AuthRecoveryComplete {
    &__text {
        color: $gray;
        font-size: 16px;
        font-weight: 400;
        line-height: 140%;
    }
    &:deep( .PrimaryButton ) {
        width: 100%;
        margin-top: 24px;
    }
}

</style>