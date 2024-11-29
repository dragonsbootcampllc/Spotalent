import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/(auth)/signup")({
    component: RouteComponent,
});

function RouteComponent() {
    return <div>{
        import.meta?.env?.VITE_API_BASE_URL
    }</div>;
}
