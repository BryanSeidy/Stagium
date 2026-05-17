import { useQuery } from "@tanstack/react-query";
import { api } from "@/services/api";
import type { Internship } from "@/types";

export function useInternships(filters: Record<string, string> = {}) {
  return useQuery({
    queryKey: ["internships", filters],
    queryFn: async () => {
      const { data } = await api.get<{ data: Internship[] }>("/internships", { params: filters });
      return data.data;
    }
  });
}
