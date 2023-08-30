import { HOME_HOSTNAMES } from '@/contents/http';

export const isHomeHostname = (domain: string) => {
  return HOME_HOSTNAMES.has(domain) || domain.endsWith('.vercel.app');
};
