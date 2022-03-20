<script setup lang="ts">
import { ref, provide, computed } from 'vue';
import { Page, Team, User } from './types/types';
import { TeamsKey, UsersKey } from './types/keys';
import TheNavigation from './components/nav/TheNavigation.vue';
import TeamList from './components/teams/TeamList.vue';
import UsersList from './components/users/UsersList.vue';

const activePage = ref<Page>('teams-list');
const teams = ref<Team[]>([
  { id: "t1", name: "Frontend Engineers", members: ["u1", "u2"] },
  { id: "t2", name: "Backend Engineers", members: ["u1", "u2", "u3"] },
  { id: "t3", name: "Client Consulting", members: ["u4", "u5"] },
]);
const users = ref<User[]>([
  { id: "u1", fullName: "Max Schwarz", role: "Engineer" },
  { id: "u2", fullName: "Praveen Kumar", role: "Engineer" },
  { id: "u3", fullName: "Julie Jones", role: "Engineer" },
  { id: "u4", fullName: "Alex Blackfield", role: "Consultant" },
  { id: "u5", fullName: "Marie Smith", role: "Consultant" },
]);

const switchActivePage = computed(() => {
  return activePage.value === 'teams-list' ? TeamList : UsersList;
})

provide(TeamsKey, teams.value);
provide(UsersKey, users.value);

const setActivePage = (page: Page) => {
  activePage.value = page;
}
</script>

<template>
  <TheNavigation @set-page="setActivePage" />
  <main>
    <component :is="switchActivePage"></component>
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
</style>
