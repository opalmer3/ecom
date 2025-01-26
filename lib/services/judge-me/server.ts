"use server";

const baseUrl = "https://judge.me/api/v1";

export async function getServerReviewWidget(productHandle: string, page = 1) {
  const apiKey = process.env.JUDGE_ME_PRIVATE_API_KEY;
  if (!apiKey) throw new Error("Judge.me private API key is not configured");

  const response = await fetch(
    `${baseUrl}/widgets/product_review?api_token=${apiKey}&shop_domain=${process.env.NEXT_PUBLIC_DEFAULT_SHOP_DOMAIN}&handle=${productHandle}&per_page=5&page=${page}`,
    {
      headers: {
        Accept: "application/json",
      },
    }
  );

  if (!response.ok) {
    console.error(`Failed to fetch reviews: ${response.statusText}`);
    return "";
  }

  const data = (await response.json()) as { widget: string };
  return data.widget;
}

export async function getProductRatingsWidget(productHandle: string) {
  const apiKey = process.env.JUDGE_ME_PRIVATE_API_KEY;
  if (!apiKey) throw new Error("Judge.me private API key is not configured");

  const response = await fetch(
    `${baseUrl}/widgets/preview_badge?api_token=${apiKey}&shop_domain=${process.env.NEXT_PUBLIC_DEFAULT_SHOP_DOMAIN}&handle=${productHandle}`,
    {
      headers: {
        Accept: "application/json",
      },
    }
  );

  if (!response.ok) {
    console.error(`Failed to fetch ratings: ${response.statusText}`);
    return "";
  }

  const data = (await response.json()) as { badge: string };
  return data.badge;
}
