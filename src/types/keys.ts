import { InjectionKey } from "vue";
import { Team, User } from "./types";

export const TeamsKey: InjectionKey<Team[]> = Symbol('teams');
export const UsersKey: InjectionKey<User[]> = Symbol('users');