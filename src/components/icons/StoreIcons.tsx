import React from 'react';

interface IconProps {
  className?: string;
}

export const AppleStoreIcon: React.FC<IconProps> = ({ className = "w-4 h-4" }) => (
  <svg
    viewBox="0 0 170 170"
    fill="currentColor"
    className={className}
    aria-hidden="true"
  >
    <path d="M150.37 130.25c-2.45 5.66-5.35 10.87-8.71 15.66-4.58 6.53-8.33 11.05-11.22 13.56-4.48 4.12-9.28 6.23-14.42 6.35-3.69 0-8.14-1.05-13.32-3.18-5.19-2.12-9.97-3.17-14.34-3.17-4.58 0-9.49 1.05-14.75 3.17-5.26 2.13-9.5 3.24-12.74 3.35-4.35.13-9.16-1.9-14.42-6.08-3.69-3.04-7.67-7.81-11.96-14.34-6.3-9.58-11.3-20.73-15-33.44-3.7-12.71-5.55-24.58-5.55-35.61 0-14.78 3.73-27.17 11.19-37.16 7.46-9.99 16.92-15.09 28.38-15.3 4.89 0 10.45 1.25 16.68 3.75 6.23 2.5 10.15 3.8 11.75 3.9 2.07-.33 6.36-1.8 12.87-4.41 6.51-2.61 12.18-3.75 17.02-3.41 12.72.65 23.26 5.54 31.62 14.67-11.09 6.74-16.52 16.03-16.3 27.87.22 9.35 3.81 17.39 10.77 24.13 6.96 6.74 15.22 10.65 24.78 11.74-2.39 7.39-5.43 14.78-9.12 22.17zM119.22 31.85c0-7.17 2.61-14.13 7.83-20.87 5.22-6.74 11.74-10.98 19.57-12.72.65 1.52.98 3.26.98 5.22 0 7.39-2.72 14.46-8.15 21.2-5.43 6.74-12.07 10.98-19.9 12.72-.22-1.74-.33-3.59-.33-5.55z" />
  </svg>
);

export const GooglePlayIcon: React.FC<IconProps> = ({ className = "w-4 h-4" }) => (
  <svg
    viewBox="0 0 512 512"
    fill="currentColor"
    className={className}
    aria-hidden="true"
  >
    <path d="M325.3 234.3L104.6 13l280.8 161.2-60.1 60.1zM47 0C34 6.8 25.3 19.2 25.3 35.3v441.3c0 16.1 8.7 28.5 21.7 35.3l256.6-256L47 0zm425.2 225.6l-58.9-34.1-65.7 64.5 65.7 64.5 60.1-34.1c18-14.3 18-46.5-1.2-60.8zM104.6 499l280.8-161.2-60.1-60.1L104.6 499z" />
  </svg>
);

/**
 * Combined badge featuring both Apple and Google Store icons
 */
export const StoreIconsPair: React.FC<{ className?: string; iconClassName?: string }> = ({
  className = "",
  iconClassName = "w-4 h-4",
}) => (
  <span className={`inline-flex items-center gap-1.5 shrink-0 ${className}`}>
    <AppleStoreIcon className={iconClassName} />
    <span className="w-px h-3 bg-current opacity-30" />
    <GooglePlayIcon className={iconClassName} />
  </span>
);
