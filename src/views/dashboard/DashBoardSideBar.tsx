"use client";

import React, { useEffect, useState } from "react";
import { AuthData } from '../../types/authDataTypes';
import authData from "@/lib/getStorageData";
import { ChevronDown } from "lucide-react";
import { usePathname } from "next/navigation";
import AdminSideMenu from "@/components/custom/side-bars/admin-menu";
import StaffSideMenu from "@/components/custom/side-bars/staff-menu";
import StudentSideMenu from "@/components/custom/side-bars/student-menu";





export default function DashBoardSideBar() {
  

  const [userDetails, setUserDetails] = useState<AuthData | null>();
 



  const adminDashBoardMenus = [
    {
      title: 'My Profile',
      link: '/dashboard/profile',
      component: null,
      subMenus: null
    },
    {
     title: 'Departments',
     subMenus: [
       {
        title: 'Create new Department' ,
        link: '/dashboard/management/department/create'
       },
       {
         title: 'Manage Department' ,
          link: '/dashboard/management/department/manage'
       },
     ],
      link: '/dashboard/management/department',
      component: <ChevronDown />
   },
    {
      title: 'Account',
      subMenus: [
        {
         title: 'Create Staff Account' ,
         link: '/dashboard/management/account/create'
        },
        {
         title: 'Manage Staff Account' ,
         link: '/dashboard/management/account/manage'
        },
      ],
      link: '/dashboard/management/account',
      component: <ChevronDown />
    },
    {
      title: 'Student Management',
      link: '/dashboard/management/student',
      subMenus: [
       {
        title: 'Create Student Account' ,
        link: '/dashboard/management/student/create'
       },
       {
        title: 'Manage Student Account' ,
        link: '/dashboard/management/account/manage'        
       },
     ],
      component: <ChevronDown />
    },
    {
     title: 'Course Management',
     subMenus: [
       {
        title: 'Create An Account' ,
        link: '/dashboard/management/account/create'
       },
       {
         title: 'Manage Account' ,
          link: '/dashboard/management/account/manage'
       },
     ],
      link: '/dashboard/management/course',
      component: <ChevronDown />
   },
   {
     title: 'Curriculum Management',
     subMenus: null,
     link: '/dashboard/management/curriculum',
     component: null
   },
   {
     title: 'Student Support',
     subMenus: null,
      link: '/dashboard/support/student',
      component: null
   },
   {
     title: 'Documents',
     link: '/dashboard/document',
     subMenus: null,
     component: null
   },
   {
     title: 'Support Center',
     subMenus: null,
     link: '/dashboard/support/center',
     component: null
   },

  ];

  const studentDashBoardMenus = [
    {
      title: 'My Profile',
      link: '/dashboard/profile',
      component: null,
      subMenus: null
    },
      {
    title: 'Courses',
    component: <ChevronDown />,
    subMenus: [
      {
       title: 'All Courses' ,
       link: '/dashboard/management/department/create'
      },
      {
        title: 'Registered Courses' ,
         link: '/dashboard/management/department/manage'
      },
    ],
  },
    {
     title: 'Examination',
      link: '/dashboard/examination',
      component: <ChevronDown />
   },
   {
     title: 'Documents',
     subMenus: null,
     link: '/dashboard/document',
     component: null
   },
   {
     title: 'Communication Tools',
     subMenus: null,
      link: '/dashboard/communication/tools',
      component: null
   },
   {
     title: 'Support Center',
     link: '/dashboard/support/student',
     subMenus: null,
     component: null
   },
 

  ];

  const staffDashBoardMenus = [
    {
      title: 'My Profile',
      link: '/dashboard/profile',
      component: null,
      subMenus: null
    },
    {
     title: 'Departments',
     subMenus: [
       {
        title: 'Create new Department' ,
        link: '/dashboard/management/department/create'
       },
       {
         title: 'Manage Department' ,
          link: '/dashboard/management/department/manage'
       },
     ],
      link: '/dashboard/management/department',
      component: <ChevronDown />
   },
    {
      title: 'Student Management',
      link: '/dashboard/management/student',
      subMenus: [
       {
        title: 'Create Student Account' ,
        link: '/dashboard/management/student/create'
       },
       {
        title: 'Manage Student Account' ,
        link: '/dashboard/management/account/manage'        
       },
     ],
      component: <ChevronDown />
    },
    {
     title: 'Course Management',
     subMenus: [
       {
        title: 'Create An Account' ,
        link: '/dashboard/management/account/create'
       },
       {
         title: 'Manage Account' ,
          link: '/dashboard/management/account/manage'
       },
     ],
      link: '/dashboard/management/course',
      component: <ChevronDown />
   },
   {
     title: 'Curriculum Management',
     subMenus: null,
     link: '/dashboard/management/curriculum',
     component: null
   },
   {
     title: 'Student Support',
     subMenus: null,
      link: '/dashboard/support/student',
      component: null
   },
   {
     title: 'Documents',
     link: '/dashboard/document',
     subMenus: null,
     component: null
   },
   {
     title: 'Support Center',
     subMenus: null,
     link: '/dashboard/support/center',
     component: null
   },
  ];

  useEffect(() => {
    const storageData = sessionStorage.getItem('userData');
    if (storageData) {
        setUserDetails(JSON.parse(storageData));
    }
}, [])

  const isAdminRole = userDetails?.account_role === 'ADMIN' as undefined | boolean | unknown
  const isStaffRole = userDetails?.account_role === 'STAFF' as undefined | boolean | unknown
  const isStudentRole = userDetails?.account_role === 'STUDENT' as undefined | boolean | unknown




  return (
    <div className="flex justify-center my-4">
      <div className="">
        <div className="mt-4">
          {isAdminRole && adminDashBoardMenus.map(menu => (
            <div key={menu.title} className="mt-8">
              <AdminSideMenu  menu={menu} /> 
            </div>
          ))}
           {isStaffRole && staffDashBoardMenus.map(menu => (
            <div key={menu.title} className="mt-8">
              <StaffSideMenu  menu={menu} />
            </div>
          ))}
           {isStudentRole && studentDashBoardMenus.map(menu => (
            <div key={menu.title} className="mt-8">
               <StudentSideMenu menu={menu}  />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

