"use client"
import Link from "next/link"
import Image from "next/image"
import { useState } from "react"

import { z } from "zod"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { Button } from "@/components/ui/button"
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { Loader2 } from "lucide-react"

 
const formSchema = (  type ) => z.object({

    firstname: type === 'sign-in' ? z.string().optional() : z.string().min(3),
    lastname: type === 'sign-in' ? z.string().optional() : z.string().min(3),
    address1: type === 'sign-in' ? z.string().optional() : z.string().max(50),
    postalCode: type === 'sign-in' ? z.string().optional() : z.string().min(3).max(6),
    state:  type === 'sign-in' ? z.string().optional() : z.string().min(2).max(2),
    dateOfBirth: type === 'sign-in' ? z.string().optional() : z.string().min(3),

    // sign in
    email: z.string().email({
        message: "Coloque um email válido",
      }),
    password: z.string().min(8,{
        message: "Sua senha deve ter no minímo 8 caracteres"
    })
})

export default function AuthForm({type}){

    const [user, setUser] = useState(null);

    const [isLoading, setIsLoading] = useState(false);

     // 1. Define your form.
    const form = useForm({
        resolver: zodResolver(formSchema),
        defaultValues: {
        email: "",
        password: "",
        username: "",
        },
    })

    // 2. Define a submit handler.
    function onSubmit(values) {

        setIsLoading(true)
        console.log(values)
        setIsLoading(false);


    }

    return(
       <section className="auth-form">
        <header className="flex flex-col gap-5 md:gap-8">
        <Link href="/" className="cursor-pointer flex items-center gap-1">
            <Image 
                src="icons/logo.svg"
                width={34}
                height={34}
                alt="horizon logo"
                />
            <h1 className="text-26 font-ibm-plex-serif font-bold text-black-1">Horizon</h1>
        </Link>

        <div className="flex flex-col gap-1 md:gap-3">
            <h1 className="text-24 lg:text-36 font-semibold
             text-gray-900">
                {user 
                    ? 'Entre na sua conta'
                    : type === 'sign-in'
                    ? 'Login'
                    : 'Inscrever-se'
                }
                <p className="text-16 font-normal text-gray-600">
                    {user
                      ? 'Vincule sua conta para começar'
                      : 'Por favor insira seus dados'}
                </p>
            </h1>
        </div>
        </header>

        {user ? (
            <div className="flex flex-col gap-4">
                {/* PlaidLink */}
            </div>
        ): (
            
            <>
                <Form {...form}>
               
                    <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">

                        { type === 'sign-up' && (
                            <>

                            <div className=" flex gap-4">
                            <FormField
                                control={form.control}
                                name="firstname"
                                render={({ field }) => (
                                    <div className="form-item">
                                        <FormLabel className="form-label">
                                            Nome
                                        </FormLabel>
                                        <div className="flex w-full flex-col">
                                            <FormControl>
                                                <Input {...field}
                                                   
                                                    placeholder="Digite seu primeiro nome"
                                                    className="input-class"
                                                    
                                                />
                                            </FormControl>
                                            <FormMessage
                                            className="form-message mt-2">

                                            </FormMessage>

                                        </div>
                                    </div>
                                             )}
                                        />

                                <FormField
                                control={form.control}
                                name="lastname"
                                render={({ field }) => (
                                    <div className="form-item">
                                        <FormLabel className="form-label">
                                            Sobrenome
                                        </FormLabel>
                                        <div className="flex w-full flex-col">
                                            <FormControl>
                                                <Input {...field}
                                                   
                                                    placeholder="Digite seu sobrenome"
                                                    className="input-class"
                                                    
                                                />
                                            </FormControl>
                                            <FormMessage
                                            className="form-message mt-2">

                                            </FormMessage>

                                        </div>
                                    </div>
                             )}
                        />
                        </div>        
                          
                                <FormField
                                control={form.control}
                                name="address1"
                                render={({ field }) => (
                                    <div className="form-item">
                                        <FormLabel className="form-label">
                                            Endereço
                                        </FormLabel>
                                        <div className="flex w-full flex-col">
                                            <FormControl>
                                                <Input {...field}
                                                   
                                                    placeholder="Digite seu endereço"
                                                    className="input-class"
                                                    
                                                />
                                            </FormControl>
                                            <FormMessage
                                            className="form-message mt-2">

                                            </FormMessage>

                                        </div>
                                    </div>
                             )}
                        />
                         <div className=" flex gap-4"> 

                            <FormField
                                control={form.control}
                                name="state"
                                render={({ field }) => (
                                    <div className="form-item">
                                        <FormLabel className="form-label">
                                           Estado
                                        </FormLabel>
                                        <div className="flex w-full flex-col">
                                            <FormControl>
                                                <Input {...field}
                                                   
                                                    placeholder="Ex: MS"
                                                    className="input-class"
                                                    
                                                />
                                            </FormControl>
                                            <FormMessage
                                            className="form-message mt-2">

                                            </FormMessage>

                                        </div>
                                    </div>
                             )}
                        />
                     
                            <FormField
                                control={form.control}
                                name="postalCode"
                                render={({ field }) => (
                                    <div className="form-item">
                                        <FormLabel className="form-label">
                                            CEP
                                        </FormLabel>
                                        <div className="flex w-full flex-col">
                                            <FormControl>
                                                <Input {...field}
                                                   
                                                    placeholder="Ex: 14782-265"
                                                    className="input-class"
                                                    
                                                />
                                            </FormControl>
                                            <FormMessage
                                            className="form-message mt-2">

                                            </FormMessage>

                                        </div>
                                    </div>
                             )}
                        />
                        </div>
                            <FormField
                                control={form.control}
                                name="dateOfBirth"
                                render={({ field }) => (
                                    <div className="form-item">
                                        <FormLabel className="form-label">
                                           Data de Nascimento
                                        </FormLabel>
                                        <div className="flex w-full flex-col">
                                            <FormControl>
                                                <Input {...field}
                                                   
                                                    placeholder="Ex: dd-mm-yyyy"
                                                    className="input-class"
                                                    
                                                />
                                            </FormControl>
                                            <FormMessage
                                            className="form-message mt-2">

                                            </FormMessage>

                                        </div>
                                    </div>
                             )}
                        />
                      
                            </>
                        )}
                  

                        <FormField
                        control={form.control}
                        name="email"
                        render={({ field }) => (
                            <div className="form-item">
                                <FormLabel className="form-label">
                                    Email
                                </FormLabel>
                                <div className="flex w-full flex-col">
                                    <FormControl>
                                        <Input {...field}
                                            placeholder="Digite seu email"
                                            className="input-class"
                                            
                                         />
                                    </FormControl>
                                    <FormMessage
                                     className="form-message mt-2">

                                    </FormMessage>

                                </div>
                            </div>
                        )}
                        />
                        <FormField
                            control={form.control}
                            name="password"
                            render={({ field }) => (
                                <div className="form-item">
                                    <FormLabel className="form-label">
                                        Senha
                                    </FormLabel>
                                    <div className="flex w-full flex-col">
                                        <FormControl>
                                            <Input {...field}
                                                type="password"
                                                placeholder="Digite sua senha"
                                                className="input-class"
                                                
                                            />
                                        </FormControl>
                                        <FormMessage
                                        className="form-message mt-2">

                                        </FormMessage>

                                    </div>
                                </div>
                        )}
                        />
                        
                        <div className="flex flex-col gap-4">
                        <Button className="form-btn" type="submit" disabled={isLoading}>
                            {isLoading ? (
                                <>
                                <Loader2 className="animate-spin" /> &nbsp;
                                Salvando...
                                </>
                            ) : type === 'sign-in'
                              ? 'Login' : 'Inscreva-se'}
                        </Button>
                        </div>
                    </form>
                </Form>

                <footer className="flex justify-center gap-1">
                    <p className="text-14 font-normal text-gray-600" >
                        {type === 'sign-in' 
                         ? "Não tem um conta ?"
                         : "Já tem uma conta ? "
                         }
                    </p>
                    <Link className="form-link"  href={type === 'sign-in' ? '/sign-up' 
                        : '/sign-in'}>
                            {type === 'sign-in' ? 'Inscrever-se' 
                        : 'Faça login'}
                        </Link>
                </footer>

            </>
        )}
        
        </section>
    )
}