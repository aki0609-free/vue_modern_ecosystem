<script setup lang="ts">import { VNode } from 'vue';

type Props = {
  searchTerm: string;
}
type Emits = {
  (e: 'search', searchTerm: string): void
}
defineProps<Props>();
const emits = defineEmits<Emits>();

const search = (event: Event) => {
  emits('search', (event.target as HTMLInputElement).value);
}

</script>

<template>
  <form>
    <input type="search" @input="search" :value="searchTerm" placeholder="Filter Items" />
  </form>
</template>

<style scoped>
input {
  font: inherit;
  width: 100%;
  display: block;
  padding: 0.15rem;
  border: 1px solid #ccc;
}
input:focus {
  outline: none;
  border-color: #00006b;
  background-color: #eeeeff;
}
</style>