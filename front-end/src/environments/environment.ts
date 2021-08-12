import config from '../../auth-config.json';

export const environment = {
  production: false,
  auth: {
    domain: config.domain,
    clientId: config.clientId,
    redirectUri: config.redirectUri,
    audience: config.audience,
  },
  dev: {
    serverUrl: config.serverUrl,
  },
};
