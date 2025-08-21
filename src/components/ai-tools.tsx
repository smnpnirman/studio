"use client";

import { useFormState, useFormStatus } from "react-dom";
import {
  generateFarmDescriptionAction,
  generateProductDescriptionAction,
} from "@/lib/actions";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { Loader2, Wand2 } from "lucide-react";
import { Textarea } from "@/components/ui/textarea";

const initialState = {
  description: "",
  error: null,
};

function SubmitButton({ title }: { title: string }) {
  const { pending } = useFormStatus();
  return (
    <Button type="submit" disabled={pending} className="w-full bg-accent text-accent-foreground hover:bg-accent/90">
      {pending ? (
        <Loader2 className="mr-2 h-4 w-4 animate-spin" />
      ) : (
        <Wand2 className="mr-2 h-4 w-4" />
      )}
      {pending ? "Generating..." : title}
    </Button>
  );
}

function FarmDescriptionForm() {
  const [state, formAction] = useFormState(
    generateFarmDescriptionAction,
    initialState
  );

  return (
    <Card>
      <CardHeader>
        <CardTitle className="font-headline">Farm Description Generator</CardTitle>
        <CardDescription>
          Enter keywords to generate a compelling description for Chandra Malti Farm.
        </CardDescription>
      </CardHeader>
      <CardContent>
        <form action={formAction} className="space-y-4">
          <div>
            <Label htmlFor="farm-keywords">Keywords</Label>
            <Input
              id="farm-keywords"
              name="keywords"
              placeholder="e.g., organic, sustainable, family-owned, fresh produce"
              required
            />
          </div>
          <SubmitButton title="Generate Farm Description" />
          {state.error && <p className="text-sm text-destructive">{state.error}</p>}
        </form>
        {state.description && (
          <div className="mt-6 p-4 border rounded-md bg-background">
            <h4 className="font-bold mb-2">Generated Description:</h4>
            <p className="text-sm text-muted-foreground">{state.description}</p>
          </div>
        )}
      </CardContent>
    </Card>
  );
}

function ProductDescriptionForm() {
  const [state, formAction] = useFormState(
    generateProductDescriptionAction,
    initialState
  );

  return (
    <Card>
      <CardHeader>
        <CardTitle className="font-headline">Product Description Generator</CardTitle>
        <CardDescription>
          Provide product details to generate an attractive description.
        </CardDescription>
      </CardHeader>
      <CardContent>
        <form action={formAction} className="space-y-4">
          <div className="grid sm:grid-cols-2 gap-4">
            <div>
              <Label htmlFor="product-name">Product Name</Label>
              <Input
                id="product-name"
                name="productName"
                placeholder="e.g., Organic Tomatoes"
                required
              />
            </div>
            <div>
              <Label htmlFor="product-type">Product Type</Label>
              <Input
                id="product-type"
                name="productType"
                placeholder="e.g., Vegetable"
                required
              />
            </div>
          </div>
          <div>
            <Label htmlFor="product-keywords">Keywords</Label>
            <Textarea
              id="product-keywords"
              name="keywords"
              placeholder="e.g., fresh, juicy, organic, locally-sourced"
              required
            />
          </div>
          <SubmitButton title="Generate Product Description" />
          {state.error && <p className="text-sm text-destructive">{state.error}</p>}
        </form>
        {state.description && (
          <div className="mt-6 p-4 border rounded-md bg-background">
            <h4 className="font-bold mb-2">Generated Description:</h4>
            <p className="text-sm text-muted-foreground">{state.description}</p>
          </div>
        )}
      </CardContent>
    </Card>
  );
}

export default function AiTools() {
  return (
    <div className="grid lg:grid-cols-2 gap-8">
      <FarmDescriptionForm />
      <ProductDescriptionForm />
    </div>
  );
}
