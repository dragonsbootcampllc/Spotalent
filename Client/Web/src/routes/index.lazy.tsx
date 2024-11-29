import { createLazyFileRoute } from "@tanstack/react-router";

export const Route = createLazyFileRoute("/")({
    component: Index,
});

function Index() {
    return (
        <div className="w-full h-full text-5xl font-bold text-dark-main overflow-hidden flex justify-center items-center">
            <h3>Welcome Home!</h3>
        </div>
    );
}
