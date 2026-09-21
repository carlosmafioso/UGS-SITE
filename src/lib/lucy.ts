/**
 * Utility to interact with LUCY Chat Widget globally across the application.
 */
export function triggerLucyChat(prompt?: string) {
    if (typeof window !== "undefined") {
        window.dispatchEvent(
            new CustomEvent("open-lucy-chat", {
                detail: { prompt },
            })
        );
    }
}
