import axios from "axios";

export const getErrorMessage = (error: unknown): string => {
  if (axios.isAxiosError(error)) {
    if (typeof error.response?.data === "string") {
      return error.response.data.replace("Something went wrong. Error: ", "");
    }
    return "Unrecognized axios error";
  }

  return "Unknown error";
};
