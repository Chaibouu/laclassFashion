"use client"
import React from 'react'
import { Button } from "@/components/ui/button"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { ActeCession } from '@prisma/client'
import { RequestCookie } from 'next/dist/compiled/@edge-runtime/cookies'
import { useMutation, useQueryClient } from '@tanstack/react-query'
import { toast } from 'sonner'



const DeleteActe = ({acte, accessToken}:{acte:ActeCession, accessToken: RequestCookie | undefined}) => {
    const queryClient = useQueryClient();
    const [load, setLoad] = React.useState(false)


    const del = async (id:string) => {
        const res = await fetch(`/api/acte-cession/${id}`, {
          method: 'DELETE',
          headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${accessToken?.value}`,
          },
        });
      
        if (!res.ok) {
          throw new Error('Failed to delete acte');
        }
        
        return res.json();
      };
      

   const mutation = useMutation({
     mutationFn: del,
     onSuccess: () => {
       queryClient.invalidateQueries({ queryKey: ['actes'] });
     setLoad(false)
       toast('Acte suprimer avec succès', {
         position: 'top-right',
       });
     },
     onError: (error) => {
     setLoad(false)
       toast(`Erreur : ${error.message}`, {
         position: 'top-right',
       });
     },
   });

   const handleDelete = () => {
    setLoad(true)
    mutation.mutate(acte.id)
   }


  return (
    <Dialog>
    <DialogTrigger asChild>
      <Button >Suprimer</Button>
    </DialogTrigger>
    <DialogContent className="sm:max-w-[425px]">
      <DialogHeader>
        <DialogTitle>Suprimer</DialogTitle>
        <DialogDescription>
          etes vous sure de vouloir suprimer l'acte N° {acte.numeroClassement} du lotissment {acte.nomLotissement} ?
        </DialogDescription>
      </DialogHeader>
      
      <DialogFooter>
        <Button type="submit" onClick={handleDelete} className='bg-red-400 text-white'>{ load ? '....' : 'Suprimer'}</Button>
      </DialogFooter>
    </DialogContent>
  </Dialog>
  )
}

export default DeleteActe
