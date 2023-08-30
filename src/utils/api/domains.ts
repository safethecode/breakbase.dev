import { validDomainRegex } from '@/utils/regex';

type ValidateDomain = {
  domain: string;
};

export const validateDomain = ({ domain }: ValidateDomain) => {
  if (!domain || typeof domain !== 'string') {
    return 'Missing domain';
  }
  const validDomain =
    validDomainRegex.test(domain) && !domain.endsWith('.sionicstorm.ai');

  if (!validDomain) {
    return 'Invalid domain';
  }

  return true;
};
