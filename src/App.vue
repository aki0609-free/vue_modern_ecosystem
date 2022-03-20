<script setup lang="ts">
import TheHeader from './components/nav/TheHeader.vue';
import { RouterView } from 'vue-router';
import { provide, ref } from 'vue';
import { Product, Cart, Item } from './types/types';
import { AuthKey, ShoppingKey } from './types/keys';

const isLoggedIn = ref<boolean>(false);
const products = ref<Product[]>([
  {
    id: 'p1',
    image:
      'https://upload.wikimedia.org/wikipedia/commons/thumb/5/5a/Books_HD_%288314929977%29.jpg/640px-Books_HD_%288314929977%29.jpg',
    title: 'Book Collection',
    description:
      'A collection of must-read books. All-time classics included!',
    price: 99.99,
  },
  {
    id: 'p2',
    image:
      'https://upload.wikimedia.org/wikipedia/en/thumb/c/c9/Tent_at_High_Shelf_Camp_cropped.jpg/640px-Tent_at_High_Shelf_Camp_cropped.jpg',
    title: 'Mountain Tent',
    description: 'A tent for the ambitious outdoor tourist.',
    price: 129.99,
  },
  {
    id: 'p3',
    image:
      'https://upload.wikimedia.org/wikipedia/commons/thumb/6/6d/Good_Food_Display_-_NCI_Visuals_Online.jpg/640px-Good_Food_Display_-_NCI_Visuals_Online.jpg',
    title: 'Food Box',
    description:
      'May be partially expired when it arrives but at least it is cheap!',
    price: 6.99,
  },
]);
const cart = ref<Cart>({
  items: [],
  total: 0,
  qty: 0
});

const addProductToCart = (productData: Omit<Product, 'description'>) => {
  const productInCartIndex = cart.value.items.findIndex(
    (ci) => ci.productId === productData.id
  );

  if (productInCartIndex >= 0) {
    cart.value.items[productInCartIndex].qty++;
  } else {
    const newItem: Item = {
      productId: productData.id,
      title: productData.title,
      image: productData.image,
      price: productData.price,
      qty: 1,
    };
    cart.value.items.push(newItem);
  }
  cart.value.qty++;
  cart.value.total += productData.price;
}

const removeProductFromCart = (productId: string) => {
  const productInCartIndex = cart.value.items.findIndex(
    (cartItem) => cartItem.productId === productId
  );
  const itemData = cart.value.items[productInCartIndex];

  cart.value.items.splice(productInCartIndex, 1);
  cart.value.qty -= itemData.qty;
  cart.value.total -= itemData.price * itemData.qty;
}

const login = () => {
  isLoggedIn.value = true;
}

const logout = () => {
  isLoggedIn.value = false;
}

provide(AuthKey, {
  isLoggedIn: isLoggedIn.value,
  login,
  logout
});
provide(ShoppingKey, {
  products: products.value,
  cart: cart.value,
  addProductToCart,
  removeProductFromCart,
})
</script>

<template>
  <TheHeader />
  <RouterView />
</template>

<style>
* {
  box-sizing: border-box;
}
html {
  font-family: sans-serif;
}
body {
  margin: 0;
}
</style>
