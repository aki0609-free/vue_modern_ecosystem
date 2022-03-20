import { InjectionKey } from "vue";
import { createStore, Store } from "vuex";
import { User } from "../types/types";

export interface State {
  users: User[];
}

export const storeKey: InjectionKey<Store<State>> = Symbol();

export const store = createStore<State>({
  state: {
    users: [
      {
        id: 'max',
        fullName: 'Maximilian Schwarzmüller',
        projects: [
          { id: 'max_p1', title: 'Record the Vue course' },
          { id: 'max_p2', title: 'Create more courses' },
          { id: 'max_p3', title: 'Keep content updated' }
        ]
      },
      {
        id: 'manu',
        fullName: 'Manuel Lorenz',
        projects: [
          { id: 'manu_p1', title: 'Create more courses' },
          { id: 'manu_p2', title: 'Dive into data science topics' },
          { id: 'manu_p3', title: 'Various things' }
        ]
      },
      {
        id: 'julie',
        fullName: 'Julie Jones',
        projects: [
          { id: 'julie_p1', title: 'Create agenda for next months' },
          { id: 'julie_p2', title: 'Explore new topics' }
        ]
      },
      {
        id: 'michael',
        fullName: 'Michael Miller',
        projects: []
      },
    ]
  },
  getters: {
    users(state): User[] {
      return state.users;
    }
  }
});
