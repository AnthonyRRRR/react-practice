import { useEffect, useState } from 'react';

export default function useHexToRgb(hex) {
  const [rgb, setRgb] = useState('');
  const [isError, setIsError] = useState(false);

  const hexToRgb = (hex) => {
    return hex.replace(/^#?([a-f\d])([a-f\d])([a-f\d])$/i
      , (m, r, g, b) => '#' + r + r + g + g + b + b)
      .substring(1).match(/.{2}/g)
      .map(x => parseInt(x, 16)).toString()
  };

  useEffect(() => {
    if (hex.length >= 7) {
      const pattern = new RegExp('^#[a-fA-F0-9]{6}$');
      if (pattern.test(hex)) {
        setRgb(hexToRgb(hex));
        setIsError(false)
      } else {
        setIsError(true);
        setRgb('')
      }
    } else {
      setRgb('')
    }
  }, [hex])

  return {rgb, isError}
}