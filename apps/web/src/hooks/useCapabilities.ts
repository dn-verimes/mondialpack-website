import { useQuery } from '@tanstack/react-query';
import { client, handleSanityError } from '@/lib/sanity';
import { SanityCapability } from '@/types/sanity';

const fetchCapabilities = async (): Promise<SanityCapability[]> => {
  try {
    const query = `*[_type == "capability"]{
      _id,
      _type,
      title,
      slug,
      description,
      image,
      specifications,
      icon,
      category,
      sizeRange,
      shellTypes,
      fillWeight,
      colorPrint,
      moq,
      leadTime,
      volume,
      closureTypes,
      labelArea,
      packCounts
    }`;
    
    return await client.fetch(query);
  } catch (error) {
    return handleSanityError(error);
  }
};

export const useCapabilities = () => {
  return useQuery({
    queryKey: ['capabilities'],
    queryFn: fetchCapabilities,
    staleTime: 5 * 60 * 1000, // Data is considered fresh for 5 minutes
    cacheTime: 30 * 60 * 1000, // Cache data for 30 minutes
    retry: 2, // Retry failed requests twice
    retryDelay: (attemptIndex) => Math.min(1000 * 2 ** attemptIndex, 30000), // Exponential backoff
    refetchOnWindowFocus: false, // Don't refetch when window regains focus
    refetchOnReconnect: true, // Refetch when reconnecting to the network
  });
}; 