import flagshipsFile from '../config/flagships.txt';

export const flagshipService = {
  async getFlagshipRepos() {
    try {
      const response = await fetch(flagshipsFile);
      const text = await response.text();
      return text.split('\n')
        .map(name => name.trim())
        .filter(name => name.length > 0 && !name.startsWith('PUT THE ACTUAL'));
    } catch (error) {
      console.error('Error loading flagship repos:', error);
      return [];
    }
  }
};