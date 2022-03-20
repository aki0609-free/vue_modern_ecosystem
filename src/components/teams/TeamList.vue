<script setup lang="ts">import { inject } from 'vue';
import { TeamsKey } from '../../types/keys';
import TeamItem from './TeamItem.vue';

const teams = inject(TeamsKey);
</script>

<template>
  <ul>
    <TeamItem
      v-for="team in teams"
      :key="team.id"
      :name="team.name"
      :member-count="team.members.length"
    />
  </ul>
</template>

<style scoped>
ul {
  list-style: none;
  margin: 2rem auto;
  max-width: 40rem;
  padding: 0;
}
</style>