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
    <span className="relative block h-full w-full">
      <img
        src={src}
        alt={alt}
        loading={loading}
        referrerPolicy="no-referrer"
        onError={() => setHasError(true)}
        className={`${className} saturate-[0.78] contrast-[0.92]`}
      />
      <span
        className="pointer-events-none absolute inset-0 bg-[#163028]/20 shadow-[inset_0_0_48px_rgba(14,28,22,0.22)]"
        aria-hidden="true"
      />
    </span>
  );
}
