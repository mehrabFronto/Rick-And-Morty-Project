import { useEffect, useState } from "react";


export default function useLocalStorage(key: string, initialState: unknown) {
   const [value, setValue] = useState<unknown>(
      () => JSON.parse(localStorage.getItem(key)!) || initialState,
   );
   useEffect(() => {
      localStorage.setItem(key, JSON.stringify(value));
   }, [value]);

   return [value, setValue];
}
