<script setup lang="ts">
import { computed, inject } from 'vue';
import { ShoppingDefault, ShoppingKey } from '../../types/keys';

type Props = {
  prodId: string;
  title: string;
  image: string;
  price: number;
  qty: number;
}
const props = defineProps<Props>();

const itemTotal = computed(() => {
  return (props.price * props.qty).toFixed(2);
});

const { removeProductFromCart } = inject(ShoppingKey, ShoppingDefault);
</script>

<template>
  <li>
    <div>
      <img :src="image" alt="title" />
    </div>
    <div>
      <h2>{{ title }}</h2>
      <div class="item-data">
        <div>
          Price Per Item:
          <strong>${{ price }}</strong>
        </div>
        <div>
          Quantity:
          <strong>{{ qty }}</strong>
        </div>
      </div>
      <div class="item__total">Total: ${{ itemTotal }}</div>
      <button @click="removeProductFromCart(prodId)">Remvoe</button>
    </div>
  </li>
</template>

<style scoped>
</style>