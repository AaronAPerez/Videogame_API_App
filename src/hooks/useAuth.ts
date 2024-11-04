import create from 'zustand';

interface AuthStore {
  user: null | { id: string; email: string; username: string };
  isAuthenticated: boolean;
  login: (email: string, password: string) => Promise<void>;
  signup: (email: string, password: string, username: string) => Promise<void>;
  logout: () => void;
}

const useAuth = create<AuthStore>((set) => ({
  user: null,
  isAuthenticated: false,
  login: async (email: string, password: string) => {
    // Add your authentication logic here
    // This is just a mock implementation
    set({ 
      user: { 
        id: '1', 
        email, 
        username: 'User' 
      }, 
      isAuthenticated: true 
    });
  },
  signup: async (email: string, password: string, username: string) => {
    // Add your signup logic here
    // This is just a mock implementation
    set({ 
      user: { 
        id: '1', 
        email, 
        username 
      }, 
      isAuthenticated: true 
    });
  },
  logout: () => {
    set({ user: null, isAuthenticated: false });
  },
}));

export default useAuth;