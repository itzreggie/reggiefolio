const API_BASE_URL = process.env.REACT_APP_API_URL || 'https://reggiefolio.itzreggie.workers.dev';

export const githubService = {
  async getUserData() {
    try {
      const response = await fetch(`${API_BASE_URL}/api/github/user`);
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      return await response.json();
    } catch (error) {
      console.error('Error fetching user data:', error);
      throw error;
    }
  },

  async getRepositories() {
    try {
      const response = await fetch(`${API_BASE_URL}/api/github/repos`);
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      return await response.json();
    } catch (error) {
      console.error('Error fetching repositories:', error);
      throw error;
    }
  }
};