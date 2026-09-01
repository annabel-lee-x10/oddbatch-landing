export type Platform = "web" | "ios" | "android" | "mac" | "windows" | "linux";

export interface App {
  name: string;
  oneLine: string;
  url: string;
  platform: Platform[];
  addedOn: string;
}

const apps: App[] = [];

export default apps;
