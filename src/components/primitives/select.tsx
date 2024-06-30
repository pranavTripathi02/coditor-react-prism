function Select({ children, ...props }: { children: React.ReactNode }) {
  return (
    <select className="rounded px-2 py-2" {...props}>
      {children}
    </select>
  );
}
export default Select;
