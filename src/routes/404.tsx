import { createFileRoute } from "@tanstack/react-router";
import { NotFound } from "@/components/not-found";

/* Prerendered to /404/index.html by the static build; .htaccess serves it for missing URLs. */
export const Route = createFileRoute("/404")({
  head: () => ({
    meta: [{ title: "Not found · Unconsumed Games" }, { name: "robots", content: "noindex" }],
  }),
  component: NotFound,
});
