"use client"

import {zodResolver} from "@hookform/resolvers/zod"
import {useForm} from "react-hook-form"
import {z} from "zod"

import {toast} from "@/hooks/use-toast";
import {Button} from "@/components/ui/button"
import {Form, FormControl, FormField, FormItem, FormLabel, FormMessage,} from "@/components/ui/form"

import {Input} from "@/components/ui/input"
import {getLinks} from "@/datas/links";
import Image from "next/image";

const FormSchema = z.object({
    username: z.string().min(2, {
        message: "Username must be at least 2 characters.",
    }),
})


export default function Page() {
    const form = useForm<z.infer<typeof FormSchema>>({
        resolver: zodResolver(FormSchema),
        defaultValues: {
            username: "",
        },
    })

    const links = getLinks();

    function onSubmit(data: z.infer<typeof FormSchema>) {
        toast({
            title: "You submitted the following values:",
            description: (
                <pre className="mt-2 w-[340px] rounded-md bg-slate-950 p-4">
          <code className="text-white">{JSON.stringify(data, null, 2)}</code>
        </pre>
            ),
        })
    }

    return (
        <>
            <div className="container mx-auto px-6 pt-10 pb-12 min-h-screen">
                <h1 className="text-3xl ">Un message ?</h1>
                <Form {...form}>
                    <form onSubmit={form.handleSubmit(onSubmit)} className="w-2/3 space-y-6 mt-8 p-12">
                        <FormField
                            control={form.control}
                            name="username"
                            render={({field}) => (
                                <FormItem>
                                    <FormLabel>Username</FormLabel>
                                    <FormControl>
                                        <Input placeholder="toi" {...field} />
                                    </FormControl>
                                    <FormMessage/>
                                </FormItem>
                            )}/>
                        <Button type="submit">Submit</Button>
                    </form>
                </Form>
                <div className="mt-32">
                    <h1 className="text-3xl">Liens utiles :</h1>
                    {links.map((link, key) => (
                            <>
                                <div className="flex p-12" key={key}>
                                    <Image src={link.icon}
                                           width={70}
                                           height={70}
                                           className={"inline-block"}
                                           alt={link.name}/>
                                    <a
                                        key={link.name}
                                        href={link.url}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="block px-5 mt-5 text-2xl text-blue-400"
                                    >
                                        {link.name}
                                    </a>
                                </div>
                            </>
                        )
                    )}
                </div>
            </div>
        </>
    )
}

