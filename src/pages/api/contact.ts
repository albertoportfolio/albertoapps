import type { APIRoute } from 'astro';

export const prerender = false;

export const POST: APIRoute = async ({ request }) => {
  try {
    const apiKey = process.env.WEB3FORMS_ACCESS_KEY;

    if (!apiKey) {
      console.error("ERROR: No se encontró WEB3FORMS_ACCESS_KEY en las variables de Vercel");
      return new Response(
        JSON.stringify({ success: false, message: "Falta la API Key en Vercel" }),
        { status: 500, headers: { "Content-Type": "application/json" } }
      );
    }

    const bodyText = await request.text();
    const data = JSON.parse(bodyText);

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
  } catch (error: any) {
    console.error("DETALLE_DEL_ERROR:", error?.stack || error);
    return new Response(
      JSON.stringify({ success: false, message: error?.message || "Error interno" }),
      { status: 500, headers: { "Content-Type": "application/json" } }
    );
  }
};