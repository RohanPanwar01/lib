import { useEffect } from "react";

const TawkTo = () => {
  useEffect(() => {
    var s1 = document.createElement("script");
    s1.async = true;
    s1.src = "https://embed.tawk.to/68c7e31ab0f7a6192d882091/1j56cu8r6";
    s1.charset = "UTF-8";
    s1.setAttribute("crossorigin", "*");
    document.body.appendChild(s1);
  }, []);

  return null; // nothing to render
};

export default TawkTo;
