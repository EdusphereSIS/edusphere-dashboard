"use client";

import { createStaffAccount } from '@/api/admin'
import RegisterationForm from '@/components/custom/register-form'
import { nanoid } from 'nanoid'
import React, { useEffect, useState } from 'react'
import { toast } from 'react-toastify'
import { AuthData } from "@/types/authDataTypes"





export default function CreateAccount() {
  const [email, setEmail] = useState<string>('');
  const [firstName, setFirstName] = useState<string>('');
  const [lastName, setLastName] = useState<string>('');
  const [genderValue, setGenderValue] = useState<string>('');
  const [roleValue, setRoleValue] = useState<string>('');
  const [isRegistering, setIsRegistering] = useState<boolean>(false);
  const [userDetails, setUserDetails] = useState<AuthData | null>();
  
  const notify = (message: string) => {
    toast(message);
};

console.log('access_token>>>', userDetails?.access_token)
console.log('userDetails', userDetails)
console.log('role>>>', roleValue)
console.log('gender>>', genderValue)


const handleCreateAccount = async(e:  React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setIsRegistering(true)
    try {
        const res = await createStaffAccount(userDetails?.access_token as AuthData['access_token'] , {
            staff_id:`staff${nanoid()}`,
            dept_id:`0045`,
            email:email,
            first_name:firstName,
            last_name:lastName,
            gender:genderValue,
            job_role:roleValue
        })
        if(res){
            console.log('res from staff register>>>', res)
            notify(res.data.message)
            setIsRegistering(false)
            console.log('registeration payload>>', {
                email: email,
                first_name: firstName,
                last_name: lastName,
                gender: genderValue,
                job_role: roleValue
            })

            setEmail('')
            setFirstName('')
            setLastName('')
            setRoleValue('')
            setGenderValue('')
        }
        
    }catch(e){
        console.log("couldn't create staff account>>>", e)
        setIsRegistering(false)
        toast.success('Oops wrong details please confirm inputed information!')   
    }

}


useEffect(() => {
  const storageData = sessionStorage.getItem('userData');
  if (storageData) {
      setUserDetails(JSON.parse(storageData));
  }
}, [])


  return (
    <div className=''>
       <RegisterationForm 
         handleRegister={handleCreateAccount}
         handleEmail={setEmail}
         handleFirstName={setFirstName}
         handleLastName={setLastName}
         emailValue={email}
         lastNameValue={lastName}
         firstNameValue={firstName}
         role={roleValue}
         isRegistering={isRegistering}
         handleRole={setRoleValue}
         handleGender={setGenderValue}
         gender={genderValue}
       />
    </div>
    
  )
}
