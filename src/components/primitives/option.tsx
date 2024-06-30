function Option({ children, ...props }: { children: React.ReactNode }) {
  return (
    <option className="bg-black px-4 py-4" {...props}>
      {children}
    </option>
  );
}

export default Option;
