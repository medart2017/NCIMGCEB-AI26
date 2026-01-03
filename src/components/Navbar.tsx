// import { useState, useEffect } from "react";
// import { Menu, X } from "lucide-react";
// import { Button } from "@/components/ui/button";
// import { ThemeToggle } from "@/components/ThemeToggle";

// const navItems = [
//   { label: "About", href: "#about" },
//   { label: "Topics", href: "#tracks" },
//   { label: "Dates", href: "#dates" },
//   // { label: "Speakers", href: "#speakers" },
//   { label: "Committees", href: "#committees" },
//   { label: "Registration", href: "#registration" },
//   { label: "Downloads", href: "#downloads" },
//   { label: "Contact", href: "#contact" },
// ];

// export const Navbar = () => {
//   const [isScrolled, setIsScrolled] = useState(false);
//   const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

//   useEffect(() => {
//     const handleScroll = () => {
//       setIsScrolled(window.scrollY > 50);
//     };
//     window.addEventListener("scroll", handleScroll);
//     return () => window.removeEventListener("scroll", handleScroll);
//   }, []);

//   const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
//     e.preventDefault();
//     const element = document.querySelector(href);
//     if (element) {
//       element.scrollIntoView({ behavior: "smooth" });
//     }
//     setIsMobileMenuOpen(false);
//   };

//   return (
//     <nav
//       className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
//         isScrolled
//           ? "bg-background/90 backdrop-blur-xl shadow-lg py-2"
//           : "bg-transparent py-4"
//       }`}
//     >
//       <div className="container mx-auto px-4">
//         <div className="flex items-center justify-between">
//           {/* Left Logo */}
//           <div className={`flex items-center transition-all duration-300 ${isScrolled ? "h-10" : "h-14"}`}>
//             <div className="flex items-center gap-2">
//               <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-primary to-cyan flex items-center justify-center">
//                 <span className="text-primary-foreground font-bold text-xs">NC</span>
//               </div>
//               <div className="hidden sm:block">
//                 <span className="text-foreground font-serif font-bold text-lg gradient-text">NCIMGCEB-AI'26</span>
//               </div>
//             </div>
//           </div>

//           {/* Center Navigation */}
//           <div className="hidden lg:flex items-center gap-1">
//             {navItems.map((item) => (
//               <a
//                 key={item.label}
//                 href={item.href}
//                 onClick={(e) => handleNavClick(e, item.href)}
//                 className="px-4 py-2 text-sm text-muted-foreground hover:text-foreground transition-colors duration-300 rounded-lg hover:bg-secondary/50"
//               >
//                 {item.label}
//               </a>
//             ))}
//           </div>

//           {/* Right Side */}
//           <div className={`flex items-center gap-3 transition-all duration-300 ${isScrolled ? "h-10" : "h-14"}`}>
//             {/* Theme Toggle */}
//             <ThemeToggle />

//             {/* University Logo */}
//             <div className="hidden sm:flex items-center gap-2">
//               <div className="w-10 h-10 rounded-xl bg-secondary/80 flex items-center justify-center border border-primary/20">
//                 <span className="text-primary font-bold text-xs">TU</span>
//               </div>
//               <span className="hidden md:block text-xs text-muted-foreground">Tipasa<br/>University</span>
//             </div>
            
//             {/* Mobile Menu Button */}
//             <Button
//               variant="ghost"
//               size="icon"
//               className="lg:hidden"
//               onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
//             >
//               {isMobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
//             </Button>
//           </div>
//         </div>

//         {/* Mobile Menu */}
//         {isMobileMenuOpen && (
//           <div className="lg:hidden mt-4 glass-card animate-fade-in-up">
//             <div className="flex flex-col gap-2 p-4">
//               {navItems.map((item) => (
//                 <a
//                   key={item.label}
//                   href={item.href}
//                   onClick={(e) => handleNavClick(e, item.href)}
//                   className="px-4 py-3 text-muted-foreground hover:text-foreground transition-colors duration-300 rounded-lg hover:bg-secondary/50"
//                 >
//                   {item.label}
//                 </a>
//               ))}
//             </div>
//           </div>
//         )}
//       </div>
//     </nav>
//   );
// };
import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { ThemeToggle } from "@/components/ThemeToggle";

const navItems = [
  { label: "Objectives", href: "#about" },
  { label: "Topics", href: "#tracks" },
  { label: "Dates", href: "#dates" },
  { label: "Committees", href: "#committees" },
  { label: "Registration", href: "#registration" },
  { label: "Downloads", href: "#downloads" },
  { label: "Contact", href: "#contact" },
];

export const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    document.querySelector(href)?.scrollIntoView({ behavior: "smooth" });
    setIsMobileMenuOpen(false);
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled
          ? "bg-background/90 backdrop-blur-xl shadow-lg py-2"
          : "bg-transparent py-4"
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between">

          {/* Left Logo (NCIMGCEB-AI’26) */}
          <div className={`flex items-center transition-all duration-300 ${isScrolled ? "h-10" : "h-14"}`}>
            <div className="flex items-center gap-3">
              <img
                src="/logos/ncimgceb-ai26-logo.png"
                alt="NCIMGCEB-AI'26 Logo"
                className="h-10 w-auto rounded-lg shadow-sm"
              />
              <span className="hidden sm:block text-foreground font-serif font-bold text-lg gradient-text">
                NCIMGCEB-AI'26
              </span>
            </div>
          </div>

          {/* Center Navigation */}
          <div className="hidden lg:flex items-center gap-1">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                onClick={(e) => handleNavClick(e, item.href)}
                className="px-4 py-2 text-sm text-muted-foreground hover:text-foreground transition-colors duration-300 rounded-lg hover:bg-secondary/50"
              >
                {item.label}
              </a>
            ))}
          </div>

          {/* Right side */}
          <div className={`flex items-center gap-3 transition-all duration-300 ${isScrolled ? "h-10" : "h-14"}`}>

            {/* Theme toggle */}
            <ThemeToggle />

            {/* University Logo */}
            <div className="hidden sm:flex items-center gap-2">
              <img
                src="/logos/tipasa-university-logo.png"
                alt="Tipasa University Logo"
                className="h-10 w-auto rounded-lg border border-primary/20 shadow-sm"
              />
              <span className="hidden md:block text-xs text-muted-foreground">
                Tipasa<br/>University
              </span>
            </div>

            {/* Mobile Button */}
            <Button
              variant="ghost"
              size="icon"
              className="lg:hidden"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              {isMobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </Button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="lg:hidden mt-4 glass-card animate-fade-in-up">
            <div className="flex flex-col gap-2 p-4">
              {navItems.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  onClick={(e) => handleNavClick(e, item.href)}
                  className="px-4 py-3 text-muted-foreground hover:text-foreground transition-colors duration-300 rounded-lg hover:bg-secondary/50"
                >
                  {item.label}
                </a>
              ))}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};
