import { useEffect } from "react";

export const withLog = (Component) => {
  return (props) => {
    useEffect(() => {
      console.log(`Component ${Component.name} is mounted`);
      return () => {
        console.log(`Component ${Component.name} is unmounted`);
      };
    }, []);

    return <Component {...props} />;
  };
};

export const withHeading = (Component) => {
  return (props) => {
    return (
      <div>
        <h1>{props.heading}</h1>
        <Component {...props} />
      </div>
    );
  };
};
