export type Page = 'teams-list' | 'users-list';

export type Role = 'Engineer' | 'Consultant';

export type User = {
  id: string;
  fullName: string;
  role: Role;
}

export type Team = {
  id: string;
  name: string;
  members: string[];
}