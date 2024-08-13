"use client";

import ProfileCard from '@/components/custom/profile-card'
import { AuthData } from '@/types/authDataTypes';
import React, { useEffect, useState } from 'react'

export default function ProfileView() {
  const [userDetails, setUserDetails] = useState<AuthData | null>();

    const profileDetails = {
        name: 'Michael Mei', email: 'michaelmei@university.com', status: 'Active', id: '244002024', faculty: 'Engineering ', department: 'Civil Engineering'
    }


    useEffect(() => {
      const storageData = sessionStorage.getItem('userData');
      if (storageData) {
          setUserDetails(JSON.parse(storageData));
      }
  }, [])


  return (
    <div>
       <div className='flex justify-center'>
         <h1 className='text-[32px] font-[900] uppercase'>{userDetails?.account_role}{" "}Profile</h1>
       </div>
        <div className="mt-[3rem]">
            <ProfileCard profileDetails={profileDetails} />
        </div>
    </div>
  )
}
