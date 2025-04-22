import { clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

/**
 * Utility function to merge class names with Tailwind Merge.
 * @param inputs - Class names or conditions to merge.
 * @returns A single merged class name string.
 */
export function cn(...inputs: Parameters<typeof clsx>) {
  return twMerge(clsx(inputs));
}
