function Select({
  children,
  ...props
}: { children: React.ReactNode } & React.HTMLAttributes<HTMLSelectElement>) {
  return (
    <select
      className="rounded border border-foreground/25 px-2 py-2"
      {...props}
    >
      {children}
    </select>
  );
}
export default Select;
