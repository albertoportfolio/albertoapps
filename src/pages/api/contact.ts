import type { APIRoute } from 'astro';

export const prerender = false; // Forzar ejecución en servidor (SSR/Serverless)

export const POST: APIRoute = async ({ request }) => {
  try {
    const data = await request.json();

    const payload = {
      ...data,
      access_key: import.meta.env.WEB3FORMS_ACCESS_KEY,
    };

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Accept": "application/json",
      },
      body: JSON.stringify(payload),
    });

    const result = await response.json();

    return new Response(JSON.stringify(result), {
      status: response.status,
      headers: { "Content-Type": "application/json" },
    });
  } catch (error) {
    return new Response(
      JSON.stringify({ success: false, message: "Error interno del servidor" }),
      { status: 500, headers: { "Content-Type": "application/json" } }
    );
  }
};