'use server'

// Actions simplifiées pour les produits - site vitrine sans authentification
export const fetchProduit = async () => {
  try {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_APP_URL}/api/produit`,
      {
        method: "GET",
        headers: { "Content-Type": "application/json" },
      }
    );

    if (!response.ok) {
      throw new Error("Erreur lors de la récupération des produits");
    }

    const data = await response.json();
    return JSON.parse(JSON.stringify(data.produit || []));
  } catch (error) {
    console.error("Erreur dans fetchProduit:", error);
    return [];
  }
};

export const postProduit = async (body: any) => {
  try {
    const formData = new FormData();
    Object.keys(body).forEach((key) => {
      if (body[key] !== undefined) {
        formData.append(key, body[key]);
      }
    });

    const response = await fetch(
      `${process.env.NEXT_PUBLIC_APP_URL}/api/produit`,
      {
        method: "POST",
        body: formData,
      }
    );

    if (!response.ok) {
      const error = await response.json();
      throw new Error(error.error || "Erreur lors de la création du produit");
    }

    return await response.json();
  } catch (error) {
    console.error("Erreur dans postProduit:", error);
    throw error;
  }
};

export const putProduit = async ({ body, id }: { body: any; id: string }) => {
  try {
    const formData = new FormData();
    formData.append("id", id);
    Object.keys(body).forEach((key) => {
      if (body[key] !== undefined && body[key] !== null) {
        formData.append(key, body[key]);
      }
    });

    const response = await fetch(
      `${process.env.NEXT_PUBLIC_APP_URL}/api/produit/${id}`,
      {
        method: "PUT",
        body: formData,
      }
    );

    if (!response.ok) {
      const error = await response.json();
      throw new Error(error.error || "Erreur lors de la mise à jour du produit");
    }

    return await response.json();
  } catch (error) {
    console.error("Erreur dans putProduit:", error);
    throw error;
  }
};

export const deleteProduit = async (id: string) => {
  try {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_APP_URL}/api/produit/${id}`,
      {
        method: "DELETE",
        headers: { "Content-Type": "application/json" },
      }
    );

    if (!response.ok) {
      const error = await response.json();
      throw new Error(error.error || "Erreur lors de la suppression du produit");
    }

    return await response.json();
  } catch (error) {
    console.error("Erreur dans deleteProduit:", error);
    throw error;
  }
};

