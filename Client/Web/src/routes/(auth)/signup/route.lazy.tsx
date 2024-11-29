import { createLazyFileRoute } from "@tanstack/react-router";

export const Route = createLazyFileRoute("/(auth)/signup")({
    component: RouteComponent,
});

function RouteComponent() {
    return <div>{
        import.meta.env.VITE_API_BASE_URL
    }</div>;
}
