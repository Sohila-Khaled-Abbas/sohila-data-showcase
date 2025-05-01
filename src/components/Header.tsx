
import { Link, useLocation } from "react-router-dom";
import { cn } from "@/lib/utils";
import { useState, useEffect } from "react";
import { Menu, Sun, Moon } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Switch } from "@/components/ui/switch";

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(false);
  const location = useLocation();

  useEffect(() => {
    // Check if user preference is already stored
    const storedDarkMode = localStorage.getItem('darkMode') === 'true';
    setIsDarkMode(storedDarkMode);
    
    if (storedDarkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }

    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleDarkMode = () => {
    const newDarkMode = !isDarkMode;
    setIsDarkMode(newDarkMode);
    
    if (newDarkMode) {
      document.documentElement.classList.add('dark');
      localStorage.setItem('darkMode', 'true');
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('darkMode', 'false');
    }
  };

  const mainNavLinks = [
    { name: "Home", href: "#hero" },
    { name: "About", href: "#about" },
    { name: "Skills", href: "#skills" },
    { name: "Projects", href: "#projects" },
    { name: "Certifications", href: "#certifications" },
    { name: "Contact", href: "#contact" },
  ];

  const otherLinks = [
    { name: "Courses", href: "/courses" }
  ];

  const handleScrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    
    if (location.pathname !== "/") {
      // Navigate to home page first
      window.location.href = `/${href}`;
      return;
    }
    
    const element = document.querySelector(href);
    if (element) {
      window.scrollTo({
        top: element.getBoundingClientRect().top + window.pageYOffset - 100,
        behavior: 'smooth',
      });
    }
    
    if (isMobileMenuOpen) {
      setIsMobileMenuOpen(false);
    }
  };

  return (
    <header
      className={cn(
        "fixed top-0 w-full z-50 transition-all duration-300",
        isScrolled
          ? "bg-background dark:bg-background-dark shadow-md dark:shadow-gray-900 py-2"
          : "bg-transparent py-4"
      )}
    >
      <div className="container mx-auto px-4 flex justify-between items-center">
        <Link to="/" className="text-xl font-bold">
          <span className="font-logo gradient-text">Sohila Khaled</span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex space-x-8">
          {mainNavLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={(e) => handleScrollToSection(e, link.href)}
              className="text-foreground dark:text-foreground-dark hover:text-primary dark:hover:text-primary-dark transition duration-300"
            >
              {link.name}
            </a>
          ))}
          
          {otherLinks.map((link) => (
            <Link
              key={link.name}
              to={link.href}
              className="text-foreground dark:text-foreground-dark hover:text-primary dark:hover:text-primary-dark transition duration-300"
            >
              {link.name}
            </Link>
          ))}
          
          <div className="flex items-center space-x-2">
            <Sun className="h-4 w-4 text-foreground dark:text-foreground-dark" />
            <Switch 
              checked={isDarkMode} 
              onCheckedChange={toggleDarkMode} 
              className="data-[state=checked]:bg-primary-dark" 
            />
            <Moon className="h-4 w-4 text-foreground dark:text-foreground-dark" />
          </div>
        </nav>

        {/* Mobile Menu Button */}
        <div className="flex items-center space-x-2 md:hidden">
          <Button
            variant="ghost"
            size="icon"
            onClick={toggleDarkMode}
            className="text-foreground dark:text-foreground-dark hover:bg-secondary/20 dark:hover:bg-secondary-dark/20"
          >
            {isDarkMode ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
          </Button>
          
          <Button
            variant="ghost"
            size="icon"
            className="text-primary dark:text-primary-dark"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            <Menu />
          </Button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="absolute top-full left-0 w-full bg-background dark:bg-background-dark shadow-md dark:shadow-gray-900 py-4 md:hidden">
            <div className="flex flex-col space-y-4 px-4">
              {mainNavLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={(e) => handleScrollToSection(e, link.href)}
                  className="text-foreground dark:text-foreground-dark hover:text-primary dark:hover:text-primary-dark transition duration-300"
                >
                  {link.name}
                </a>
              ))}
              
              {otherLinks.map((link) => (
                <Link
                  key={link.name}
                  to={link.href}
                  className="text-foreground dark:text-foreground-dark hover:text-primary dark:hover:text-primary-dark transition duration-300"
                >
                  {link.name}
                </Link>
              ))}
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
