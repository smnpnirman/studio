'use server';

/**
 * @fileOverview Farm description generator.
 *
 * - generateFarmDescription - A function that generates a description of a farm.
 * - GenerateFarmDescriptionInput - The input type for the generateFarmDescription function.
 * - GenerateFarmDescriptionOutput - The return type for the generateFarmDescription function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const GenerateFarmDescriptionInputSchema = z.object({
  farmName: z.string().describe('The name of the farm.'),
  location: z.string().describe('The location of the farm.'),
  keywords: z.string().describe('Keywords describing the farm and its products.'),
});
export type GenerateFarmDescriptionInput = z.infer<
  typeof GenerateFarmDescriptionInputSchema
>;

const GenerateFarmDescriptionOutputSchema = z.object({
  description: z.string().describe('A compelling description of the farm.'),
});
export type GenerateFarmDescriptionOutput = z.infer<
  typeof GenerateFarmDescriptionOutputSchema
>;

export async function generateFarmDescription(
  input: GenerateFarmDescriptionInput
): Promise<GenerateFarmDescriptionOutput> {
  return generateFarmDescriptionFlow(input);
}

const prompt = ai.definePrompt({
  name: 'generateFarmDescriptionPrompt',
  input: {schema: GenerateFarmDescriptionInputSchema},
  output: {schema: GenerateFarmDescriptionOutputSchema},
  prompt: `You are a marketing expert specializing in agriculture. Generate an engaging and professional description for the farm based on the information provided.

Farm Name: {{{farmName}}}
Location: {{{location}}}
Keywords: {{{keywords}}}

Description:`,
});

const generateFarmDescriptionFlow = ai.defineFlow(
  {
    name: 'generateFarmDescriptionFlow',
    inputSchema: GenerateFarmDescriptionInputSchema,
    outputSchema: GenerateFarmDescriptionOutputSchema,
  },
  async input => {
    const {output} = await prompt(input);
    return output!;
  }
);
