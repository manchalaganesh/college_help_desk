import serverless from "serverless-http";
import app from "./app.js";

const wrapped = serverless(app);

export const handler = async (event, context) => {
  context.callbackWaitsForEmptyEventLoop = false;
  return wrapped(event, context);
};