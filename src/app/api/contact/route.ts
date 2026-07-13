import { NextResponse } from "next/server";
import { supabase } from "@/lib/supabase";
import { z } from "zod";

// Validation schema for contact form
const contactSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Invalid email address"),
  subject: z.string().optional(),
  message: z.string().min(10, "Message must be at least 10 characters"),
});

export async function POST(request: Request) {
  try {
    const body = await request.json();
    
    // Validate request body
    const validatedData = contactSchema.parse(body);

    // Only attempt to insert if Supabase URL is configured
    if (process.env.NEXT_PUBLIC_SUPABASE_URL) {
      const { error } = await supabase
        .from('contacts')
        .insert([
          {
            name: validatedData.name,
            email: validatedData.email,
            subject: validatedData.subject || "New Portfolio Inquiry",
            message: validatedData.message,
          }
        ]);

      if (error) {
        console.error("Supabase insert error:", error);
        return NextResponse.json(
          { error: "Failed to save message to database." },
          { status: 500 }
        );
      }
    } else {
      console.warn("Supabase not configured. Message not saved to DB:", validatedData);
    }

    // Here you would typically trigger EmailJS or Resend. 
    // Since EmailJS is primarily client-side, this API route acts as a secure DB backup.
    
    return NextResponse.json(
      { message: "Message received successfully." },
      { status: 200 }
    );
    
  } catch (error) {
    if (error instanceof z.ZodError) {
      return NextResponse.json(
        { error: "Validation failed", details: error.errors },
        { status: 400 }
      );
    }
    
    console.error("Contact API error:", error);
    return NextResponse.json(
      { error: "An unexpected error occurred." },
      { status: 500 }
    );
  }
}
