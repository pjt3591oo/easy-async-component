import { useEffect, useState } from 'react';

const useFileImg = (file) => {
  const [src, setSrc] = useState('');

  useEffect(() => {
    let reader = new FileReader();
    reader.onloadend = () => {
      setSrc(reader.result);
    };
    reader.readAsDataURL(file);
  }, [])

  return {src};
}

export default useFileImg;