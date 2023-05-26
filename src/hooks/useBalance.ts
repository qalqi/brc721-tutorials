import { useQuery } from "@tanstack/react-query";

export const useBalance = (address: string) =>
  useQuery({
    queryKey: ["balance", address],
    queryFn: async () => {
      const url = `https://mempool.space/api/address/${address}`;
      const res = await fetch(url).then((res) => res.json());
      const chainStats = res.chain_stats;
      const mempoolStats = res.mempool_stats;
      const balance =
        chainStats.funded_txo_sum +
        mempoolStats.funded_txo_sum -
        chainStats.spent_txo_sum -
        mempoolStats.spent_txo_sum;

      return balance;
    },
  });
