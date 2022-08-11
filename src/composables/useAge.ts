export function useAge() {
  const diff_ms = Date.now() - new Date(2001, 1, 10).getTime();
  const age_dt = new Date(diff_ms);

  const age = Math.abs(age_dt.getUTCFullYear() - 1970);
  return { age };
}
