import { z } from "zod";

// We're keeping a simple non-relational schema here.
// IRL, you will have a schema for your data models.

export const userSchema = z.object({
  id: z.string(),
  createdAt: z.string(),
  firstName: z.string(),
  lastName: z.string(),
  email: z.string(),
  phoneNumber: z.string(),
  photoUrl: z.union([z.string().nullable(), z.null()]), // La propriété peut être soit une chaîne de caractères, soit null
  gender: z.enum(["MALE", "FEMALE"]),
  role: z.enum([
    "ADMIN",
    "AGENT",
    "CONTROLER",
    "RESPONSABLE",
    "STATS_MANGER",
    "DR_CITY",
  ]),
});

export const CreateAgentSchema = z.object({
  firstName: z
    .string({
      required_error: "Le prénom est obligatoire",
      invalid_type_error: "Le prénom doit être une chaîne de caractères",
    })
    .min(3, {
      message: "le prénom doit comporter au moins 3 caractères",
    }),
  lastName: z
    .string({
      required_error: "Le nom est obligatoire",
      invalid_type_error: "Le nom doit être une chaîne de caractères",
    })
    .min(3, {
      message: "le nom doit comporter au moins 3 caractères",
    }),
  email: z
    .string({
      required_error: "L'email est obligatoire",
      invalid_type_error: "L'email doit être une chaîne de caractères",
    })
    .email({
      message: "L'adresse email doit être valide",
    }),
  phone: z
    .string({
      required_error: "Le numéro de téléphone est obligatoire",
      invalid_type_error: "Le numéro de téléphone doit être une chaîne de caractères",
    })
    .min(8, {
      message: "le numéro de téléphone doit comporter au moins 8 caractères",
    }),
  departmentId: z.string({
    required_error: "Le département est requis",
  }),
  positionId: z.string({
    required_error: "Le poste est requis",
  }),
  managerId: z.string({
    invalid_type_error:"Le Manager doit être une chaîne de caractères",
  }),
  salary: z
    .string({
      required_error: "Le salaire est obligatoire",
      invalid_type_error: "Le salaire doit être une chaîne de caractères",
    })
    .min(5, {
      message: "le salaire doit comporter au moins 5 caractères",
    }),
    category: z
    .string({
      required_error: "La catégorie est obligatoire",
      invalid_type_error: "La catégorie doit être une chaîne de caractères",
    })
    .min(2, {
      message: "la catégorie doit comporter au moins 2 caractères",
    }),
  startDate: z.date({
    required_error: "Veuillez entrer une date de prise de service",
  }),
  roleId: z.string({
    required_error: "Le rôle est requis",
  }),
  insuranceRegistrationNumber: z.string({
    required_error: "Le numéro d'immatriculation d'assurance est obligatoire",
  }),
  // profilePicture: z.object({
  //   photo: ImageFileSchema,
  // }).refine(
  //   (value) => {
  //     const validImageTypes = ["image/jpeg", "image/png", "image/gif"];
  //     return validImageTypes.includes(value.photo.type);
  //   },
  //   { message: "Le fichier doit être une image de type JPEG, PNG ou GIF" }
  // ),
});

export type UserSchema = z.infer<typeof userSchema>;
