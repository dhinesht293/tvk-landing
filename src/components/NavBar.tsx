import Link from "next/link";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export function NavBar() {
  return (
    <nav className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center justify-between px-4">
        <Link href="/" className="flex items-center space-x-2">
          <div className="h-8 w-8 rounded-full bg-red-600 flex items-center justify-center">
            <span className="text-white font-bold text-sm">TVK</span>
          </div>
          <span className="font-bold text-xl">Tamilaga Vettri Kazhagam</span>
        </Link>

        <div className="hidden md:flex items-center space-x-6">
          <Link href="#features" className="text-sm font-medium hover:text-primary transition-colors">
            Features
          </Link>
          <Link href="#feed" className="text-sm font-medium hover:text-primary transition-colors">
            News Feed
          </Link>
          <Link href="#testimonials" className="text-sm font-medium hover:text-primary transition-colors">
            Testimonials
          </Link>
          <Button asChild>
            <Link href="#signup">Join TVK</Link>
          </Button>
        </div>
      </div>
    </nav>
  );
}