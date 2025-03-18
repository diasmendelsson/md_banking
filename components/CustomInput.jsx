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


export default function CustomInput({form, name, label, placeholder}){
    return(
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
    )
}