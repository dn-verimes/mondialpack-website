import { useQuery } from '@tanstack/react-query';
import { getLocalizedContent, CAPABILITIES_QUERY } from '@/lib/sanity';
import { useLanguage } from '@/contexts/LanguageContext';

export const useCapabilities = () => {
  const { language } = useLanguage();
  return useQuery({
    queryKey: ['capabilities', language],
    queryFn: () => getLocalizedContent(CAPABILITIES_QUERY, language),
  });
}; 