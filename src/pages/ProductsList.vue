<script setup lang="ts">
import { inject } from 'vue';
import { ShoppingDefault, ShoppingKey } from '../types/keys';
import ProductItem from '../components/products/ProductItem.vue';

const { products } = inject(ShoppingKey, ShoppingDefault);
</script>

<template>
  <section>
    <ul>
      <ProductItem
        v-for="prod in products"
        :key="prod.id"
        :id="prod.id"
        :title="prod.title"
        :image="prod.image"
        :description="prod.description"
        :price="prod.price"
      />
    </ul>
  </section>
</template>

<style scoped>
ul {
  list-style: none;
  margin: 2rem auto;
  padding: 0;
  max-width: 40rem;
}
</style>