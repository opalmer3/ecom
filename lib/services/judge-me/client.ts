const baseUrl = "https://judge.me/api/v1";

export async function getProductReviewWidget(
  productHandle: string,
  page: number = 1
) {
  const apiKey = process.env.NEXT_PUBLIC_JUDGE_ME_API_KEY;
  if (!apiKey) throw new Error("Judge.me public API key is not configured");

  const response = await fetch(
    `${baseUrl}/widgets/product_review?api_token=${apiKey}&shop_domain=${process.env.NEXT_PUBLIC_DEFAULT_SHOP_DOMAIN}&handle=${productHandle}&per_page=5&page=${page}`,
    {
      headers: {
        Accept: "application/json",
      },
    }
  );

  if (!response.ok) {
    throw new Error(`Failed to fetch reviews: ${response.statusText}`);
  }

  const data = (await response.json()) as { widget: string };
  return data.widget;
}
