import React from 'react';
import { Bed, Bath, Move } from 'lucide-react';
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const PropertyCard = ({ image, title, price, beds, baths, sqft }) => {
  return (
    <Card className="overflow-hidden">
      <img src={image} alt={title} className="w-full h-48 object-cover" />
      <CardContent className="p-4">
        <h3 className="text-xl font-semibold mb-2">{title}</h3>
        <p className="text-2xl font-bold text-blue-600 mb-4">{price}</p>
        <div className="flex justify-between text-gray-600">
          <span className="flex items-center"><Bed size={18} className="mr-1" /> {beds} beds</span>
          <span className="flex items-center"><Bath size={18} className="mr-1" /> {baths} baths</span>
          <span className="flex items-center"><Move size={18} className="mr-1" /> {sqft} sqft</span>
        </div>
      </CardContent>
      <CardFooter className="bg-gray-100 p-4">
        <Button className="w-full">View Details</Button>
      </CardFooter>
    </Card>
  );
};

export default PropertyCard;