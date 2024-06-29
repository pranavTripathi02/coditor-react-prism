function Header() {
  return (
    <header className="flex w-full justify-center py-4 md:justify-start md:px-20 md:py-8">
      {/* logo */}
      <div className="flex items-center gap-2 md:gap-4">
        <img src="/logo.svg" alt="Coditor logo" height="64" width="64" />
        <img src="/text_logo.svg" alt="Coditor logo" height="64" width="256" />
      </div>
    </header>
  );
}

export default Header;
