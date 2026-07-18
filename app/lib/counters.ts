const WORKSPACE = "pickle-cdo-site";
const BASE = `https://api.counterapi.dev/v1/${WORKSPACE}`;

async function safeJson(url: string): Promise<{ count: number } | null> {
  try {
    const res = await fetch(url);
    if (res.status === 400) return { count: 0 };
    if (!res.ok) return null;
    const data = await res.json();
    return typeof data.count === "number" ? { count: data.count } : null;
  } catch {
    return null;
  }
}

export async function incrementCounter(name: string): Promise<number | null> {
  const data = await safeJson(`${BASE}/${name}/up`);
  return data?.count ?? null;
}

export async function readCounter(name: string): Promise<number> {
  const data = await safeJson(`${BASE}/${name}/`);
  return data?.count ?? 0;
}

export type VisitorLocation = {
  countryCode: string;
  countryName: string;
  city?: string;
};

export async function detectVisitorLocation(): Promise<VisitorLocation | null> {
  try {
    const res = await fetch("https://ipapi.co/json/");
    if (!res.ok) return null;
    const data = await res.json();
    if (!data.country_code) return null;
    return {
      countryCode: data.country_code,
      countryName: data.country_name,
      city: data.city,
    };
  } catch {
    return null;
  }
}
