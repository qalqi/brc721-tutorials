import { useQuery } from "@tanstack/react-query";

export const COLLECTION_INSCRIPTION_ID =
  "8abc170f6ae5d300264e245dedd9faf7f1ba7da9029e05b08344ac5368d8d076i0";

const url = `https://www.brc721.com/api/collections?id=${COLLECTION_INSCRIPTION_ID}`;

export const useCollection = () =>
  useQuery({
    queryKey: ["collection", COLLECTION_INSCRIPTION_ID],
    queryFn: async () => {
      const [collection] = await fetch(url).then((res) => res.json());
      return collection;
    },
  });
