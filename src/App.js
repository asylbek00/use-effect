import React, { useEffect, useState } from "react";

import Login from "./components/Login/Login";
import Home from "./components/Home/Home";
import MainHeader from "./components/MainHeader/MainHeader";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);  //isloggedin 1-false => true => logout false
  
  useEffect(() => {   //если нет зависимость Ueffect работает только один раз. Когда будет первичный рендер компонента
    const storedUserLoggedInfo =localStorage.getItem('login') //алуу
    if(storedUserLoggedInfo === '1'){
      setIsLoggedIn('true')  //true болсо home го кирет
    }

  }, []);         //state озгоргон сайын колбек иштейт, ueffect иштейт


  const loginHandler = (email, password) => {
    localStorage.setItem('login' ,'1')   //киргизуу
    setIsLoggedIn(true);

  };

  const logoutHandler = () => {
    setIsLoggedIn(false);    //logout болсо false
    localStorage.removeItem('login') //локалдан очуруп кайра app отуу
  };

  return (
    <React.Fragment>
      <MainHeader isAuthenticated={isLoggedIn} onLogout={logoutHandler} />
      <main> 
        {!isLoggedIn && <Login onLogin={loginHandler} />} 
        {isLoggedIn && <Home onLogout={logoutHandler} />}
      </main>
    </React.Fragment>
  );
}
export default App;
