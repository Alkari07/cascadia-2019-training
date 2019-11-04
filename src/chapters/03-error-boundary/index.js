// ###############################
//   Error Boundaries and Portals
// ###############################

import React from "react";
import AppProvider from "./context";
import NavBar from "./components/navbar";
import Inbox from "./components/inbox";
import EmailError from './components/email-error';

export default function App() {
  return (
    
      <AppProvider>
        <EmailError>
        <NavBar />
        <Inbox />
        </EmailError>
      </AppProvider>
    
    
  );
}
