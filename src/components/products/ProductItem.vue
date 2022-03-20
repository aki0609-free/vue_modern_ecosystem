<script setup lang="ts">import { inject } from 'vue';
import { ShoppingDefault, ShoppingKey } from '../../types/keys';
import { Product } from '../../types/types';
import BaseBadge from '../ui/BaseBadge.vue';

type Props = {
  id: string;
  image: string;
  title: string;
  price: number;
  description: string;
}
const props = defineProps<Props>();

const { addProductToCart } = inject(ShoppingKey, ShoppingDefault);
const addToCart = () => {
  addProductToCart({
    id: props.id,
    image: props.image,
    title: props.title,
    price: props.price,
  } as Omit<Product, 'description'>);
}
</script>

<template>
  <li class="product">
    <div class="product__data">
      <div class="product__image">
        <img :src="image" alt="title" />
      </div>
    </div>
    <div class="product__text">
      <h3>{{ title }}</h3>
      <BaseBadge mode="highlight" :no-margin-left="true">
        <h4>${{ price }}</h4>
      </BaseBadge>
      <p>{{ description }}</p>
    </div>
    <div class="product__actions">
      <button @click="addToCart">Add To Cart</button>
    </div>
  </li>
</template>

<style scoped>
li {
  margin: 1.5rem auto;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
  padding: 1rem;
}
.product__data {
  display: flex;
}
.product__image {
  margin-right: 1rem;
}
.product__image img {
  height: 10rem;
  width: 10rem;
  object-fit: cover;
}
.product__text h3 {
  margin: 0 0 0.5rem 0;
}
.product__text h4 {
  margin: 0;
}
.product__actions {
  text-align: center;
}
button {
  font: inherit;
  cursor: pointer;
  background-color: #45006d;
  color: white;
  border: 1px solid #45006d;
  padding: 0.5rem 1.5rem;
  border-radius: 30px;
}
button:hover,
button:active {
  background-color: #760ab4;
  border-color: #760ab4;
}
</style>