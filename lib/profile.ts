import type IProfile from "../types/profile";

export default async function getProfile(): Promise<{ profile: IProfile }> {
  const profile = (await import('../data/profile')).default;

  return {
    profile
  }
}