'use client'

import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
 

import Image from "next/image";
import Link from "next/link";
import { sidebarLinks } from "@/constants";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";

 
export default function MobileNav({user}){

    const pathname = usePathname();
    return(
        <section className="w-fulll max-w-[264px]">
            <Sheet>
                <SheetTrigger>
                <Image
                    src="/icons/hamburger.svg"
                    width={30}
                    height={30}
                    alt="menu"
                    className="cursor-pointer"
                />
                </SheetTrigger>
                <SheetContent side="left" >
                <SheetHeader>
                <SheetTitle>Are you absolutely sure?</SheetTitle>
                <SheetDescription>
                    This action cannot be undone. This will permanently delete your account
                    and remove your data from our servers.
                </SheetDescription>
                </SheetHeader>
            </SheetContent>
            </Sheet>
        </section>
    )
}