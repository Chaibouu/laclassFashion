import {db} from '@/lib/db'
import { ActeCessionSchema } from '@/schemas/acteCession';




const BASE_URL = process.env.NEXT_PUBLIC_APP_URL;

// export async function fetchActes() {

//     const res = await fetch(`/api/acte-cession`,{
//       headers: {
//         'Content-Type': 'application/json',
//         'Authorization': `Bearer ${accessToken?.value}`,
//       },
//     })
//     return res.json()
// }

export async function getActes() {
    try {
        const actesCession = await db.acteCession.findMany({
          where: { isDeleted: false },
        });
        return actesCession;
      } catch (error) {
        console.error(
          "Erreur lors de la récupération des actes de cession:",
          error
        );
        return { error: "Erreur serveur" };
      }
}






