import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

/**
 * Combines conditional class names with Tailwind merge resolution
 */
export function cn(...inputs: ClassValue[]): string {
  return twMerge(clsx(inputs));
}
