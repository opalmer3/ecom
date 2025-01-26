"use client";

import { Skeleton } from "@/components/ui/skeleton";
import { getProductReviewWidget } from "@/lib/services/judge-me/client";
import { useEffect, useState } from "react";
import useSWR from "swr";

interface ProductReviewsProps {
  handle: string;
  initialData: string;
}

export function ProductReviews({ handle, initialData }: ProductReviewsProps) {
  const [page, setPage] = useState(1);

  const { data: reviewWidget, isLoading } = useSWR(
    ["reviews", handle, page],
    () => getProductReviewWidget(handle, page),
    {
      fallbackData: initialData,
      revalidateOnMount: false,
    }
  );

  useEffect(() => {
    const handlePagination = (e: MouseEvent) => {
      if (isLoading) return;
      const target = e.target as HTMLElement;
      const _page = target.getAttribute("data-page");

      if (_page) {
        e.preventDefault();
        if (_page) {
          const pageNum = parseInt(_page);
          setPage(pageNum);
          const reviewsSection = document.querySelector(
            ".jdgm-rev-widg__reviews"
          );
          reviewsSection?.scrollIntoView({ behavior: "smooth" });
        }
      }
    };

    const paginationElements = document.querySelectorAll(
      ".jdgm-paginate__page"
    );
    paginationElements.forEach((page) => {
      page.addEventListener("click", handlePagination as EventListener);
    });

    return () => {
      paginationElements.forEach((page) => {
        page.removeEventListener("click", handlePagination as EventListener);
      });
    };
  }, [handle, isLoading, reviewWidget]);

  if (isLoading) {
    return (
      <div className="space-y-lg flex flex-col items-end container py-xl lg:py-3xl">
        {Array.from({ length: 5 }).map((_, index) => (
          <Skeleton key={index} className="w-full lg:w-2/3 h-[150px]" />
        ))}
      </div>
    );
  }

  return (
    <section
      className="container py-xl lg:py-3xl"
      dangerouslySetInnerHTML={{ __html: reviewWidget }}
    />
  );
}
