import PatientTable from '@/components/table/PatientTable'
import { getActes } from '@/utils/acte-cession';
import { ActeCession } from '@prisma/client';
import { useQuery } from '@tanstack/react-query';
import { cookies } from 'next/headers';
import React from 'react'

const page = async () => {
  
  const actes = await getActes()
  const cookieStore = await cookies()
  const accessToken = cookieStore.get('accessToken')
  


  return (
    <div>
      <PatientTable title={'Actes de cession'} subTitle={''} actes={actes} accessToken={accessToken}/>
    </div>
  )
}

export default page


