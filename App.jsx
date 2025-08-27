import { Card, CardContent } from "@shadcn/ui";
import { Button } from "@shadcn/ui";
import { Input } from "@shadcn/ui";
import { Briefcase, Users } from "lucide-react";
import { motion } from "framer-motion";

export default function JobAppMockup() {
  return (
    <div className="min-h-screen bg-gray-50 p-6">
      {/* Header */}
      <header className="flex justify-between items-center mb-8">
        <h1 className="text-2xl font-bold text-blue-600">WorkConnect</h1>
        <nav className="space-x-4">
          <Button variant="ghost">Login</Button>
          <Button>Sign Up</Button>
        </nav>
      </header>

      {/* Hero Section */}
      <motion.section 
        initial={{ opacity: 0, y: 30 }} 
        animate={{ opacity: 1, y: 0 }} 
        transition={{ duration: 0.6 }}
        className="text-center mb-12"
      >
        <h2 className="text-3xl font-bold mb-4">Connecting Employers and Job Seekers</h2>
        <p className="text-gray-600 mb-6">Find the right talent or your next opportunity, all in one place.</p>
        <div className="flex justify-center gap-3">
          <Button className="flex items-center gap-2"><Briefcase size={18}/> Hire Talent</Button>
          <Button variant="outline" className="flex items-center gap-2"><Users size={18}/> Find Jobs</Button>
        </div>
      </motion.section>

      {/* Search Section */}
      <Card className="max-w-3xl mx-auto shadow-md">
        <CardContent className="p-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <Input placeholder="Job title or skill" />
            <Input placeholder="Location" />
            <Button>Search</Button>
          </div>
        </CardContent>
      </Card>

      {/* Featured Jobs */}
      <motion.section 
        initial={{ opacity: 0, y: 30 }} 
        animate={{ opacity: 1, y: 0 }} 
        transition={{ duration: 0.6, delay: 0.3 }}
        className="mt-12"
      >
        <h3 className="text-xl font-semibold mb-4">Featured Jobs</h3>
        <div className="grid md:grid-cols-3 gap-6">
          {[1,2,3].map((job) => (
            <Card key={job} className="shadow-sm">
              <CardContent className="p-4">
                <h4 className="font-bold">Software Engineer</h4>
                <p className="text-sm text-gray-600">Lagos, Nigeria</p>
                <Button className="mt-3 w-full">Apply Now</Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </motion.section>
    </div>
  );
}