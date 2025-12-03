/**
 * Awaits for a specified delay
 * @param ms The delay in milliseconds
 * @returns A Promise that resolves after the specified delay
 * @example
 * // Wait for 1 second
 * await sleep(1000);
 */
export default function sleep(ms: number): Promise<void> {
  return new Promise((resolve) => {
    setTimeout(resolve, ms)
  })
}