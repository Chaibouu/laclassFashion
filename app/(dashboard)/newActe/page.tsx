import React from 'react'
import { cookies } from 'next/headers'
import ActeForm from '@/components/acteForm/ActeForm'





const page = async () => {

  const cookieStore = await cookies()
  const accessToken = cookieStore.get('accessToken')
  const refreshToken = cookieStore.get('refreshToken')
   


  return (
    <div>
      <h1 className='font-bold text-4xl text-center mb-10'>Ajouter un nouvel acte</h1>
      <ActeForm accessToken={accessToken} refreshToken={refreshToken} />
    </div>
  )
}

export default page