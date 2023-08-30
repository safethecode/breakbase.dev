/**
 * HTTP header fields are a list of strings send and received by both the client program
 * and server on every HTTP request and reponse.
 *
 * @see https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers
 */

export type HeaderFields =
  | DefaultHeaderField
  | SecurityHeaderField
  | CachingHeaderField;

type DefaultHeaderField =
  | 'Accept'
  | 'Accept-Charset'
  | 'Accept-Encoding'
  | 'Accept-Language'
  | 'Accept-Ranges'
  | 'Access-Control-Allow-Origin'
  | 'Age'
  | 'Allow'
  | 'Authorization'
  | 'Cache-Control'
  | 'Connection'
  | 'Content-Disposition'
  | 'Content-Encoding'
  | 'Content-Language'
  | 'Content-Length'
  | 'Content-Location'
  | 'Content-Range'
  | 'Content-Type'
  | 'Cookie'
  | 'Date'
  | 'ETag'
  | 'Expect'
  | 'Expires'
  | 'From'
  | 'Host'
  | 'If-Match'
  | 'If-Modified-Since'
  | 'If-None-Match'
  | 'If-Range'
  | 'If-Unmodified-Since'
  | 'Last-Modified'
  | 'Link'
  | 'Location'
  | 'Max-Forwards'
  | 'Origin'
  | 'Pragma'
  | 'Proxy-Authenticate'
  | 'Proxy-Authorization'
  | 'Range'
  | 'Referer'
  | 'Retry-After'
  | 'Server'
  | 'Set-Cookie'
  | 'TE'
  | 'Trailer'
  | 'Transfer-Encoding'
  | 'Upgrade'
  | 'User-Agent'
  | 'Vary'
  | 'Via'
  | 'Warning'
  | 'WWW-Authenticate'
  | 'X-Frame-Options'
  | 'X-XSS-Protection'
  | 'X-Content-Type-Options'
  | 'X-Content-Security-Policy'
  | 'X-Content-Duration'
  | 'X-Powered-By'
  | 'X-UA-Compatible';

type SecurityHeaderField =
  | 'Strict-Transport-Security'
  | 'Public-Key-Pins'
  | 'Content-Security-Policy'
  | 'X-Frame-Options'
  | 'X-XSS-Protection'
  | 'X-Content-Type-Options';

type CachingHeaderField =
  | 'Cache-Control'
  | 'Pragma'
  | 'Expires'
  | 'Last-Modified'
  | 'Vary'
  | 'Age'
  | 'Surrogate-Control'
  | 'If-None-Match'
  | 'If-Modified-Since'
  | 'Max-Age'
  | 'Min-Fresh'
  | 'Max-Stale'
  | 'Cache-Control';
