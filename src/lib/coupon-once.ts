// Show each coupon code at most once per rendered page (Astro.locals is per-render).
export function showCodeOnce(locals: Record<string, any>, code: string): boolean {
  const seen: Set<string> = (locals.__couponSeen ??= new Set<string>());
  if (seen.has(code)) return false;
  seen.add(code);
  return true;
}
