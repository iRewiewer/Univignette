declare module 'react-native-google-pay' {
    export const setEnvironment: (env: number) => void;
    export const ENVIRONMENT_TEST: number;
    export const isReadyToPay: (
        allowedCardNetworks: string[],
        allowedCardAuthMethods: string[]
    ) => Promise<boolean>;
    export const requestPayment: (requestData: any) => Promise<any>;
}
