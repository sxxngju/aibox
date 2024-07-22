<script>
export default {
    data: () => ({
        model: null
    })
};
</script>

<template>
    <v-slide-group show-arrows v-model="model">
        <slot></slot>
    </v-slide-group>
</template>

<style></style>
