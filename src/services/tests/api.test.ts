import { apiService, LoginCredentials } from '../api';

// Mock fetch globally
global.fetch = jest.fn();

describe('ApiService', () => {
  afterEach(() => {
    jest.resetAllMocks();
  });

  describe('login', () => {
    it('should return success response for valid credentials', async () => {
      const credentials: LoginCredentials = {
        email: 'test@example.com',
        password: 'password123',
      };

      const result = await apiService.login(credentials);

      expect(result.success).toBe(true);
      expect(result.data.email).toBe('test@example.com');
      expect(result.data.name).toBe('Test User');
    });

    it('should return error response for invalid credentials', async () => {
      const credentials: LoginCredentials = {
        email: 'invalid@example.com',
        password: 'wrongpassword',
      };

      const result = await apiService.login(credentials);

      expect(result.success).toBe(false);
      expect(result.message).toBe('Invalid credentials');
    });
  });

  describe('getProfile', () => {
    it('should make GET request to /profile endpoint', async () => {
      const mockResponse = {
        id: '1',
        name: 'John Doe',
        email: 'john@example.com',
      };

      (fetch as jest.Mock).mockResolvedValueOnce({
        ok: true,
        json: async () => mockResponse,
      });

      await apiService.getProfile();

      expect(fetch).toHaveBeenCalledWith(
        'https://api.example.com/profile',
        expect.objectContaining({
          headers: expect.objectContaining({
            'Content-Type': 'application/json',
          }),
        })
      );
    });

    it('should handle API errors gracefully', async () => {
      (fetch as jest.Mock).mockResolvedValueOnce({
        ok: false,
        json: async () => ({ message: 'Unauthorized' }),
      });

      const result = await apiService.getProfile();

      expect(result.success).toBe(false);
      expect(result.message).toBe('Unauthorized');
    });
  });

  describe('updateProfile', () => {
    it('should make PUT request with user data', async () => {
      const userData = { name: 'Updated Name' };
      const mockResponse = {
        id: '1',
        name: 'Updated Name',
        email: 'john@example.com',
      };

      (fetch as jest.Mock).mockResolvedValueOnce({
        ok: true,
        json: async () => mockResponse,
      });

      await apiService.updateProfile(userData);

      expect(fetch).toHaveBeenCalledWith(
        'https://api.example.com/profile',
        expect.objectContaining({
          method: 'PUT',
          headers: expect.objectContaining({
            'Content-Type': 'application/json',
          }),
          body: JSON.stringify(userData),
        })
      );
    });
  });
});
