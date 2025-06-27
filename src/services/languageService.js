import nolanguageFile from '../config/nolanguage.txt';

export const manualLanguageService = {
  async getManualLanguages() {
    try {
      const response = await fetch(nolanguageFile);
      const text = await response.text();
      const languageMap = {};
      
      text.split('\n')
        .map(line => line.trim())
        .filter(line => line.length > 0)
        .forEach(line => {
          const [repoName, language] = line.split(',').map(item => item.trim());
          if (repoName && language) {
            languageMap[repoName] = language;
          }
        });
        
      return languageMap;
    } catch (error) {
      console.error('Error loading manual language mappings:', error);
      return {};
    }
  }
};