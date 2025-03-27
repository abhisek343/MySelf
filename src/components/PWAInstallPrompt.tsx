import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { usePWA } from '../hooks/usePWA';

const PWAInstallPrompt: React.FC = () => {
  const { isInstallable, install } = usePWA();

  if (!isInstallable) return null;

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: 50 }}
        className="fixed bottom-4 left-4 right-4 md:left-auto md:right-4 md:w-96 bg-white dark:bg-gray-800 rounded-lg shadow-lg p-4 z-50"
      >
        <div className="flex items-center justify-between">
          <div className="flex-1">
            <h3 className="text-lg font-semibold text-gray-800 dark:text-white mb-1">
              Install Portfolio App
            </h3>
            <p className="text-sm text-gray-600 dark:text-gray-300">
              Install this app on your device for quick and easy access.
            </p>
          </div>
          <motion.button
            onClick={install}
            className="ml-4 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Install
          </motion.button>
        </div>
      </motion.div>
    </AnimatePresence>
  );
};

export default PWAInstallPrompt; 