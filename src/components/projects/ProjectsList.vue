<script setup lang="ts">import { computed, ref, toRefs, watch } from 'vue';
import { User } from '../../types/types';
import BaseContainer from '../UI/BaseContainer.vue';
import BaseSearch from '../UI/BaseSearch.vue';
import ProjectItem from './ProjectItem.vue';

type Props = {
  user: User;
}
const props = defineProps<Props>();

const enteredSearchTerm = ref<string>('');
const activeSearchTerm = ref<string>('');

const availableProjects = computed(() => {
  if (activeSearchTerm.value) {
    return props.user.projects.filter((prj) =>
      prj.title.includes(activeSearchTerm.value)
    );
  }
  return props.user.projects;
});

const hasProjects = computed(() => {
  return props.user.projects && availableProjects.value.length > 0;
});

watch(enteredSearchTerm, (newValue) => {
  setTimeout(() => {
    if (newValue === enteredSearchTerm.value) {
      activeSearchTerm.value = newValue;
    }
  }, 1000);
});

const { user } = toRefs(props);

watch(user, () => {
  enteredSearchTerm.value = '';
});

const updateSearch = (searchTerm: string) => {
  enteredSearchTerm.value = searchTerm;
}
</script>

<template>
  <BaseContainer v-if="user">
    <h2>{{ user.fullName }}: Projects</h2>
    <BaseSearch v-if="hasProjects" @search="updateSearch" :search-term="enteredSearchTerm" />
    <ul v-if="hasProjects">
      <ProjectItem v-for="prj in availableProjects" :key="prj.id" :title="prj.title" />
    </ul>
  </BaseContainer>
  <BaseContainer v-else>
    <h3>No User Selected</h3>
  </BaseContainer>
</template>

<style scoped>
ul {
  list-style: none;
  margin: 0;
  padding: 0;
}
</style>