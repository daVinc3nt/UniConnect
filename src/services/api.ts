import { User } from '@/types/global';

export interface ApiResponse<T> {
  data: T;
  success: boolean;
  message?: string;
}

export interface LoginCredentials {
  email: string;
  password: string;
}

class ApiService {
  private baseUrl = 'https://api.example.com';

  private async request<T>(
    endpoint: string,
    options: RequestInit = {}
  ): Promise<ApiResponse<T>> {
    try {
      const response = await fetch(`${this.baseUrl}${endpoint}`, {
        headers: {
          'Content-Type': 'application/json',
          ...options.headers,
        },
        ...options,
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.message || 'API request failed');
      }

      return {
        data,
        success: true,
      };
    } catch (error) {
      return {
        data: {} as T,
        success: false,
        message: error instanceof Error ? error.message : 'Unknown error',
      };
    }
  }

  async login(credentials: LoginCredentials): Promise<ApiResponse<User>> {
    // Mock login for demo
    return new Promise((resolve) => {
      setTimeout(() => {
        if (credentials.email === 'test@example.com') {
          resolve({
            data: {
              id: '1',
              name: 'Test User',
              email: credentials.email,
              avatar: 'https://via.placeholder.com/100',
            },
            success: true,
          });
        } else {
          resolve({
            data: {} as User,
            success: false,
            message: 'Invalid credentials',
          });
        }
      }, 1000);
    });
  }

  async getProfile(): Promise<ApiResponse<User>> {
    return this.request<User>('/profile');
  }

  async updateProfile(userData: Partial<User>): Promise<ApiResponse<User>> {
    return this.request<User>('/profile', {
      method: 'PUT',
      body: JSON.stringify(userData),
    });
  }
}

export const apiService = new ApiService();
