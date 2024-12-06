"use client"
import React from 'react'
import { Button } from "@/components/ui/button"
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { format } from "date-fns"
import { CalendarIcon } from "lucide-react"
import { fr } from 'date-fns/locale'
import { cn } from "@/lib/utils"
import { Calendar } from "@/components/ui/calendar"
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover"
import { ActeCession } from '@prisma/client'
import { RequestCookie } from 'next/dist/compiled/@edge-runtime/cookies'
import { useMutation, useQueryClient } from '@tanstack/react-query'
import { toast } from 'sonner'
import { MixerHorizontalIcon } from "@radix-ui/react-icons"
import { useForm, SubmitHandler } from "react-hook-form"


type Inputs = {
    typeActe: string
    numeroClassement: number
    nomLotissement: string
    numeroIlot: string 
    parcelle: string
    superficie:number
    dateSignature:Date
  
  }


const UpdateActe = ({acte, accessToken}:{acte:ActeCession, accessToken: RequestCookie | undefined}) => {
    const queryClient = useQueryClient();
    const [load, setLoad] = React.useState(false)
    const [date, setDate] = React.useState<Date>(new Date(acte.dateSignature))


    const update = async (body: {
        typeActe: string;
        numeroClassement: number;
        nomLotissement: string;
        numeroIlot: string;
        parcelle: string;
        superficie: number;
        dateSignature: Date;
      }) => {
        const res = await fetch(`/api/acte-cession/${acte.id}`, {
          method: 'PUT',
          headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${accessToken?.value}`,
          },
          body: JSON.stringify(body),
        });
      
        if (!res.ok) {
          throw new Error('Failed to create acte');
        }
        
        return res.json();
      };
      
      const mutation = useMutation({
        mutationFn: update,
        onSuccess: () => {
          queryClient.invalidateQueries({ queryKey: ['actes'] });
        setLoad(false)
          toast('Acte ajouté avec succès', {
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

      const {
        register,
        handleSubmit,
        formState: { errors },
      } = useForm<Inputs>()
    
    
      const onSubmit: SubmitHandler<Inputs> = async (data) => {
        setLoad(true)
        const body = {
          typeActe: data.typeActe,
          numeroClassement: Number(data.numeroClassement),
          nomLotissement: data.nomLotissement,
          numeroIlot: data.numeroIlot,
          parcelle: data.parcelle,
          superficie: Number(data.superficie),
          dateSignature: date,
        };
      
        try {
          await mutation.mutateAsync(body);
          console.log(typeof(body.numeroClassement), typeof(body.superficie))
          console.log("Succès de la création de l'acte :", body);
        setLoad(false)
    
        } catch (error) {
        setLoad(false)
          toast.error(`Erreur : ${error}`, {
            position: 'top-right',
          });
        }
      };

  


  return (
    <Dialog>
    <DialogTrigger asChild>
      <Button ><MixerHorizontalIcon className="h-4 w-4" /></Button>
    </DialogTrigger>
    <DialogContent className="max-w-[425px]  md:max-w-[600px]">
      <DialogHeader>
        <DialogTitle>Modifier</DialogTitle>
      </DialogHeader>
      
      <form onSubmit={handleSubmit(onSubmit)}>

      <div className='grid grid-cols-1 md:grid-cols-2'>
      <div className='flex flex-col w-5/6 mx-auto m-2 gap-1'>
        <label>Types des actes de cessions
        </label>
        <select className='p-3 rounded'  defaultValue={acte.typeActe} {...register("typeActe",{ required: true})}>
          <option value="">Selectionnez le type d'actes de cessions</option>
          <option value="PRIMITIF">Primitif</option>
          <option value="TRANSFERT">Transfert</option>
          <option value="CISSION">Cission</option>
          <option value="DUPLICATA">Duplicata</option>
          <option value="REPRISE">Reprise</option>
        </select>
        {errors.typeActe && <span>Veuillez selectionnez le type d'actes de cessions</span>}
      </div>

      {/* <Select options={options} /> */}
      
      <div className='flex flex-col w-5/6 mx-auto m-2 gap-1'>
        <label>Numero d'ordre de classement</label>
        <input type='number' defaultValue={acte.numeroClassement} {...register("numeroClassement",{ required: true})} className='p-2 rounded'/>
        {errors.numeroClassement && <span>Numero d'ordre de classement est obligatoire</span>}
      </div>

      <div className='flex flex-col w-5/6 mx-auto m-2 gap-1'>
        <label>Nom du lotissment</label>
        <input defaultValue={acte.nomLotissement} {...register("nomLotissement",{ required: true})} className='p-2 rounded'/>
        {errors.nomLotissement && <span>Nom du lotissment est obligatoire</span>}
      </div>


      
      <div className='flex flex-col w-5/6 mx-auto m-4 gap-1'>
        <label>Numeor de l'ilot</label>
        <input defaultValue={acte.numeroIlot} {...register("numeroIlot",{ required: true})} className='p-2 rounded'/>
        {errors.numeroIlot && <span>Numeor de l'ilot est obligatoire</span>}
      </div>
      

      <div className='flex flex-col w-5/6 mx-auto m-2 gap-1'>
        <label>Numero / lettre de parcelle</label>
        <input defaultValue={acte.parcelle} {...register("parcelle",{ required: true})} className='p-2 rounded'/>
        {errors.parcelle && <span>Numero / lettre de parcelle est obligatoire</span>}
      </div>

      <div className='flex flex-col w-5/6 mx-auto m-2 gap-1'>
        <label>superficie du terrain</label>
        <input type='number' defaultValue={acte.superficie} {...register("superficie",{ required: true})} className='p-2 rounded'/>
        {errors.superficie && <span>superficie du terrain est obligatoire</span>}
      </div>
      
      <div className='flex flex-col w-5/6 mx-auto m-2 gap-1'>
        <label>date de signature</label>
        {/* <input {...register("dateSignature",{ required: true})} className='p-2 rounded'/> */}


        <Popover>
      <PopoverTrigger asChild>
        <Button
          
          className={cn(
            "w-full justify-start text-left font-normal bg-white text-black",
            !date && "text-muted-foreground"
          )}
        >
          <CalendarIcon />
          {date ? format(date, "dd-MM-yyy") : <span>Selectionnez la date</span>}
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-auto p-0">
        <Calendar
          mode="single"
          locale={fr}
          selected={date}
          onSelect={()=>setDate}
          initialFocus
        />
      </PopoverContent>
    </Popover>
        {errors.dateSignature && <span>date de signature est obligatoire</span>}
      </div>
      </div>
      
      <div className='flex justify-end w-5/6 mx-auto'>
      <button disabled={load} type="submit" className={`border-4 p-4 rounded-lg m-4 text-xl ${ load ? 'bg-green-200' : 'bg-green-500'} text-white`}>{ load ? '....' : 'Envoyer'}</button>
      </div>
    </form>
      
    </DialogContent>
  </Dialog>
  )
}

export default UpdateActe
