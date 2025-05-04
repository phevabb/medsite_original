import React from 'react';
import { Github, Linkedin, Twitter } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-secondary/30 pt-16 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Company Info */}
          <div>
            <div className="flex items-center mb-4">
              <div className="h-8 w-8 rounded-md bg-gradient-to-br from-mediblue-500 to-medipurple-500 flex items-center justify-center text-white font-bold text-xl mr-2">M</div>
              <span className="font-bold text-lg">MEDIREVS</span>
            </div>
            <p className="text-muted-foreground mb-4">
              Transforming healthcare through innovative AI-powered solutions.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="h-9 w-9 rounded-full bg-foreground/10 flex items-center justify-center text-foreground hover:bg-mediblue-500 hover:text-white transition-colors">
                <Twitter className="h-4 w-4" />
              </a>
              <a href="#" className="h-9 w-9 rounded-full bg-foreground/10 flex items-center justify-center text-foreground hover:bg-mediblue-500 hover:text-white transition-colors">
                <Linkedin className="h-4 w-4" />
              </a>
              <a href="#" className="h-9 w-9 rounded-full bg-foreground/10 flex items-center justify-center text-foreground hover:bg-mediblue-500 hover:text-white transition-colors">
                <Github className="h-4 w-4" />
              </a>
            </div>
          </div>
          
          {/* Products */}
          <div>
            <h3 className="font-bold text-lg mb-4">Products</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-muted-foreground hover:text-mediblue-600">EHR Systems</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-mediblue-600">AI Diagnostics</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-mediblue-600">Custom Solutions</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-mediblue-600">Mobile App</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-mediblue-600">Data Analytics</a></li>
            </ul>
          </div>
          
          {/* Company */}
          <div>
            <h3 className="font-bold text-lg mb-4">Company</h3>
            <ul className="space-y-2">
              <li><a href="#about" className="text-muted-foreground hover:text-mediblue-600">About Us</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-mediblue-600">Careers</a></li>
              <li><a href="#partners" className="text-muted-foreground hover:text-mediblue-600">Partners</a></li>
              <li><a href="#blog" className="text-muted-foreground hover:text-mediblue-600">Blog</a></li>
              <li><a href="#contact" className="text-muted-foreground hover:text-mediblue-600">Contact</a></li>
            </ul>
          </div>
          
      
        </div>
        
        {/* Bottom Footer */}
        <div className="pt-8 border-t border-border">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-sm text-muted-foreground mb-4 md:mb-0">
              &copy; {currentYear} MEDIREVS. All rights reserved.
            </p>
            <div className="flex space-x-6">
              <a href="#" className="text-sm text-muted-foreground hover:text-mediblue-600">Privacy Policy</a>
              <a href="#" className="text-sm text-muted-foreground hover:text-mediblue-600">Terms of Service</a>
              <a href="#" className="text-sm text-muted-foreground hover:text-mediblue-600">Cookie Policy</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
