import type { APIRoute } from 'astro';
import { WEB3FORMS_ACCESS_KEY } from 'astro:env/server';

export const prerender = false;

export const POST: APIRoute = async ({ request }) => {
  try {
    const data = await request.json();

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Accept": "application/json",
      },
      body: JSON.stringify({
        ...data,
        access_key: WEB3FORMS_ACCESS_KEY,
      }),
    });

    const result = await response.json();

    return new Response(JSON.stringify(result), {
      status: response.status,
      headers: { "Content-Type": "application/json" },
    });
  } catch (error: unknown) {
    const errorMessage = error instanceof Error ? error.message : "Error desconocido";

    return new Response(
      JSON.stringify({
        success: false,
        message: "Error procesando el formulario en el servidor",
        error: errorMessage,
      }),
      { status: 500, headers: { "Content-Type": "application/json" } }
    );
  }
};