import { AuthenticationContext , withAdalLogin} from "react-adal";

const adalConfig = {
  tenant: "56eda749-b95e-4a74-93de-f01fd6b161cc",
  clientId: "9b8b2c0d-1060-476b-a2a8-e206818502ca",
  redirectUri: "http://localhost:3000/administrador",
  endpoints: {
    api: '14d71d65-f596-4eae-be30-27f079bf8d4b',
  },
  cacheLocation: "sessionStorage"
};

export const authContext = new AuthenticationContext(adalConfig);

export const getToken = () => authContext.getCachedToken(adalConfig.clientId);

export const withAdalLoginApi = withAdalLogin(authContext, adalConfig.endpoints.api);