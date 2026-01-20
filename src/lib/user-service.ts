const USER_STORAGE_KEY = "valoro_user";

export interface UserProfile {
  name: string;
  email: string;
  avatar: string;
}

export function getUserProfile(): UserProfile | null {
  if (typeof window === "undefined") {
    return null;
  }

  try {
    const stored = localStorage.getItem(USER_STORAGE_KEY);
    if (stored) {
      return JSON.parse(stored);
    }
  } catch (error) {
    console.error("Erro ao recuperar perfil do usuário:", error);
  }

  return null;
}

export function saveUserProfile(user: UserProfile): void {
  if (typeof window === "undefined") {
    return;
  }

  try {
    localStorage.setItem(USER_STORAGE_KEY, JSON.stringify(user));
  } catch (error) {
    console.error("Erro ao salvar perfil do usuário:", error);
  }
}
