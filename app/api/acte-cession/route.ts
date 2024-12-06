import { NextResponse } from "next/server";
import { ActeCessionSchema } from "@/schemas/acteCession";
import { db } from "@/lib/db";

// Création d'un acte de cession
export async function POST(req: Request) {
  try {
    const jsonData = await req.json();
    console.log('json data',jsonData)
    // Convertir la date en objet Date si elle est au format chaîne
    if (jsonData.dateSignature) {
      jsonData.dateSignature = new Date(jsonData.dateSignature);
    }
    const parsedData = ActeCessionSchema.safeParse(jsonData);

    if (!parsedData.success) {
      const errors = parsedData.error.issues
        .map((issue) => issue.message)
        .join(", ");
      return NextResponse.json({ error: errors }, { status: 400 });
    }

    // Vérification de l'unicité de numeroClassement
    const existingActe = await db.acteCession.findUnique({
      where: { numeroClassement: parsedData.data.numeroClassement },
    });

    if (existingActe) {
      return NextResponse.json(
        { error: "Ce numéro de classement est déjà attribué" },
        { status: 400 }
      );
    }

    const acteCession = await db.acteCession.create({
      data: parsedData.data,
    });
    return NextResponse.json(acteCession, { status: 201 });
  } catch (error) {
    console.error("Erreur lors de la création de l'acte de cession:", error);
    return NextResponse.json({ error: "Erreur serveur" }, { status: 500 });
  }
}

// Récupération de tous les actes non supprimés
export async function GET() {
  try {
    const actesCession = await db.acteCession.findMany({
      where: { isDeleted: false },
    });
    return NextResponse.json(actesCession);
  } catch (error) {
    console.error(
      "Erreur lors de la récupération des actes de cession:",
      error
    );
    return NextResponse.json({ error: "Erreur serveur" }, { status: 500 });
  }
}
