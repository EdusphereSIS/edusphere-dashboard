"use client";

import { AuthData } from '@/types/authDataTypes';
import Image from 'next/image';
import React, { useEffect, useState } from 'react'


type ProfileDetailsType = {
    profileDetails: {
        name: string;
        email: string;
        status: string;
        id: string;
        faculty: string;
        department: string;
    }
}

export default function ProfileCard({ profileDetails }:ProfileDetailsType) {
    const [userDetails, setUserDetails] = useState<AuthData | null>();


    useEffect(() => {
        const storageData = sessionStorage.getItem('userData');
        if (storageData) {
            setUserDetails(JSON.parse(storageData));
        }
    }, [])

    console.log("authData account role>>>", userDetails?.account_role);
    const isAdminRole = userDetails?.account_role === 'ADMIN' as undefined | boolean | unknown
    const isStaffRole = userDetails?.account_role === 'STAFF' as undefined | boolean | unknown
    const isStudentRole = userDetails?.account_role === 'STUDENT' as undefined | boolean | unknown

  return (
    <div className="flex h-[400px] w-[800px] justify-between gap-10">
        <div className="w-[50%]">
            <div className=' flex gap-1'>
                <p className='font-bold text-[20px]'>Name:</p>
                <p className='text-[19px]'>{ userDetails?.first_name}{''}{userDetails?.last_name}</p>
            </div>
            <div className='flex gap-1'>
                <p className='font-bold text-[20px]'>Email Address:</p>
                <p className=' text-[19px]'>{ userDetails?.email}</p>
            </div>
            <div className='flex gap-1'>
                <p className='font-bold text-[20px]'>Admin Status</p>
                <p className='text-[19px]'>{profileDetails.status}</p>
            </div>
            <div className='flex gap-1'>
                <p className='font-bold text-[20px]'>Account Role:</p>
                <p className='text-[19px]'>{userDetails?.account_role}</p>
            </div>
                {userDetails?.job_role && (
                    <div className='flex gap-1'>
                        <p className='font-bold text-[20px]'>Job Role:</p>
                        <p className='text-[19px]'>{userDetails?.job_role}</p>
                    </div>
                )}  
            <div className=' flex gap-1'>
            {isAdminRole && (
                <>
                  <p className='font-bold text-[20px]'>Admin ID</p>
                  <p className='text-[19px]'>{profileDetails.id}</p>
               </> 
               )} 
                {isStudentRole && (
                <>
                  <p className='font-bold text-[20px]'>Student ID</p>
                  <p className='text-[19px]'>{profileDetails.id}</p>
                </> 
               )} 
            </div>
            {isStudentRole && (
                <div className=' flex gap-1'>
                      <p className='font-bold text-[20px]'>Program</p>
                      <p className='text-[19px]'>{"Bachelor's Degree"}</p>
                </div> 
            )}
            {isStudentRole && (
                <div className=' flex gap-1'>
                      <p className='font-bold text-[20px]'>Academic Year:</p>
                      <p className='text-[19px]'>1</p>
                </div> 
            )}
            <div className=' flex gap-1'>
               {isStaffRole && (
                <>
                  <p className='font-bold text-[20px]'>Faculty</p>
                  <p className='text-[19px]'>{profileDetails.faculty}</p>
                </> 
               )} 
            </div>
            <div className=' flex gap-1'>
            {isStaffRole && (
                <>
                  <p className='font-bold text-[19px]'>Department</p>
                  <p className='text-[19px]'>{profileDetails.department}</p>
               </> 
            )} 
               
            </div>
        </div>
        <div className="w-[50%]">
           {isAdminRole && <Image src="/admin-profile.png" alt="profile-image" height={500} width={500}/>}
           {isStaffRole  && <Image src="/staff-profile.jpg" alt="profile-image" height={500} width={500}/>} 
           {isStudentRole && <Image src="/student-profile.png" alt="profile-image" height={500} width={500}/>} 
        </div> 
    </div>
  )
}
