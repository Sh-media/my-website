export default {
  async fetch(request, env) {
    const url = new URL(request.url);

    if (url.pathname === "/390432") {
      const target = "https://radio20.net/390432";

      const response = await fetch(target, {
        headers: {
          "User-Agent": request.headers.get("User-Agent") || "Mozilla/5.0"
        }
      });

      return new Response(response.body, response);
    }

    return env.ASSETS.fetch(request);
  }
};
