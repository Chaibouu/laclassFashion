'use server'

// Actions simplifiées pour les catégories - site vitrine sans authentification
export const fetchCategory = async () => {
  try {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_APP_URL}/api/category`,
      {
        method: "GET",
        headers: { "Content-Type": "application/json" },
      }
    );

    if (!response.ok) {
      throw new Error("Erreur lors de la récupération des catégories");
    }

    const data = await response.json();
    return JSON.parse(JSON.stringify(data.category || []));
  } catch (error) {
    console.error("Erreur dans fetchCategory:", error);
    return [];
  }
};

export const postCategory = async (body: any) => {
  try {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_APP_URL}/api/category`,
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(body),
      }
    );

    if (!response.ok) {
      const error = await response.json();
      throw new Error(error.error || "Erreur lors de la création de la catégorie");
    }

    return await response.json();
  } catch (error) {
    console.error("Erreur dans postCategory:", error);
    throw error;
  }
};

export const putCategory = async (body: any) => {
  try {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_APP_URL}/api/category/${body.id}`,
      {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(body.body),
      }
    );

    if (!response.ok) {
      const error = await response.json();
      throw new Error(error.error || "Erreur lors de la mise à jour de la catégorie");
    }

    return await response.json();
  } catch (error) {
    console.error("Erreur dans putCategory:", error);
    throw error;
  }
};

export const deleteCategory = async (id: string) => {
  try {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_APP_URL}/api/category/${id}`,
      {
        method: "DELETE",
        headers: { "Content-Type": "application/json" },
      }
    );

    if (!response.ok) {
      const error = await response.json();
      throw new Error(error.error || "Erreur lors de la suppression de la catégorie");
    }

    return await response.json();
  } catch (error) {
    console.error("Erreur dans deleteCategory:", error);
    throw error;
  }
};

