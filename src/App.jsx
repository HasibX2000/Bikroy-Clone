import React, { useState } from "react";
import AllRoutes from "./AllRoutes/AllRoutes";
import Header from "./Components/Header";
import Footer from "./Components/Footer";
import ThemeContext from "./Contexts/ThemeContext";

const App = () => {
  const [loginbox, setLoginbox] = useState(false);
  return (
    <ThemeContext.Provider value={{ loginbox, setLoginbox }}>
      <div className="relative">
        <Header />
        <AllRoutes />
        <Footer />
      </div>
    </ThemeContext.Provider>
  );
};

export default App;
