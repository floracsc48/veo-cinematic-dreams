
import { useState, useEffect } from 'react';

interface InviteCodeConfig {
  download_link?: string;
  password?: string;
}

interface VeoConfig {
  default_download_link: string;
  default_password: string;
  invite_codes: Record<string, InviteCodeConfig>;
}

export const useConfig = () => {
  const [config, setConfig] = useState<VeoConfig | null>(null);

  useEffect(() => {
    fetch('/config/veo-config.json')
      .then(response => response.json())
      .then(data => setConfig(data))
      .catch(error => {
        console.error('Failed to load config:', error);
        // Fallback config
        setConfig({
          default_download_link: "https://pixeldrain.com/api/file/qYNYLRhk?download",
          default_password: "Soft2025",
          invite_codes: {
            "Veo3FreeNow!": {
              download_link: "https://pixeldrain.com/api/file/qYNYLRhk?download",
              password: "Soft2025"
            }
          }
        });
      });
  }, []);

  const validateInviteCode = (code: string) => {
    if (!config) return null;
    return config.invite_codes[code] || null;
  };

  const getDownloadLink = (code?: string) => {
    if (!config) return null;
    if (code && config.invite_codes[code]?.download_link) {
      return config.invite_codes[code].download_link;
    }
    return config.default_download_link;
  };

  const getPassword = (code?: string) => {
    if (!config) return null;
    if (code && config.invite_codes[code]?.password) {
      return config.invite_codes[code].password;
    }
    return config.default_password;
  };

  return {
    config,
    validateInviteCode,
    getDownloadLink,
    getPassword
  };
};
