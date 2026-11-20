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
        className="flex h-full w-full flex-col items-center justify-center gap-3 bg-[#1c3326] p-6 text-center text-[#f7f4ee]"
        role="img"
        aria-label={alt}
      >
        <Trees className="h-9 w-9 text-[#d6a46f]" aria-hidden="true" />
        <span className="font-serif text-base font-medium text-[#f7f4ee]">{fallbackTitle}</span>
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
