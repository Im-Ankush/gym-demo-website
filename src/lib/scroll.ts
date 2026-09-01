/**
 * Smoothly scrolls to an element by ID, ensuring reliable repeated navigation
 * even if the window location hash is already set to the target.
 */
export interface ScrollOptions {
  plan?: string;
  updateHash?: boolean;
  behavior?: ScrollBehavior;
  onComplete?: () => void;
}

export function scrollToSection(
  targetIdOrHref: string,
  options?: ScrollOptions
): void {
  if (typeof window === "undefined") return;

  const targetId = targetIdOrHref.replace(/^#/, "");
  if (!targetId) return;

  // If a plan is provided or explicitly cleared, notify the LeadForm
  if (options?.plan !== undefined) {
    window.dispatchEvent(
      new CustomEvent("fitzone:select-plan", {
        detail: { plan: options.plan },
      })
    );
  }

  const element = document.getElementById(targetId);
  if (element) {
    element.scrollIntoView({
      behavior: options?.behavior || "smooth",
      block: "start",
    });

    // Update the URL hash without triggering default page jump
    if (options?.updateHash !== false) {
      if (window.location.hash !== `#${targetId}`) {
        window.history.pushState(null, "", `#${targetId}`);
      }
    }
  }

  if (options?.onComplete) {
    options.onComplete();
  }
}
