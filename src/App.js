import React, { useState } from "react";
import LoginForm from "./components/LoginForm";
import "./style.css";

function App() {
  const adminUser = {
    email: "admin@a",
    password: "admin",
  };
  // Ovo nam je imitacija databaze

  const [user, setUser] = useState({ name: "", email: "" });
  // Ovo je user state, kada se ulogujemo ovaj state ce biti setovan.

  const [error, setError] = useState("");
  // Ovo ce provaravati tacnost logina

  const Login = (details) => {
    console.log(details);
    // Hocemo da vidimo
    if (
      details.email == adminUser.email &&
      details.password == adminUser.password
      // da li su email i pass isti?
    ) {
      console.log("Logged in");
      setUser({
        name: details.name,
        email: details.email,
        // ako jesu setuj usera
      });
      // details smo importovali iz Login Forme, sadrzi sve njene podatke
      // Koristimo ga da uporedimo njegove podatke sa podacima iz admin usera,
      // tacnije nase imitacije baze podataka
    } else {
      setError("Wrong!");
      // Ako nisu setuj error
    }
  };
  // Ovde proveravamo da li nam se podaci poklapaju. Ako je uspesno, postavljamo
  // podatke iz details radne matrice u userState => uspesno smo se ulogovali i
  // u return kasnije renderujemo posebnu sliku

  const Logout = () => {
    console.log("Logout");
    setUser({ name: "", email: "" });
  };
  // resetujemo vrednosti koje smo menjali

  return (
    <div>
      {/* user ja nas state variable  */}
      {user.email != "" ? (
        // Ovde prosto kazemo, ako je user setovan, tacnije ulogovan, onda renderujemo

          <div className="welcome">
            <h2>
              Wellcome, <span>{user.name}</span>
            </h2>
            <button onClick={Logout}>Logout</button>
          </div>

      ) : (
        <LoginForm Login={Login} error={error} />
        // Ako ne, onda izbacimo error
      )}
    </div>
  );
}

export default App;
