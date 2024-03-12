import React from "react";
import { Oval } from "react-loader-spinner";

const Loader = () => {
   return (
      <Oval
         height={60}
         width={320}
         color="#22c55e"
         wrapperStyle={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
         }}
         wrapperClass="loader"
         visible={true}
         ariaLabel="oval-loading"
         strokeWidth={3}
      />
   );
};

export default Loader;
