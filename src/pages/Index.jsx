import React from 'react';
import { Mail, Phone, MapPin } from 'lucide-react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { toast } from "sonner";
import Header from '../components/Header';
import Footer from '../components/Footer';
import PropertyCard from '../components/PropertyCard';

const Index = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    toast.success("Message sent successfully!");
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow">
        <section className="bg-gradient-to-r from-blue-500 to-purple-600 text-white py-20">
          <div className="container mx-auto text-center">
            <h1 className="text-5xl font-bold mb-4">Welcome to Elite Estates</h1>
            <p className="text-xl mb-8">Discover Your Dream Luxury Home</p>
            <Button size="lg">View Properties</Button>
          </div>
        </section>

        <section className="py-16 bg-gray-100">
          <div className="container mx-auto">
            <h2 className="text-3xl font-semibold text-center mb-12">Featured Properties</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <PropertyCard
                image="/placeholder.svg"
                title="Seaside Villa"
                price="$2,500,000"
                beds={4}
                baths={3}
                sqft={3500}
              />
              <PropertyCard
                image="/placeholder.svg"
                title="Mountain Retreat"
                price="$1,800,000"
                beds={3}
                baths={2}
                sqft={2800}
              />
              <PropertyCard
                image="/placeholder.svg"
                title="Urban Penthouse"
                price="$3,200,000"
                beds={5}
                baths={4}
                sqft={4200}
              />
            </div>
          </div>
        </section>

        <section className="py-16">
          <div className="container mx-auto">
            <h2 className="text-3xl font-semibold text-center mb-12">Contact Us</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              <div>
                <h3 className="text-xl font-semibold mb-4">Get in Touch</h3>
                <form onSubmit={handleSubmit} className="space-y-4">
                  <Input placeholder="Your Name" required />
                  <Input type="email" placeholder="Your Email" required />
                  <Textarea placeholder="Your Message" required />
                  <Button type="submit">Send Message</Button>
                </form>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-4">Our Information</h3>
                <div className="space-y-4">
                  <p className="flex items-center">
                    <MapPin className="mr-2" /> 789 Luxury Ave, Prestige City
                  </p>
                  <p className="flex items-center">
                    <Phone className="mr-2" /> (987) 654-3210
                  </p>
                  <p className="flex items-center">
                    <Mail className="mr-2" /> info@eliteestates.com
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Index;