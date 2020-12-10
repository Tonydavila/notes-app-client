const config = {
    s3: {
        REGION: "us-east-1",
        BUCKET: "svrless-notes-app-upload",
    },
    apiGateway: {
        REGION: "us-east-1",
        URL: "https://v35t7cp0j7.execute-api.us-east-1.amazonaws.com/prod",
    },
    cognito: {
        REGION: "us-east-1",
        USER_POOL_ID: "us-east-1_X520tTpDy",
        APP_CLIENT_ID: "2npjjc0fsn3oc5t8vrlbchk2g1",
        IDENTITY_POOL_ID: "us-east-1:9f9b4491-9c87-4616-95e9-cf12e5750b2c",
    },
};

export default config;