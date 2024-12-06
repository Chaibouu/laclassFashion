"use client";

import { RequestCookie } from 'next/dist/compiled/@edge-runtime/cookies'

import { DataTable } from "@/components/data-table";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { toast } from "sonner";
import { MixerHorizontalIcon } from "@radix-ui/react-icons"
import { ActeCession } from "@prisma/client";
import DeleteActe from '../deleteActe/DeleteActe';
import UpdateActe from '../updateActe/UpdateActe';

interface Patient {
  id: string;
  firstName: string;
  lastName: string;
  dob: Date;
  phone: string;
  medicalRecord: string;
  address: string;
  email: string;
}

interface TableProps {
  title: string;
  subTitle: string;
  actes: ActeCession[];
  accessToken:RequestCookie | undefined
}



// Fonction de récupération des patients (simulée)


// Fonction de mise à jour d'un patient (simulée)
const updatePatient = async (patient: Patient): Promise<void> => {
  return new Promise((resolve) => setTimeout(() => resolve(), 500));
};

// Fonction de suppression d'un patient (simulée)
const deletePatient = async (id: string): Promise<void> => {
  return new Promise((resolve) => setTimeout(() => resolve(), 500));
};

export default function PatientTable({
  title,
  subTitle,
  actes ,
  accessToken
}: TableProps) {
  const queryClient = useQueryClient();

  const fetchActes =  async() => {

    const res = await fetch(`/api/acte-cession`,{
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${accessToken?.value}`,
      },
    })
    return res.json()
}
  
  // Récupération des données des patients
  const { data } = useQuery({
    queryKey: ["actes"],
    queryFn: fetchActes,
    initialData: actes,
  });

  // Définition des colonnes pour DataTable
  const columns = [
    {
      accessorKey: "typeActe",
      header: "type d'acte de cession",
    },
    {
      accessorKey: "numeroClassement",
      header: "Numero d'ordre de classement",
    },
    {
      accessorKey: "nomLotissement",
      header: "Nom du lotissment",
    },
    {
      accessorKey: "numeroIlot",
      header: "Numeor de l'ilot",
    },
    {
      accessorKey: "parcelle",
      header: "Numero / lettre de parcelle",
    },
    {
      accessorKey: "superficie",
      header: "superficie",
    },
    {
      accessorKey: "dateSignature",
      header: "Date de signature",
      cell: ({ row }: { row: { original: ActeCession } }) => (
        <span>{new Date(row.original.dateSignature).toLocaleDateString()}</span>
      ),
    },
  ];

  // Configuration des mutations
  const ActionButtons = ({ row }: { row: any }) => {
    const mutations = [
      {
        label: <UpdateActe acte={row.original} accessToken={accessToken} />,
        mutationFn: () => updatePatient(row.original),
        onSuccessMessage: "Patient mis à jour avec succès.",
        onErrorMessage: "Erreur lors de la mise à jour du patient.",
      },
      {
        label: <DeleteActe acte={row.original} accessToken={accessToken} />,
        mutationFn: () => deletePatient(row.original),
        onSuccessMessage: "Patient supprimé avec succès.",
        onErrorMessage: "Erreur lors de la suppression du patient.",
      },
    ];
  
    return (
      <div className="flex space-x-2">
        {mutations.map(({ label, mutationFn, onSuccessMessage, onErrorMessage }) => (
          <button
            key={onSuccessMessage}
            onClick={async () => {
              try {
                await mutationFn();
                toast.success(onSuccessMessage, { position: 'top-right' });
              } catch (error) {
                toast.error(onErrorMessage, { position: 'top-right' });
              }
            }}
          >
            {label}
          </button>
        ))}
      </div>
    );
  };
  

  return (
    <div className="shadow border h-full flex-1 flex-col space-y-8 p-8 ">
      <div className="flex items-center justify-between space-y-2">
        <div>
          <h2 className="text-2xl font-bold tracking-tight">{title}</h2>
          <p className="text-muted-foreground text-nt__primary">{subTitle}</p>
        </div>
      </div>
      <DataTable<ActeCession>
        data={data}
        columns={columns}
        queryKey="patient"
        ActionButtons={ActionButtons}
      />
    </div>
  );
}
