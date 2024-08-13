"use client"

import { AuthData } from '@/types/authDataTypes'
import React, { useEffect, useState } from 'react'





export default function Dashboard() {
  const [userDetails, setUserDetails] = useState<AuthData | null>();
  

  const anouncementData = [
     {announcement: '1. Course Approval Pending', status: 'Unread'},
     {announcement: '2. Public Holiday: Eid - el - fitr', status: 'Read'},
     {announcement: '3. Teacher’s forum', status: 'Read'}
  ]


 console.log('authUser from dashboard comp>>', userDetails)

 useEffect(() => {
  const storageData = sessionStorage.getItem('userData');
  if (storageData) {
      setUserDetails(JSON.parse(storageData));
  }
}, [])
 
  return (
    <div className=' text-black  mt-[2.4rem] h-[400px] w-[800px] '>
       <div className='flex justify-center'>
         <h1 className='text-[32px] font-[900]'>Annoucement</h1>
       </div>
       <div className=''>
         {anouncementData.map(ann => (
            <div className=' flex justify-between px-4 mt-5' key={ann.announcement}>
              <p className='text-[24px] font-[700]'>{ann.announcement}</p>
              <p className={`${ann.status === 'Unread' ? 'text-[#FF0000]' : 'text-[#AC6CFE]' } font-[16px]`}>{ann.status}</p>
            </div>
          ))}
       </div>
      <div className='h-[80vh] flex items-end'>
        <div className='w-[800px] h-[400px] flex justify-center items-center'>
            <p className="text-[24px] font-[900]">Calendar to Include marked course periods</p>
        </div>
      </div>
      
    </div>
  )
}
