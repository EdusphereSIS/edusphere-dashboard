import React from 'react'
import { ChevronDown } from 'lucide-react'
import Link from 'next/link'
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import { usePathname } from 'next/navigation'

type menuType = {
  menu: {
    title: string;
    link: string;
    component: null;
    subMenus: null;
  } | {
    title: string;
    subMenus: {
      title: string;
      link: string;
    }[];
    link?: undefined;
    component?: undefined;
  } | {
    title: string;
    subMenus: {
      title: string;
      link: string;
    }[];
    link: string;
    component: React.JSX.Element;
  }
}

export default function StaffSideMenu({ menu }: menuType) {
    const pathName = usePathname();
    
        // Check if the path starts with '/dashboard/' and is not exactly '/dashboard'
  // const isSpecificDashboardRoute = pathName.startsWith('/dashboard/') && pathName !== '/dashboard';
  // console.log('color path>>', isSpecificDashboardRoute)
  const isNoSubMenu = menu.subMenus === null

  const isActiveLink = menu.link === pathName 
  console.log('isActive', isActiveLink)
 

  return (
    <div className={`${isActiveLink ? 'bg-[#7394A1]' : 'bg-[var(--primary)] '} ${isNoSubMenu  && 'h-[5.5rem]' }  p-[16px] border-0 rounded-md w-[260px] text-white font-bold flex items-center`}>
      {!menu.subMenus ? (
        <div className='flex items-center'>
          <Link href={`${menu.link}`} style={{textDecoration: 'none'}}>
            <p>{menu.title}</p>
          </Link>
        </div>
      ) : (
        <Accordion type="single" collapsible className="w-[100%] cursor-pointer no-underline">
          <AccordionItem value="item-1" className='border-b-0'>
            <AccordionTrigger className="flex justify-between w-[100%] hover:no-underline">
              {menu.title}
            </AccordionTrigger>
            <AccordionContent className='border-b-0'>
              <ul>
                {menu.subMenus.map(sub => (
                  <li key={sub.title}>
                    <Link href={`${sub.link}`}>
                      {sub.title}
                    </Link>
                  </li>
                ))}
              </ul>
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      )}
    </div>
  )
}
