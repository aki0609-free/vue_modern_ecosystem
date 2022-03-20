<script setup lang="ts">import { computed, inject } from 'vue';
import { ShoppingDefault, ShoppingKey } from '../types/keys';
import BaseBadge from '../components/ui/BaseBadge.vue';
import CartItem from '../components/cart/CartItem.vue';

const { cart } = inject(ShoppingKey, ShoppingDefault);

const cartTotal = computed(() => {
  return cart.total.toFixed(2);
});
</script>

<template>
  <section>
    <h2>Your Cart</h2>
    <h3>
      Total Amount:
      <BaseBadge mode="elegant">${{ cartTotal }}</BaseBadge>
    </h3>
    <ul>
      <CartItem
        v-for="item in cart.items"
        :key="item.productId"
        :prod-id="item.productId"
        :title="item.title"
        :image="item.image"
        :price="item.price"
        :qty="item.qty"
      />
    </ul>
  </section>
</template>

<style scoped>
section {
  margin: 2rem auto;
  max-width: 40rem;
}
h2 {
  color: #292929;
  text-align: center;
  border-bottom: 2px solid #ccc;
  padding-bottom: 1rem;
}
h3 {
  text-align: center;
}
ul {
  list-style: none;
  margin: 0;
  padding: 0;
}
</style>