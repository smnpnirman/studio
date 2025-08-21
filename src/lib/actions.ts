"use server";

import { z } from "zod";
import { generateFarmDescription } from "@/ai/flows/generate-farm-description";
import { generateProductDescription } from "@/ai/flows/generate-product-description";

const farmSchema = z.object({
  keywords: z.string().min(1, "Keywords are required."),
});

const productSchema = z.object({
  productName: z.string().min(1, "Product name is required."),
  productType: z.string().min(1, "Product type is required."),
  keywords: z.string().min(1, "Keywords are required."),
});

type FormState = {
  description: string;
  error: string | null;
};

export async function generateFarmDescriptionAction(
  prevState: FormState,
  formData: FormData
): Promise<FormState> {
  try {
    const validatedFields = farmSchema.safeParse({
      keywords: formData.get("keywords"),
    });

    if (!validatedFields.success) {
      return {
        description: "",
        error: "Validation failed. Please check your input.",
      };
    }

    const { description } = await generateFarmDescription({
      farmName: "Chandra Malti Farm",
      location: "Deoghar",
      keywords: validatedFields.data.keywords,
    });

    return { description, error: null };
  } catch (e) {
    const errorMessage = e instanceof Error ? e.message : "An unknown error occurred.";
    return {
      description: "",
      error: `Failed to generate description: ${errorMessage}`,
    };
  }
}

export async function generateProductDescriptionAction(
  prevState: FormState,
  formData: FormData
): Promise<FormState> {
  try {
    const validatedFields = productSchema.safeParse({
      productName: formData.get("productName"),
      productType: formData.get("productType"),
      keywords: formData.get("keywords"),
    });

    if (!validatedFields.success) {
      return {
        description: "",
        error: "Validation failed. Please check your input.",
      };
    }

    const { description } = await generateProductDescription(validatedFields.data);

    return { description, error: null };
  } catch (e) {
    const errorMessage = e instanceof Error ? e.message : "An unknown error occurred.";
    return {
      description: "",
      error: `Failed to generate description: ${errorMessage}`,
    };
  }
}
