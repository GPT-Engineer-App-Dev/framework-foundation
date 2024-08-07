import React from "react";
import { Button } from "@/components/ui/button";
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from "@/components/ui/card";

const Index: React.FC = () => {
  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-6">My TypeScript Application</h1>
      
      <Card className="w-full max-w-md mx-auto">
        <CardHeader>
          <CardTitle>Welcome</CardTitle>
          <CardDescription>This is a TypeScript bare-bones application you can build upon.</CardDescription>
        </CardHeader>
        <CardContent>
          <p className="mb-4">Here's where you can add your main content.</p>
          <ul className="list-disc list-inside">
            <li>Add components</li>
            <li>Implement features</li>
            <li>Style your application</li>
          </ul>
        </CardContent>
        <CardFooter>
          <Button onClick={() => console.log("Button clicked!")}>Get Started</Button>
        </CardFooter>
      </Card>
    </div>
  );
};

export default Index;