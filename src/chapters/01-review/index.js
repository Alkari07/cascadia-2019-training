// ####################
//       State
// ####################

import React from "react";
import NavBar from "./components/navbar";
import Inbox from "./components/inbox";
import { emails, generateEmail, fetchEmails } from "../../utils/email";

export default class App extends React.Component { 
  state = {
    isAuthenticated : false,
    emails : fetchEmails(5)
  }
  intervalPoll ={};

  login = function () {
    this.isAuthenticated = true;
  };

  logout = function () {
    this.isAuthenticated = false;
  };

  removeEmail = id => {
    this.setState(({ emails }) => {
      const filteredEmails = emails.filter(email => email.id !== id);
      return { emails: filteredEmails };
    });
  };

  componentDidMount () {
    this.intervalPoll = setInterval(function() {
      generateEmail();
    }, 4000)
  };

  componentWillUnmount() {
    clearInterval(this.intervalPoll);
  };
  render() {
    return (
      <>
        <NavBar isAuthenticated={this.state.isAuthenticated} login={this.login} logout={this.logout}/>
        <Inbox emails={emails} isAuthenticated={this.state.isAuthenticated} removeEmail/>
      </>
    );
  }
}
