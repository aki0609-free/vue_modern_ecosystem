<script setup lang="ts">
import { inject } from 'vue';
import { AuthDefault, AuthKey, ShoppingDefault, ShoppingKey } from '../../types/keys';
import BaseBadge from '../ui/BaseBadge.vue';
const { isLoggedIn, login, logout } = inject(AuthKey, AuthDefault);
const { cart } = inject(ShoppingKey, ShoppingDefault);

</script>

<template>
  <header>
    <h1>
      <router-link to="/">Vue Shop</router-link>
    </h1>
    <nav>
      <ul>
        <li>
          <router-link to="/products">Products</router-link>
        </li>
        <li>
          <router-link to="/cart">Cart</router-link>
          <BaseBadge mode="elegant">{{ cart.qty }}</BaseBadge>
        </li>
        <li v-if="isLoggedIn">
          <router-link to="/admin">Admin</router-link>
        </li>
      </ul>
    </nav>
    <div>
      <button v-if="isLoggedIn" @click="login">Login</button>
      <button v-if="isLoggedIn" @click="logout">Logout</button>
    </div>
  </header>
</template>