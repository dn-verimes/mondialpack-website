import { useQuery } from '@tanstack/react-query';
import { client, handleSanityError } from '@/lib/sanity';
import { SanityCapability } from '@/types/sanity';
import { useLanguage } from '@/contexts/LanguageContext';

const fetchCapabilities = async (language: string): Promise<SanityCapability[]> => {
  try {
    const query = `*[_type == "capability" && language == $language]{
      _id,
      _type,
      language,
      title,
      description,
      icon,
      image,
      fullSizeImage,
      order,
      category,
      longDescription,
      keyFeatures[]{
        icon,
        title,
        description
      },
      gallery[]{
        _type,
        asset,
        alt,
        caption
      },
      specifications[]{
        name,
        value
      },
      applications,
      benefits[]{
        title,
        description
      },
      processSteps[]{
        title,
        description,
        image
      },
      faqs[]{
        question,
        answer
      },
      translations[]{
        _id,
        language,
        title,
        description
      }
    }`;
    
    return await client.fetch(query, { language });
  } catch (error) {
    return handleSanityError(error);
  }
};

export const useCapabilities = () => {
  const { language } = useLanguage();
  
  return useQuery<SanityCapability[]>({
    queryKey: ['capabilities', language],
    queryFn: () => fetchCapabilities(language),
    staleTime: 5 * 60 * 1000, // Data is considered fresh for 5 minutes
    cacheTime: 30 * 60 * 1000, // Cache data for 30 minutes
    retry: 2, // Retry failed requests twice
    retryDelay: (attemptIndex) => Math.min(1000 * 2 ** attemptIndex, 30000), // Exponential backoff
    refetchOnWindowFocus: false, // Don't refetch when window regains focus
    refetchOnReconnect: true, // Refetch when reconnecting to the network
  });
}; 