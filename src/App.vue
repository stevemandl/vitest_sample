// App.vue

<template>
    <div>
        <input type="button" :value="String(editButton)" @click="editButton = !editButton" />
    </div>
</template>

<script lang="ts" setup>
import { ref } from "vue";
const editButton = ref<boolean>(false)
</script>
