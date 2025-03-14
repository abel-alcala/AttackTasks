const API_BASE_URL = "https://taskifyapi-p37g.onrender.com/";

export const api = {

  storeCredentials: async (email, password) => {
    try {
      const response = await fetch(`${API_BASE_URL}/register`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password }),
      });

      if (!response.ok) {
        throw new Error("Failed to store credentials");
      }

      return await response.json();
    } catch (error) {
      console.error("Error storing credentials:", error.message);
      throw error;
    }
  },
};
