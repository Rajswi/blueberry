import React from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Logo } from "@/components/logo";
import { Twitter, Linkedin, Youtube, Rss } from "lucide-react";

const footerSections = [
  {
    title: "Product",
    links: [
      { label: "Download", href: "#" },
      { label: "Security", href: "#" },
      { label: "Support", href: "#" },
      { label: "Feature Requests", href: "#" },
    ],
  },
  {
    title: "Resources",
    links: [
      { label: "Explore", href: "#" },
      { label: "Learn", href: "#" },
      { label: "Blog", href: "#" },
      { label: "Docs", href: "#" },
    ],
  },
  {
    title: "Company",
    links: [
      { label: "About", href: "#" },
      { label: "Careers", href: "#" },
      { label: "Press Kit", href: "#" },
    ],
  },
  {
    title: "Socials",
    links: [
      { label: "X.com", href: "#", icon: <Twitter size={16} /> },
      { label: "LinkedIn", href: "#", icon: <Linkedin size={16} /> },
      { label: "YouTube", href: "#", icon: <Youtube size={16} /> },
      { label: "Podcast", href: "#", icon: <Rss size={16} /> },
    ],
  },
];

export default function Footer() {
  return (
    <footer className="bg-purple-400/60 p-8 sm:p-12  mx-auto ">
      <div className=" mx-auto max-w-7xl  bg-white rounded-3xl p-6">
        {/* Newsletter Section */}
        
        <div className="flex gap-2">
          <div className="flex items-start gap-4 p-8 w-1/3">
            {/* Make sure your blueberry-logo.png is in the /public folder */}
            <img
              src="/blueberry-logo.png"
              alt="Blueberry Logo"
              width={60}
              height={60}
            />
          </div>
          
          <div className="flex flex-col gap-4 w-2/3">
        
<div className="lg:col-span-2">
            <h3 className="text-3xl font-bold text-purple-900">
              Enter your email
            </h3>
            <p className="text-purple-700 mt-2">
              Sign up for our newsletter and join the growing Blueberry
              community.
            </p>
            <form className="flex gap-3 mt-4">
              <Input
                type="email"
                placeholder="Your email address"
                className="flex-grow"
              />
              <Button
                type="submit"
                className="bg-purple-600 hover:bg-purple-700 text-white rounded-lg"
              >
                Sign up
              </Button>
            </form>
          </div>
        {/* Footer Links Section */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-16 
        ">
          {footerSections.map((section) => (
            <div key={section.title}>
              <h4 className="font-semibold text-purple-900">{section.title}</h4>
              <ul className="mt-4 space-y-3">
                {section.links.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className="flex items-center gap-2 text-purple-700 hover:text-purple-900 transition-colors"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        </div>
 
 </div>
        <div className="flex items-center gap-2">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
          </span>
          <span className="text-sm text-purple-800">Operational</span>
        </div>
      </div>
      {/* Bottom Bar with Copyright and Status */}
      <div className="flex flex-col sm:flex-row justify-between items-center pt-6 mx-18 ">
        <div className="flex items-center gap-4">
          <p className="text-sm font-medium text-purple-950/70">
            &copy; {new Date().getFullYear()} Blueberry
          </p>
        </div>
        <div className="flex gap-6 mt-4 sm:mt-0">
          <Link
            href="#"
            className="text-sm font-medium text-purple-950 hover:text-purple-900"
          >
            Terms
          </Link>
          <Link
            href="#"
            className="text-sm font-medium text-purple-950 hover:text-purple-900"
          >
            Privacy
          </Link>
        </div>
      </div>
    </footer>
  );
}
