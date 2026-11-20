import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useState,
  type ReactNode,
} from 'react';

interface NavigateOptions {
  preselectedService?: string;
  hash?: string;
}

interface RouterContextValue {
  currentPath: string;
  preselectedService: string;
  setPreselectedService: (service: string) => void;
  navigate: (to: string, options?: NavigateOptions) => void;
}

const RouterContext = createContext<RouterContextValue | null>(null);

function normalizePath(path: string): string {
  if (!path || path === '/') return '/';
  return path.endsWith('/') ? path.slice(0, -1) : path;
}

export function RouterProvider({children}: {children: ReactNode}) {
  const [currentPath, setCurrentPath] = useState<string>(() =>
    normalizePath(window.location.pathname)
  );
  const [preselectedService, setPreselectedService] = useState<string>('');

  useEffect(() => {
    const handlePopState = () => {
      setCurrentPath(normalizePath(window.location.pathname));
    };

    window.addEventListener('popstate', handlePopState);
    return () => window.removeEventListener('popstate', handlePopState);
  }, []);

  const navigate = useCallback((to: string, options?: NavigateOptions) => {
    if (options?.preselectedService !== undefined) {
      setPreselectedService(options.preselectedService);
    }

    const [rawPath, rawHash] = to.split('#');
    const targetPath = normalizePath(rawPath || '/');
    const targetHash = options?.hash || rawHash;

    if (targetPath !== normalizePath(window.location.pathname)) {
      const fullUrl = targetHash ? `${targetPath}#${targetHash}` : targetPath;
      window.history.pushState({}, '', fullUrl);
      setCurrentPath(targetPath);
    } else if (targetHash) {
      window.history.replaceState({}, '', `${targetPath}#${targetHash}`);
    }

    if (targetHash) {
      requestAnimationFrame(() => {
        setTimeout(() => {
          const el = document.getElementById(targetHash);
          if (el) {
            el.scrollIntoView({behavior: 'smooth', block: 'start'});
          }
        }, 40);
      });
    } else {
      window.scrollTo({top: 0, behavior: 'smooth'});
    }
  }, []);

  return (
    <RouterContext.Provider
      value={{
        currentPath,
        preselectedService,
        setPreselectedService,
        navigate,
      }}
    >
      {children}
    </RouterContext.Provider>
  );
}

export function useRouter() {
  const ctx = useContext(RouterContext);
  if (!ctx) {
    throw new Error('useRouter must be used inside RouterProvider');
  }
  return ctx;
}
