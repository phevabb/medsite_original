import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Twitter, Linkedin, X } from 'lucide-react'; // Import Twitter, Linkedin, and X

const Footer = () => {
  return (
    <footer className="w-full border-t py-12 md:py-16 lg:py-20 bg-muted">
      <div className="container px-4 md:px-6 mx-auto">
        <div className="grid gap-8 lg:grid-cols-4">
          <div className="space-y-4">
            <Link href="/" className="flex items-center">
              <div className=" p-1.5 mr-2">
                <Image
                src="https://utfs.io/f/eqXEbyZmWEZ5lOjgSBG2gjEUo09J4XZinGKBQauTkAFfvIHp"
                alt='logo'
                width={40}
                height={40}
                />

              </div>
              <span className="font-bold text-xl">Medirevs</span>
            </Link>
            <p className="text-sm text-muted-foreground">
            At Medirevs, we connect and empower the key players in healthcare with tailored digital solutions.
            </p>
            <div className="flex space-x-4">
              {/* Use Lucide icons directly */}
              <Link href="https://twitter.com/yourhandle" className="text-muted-foreground hover:text-primary" aria-label="Visit us on Twitter">
                <div className="h-8 w-8 rounded-full bg-muted flex items-center justify-center">
                  <Twitter className="h-4 w-4" /> {/* Twitter icon */}
                </div>
              </Link>
              <Link href="https://linkedin.com/company/yourcompany" className="text-muted-foreground hover:text-primary" aria-label="Visit us on LinkedIn">
                <div className="h-8 w-8 rounded-full bg-muted flex items-center justify-center">
                  <Linkedin className="h-4 w-4" /> {/* LinkedIn icon */}
                </div>
              </Link>
              {/* If you prefer the 'X' icon for Twitter: */}
              {/* <Link href="https://twitter.com/yourhandle" className="text-muted-foreground hover:text-primary" aria-label="Visit us on X">
                <div className="h-8 w-8 rounded-full bg-muted flex items-center justify-center">
                  <X className="h-4 w-4" />
                </div>
              </Link> */}
            </div>
          </div>

          <div>
            <h3 className="text-sm font-medium mb-4">Product</h3>
            <ul className="space-y-3 text-sm">
              {["Features", "Pricing", "Testimonials"].map((item) => (
                <li key={item}>
                  <Link href="#" className="text-muted-foreground hover:text-primary transition-colors">
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-medium mb-4">Company</h3>
            <ul className="space-y-3 text-sm">
              {["About", "Blog", "Press", "Partners"].map((item) => (
                <li key={item}>
                  <Link href="#" className="text-muted-foreground hover:text-primary transition-colors">
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-medium mb-4">Legal</h3>
            <ul className="space-y-3 text-sm">
              {["Terms", "Privacy", "Cookies"].map((item) => (
                <li key={item}>
                  <Link href="#" className="text-muted-foreground hover:text-primary transition-colors">
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t flex flex-col md:flex-row justify-between items-center">
          <p className="text-xs text-muted-foreground">
            &copy; {new Date().getFullYear()} Medventory. All rights reserved.
          </p>
          <div className="flex items-center gap-4 mt-4 md:mt-0">
            <Link href="/terms" className="text-xs text-muted-foreground hover:text-primary transition-colors">
              Terms of Service
            </Link>
            <Link href="/privacy" className="text-xs text-muted-foreground hover:text-primary transition-colors">
              Privacy Policy
            </Link>
            
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;