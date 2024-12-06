import { NextResponse } from "next/server";
import { ActeCessionUpdateSchema } from "@/schemas/acteCession";
import { db } from "@/lib/db";

// Récupération d'un acte de cession par ID
export async function GET(
  req: Request,
  { params }: { params: { id: string } }
) {
  try {
    const acteCession = await db.acteCession.findUnique({
      where: { id: params.id },
    });

    if (!acteCession || acteCession.isDeleted) {
      return NextResponse.json(
        { error: "Acte de cession non trouvé ou supprimé" },
        { status: 404 }
      );
    }

    return NextResponse.json(acteCession);
  } catch (error) {
    console.error(
      "Erreur lors de la récupération de l'acte de cession:",
      error
    );
    return NextResponse.json({ error: "Erreur serveur" }, { status: 500 });
  }
}

// Mise à jour d'un acte de cession par ID
export async function PUT(
  req: Request,
  { params }: { params: { id: string } }
) {
  try {
    const jsonData = await req.json();
    if (jsonData.dateSignature) {
      jsonData.dateSignature = new Date(jsonData.dateSignature);
    }
    const parsedData = ActeCessionUpdateSchema.safeParse(jsonData);

    if (!parsedData.success) {
      const errors = parsedData.error.issues
        .map((issue) => issue.message)
        .join(", ");
      return NextResponse.json({ error: errors }, { status: 400 });
    }

    const updatedActeCession = await db.acteCession.update({
      where: { id: params.id },
      data: parsedData.data,
    });

    return NextResponse.json(updatedActeCession);
  } catch (error) {
    console.error("Erreur lors de la mise à jour de l'acte de cession:", error);
    return NextResponse.json({ error: "Erreur serveur" }, { status: 500 });
  }
}

// Suppression logique d'un acte de cession par ID
export async function DELETE(
  req: Request,
  { params }: { params: { id: string } }
) {
  try {
    const acteCession = await db.acteCession.update({
      where: { id: params.id },
      data: { isDeleted: true, deletedAt: new Date() },
    });

    return NextResponse.json({
      message: "Acte de cession supprimé",
      acteCession,
    });
  } catch (error) {
    console.error("Erreur lors de la suppression de l'acte de cession:", error);
    return NextResponse.json({ error: "Erreur serveur" }, { status: 500 });
  }
}
