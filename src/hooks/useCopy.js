import { useCallback, useEffect, useRef, useState } from 'react';

/** Copy text to the clipboard. Returns [copy, copied]; `copied` resets after 2s. */
export default function useCopy(text) {
  const [copied, setCopied] = useState(false);
  const timer = useRef();

  useEffect(() => () => clearTimeout(timer.current), []);

  const copy = useCallback(() => {
    const flash = () => {
      setCopied(true);
      clearTimeout(timer.current);
      timer.current = setTimeout(() => setCopied(false), 2000);
    };
    const fallback = () => {
      const area = document.createElement('textarea');
      area.value = text;
      document.body.appendChild(area);
      area.select();
      try {
        document.execCommand('copy');
      } catch {
        /* ignore */
      }
      area.remove();
      flash();
    };
    if (navigator.clipboard) navigator.clipboard.writeText(text).then(flash, fallback);
    else fallback();
  }, [text]);

  return [copy, copied];
}
