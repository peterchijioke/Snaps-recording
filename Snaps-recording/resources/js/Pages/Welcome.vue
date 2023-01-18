<script setup>
import { Head, Link,router } from '@inertiajs/vue3';
import AppHeader from '../Layouts/AppHeader/AppHeader.vue'

defineProps({
    canLogin: Boolean,
    canRegister: Boolean,
    laravelVersion: String,
    phpVersion: String,
});
</script>

<template>
    <Head title="Welcome" />
    <AppHeader/>
</template>
