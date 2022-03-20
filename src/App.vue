<script setup lang="ts">import { ref } from 'vue';
import { useStore } from 'vuex';
import { storeKey } from './store/store';
import { User } from './types/types';
import UserList from './components/users/UserList.vue';
import ProjectsList from './components/projects/ProjectsList.vue';

const store = useStore(storeKey);

const selectedUser = ref<User>({} as User);
const activeUsers = ref<User[]>(store.getters.users);

const selectUser = (uid: string) => {
  selectedUser.value = activeUsers.value.find(user => user.id === uid) as User;
}
</script>

<template>
  <main>
    <UserList :users="activeUsers" @list-projects="selectUser" />
    <ProjectsList :user="selectedUser"></ProjectsList>
  </main>
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
main {
  display: flex;
  justify-content: space-around;
}
button {
  font: inherit;
  border: 1px solid #00006b;
  background-color: transparent;
  color: #00006b;
  padding: 0.5rem 1.5rem;
  cursor: pointer;
  margin: 0.5rem 0.5rem 0.5rem 0;
}
button:hover,
button:active {
  background-color: #efefff;
}
button.selected {
  background-color: #00006b;
  color: white;
}
</style>