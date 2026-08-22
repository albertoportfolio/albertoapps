import type { APIRoute } from 'astro';

export const prerender = false;

export const POST: APIRoute = async ({ request }) => {
  try {
    const data = await request.json();
    const apiKey = import.meta.env.PUBLIC_WEB3FORMS_ACCESS_KEY;

    if (!apiKey) {
      return new Response(
        JSON.stringify({ success: false, message: "Falta la API Key" }),
        { status: 500, headers: { "Content-Type": "application/json" } }
      );
    }

    const res = await fetch("https://api.web3forms.com/submit", {
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

    const result = await res.json();

    return new Response(JSON.stringify(result), {
      status: res.status,
      headers: { "Content-Type": "application/json" },
    });
  } catch (error) {
    return new Response(
      JSON.stringify({ success: false, message: "Error interno" }),
      { status: 500, headers: { "Content-Type": "application/json" } }
    );
  }
};