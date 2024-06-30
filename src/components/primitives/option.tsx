function Option({
  value,
  children,
  ...props
}: {
  value: string;
  children: React.ReactNode;
} & React.HTMLAttributes<HTMLOptionElement>) {
  return (
    <option value={value} className="bg-black px-4 py-4" {...props}>
      {children}
    </option>
  );
}

export default Option;
