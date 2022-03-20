<script setup lang="ts">import { computed, ref, watch } from 'vue';
import { User } from '../../types/types';
import BaseContainer from '../UI/BaseContainer.vue';
import BaseSearch from '../UI/BaseSearch.vue';
import UserItem from './UserItem.vue';

type Props = {
  users: User[];
}
type Emits = {
  (e: 'list-projects', uid: string): void;
}
const props = defineProps<Props>();
const emits = defineEmits<Emits>();

const enteredSearchTerm = ref<string>('');
const activeSearchTerm = ref<string>('');

const availableUsers = computed(() => {
  let users: User[] = [];
  if (activeSearchTerm.value) {
    users = props.users.filter((user) => {
      return user.fullName.includes(activeSearchTerm.value);
    });
  } else if (props.users) {
    users = props.users;
  }
  return users;
});

watch(enteredSearchTerm, (newValue) => {
  setTimeout(() => {
    if (newValue === enteredSearchTerm.value) {
      activeSearchTerm.value = newValue;
    }
  }, 1000);
});

const updateSearch = (val: string) => {
  enteredSearchTerm.value = val;
};

const sorting = ref<'asc' | 'desc' | null>(null);
const displayedUsers = computed(() => {
  if (!sorting.value) {
    return availableUsers.value;
  }
  return availableUsers.value.slice().sort((u1: User, u2: User) => {
    if (sorting.value === 'asc' && u1.fullName > u2.fullName) {
      return 1;
    } else if (sorting.value === 'asc') {
      return -1;
    } else if (sorting.value === 'desc' && u1.fullName > u2.fullName) {
      return -1;
    } else {
      return 1;
    }
  });
});

const sort = (mode: 'asc' | 'desc' | null) => {
  sorting.value = mode;
};

const listProjects = (uid: string) => {
  emits('list-projects', uid);
}
</script>

<template>
  <BaseContainer>
    <h2>Active Users</h2>
    <BaseSearch @search="updateSearch" :search-term="enteredSearchTerm" />
    <div>
      <button @click="sort('asc')" :class="{ selected: sorting === 'asc' }">Sort Ascending</button>
      <button @click="sort('desc')" :class="{ selected: sorting === 'desc' }">Sort Descending</button>
    </div>
    <ul>
      <UserItem
        v-for="user in displayedUsers"
        :key="user.id"
        :user-name="user.fullName"
        :id="user.id"
        @list-projects="listProjects"
      />
    </ul>
  </BaseContainer>
</template>

<style scoped>
ul {
  list-style: none;
  margin: 0;
  padding: 0;
}
</style>