export const POST: APIRoute = async ({ request }) => {
  try {
    const apiKey = import.meta.env.WEB3FORMS_ACCESS_KEY;
    console.log("API KEY existe?", !!apiKey);

    if (!apiKey) {
      return new Response(
        JSON.stringify({ success: false, message: "Falta la API Key" }),
        { status: 500, headers: { "Content-Type": "application/json" } }
      );
    }

    const data = await request.json();
    console.log("Data recibida:", data); // 👈 nuevo

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

    console.log("Status de Web3Forms:", response.status); // 👈 nuevo

    const result = await response.json();
    console.log("Respuesta de Web3Forms:", result); // 👈 nuevo

    return new Response(JSON.stringify(result), {
      status: response.status,
      headers: { "Content-Type": "application/json" },
    });
  } catch (error: unknown) {
    console.error("Error capturado:", error); // 👈 nuevo
    const msg = error instanceof Error ? error.message : "Error interno";
    return new Response(
      JSON.stringify({ success: false, message: msg }),
      { status: 500, headers: { "Content-Type": "application/json" } }
    );
  }
};