/**
 * Use sleep with async/await
 * @author Eric Ambiel
 */
export const sleep = (mSeconds: number) =>
  new Promise(resolve => {
    setTimeout(resolve, mSeconds);
  });

export type JWTPayloadClaims = {
  exp: number; // Expiration Time
  iat: number; // Issued At
  aud: string; // Audience
  sub: string; // Subject
  iss?: string; // Issuer
  nbf?: unknown; // Not Before
  jti?: unknown; // JWT ID
};
/**
 * Extract payload from given JWT
 * @param jWT
 * @private
 * @author Eric Ambiel
 */
export function extractPayloadFromJWT<T>(jWT: string) {
  // Convert JWT Token to payload
  const jWTSplit = jWT.split('.')[1];
  const decodedJWTSplit = Buffer.from(jWTSplit, 'base64').toString();
  return <T & JWTPayloadClaims>JSON.parse(decodedJWTSplit);
}
