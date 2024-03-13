import axios from "axios";
import { useEffect, useState } from "react";
import { toast } from "react-hot-toast";


export default function useCharacters(url: string, query: string) {
   const [characters, setCharacters] = useState<Character[]>([]);
   const [isLoading, setIsLoading] = useState(false);

   useEffect(() => {
      const controller = new AbortController();
      const signal = controller.signal;
      async function fetchData() {
         try {
            setIsLoading(true);
            const { data } = await axios.get(`${url}=${query}`, { signal });
            setCharacters(data.results.slice(0, 5));
         } catch (err) {
            if(err instanceof Error){
                // fetch => err.name ==="AbortError"
                // axios => axios.isCancel()
                if (!axios.isCancel("")) {
                    setCharacters([]);
                    toast.error(err.response.data.error);
                }
            }
           
         } finally {
            setIsLoading(false);
         }
      }

      // if (.length < 3) {
      //   setCharacters([]);
      //   return;
      // }

      fetchData();

      return () => {
         controller.abort();
      };
   }, [query]);

   return { isLoading, characters };
}
