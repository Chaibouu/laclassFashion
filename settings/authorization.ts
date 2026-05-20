import { NextRequest } from "next/server";

// Fonction d'autorisation désactivée - l'authentification a été supprimée
// Toujours autoriser l'accès
export async function authorize(req: NextRequest, endpoint: string) {
  // Authentification désactivée - toujours autoriser
  return null;
}
