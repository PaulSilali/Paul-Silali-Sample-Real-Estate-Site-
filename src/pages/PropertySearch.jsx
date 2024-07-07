import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";

const PropertySearch = () => {
  return (
    <div className="container mx-auto space-y-8 font-serif">
      <h2 className="text-3xl font-bold text-center">Featured Properties</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        <Card>
          <img src="/images/featured-property-1.jpg" alt="Luxury Villa" className="w-full h-48 object-cover" />
          <CardHeader>
            <CardTitle>Luxury Villa 1</CardTitle>
          </CardHeader>
          <CardContent>
            <p>Beautiful villa with modern amenities and stunning views.</p>
          </CardContent>
          <CardFooter>
            <Button>View Details</Button>
          </CardFooter>
        </Card>
        <Card>
          <img src="/images/featured-property-2.jpg" alt="Luxury Apartment" className="w-full h-48 object-cover" />
          <CardHeader>
            <CardTitle>Luxury Apartment 2</CardTitle>
          </CardHeader>
          <CardContent>
            <p>Beautiful apartment with modern amenities and stunning views.</p>
          </CardContent>
          <CardFooter>
            <Button>View Details</Button>
          </CardFooter>
        </Card>
        <Card>
          <img src="/images/featured-property-3.jpg" alt="Luxury Mansion" className="w-full h-48 object-cover" />
          <CardHeader>
            <CardTitle>Luxury Mansion 3</CardTitle>
          </CardHeader>
          <CardContent>
            <p>Beautiful mansion with modern amenities and stunning views.</p>
          </CardContent>
          <CardFooter>
            <Button>View Details</Button>
          </CardFooter>
        </Card>
      </div>
    </div>
  );
};

export default PropertySearch;