import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { cn } from "@/lib/utils";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";

interface ContactSectionProps {
  className?: string;
}

export function ContactSection({ className }: ContactSectionProps) {
  const form = useForm<ContactSchema>({
    resolver: zodResolver(contactSchema),
    defaultValues: {
      name: "",
      email: "",
      message: "",
    },
  });

  function onSubmit(input: ContactSchema) {
    console.log(input);
  }

  return (
    <section
      className={cn(
        "relative min-h-[90vh] flex flex-col items-center py-12 mx-auto",
        className
      )}
    >
      <h1 className="z-50 w-full text-5xl 3xl:text-6xl mb-4 md:mb-6 3xl:mb-16 text-center">
        Contact
      </h1>
      <p className="z-50 w-full mb-8 text-center text-lg">
        Feel free to Contact me by submitting the form below and I will get back
        to you as soon as possible
      </p>

      <div className="z-50 w-full max-w-3xl flex flex-col items-end p-8 bg-background rounded-xl shadow-xl border border-muted">
        <Form {...form}>
          <form
            onSubmit={form.handleSubmit(onSubmit)}
            className="w-full flex flex-col items-end gap-6 text-muted-foreground "
          >
            <FormField
              control={form.control}
              name="name"
              render={({ field }) => (
                <FormItem className="w-full">
                  <FormLabel>Name</FormLabel>
                  <FormControl>
                    <Input
                      placeholder="Name"
                      type="text"
                      {...field}
                      className="bg-muted rounded-md"
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem className="w-full">
                  <FormLabel>Email</FormLabel>
                  <FormControl>
                    <Input
                      placeholder="Email"
                      type="text"
                      {...field}
                      className="bg-muted rounded-md"
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="message"
              render={({ field }) => (
                <FormItem className="w-full">
                  <FormLabel>Message</FormLabel>
                  <FormControl>
                    <Textarea
                      placeholder="Message"
                      {...field}
                      rows={10}
                      className="bg-muted rounded-md resize-none h-60"
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <Button>SUBMIT</Button>
          </form>
        </Form>
      </div>

      <div
        className={cn(
          "absolute z-10 inset-0",
          "[background-size:40px_40px]",
          "[background-image:linear-gradient(to_right,rgba(228,228,231,0.7)_1px,transparent_1px),linear-gradient(to_bottom,rgba(228,228,231,0.7)_1px,transparent_1px)]",
          "dark:[background-image:linear-gradient(to_right,rgba(38,38,38,0.5)_1px,transparent_1px),linear-gradient(to_bottom,rgba(38,38,38,0.5)_1px,transparent_1px)]",
          "[mask-image:radial-gradient(ellipse_at_center,transparent_10%,black)]",
          "pointer-events-none"
        )}
      />

      <div className="pointer-events-none absolute inset-0 flex items-center justify-center bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)] dark:bg-black"></div>
    </section>
  );
}

export const contactSchema = z.object({
  name: z.string(),
  email: z.string().email(),
  message: z.string().min(10),
});

export type ContactSchema = z.infer<typeof contactSchema>;
