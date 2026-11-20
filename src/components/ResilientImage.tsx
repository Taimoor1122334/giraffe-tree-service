import {useState} from 'react';
import {Trees} from 'lucide-react';

interface ResilientImageProps {
  src: string;
  alt: string;
  fallbackTitle: string;
  className?: string;
  loading?: 'eager' | 'lazy';
}

export function ResilientImage({
  src,
  alt,
  fallbackTitle,
  className = 'h-full w-full object-cover',
  loading = 'lazy',
}: ResilientImageProps) {
  const [hasError, setHasError] = useState(false);

  if (hasError) {
    return (
      <div
        className="flex h-full w-full flex-col items-center justify-center gap-3 bg-[#145c3e] p-6 text-center text-[#ffffff]"
        role="img"
        aria-label={alt}
      >
        <Trees className="h-9 w-9 text-[#cfe8da]" aria-hidden="true" />
        <span className="text-base font-medium text-[#ffffff]">{fallbackTitle}</span>
      </div>
    );
  }

  return (
    <img
      src={src}
      alt={alt}
      loading={loading}
      referrerPolicy="no-referrer"
      onError={() => setHasError(true)}
      className={className}
    />
  );
}
