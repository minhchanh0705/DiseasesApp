import { useState, memo, useEffect } from "react";
import { DiseasesContext } from "../Context";

const DiseasesProvider = ({ children }) => {
  const [User, setUser] = useState({ name: "Nguyễn Minh Chánh", age: 26 });
  useEffect(() => {
    setUser({ name: "Nguyễn Minh Chánh", age: 22 });
  }, []);
  const Values = {
    User,
  };
  return (
    <DiseasesContext.Provider value={Values}>
      {children}
    </DiseasesContext.Provider>
  );
};
export default memo(DiseasesProvider);
