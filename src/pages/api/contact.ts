import type { APIRoute } from 'astro';

export const prerender = false;

export const POST: APIRoute = async ({ request }) => {
  try {
    // Leemos la variable con la API nativa de Astro
    const apiKey = import.meta.env.WEB3FORMS_ACCESS_KEY;
    console.log("API KEY existe?", !!apiKey);

    if (!apiKey) {
      return new Response(
        JSON.stringify({ success: false, message: "Falta la API Key" }),
        { status: 500, headers: { "Content-Type": "application/json" } }
      );
    }

    const data = await request.json();

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Accept": "application/json",
      },
      body: JSON.stringify({
        ...data,
        access_key: apiKey,
      }),
    });

    const result = await response.json();

    return new Response(JSON.stringify(result), {
      status: response.status,
      headers: { "Content-Type": "application/json" },
    });
  } catch (error: unknown) {
    const msg = error instanceof Error ? error.message : "Error interno";
    return new Response(
      JSON.stringify({ success: false, message: msg }),
      { status: 500, headers: { "Content-Type": "application/json" } }
    );
  }
};