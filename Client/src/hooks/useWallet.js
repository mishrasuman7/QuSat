import { useState, useEffect } from 'react';

export const useWallet = () => {
  const [isConnected, setIsConnected] = useState(false);
  const [account, setAccount] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  // Check if wallet is already connected on component mount
  useEffect(() => {
    const checkWalletConnection = () => {
      const savedAccount = localStorage.getItem('walletAccount');
      if (savedAccount) {
        setAccount(savedAccount);
        setIsConnected(true);
      }
    };

    checkWalletConnection();
  }, []);

  const connectWallet = async () => {
    setIsLoading(true);
    setError(null);

    try {
      // Check if MetaMask is installed
      if (typeof window.ethereum === 'undefined') {
        throw new Error('MetaMask is not installed. Please install MetaMask to continue.');
      }

      // Request account access
      const accounts = await window.ethereum.request({
        method: 'eth_requestAccounts',
      });

      if (accounts.length > 0) {
        const connectedAccount = accounts[0];
        setAccount(connectedAccount);
        setIsConnected(true);
        localStorage.setItem('walletAccount', connectedAccount);
        
        // Listen for account changes
        window.ethereum.on('accountsChanged', (accounts) => {
          if (accounts.length === 0) {
            // User disconnected wallet
            disconnectWallet();
          } else {
            // User switched accounts
            setAccount(accounts[0]);
            localStorage.setItem('walletAccount', accounts[0]);
          }
        });

        return connectedAccount;
      } else {
        throw new Error('No accounts found');
      }
    } catch (err) {
      setError(err.message);
      throw err;
    } finally {
      setIsLoading(false);
    }
  };

  const disconnectWallet = () => {
    setAccount(null);
    setIsConnected(false);
    localStorage.removeItem('walletAccount');
  };

  const getAccountBalance = async () => {
    if (!isConnected || !account) {
      throw new Error('Wallet not connected');
    }

    try {
      const balance = await window.ethereum.request({
        method: 'eth_getBalance',
        params: [account, 'latest'],
      });

      // Convert from wei to ether
      return parseFloat(parseInt(balance, 16) / 10 ** 18).toFixed(4);
    } catch (err) {
      setError(err.message);
      throw err;
    }
  };

  const signMessage = async (message) => {
    if (!isConnected || !account) {
      throw new Error('Wallet not connected');
    }

    try {
      const signature = await window.ethereum.request({
        method: 'personal_sign',
        params: [message, account],
      });

      return signature;
    } catch (err) {
      setError(err.message);
      throw err;
    }
  };

  return {
    isConnected,
    account,
    isLoading,
    error,
    connectWallet,
    disconnectWallet,
    getAccountBalance,
    signMessage,
  };
};
