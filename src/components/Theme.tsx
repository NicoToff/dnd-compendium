export function Theme({ children }: { children: React.ReactNode }) {
    return (
        <div className={`min-h-screen bg-slate-100 text-slate-900 dark:bg-slate-700 dark:text-slate-200`}>
            {children}
        </div>
    );
}
