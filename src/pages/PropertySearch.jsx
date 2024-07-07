import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const PropertySearch = () => {
  return (
    <div className="container mx-auto space-y-8 font-serif">
      <Card>
        <CardHeader>
          <CardTitle>Property Search</CardTitle>
        </CardHeader>
        <CardContent>
          <p>Search for your dream property here.</p>
        </CardContent>
      </Card>
    </div>
  );
};

export default PropertySearch;