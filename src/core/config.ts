/**
 * URL for hosted Server
 */
export const ServerURL =
  process.env.NODE_ENV === "development"
    ? "http://localhost:5000"
    : process.env.REACT_APP_SERVER_URL || "";