class ApiService {
    static async loginUser(userId) {
      // In a real app, this would be an API call
      return { success: true, userId };
    }
  
    static async getUserSigns(userId) {
      // Mock API call - replace with actual backend call
      return [
        { 
          sign_id: 'sign1', 
          name: 'Hello', 
          meaning: 'A greeting gesture', 
          language: 'en',
          created_at: '2025-04-01 10:30:45',
          thumbnail: '/api/placeholder/120/80',
        },
        { 
          sign_id: 'sign2', 
          name: 'Thank you', 
          meaning: 'Expressing gratitude', 
          language: 'en',
          created_at: '2025-04-02 15:22:10',
          thumbnail: '/api/placeholder/120/80',
        },
        { 
          sign_id: 'sign3', 
          name: 'Yes', 
          meaning: 'Affirmative response', 
          language: 'en',
          created_at: '2025-04-03 09:15:33',
          thumbnail: '/api/placeholder/120/80',
        }
      ];
    }
  
    static async getSignDetails(userId, signId) {
      // Mock API call - replace with actual backend call
      const signs = await this.getUserSigns(userId);
      return signs.find(sign => sign.sign_id === signId) || null;
    }
  
    static async createSign(userId, signData) {
      // Mock API call - replace with actual backend call
      return {
        success: true,
        sign_id: `sign${Date.now()}`,
        ...signData
      };
    }
  
    static async updateSign(userId, signId, signData) {
      // Mock API call - replace with actual backend call
      return {
        success: true,
        sign_id: signId,
        ...signData
      };
    }
  
    static async deleteSign(userId, signId) {
      // Mock API call - replace with actual backend call
      return { success: true };
    }
  
    static async recognizeSign(userId) {
      // Mock API call - replace with actual backend call
      // In a real app, this would capture video and send to backend
      const signs = await this.getUserSigns(userId);
      const randomIndex = Math.floor(Math.random() * signs.length);
      return {
        recognized: true,
        sign: signs[randomIndex]
      };
    }
  
    static async startVideoCapture() {
      // In a real app, this would access the webcam
      return {
        stream: null,
        success: true
      };
    }
  
    static async stopVideoCapture(stream) {
      // In a real app, this would stop the webcam stream
      return { success: true };
    }
  }
  
  export default ApiService;
  