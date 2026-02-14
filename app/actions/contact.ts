"use server";

export async function sendContactEmail(formData: FormData) {
  // Simulate network delay
  await new Promise((resolve) => setTimeout(resolve, 1000));
  
  const name = formData.get("name");
  const email = formData.get("email");
  const phone = formData.get("phone");
  const message = formData.get("message");

  console.log("Contact Form Submission:", { name, email, phone, message });

  // Return simulated success
  return { success: true, errors: undefined, error: undefined };
}
