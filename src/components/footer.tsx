type TLink = {
  id: number;
  name: string;
  uri: string;
};
const navLinks: TLink[] = [
  {
    id: 1,
    name: "Source",
    uri: "https://www.github.com/pranavTripathi02/coditor-react-prism",
  },
];
function Footer() {
  return (
    <footer className="mb-0 flex h-fit w-full justify-start px-10 py-4 md:justify-between md:px-20 md:py-8">
      <div>
        <span className="block text-lg font-bold uppercase text-foreground/50">
          Links
        </span>
        <div className="flex flex-col items-center gap-1 md:flex-row">
          {navLinks.map((link) => (
            <div key={link.id}>
              <a href={link.uri} target="_blank" className="hover:underline">
                {link.name}
              </a>
              <span className="hidden opacity-50 last-of-type:hidden md:inline-block">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="32"
                  height="32"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="lucide lucide-dot"
                >
                  <circle cx="12.1" cy="12.1" r="1" />
                </svg>
              </span>
            </div>
          ))}
        </div>
      </div>
    </footer>
  );
}

export default Footer;
