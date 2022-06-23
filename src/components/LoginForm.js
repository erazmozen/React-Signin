import React, { useState } from "react";
import "./form.css"

export default function LoginForm({ Login, error }) {
  // Odmah izvlacimo Login i error
  const [details, setDetails] = useState({ name: "", email: "", password: "" });
  // Pravimo state objekat sa kojom kasnije radimo
  const submitHandler = (e) => {
    e.preventDefault();
    // Dolazimo iz Form, ne zelim njegove default akcije. Dakle e nam je
    //objekat u kome je cela forma
    Login(details);
    // Dajemo Login funkciji details objekat kada kliknemo submit
    console.log(e); // zelimo da vidimo
  };
  // Saljemo podatke u parent komponentu samo kada kliknemo submit
  // Preko ovog objekta pozivamo funkciju koja uzima za argument e . i poziva Login
  // koji smo uvezli. to e ce biti koristno kasnije

  return (
    <form onSubmit={submitHandler}>
      {/* Na submit pozivamo Login(details) iz App.js */}
      <div className="form-inner">
        <h2>Login</h2>
        {(error != "") ? ( <div className="error">{error}</div>) : ""}
        {/* Ove prosto proveravamo da li je error razlicito ni od cega, ako jeste
        pravimo div i u njega stavljamo error. Moramo takodje da ga setujemo u 
        odgovarajucem delu Login funkcije */}
        <div className="form-group">
          <label htmlFor="name">Name:</label>
          <input
            type="text"
            name="name"
            id="name"
            onChange={(e) => setDetails({ ...details, name: e.target.value })}
            // Na on change se odradi neki posao, a posledica koriscenja
            // state objekta je to da se on onda update.
            // Dinamicki updateujemo objekat, i kasnije kada kliknemo submit,
            // saljemo tadasnje vrednosti tog objekta u Login funkciju koja se
            // nalazi u App komponenti.
            // Tamo proveravamo da li se ti podaci slazu sa nasom laznom bazom
            // podataka. Ako se slazu setujemo state.
            value={details.name}
            // Ovde povlacimo podatke iz details
          />
        </div>
        <div className="form-group">
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            name="email"
            id="email"
            onChange={(e) => setDetails({ ...details, email: e.target.value })}
            // Dakle ova logika je manenjena samo za details i njegovo azuiranje.
            // Detaljnije o argumentima setState funkcije ovde, prvi argument je
            // spread objekta, a drugim menjamo samo value, koji u ovom slucaju
            // dobija najnoviju vrednost. 
            value={details.email}
            // Svaki input je odgovoran za pojedinacni properti objekta
          />
        </div>
        <div className="form-group">
          <label htmlFor="password">Password:</label>
          {/* Ovako povezujemo label i input */}
          <input
            type="password"
            name="password"
            id="password"
            onChange={(e) =>
              setDetails({ ...details, password: e.target.value })
            }
            value={details.password}
          />
        </div>
        <input type="submit" value="LOGIN" className="submit-btn" />
        {/* Value LOGIN zapisujemo u input objekat (to je JSX objekat
        (reprezentacija dom elementa sa kojom JSX radi)) */}
      </div>
    </form>
  );
}
