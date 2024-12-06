import { z } from "zod";

// Enum TypeScript correspondant à TypeActe dans Prisma
export enum TypeActe {
  PRIMITIF = "PRIMITIF",
  TRANSFERT = "TRANSFERT",
  CISSION = "CISSION",
  DUPLICATA = "DUPLICATA",
  REPRISE = "REPRISE",
}

// Enum Zod pour validation
const acteTypeEnum = z.nativeEnum(TypeActe, {
  required_error: "Le type d'acte est requis", // Message d'erreur si non renseigné
});
export const ActeCessionSchema = z.object({
  typeActe: acteTypeEnum,
  numeroClassement: z
    .number({
      message: "Le numéro de classement est requis et doit être un chiffre",
    })
    .int()
    .min(1, "Le numéro de classement doit comporter omoins 1 chiffre"), // Update to expect a number
  nomLotissement: z.string({
    message: "Le nom du lotissement requis",
  }),
  numeroIlot: z.string({
    message: "Le numéro de l'ilot est requis",
  }),
  parcelle: z.string({
    message: "Le numéro ou lettre de parcelle est requis",
  }),
  superficie: z.number({
    message: "La superficie est requise",
  }),
  dateSignature: z.date({
    required_error: "La date de signature est requise",
  }),
});

export const ActeCessionUpdateSchema = ActeCessionSchema.partial();
