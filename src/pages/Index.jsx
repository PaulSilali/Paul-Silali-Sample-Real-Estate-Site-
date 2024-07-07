import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";

const searchSchema = z.object({
  location: z.string().min(1, "Location is required"),
  propertyType: z.string().min(1, "Property type is required"),
  priceRange: z.string().min(1, "Price range is required"),
});

const contactSchema = z.object({
  name: z.string().min(1, "Name is required"),
  email: z.string().email("Invalid email address"),
  phone: z.string().min(1, "Phone number is required"),
  message: z.string().min(1, "Message is required"),
});

const Index = () => {
  const searchForm = useForm({
    resolver: zodResolver(searchSchema),
  });

  const contactForm = useForm({
    resolver: zodResolver(contactSchema),
  });

  const onSearchSubmit = (data) => {
    console.log("Search data:", data);
  };

  const onContactSubmit = (data) => {
    console.log("Contact data:", data);
  };

  return (
    <div className="space-y-16 font-serif">
      {/* Hero Section */}
      <section className="relative h-[600px] bg-gray-800 text-white">
        <img src="/images/hero-background.jpg" alt="Luxury Real Estate" className="absolute inset-0 w-full h-full object-cover opacity-50" />
        <div className="relative z-10 flex flex-col items-center justify-center h-full space-y-4">
          <h1 className="text-5xl font-bold">LUZCO</h1>
          <p className="text-xl">Invest in Property</p>
          <form onSubmit={searchForm.handleSubmit(onSearchSubmit)} className="flex space-x-4">
            <Input placeholder="Location" {...searchForm.register("location")} />
            <Input placeholder="Property Type" {...searchForm.register("propertyType")} />
            <Input placeholder="Price Range" {...searchForm.register("priceRange")} />
            <Button type="submit">Search</Button>
          </form>
        </div>
      </section>

      {/* Introduction Section */}
      <section className="container mx-auto space-y-8 text-center">
        <p className="text-lg">
          Discover the pinnacle of luxury living with our exclusive collection of high-end properties.
        </p>
      </section>

      {/* New Projects Section */}
      <section className="container mx-auto space-y-8">
        <h2 className="text-3xl font-bold text-center">New Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Add new project cards here */}
        </div>
      </section>

      {/* Exceptional Properties Section */}
      <section className="container mx-auto space-y-8">
        <h2 className="text-3xl font-bold text-center">Exceptional Properties</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Add exceptional property cards here */}
        </div>
      </section>

      {/* Sell My Property Section */}
      <section className="container mx-auto space-y-8">
        <h2 className="text-3xl font-bold text-center">Sell My Property</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Add sell my property cards here */}
        </div>
      </section>

      {/* Why We Are the Best Partner Section */}
      <section className="container mx-auto space-y-8">
        <h2 className="text-3xl font-bold text-center">Why We Are the Best Partner for You</h2>
        <p className="text-lg text-center">
          We provide unparalleled service and expertise to help you find your dream home or sell your property with ease.
        </p>
      </section>

      {/* Contact Us Section */}
      <section className="container mx-auto space-y-8">
        <h2 className="text-3xl font-bold text-center">Contact Us</h2>
        <form onSubmit={contactForm.handleSubmit(onContactSubmit)} className="space-y-4">
          <Input placeholder="Name" {...contactForm.register("name")} />
          <Input placeholder="Email" {...contactForm.register("email")} />
          <Input placeholder="Phone" {...contactForm.register("phone")} />
          <Textarea placeholder="Message" {...contactForm.register("message")} />
          <Button type="submit">Submit</Button>
        </form>
        <div className="text-center">
          <p>Address: 123 Luxury St, Dream City</p>
          <p>Phone: (123) 456-7890</p>
          <p>Email: contact@luxuryrealestate.com</p>
        </div>
      </section>

      {/* Our Social Media Section */}
      <section className="container mx-auto space-y-8">
        <h2 className="text-3xl font-bold text-center">Our Social Media</h2>
        <div className="flex justify-center space-x-4">
          {/* Add social media icons/links here */}
        </div>
      </section>

      {/* Our Logo Section */}
      <section className="container mx-auto space-y-8 text-center">
        <img src="/images/luxury-ship.jpg" alt="Our Logo" className="mx-auto h-32 w-32 object-cover" />
      </section>
    </div>
  );
};

export default Index;