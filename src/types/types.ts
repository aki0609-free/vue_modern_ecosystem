export type Project = {
  id: string;
  title: string;
}

export type User = {
  id: string;
  fullName: string;
  projects: Project[];
}