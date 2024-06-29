function Header() {
  return (
    <header className="flex w-full md:justify-start justify-center py-4 md:px-20 md:py-8">
      {/* logo */}
      <div className="flex gap-2 md:gap-4 items-center">
        <img
          src="/logo.svg"
          alt="Coditor logo"
          height="64"
          width="64"
        />
        <img
          src="/text_logo.svg"
          alt="Coditor logo"
          height="64"
          width="256"
        />
      </div>
    </header>
  );
}

export default Header;
