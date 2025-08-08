import axios from 'axios';

// Create axios instance with default configuration
const api = axios.create({
  baseURL: import.meta.env.VITE_API_BASE_URL || 'http://localhost:5000/api',
  timeout: 10000,
  headers: {
    'Content-Type': 'application/json',
  },
});

// Request interceptor for adding auth tokens
api.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem('authToken');
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

// Response interceptor for handling errors
api.interceptors.response.use(
  (response) => {
    return response;
  },
  (error) => {
    if (error.response?.status === 401) {
      // Handle unauthorized access
      localStorage.removeItem('authToken');
      window.location.href = '/';
    }
    return Promise.reject(error);
  }
);

// API functions
export const satelliteAPI = {
  // Get all satellites
  getAll: () => api.get('/satellites'),
  
  // Get satellite by ID
  getById: (id) => api.get(`/satellites/${id}`),
  
  // Update satellite status
  updateStatus: (id, status) => api.patch(`/satellites/${id}/status`, { status }),
  
  // Get satellite telemetry
  getTelemetry: (id) => api.get(`/satellites/${id}/telemetry`),
};

export const quantumAPI = {
  // Get quantum key exchange status
  getKeyExchangeStatus: () => api.get('/quantum/key-exchange'),
  
  // Initiate quantum key exchange
  initiateKeyExchange: (satelliteId) => api.post('/quantum/key-exchange', { satelliteId }),
  
  // Get quantum communication metrics
  getMetrics: () => api.get('/quantum/metrics'),
};

export const blockchainAPI = {
  // Get blockchain transactions
  getTransactions: () => api.get('/blockchain/transactions'),
  
  // Create new transaction
  createTransaction: (data) => api.post('/blockchain/transactions', data),
  
  // Get blockchain status
  getStatus: () => api.get('/blockchain/status'),
};

export default api;
