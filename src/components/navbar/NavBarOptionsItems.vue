<script setup>
import { RouterLink } from 'vue-router'
defineProps(['name', 'icon', 'routs', 'badge'])
</script>

<template>
    <RouterLink class="nav-link text-secondary position-relative" :to="routs">
        <i :class="icon" class="icon me-2"></i>
        <span class="nav-link-title"> {{ name }} </span>
        <span v-if="badge == 'active'" class="new bg-green text-white">NEW</span>
    </RouterLink>
</template>

<style scoped>
.new{
    font-size: 12px;
    font-weight: 600;
    position: absolute;
    right: 15px;
    padding: 0 5px 0 5px;
    border-radius: 2px;
}

.router-link-active {
    color: rgb(255, 255, 255) !important;
    background-color: #4263eb !important;
}

.nav-link-title {
    font-weight: 600;
}
</style>