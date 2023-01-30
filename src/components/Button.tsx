import { cva, type VariantProps } from "class-variance-authority";

const buttonStyles = cva(
    `inline-flex items-center justify-center rounded py-2 px-4 font-medium focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800`,
    {
        variants: {
            intent: {
                primary: `bg-blue-500 dark:bg-blue-600 text-slate-100 dark:text-slate-100 hover:bg-blue-600 dark:hover:bg-blue-700 focus:ring-blue-500`,
                secondary: `bg-gray-500 text-slate-100 hover:bg-gray-600 dark:hover:bg-gray-400 focus:ring-gray-500`,
                warning: `bg-yellow-500 dark:bg-orange-500 text-white hover:bg-yellow-600 dark:hover:bg-orange-600 focus:ring-yellow-500 dark:focus:ring-orange-600`,
                danger: `bg-red-500 dark:bg-rose-600 text-slate-100 hover:bg-red-600 dark:hover:bg-rose-700 focus:ring-red-500 dark:focus:ring-rose-700`,
            },
            fullWidth: {
                true: `w-full`,
            },
        },
        defaultVariants: {
            intent: "primary",
        },
    } as const
);

export type ButtonProps = VariantProps<typeof buttonStyles> &
    Omit<React.ButtonHTMLAttributes<HTMLButtonElement>, "className"> & { children: React.ReactNode };

export function Button({ children, intent, fullWidth, ...props }: ButtonProps) {
    return (
        <button className={buttonStyles({ intent, fullWidth })} {...props}>
            {children}
        </button>
    );
}
