import { headers } from 'next/headers';
import { type HeaderFields } from '@/typings/http';

/**
 * Currently, only essential features are included, but additional features may be added in the future.
 * @see https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers
 */
export const headersList = {
  get(name: HeaderFields) {
    return headers().get(name);
  },
};
