import { cookies } from "next/headers";
import { NextResponse } from "next/server";
import { refreshUserToken } from "@/lib/user";

export async function makeAuthenticatedRequest(
  url: string,
  method: string,
  body: any = null,
  headers: { [key: string]: string } = {},
  contentType?: string
) {
  try {
    const cookieStore = cookies();

    // Récupérer le token d'accès et le token de rafraîchissement depuis les cookies
    let accessToken = cookieStore.get("accessToken")?.value;
    const refreshToken = cookieStore.get("refreshToken")?.value;

    // Si le refreshToken est absent, retourner une erreur
    if (!refreshToken) {
      return NextResponse.json(
        { error: "Token de rafraîchissement manquant" },
        { status: 401 }
      );
    } else {
      console.log('refresh token ok!')
    }

    // Vérifier si le corps de la requête est du FormData
    const isFormData = body instanceof FormData;

    // Créer une copie des headers pour manipuler plus facilement
    const finalHeaders: { [key: string]: string } = {
      ...headers,
      ...(isFormData
        ? {} // Si c'est du FormData, le navigateur gère le Content-Type
        : { "Content-Type": contentType || "application/json" }),
    };

    // Supprimer Content-Type si c'est du FormData
    if (isFormData) {
      delete finalHeaders["Content-Type"];
    }

    // Si l'accessToken est présent, essayer de récupérer les informations
    if (accessToken) {
      try {
        finalHeaders["Authorization"] = `Bearer ${accessToken}`;

        const options: RequestInit = {
          method,
          headers: finalHeaders,
          body: isFormData ? body : body ? JSON.stringify(body) : null,
        };

        const response = await fetch(url, options);

        if (!response.ok) {
          throw new Error(`Erreur lors de la requête : ${response.statusText}`);
        }

        return await response.json(); // Retourner la réponse JSON si la requête réussit
      } catch (error) {
        console.error("Erreur lors de l'utilisation du token d'accès:", error);
      }
    } else {
      console.log('probleme avec access  token ')

    }

    // Si l'`accessToken` est invalide ou absent, tenter de le rafraîchir
    try {
      const { accessToken: newAccessToken, accessTokenExpiresAt } =
        await refreshUserToken(refreshToken);

      // Mettre à jour l'accessToken dans les cookies
      cookies().set("accessToken", newAccessToken, {
        httpOnly: true,
        secure: true,
        maxAge: accessTokenExpiresAt, // Définir l'expiration du token d'accès
        path: "/",
        sameSite: "lax",
      });

      // Utiliser le nouveau token d'accès
      finalHeaders["Authorization"] = `Bearer ${newAccessToken}`;

      // Faire la requête authentifiée avec le nouveau token d'accès
      const options: RequestInit = {
        method,
        headers: finalHeaders,
        body: isFormData ? body : body ? JSON.stringify(body) : null,
      };

      const response = await fetch(url, options);

      if (!response.ok) {
        throw new Error(`Erreur lors de la requête : ${response.statusText}`);
      } else {
      console.log('la requete est passé')

      }

      return await response.json(); // Retourner la réponse JSON si la requête réussit
    } catch (error) {
      console.error("Erreur lors du rafraîchissement du token:", error);
      return NextResponse.json({ error: "Erreur lors du rafraîchissement" });
    }
  } catch (error) {
    console.error("Erreur dans makeAuthenticatedRequest:", error);
    throw new Error("Erreur lors de la requête authentifiée");
  }
}
