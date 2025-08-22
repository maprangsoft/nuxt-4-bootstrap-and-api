<script setup lang="ts">
const { data } = await useFetch('/api/hello')
console.log(`log => `, data.value);
</script>

<template>
  <!-- <pre>{{ data }}</pre> -->
</template>
