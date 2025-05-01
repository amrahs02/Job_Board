const isLocalhost = window.location.hostname === "localhost";

export const USER_API_END_POINT = isLocalhost
  ? "http://localhost:8000/api/v1/user"
  : "https://jobboard-32ao.onrender.com/api/v1/user";
export const JOB_API_END_POINT = isLocalhost
  ? "http://localhost:8000/api/v1/job"
  : "https://jobboard-32ao.onrender.com/api/v1/job";
export const APPLICATION_API_END_POINT = isLocalhost
  ? "http://localhost:8000/api/v1/application"
  : "https://jobboard-32ao.onrender.com/api/v1/application";
export const COMPANY_API_END_POINT = isLocalhost
  ? "http://localhost:8000/api/v1/company"
  : "https://jobboard-32ao.onrender.com/api/v1/company";
