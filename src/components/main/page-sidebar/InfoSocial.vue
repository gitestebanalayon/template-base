<script setup>
import { RouterLink } from 'vue-router'

defineProps(['routs','icon'])
</script>

<template>
    <RouterLink :to="routs" class="nav-link">
        <i :class="icon" class="icon text-secondary"></i>
    </RouterLink>
</template>