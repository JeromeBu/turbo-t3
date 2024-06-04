import { z } from "zod";
export declare const createPostSchema: z.ZodObject<{
    id: z.ZodString;
    title: z.ZodString;
    content: z.ZodString;
}, "strip", z.ZodTypeAny, {
    id: string;
    title: string;
    content: string;
}, {
    id: string;
    title: string;
    content: string;
}>;
export declare const emailSchema: z.ZodString;
export declare const emailAndPasswordSchema: z.ZodObject<{
    email: z.ZodString;
    password: z.ZodString;
}, "strip", z.ZodTypeAny, {
    email: string;
    password: string;
}, {
    email: string;
    password: string;
}>;
export type EmailAndPassword = z.infer<typeof emailAndPasswordSchema>;
export type Cookies = () => {
    get: (name: string) => {
        value: string;
    } | undefined;
    set: (name: string, value: string, attributes?: Record<string, any>) => void;
};
//# sourceMappingURL=index.d.ts.map