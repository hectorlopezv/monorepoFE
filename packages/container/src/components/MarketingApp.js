import { mount } from "marketing/MarketingApp";
import React, { useEffect, useRef } from "react";

export default ({ history }) => {
  const ref = useRef(null);

  useEffect(() => {
    mount(ref.current, {
      onNavigate: ({ pathname: nextPathname }) => {
        const { pathname } = history.location;
        if (pathname !== nextPathname) {
          history.push(nextPathname);
        }
      },
    });
  }, []);
  return <div ref={ref} />;
};
