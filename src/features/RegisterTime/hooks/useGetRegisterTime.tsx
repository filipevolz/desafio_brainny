import { PublicationState } from "src/generated/graphql";
import { useRegisteredTimesLazyQuery } from "../graphql/query/query.generated"
import { useEffect, useState, useCallback } from "react";
import { RegisterTimeFieldFragment } from "../graphql/fragments/fragments.generated";

export const useGetRegisteredTime = (id?: string) => {
  const ITEMS_PER_PAGE = 9;
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [currentItems, setCurrentItems] = useState<(RegisterTimeFieldFragment | null)[]>([]);
  const [hasNextPage, setHasNextPage] = useState<boolean>(false);

  const [loadRegisteredTimes, { data, loading }] = useRegisteredTimesLazyQuery({
    variables: {
      limit: ITEMS_PER_PAGE + 1, // +1 to check for next page
      start: (currentPage - 1) * ITEMS_PER_PAGE,
      sort: "published_at:desc",
      where: { user: { id } },
      publicationState: PublicationState.Live
    },
  });

  useEffect(() => {
    loadRegisteredTimes();
  }, [currentPage]);

  useEffect(() => {
    if (data?.registeredTimes) {
      const newItems = data.registeredTimes.slice(0, ITEMS_PER_PAGE);
      setHasNextPage(data.registeredTimes.length > ITEMS_PER_PAGE);
      setCurrentItems(newItems);
    }
  }, [data]);

  const changePage = useCallback((newPage: number) => {
    setCurrentPage(newPage);
  }, []);

  return {
    currentItems,
    loading,
    changePage,
    currentPage,
    hasNextPage,
    ITEMS_PER_PAGE
  };
};
