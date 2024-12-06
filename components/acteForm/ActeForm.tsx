'use client'
import { format } from "date-fns"
import { CalendarIcon } from "lucide-react"
import { fr } from 'date-fns/locale'
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { Calendar } from "@/components/ui/calendar"
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover"
import { useMutation, useQueryClient } from '@tanstack/react-query'
import React, { useState } from 'react'
import { useForm, SubmitHandler } from "react-hook-form"
import { toast } from 'sonner'
import { RequestCookie } from 'next/dist/compiled/@edge-runtime/cookies'



type Inputs = {
    typeActe: string
    numeroClassement: number
    nomLotissement: string
    numeroIlot: string
    parcelle: string
    superficie:number
    dateSignature:Date | undefined
  
  }

  interface Props {
    accessToken:RequestCookie | undefined
    refreshToken:RequestCookie | undefined
  }
  
  const ActeForm:React.FC<Props> = ({accessToken, refreshToken}) => {
    const queryClient = useQueryClient();
    const [load, setLoad] = useState(false)
    const [date, setDate] = React.useState<Date>()

    const create = async (body: {
        typeActe: string;
        numeroClassement: number;
        nomLotissement: string;
        numeroIlot: string;
        parcelle: string;
        superficie: number;
        dateSignature: Date | undefined;
      }) => {
        const res = await fetch('/api/acte-cession', {
          method: 'POST',
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
     mutationFn: create,
     onSuccess: () => {
       queryClient.invalidateQueries({ queryKey: ['actes'] });
     setLoad(false)
     setValue('typeActe', '')
     setValue('numeroClassement',0)
     setValue('nomLotissement','')
     setValue('numeroIlot','')
     setValue('parcelle','')
     setValue('superficie',0)
     setDate(undefined)
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
     setValue,
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
    <form onSubmit={handleSubmit(onSubmit)}>

      <div className='grid grid-cols-1 md:grid-cols-2'>
      <div className='flex flex-col w-5/6 mx-auto m-4 gap-1'>
        <label className={errors.typeActe ? 'text-red-500' : ''}>Types des actes de cessions
        </label>
        <select className={`p-2 rounded ${ errors.typeActe ?'border-2 border-red-500' : ''}`}  {...register("typeActe",{ required: true})}>
          <option value="">Selectionnez le type d'actes de cessions</option>
          <option value="PRIMITIF">Primitif</option>
          <option value="TRANSFERT">Transfert</option>
          <option value="CISSION">Cission</option>
          <option value="DUPLICATA">Duplicata</option>
          <option value="REPRISE">Reprise</option>
        </select>
        {errors.typeActe && <span className='text-red-500'>Veuillez selectionnez le type d'actes de cessions</span>}
      </div>

      {/* <Select options={options} /> */}
      
      <div className='flex flex-col w-5/6 mx-auto m-4 gap-1'>
        <label className={errors.numeroClassement ? 'text-red-500' : ''}>Numero d'ordre de classement</label>
        <input type='number' {...register("numeroClassement",{ required: true})} className={`p-2 rounded ${ errors.numeroClassement ?'border-2 border-red-500' : ''}`}/>
        {errors.numeroClassement && <span className='text-red-500'>Numero d'ordre de classement est obligatoire</span>}
      </div>

      <div className='flex flex-col w-5/6 mx-auto m-4 gap-1'>
        <label className={errors.nomLotissement ? 'text-red-500' : ''}>Nom du lotissment</label>
        <input {...register("nomLotissement",{ required: true})} className={`p-2 rounded ${ errors.nomLotissement ?'border-2 border-red-500' : ''}`}/>
        {errors.nomLotissement && <span className='text-red-500'>Nom du lotissment est obligatoire</span>}
      </div>


      
      <div className='flex flex-col w-5/6 mx-auto m-4 gap-1'>
        <label className={errors.numeroIlot ? 'text-red-500' : ''}>Numeor de l'ilot</label>
        <input {...register("numeroIlot",{ required: true})} className={`p-2 rounded ${ errors.numeroIlot ?'border-2 border-red-500' : ''}`}/>
        {errors.numeroIlot && <span className='text-red-500'>Numeor de l'ilot est obligatoire</span>}
      </div>
      

      <div className='flex flex-col w-5/6 mx-auto m-4 gap-1'>
        <label className={errors.parcelle ? 'text-red-500' : ''}>Numero / lettre de parcelle</label>
        <input {...register("parcelle",{ required: true})} className={`p-2 rounded ${ errors.parcelle ?'border-2 border-red-500' : ''}`}/>
        {errors.parcelle && <span className='text-red-500'>Numero / lettre de parcelle est obligatoire</span>}
      </div>

      <div className='flex flex-col w-5/6 mx-auto m-4 gap-1'>
        <label className={errors.superficie ? 'text-red-500' : ''}>superficie du terrain</label>
        <input type='number' {...register("superficie",{ required: true})} className={`p-2 rounded ${ errors.superficie ?'border-2 border-red-500' : ''}`}/>
        {errors.superficie && <span className='text-red-500'>superficie du terrain est obligatoire</span>}
      </div>
      
      <div className='flex flex-col w-5/6 mx-auto m-4 gap-1'>
        <label className={errors.dateSignature ? 'text-red-500' : ''}>date de signature</label>
        {/* <input {...register("dateSignature",{ required: true})} className='p-2 rounded'/> */}


        <Popover>
      <PopoverTrigger asChild>
        <Button
          
          className={cn(
            "w-full justify-start text-left font-normal bg-white",
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
          onSelect={setDate}
          initialFocus
        />
      </PopoverContent>
    </Popover>
        {errors.dateSignature && <span className='text-red-500'>date de signature est obligatoire</span>}
      </div>
      </div>
      
      <div className='flex justify-end w-5/6 mx-auto'>
      <button disabled={load} type="submit" className={`border-4 p-4 rounded-lg m-4 text-xl ${ load ? 'bg-green-200' : 'bg-green-500'} text-white`}>{ load ? '....' : 'Envoyer'}</button>
      </div>
    </form>
  )
}

export default ActeForm
