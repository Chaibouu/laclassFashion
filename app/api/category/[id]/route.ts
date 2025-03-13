import { Description } from '@radix-ui/react-dialog';
import { db } from "@/lib/db";
import { authorize } from "@/settings/authorization";
import { NextRequest, NextResponse } from "next/server";

export async function GET(req: NextRequest) {
  const authError = await authorize(req, "/api/category/:id");
  if (authError) return authError;

  const id = req.nextUrl.pathname.split("/").pop();

  if (!id) {
    return NextResponse.json(
      { error: "L'identifiant de la categorie est requis" },
      { status: 400 }
    );
  }

  try {
    const category = await db.category.findFirst({
      where: {
        id,
        isDeleted: false, // Ne rechercher que parmi les catégorie non supprimés
      },
      select: {
        id: true,
        name: true,
      },
    });

    if (!category) {
      return NextResponse.json(
        { error: "categorie non trouvé ou supprimé" },
        { status: 404 }
      );
    }

    return NextResponse.json({ category }, { status: 200 });
  } catch (error) {
    console.error("Erreur lors de la récupération des categories :", error);
    return NextResponse.json({ error: "Erreur serveur" }, { status: 500 });
  }
}

export async function PUT(req: NextRequest) {
  const authError = await authorize(req, "/api/category/:id");
  if (authError) return authError;

  const id = req.nextUrl.pathname.split("/").pop();

  if (!id) {
    return NextResponse.json(
      { error: "L'identifiant de la categorie est requis" },
      { status: 400 }
    );
  }

  try {
    // const body = await req.json();
    // let { name } = body;
    const { name } = await req.json();

    if (!name || typeof name !== "string") {
      return NextResponse.json(
        { error: "Le nom est requis et doit être une chaîne de caractères" },
        { status: 400 }
      );
    }

    const CategoryExists = await db.category.findFirst({
      where: {
        id,
        isDeleted: false,
      },
    });

    if (!CategoryExists) {
      return NextResponse.json(
        { error: "categorie non trouvé ou supprimé" },
        { status: 404 }
      );
    }

    const category = await db.category.update({
      where: { id },
      data: {
        name,
      },
    });

    return NextResponse.json(
      { message: "categorie mis à jour avec succès", category },
      { status: 200 }
    );
  } catch (error) {
    console.error("Erreur lors de la mise à jour de la categorie :", error);
    return NextResponse.json({ error: "Erreur serveurrrrr" }, { status: 500 });
  }
}

export async function DELETE(req: NextRequest) {
  const authError = await authorize(req, "/api/category/:id");
  if (authError) return authError;

  const id = req.nextUrl.pathname.split("/").pop();

  if (!id) {
    return NextResponse.json(
      { error: "L'identifiant de la categorie est requis" },
      { status: 400 }
    );
  }

  try {
    const CategoryExists = await db.category.findFirst({
      where: {
        id,
        isDeleted: false,
      },
    });

    if (!CategoryExists) {
      return NextResponse.json(
        { error: "categorie non trouvé ou déjà supprimé" },
        { status: 404 }
      );
    }

    const category = await db.category.update({
      where: { id },
      data: { isDeleted: true },
    });

    return NextResponse.json(
      { message: "categorie supprimé avec succès", category },
      { status: 200 }
    );
  } catch (error) {
    console.error("Erreur lors de la suppression logique de la categorie :", error);
    return NextResponse.json({ error: "Erreur serveur" }, { status: 500 });
  }
}
