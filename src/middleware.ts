import { defineMiddleware } from "astro/middleware";

export const onRequest = defineMiddleware((context, next) => {
    if (import.meta.env.PROD) {
        const requestUrl = new URL(context.request.url);
        if (requestUrl.hostname !== "www.schwigri.com") {
            requestUrl.hostname = "www.schwigri.com";
            return new Response(null, {
                status: 301,
                headers: {
                    location: requestUrl.toString(),
                },
            })
        }
    }

    return next();
});
