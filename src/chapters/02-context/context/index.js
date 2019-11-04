import React from "react";
import { fetchEmails, generateEmail } from "../../../utils/email";

export const BaseContext= React.createContext();
export const BaseConsumer = BaseContext.Consumer;
export default class AppProvider extends React.Component {
  state = {
    isAuthenticated: false,
    emails: fetchEmails(5)
  };

  login = () => this.setState({ isAuthenticated: true });

  logout = () => this.setState({ isAuthenticated: false });

  removeEmail = id => {
    this.setState(({ emails }) => {
      const filteredEmails = emails.filter(email => email.id !== id);
      return { emails: filteredEmails };
    });
  };

  componentDidMount() {
    this.polling = setInterval(() => {
      this.setState(({ emails }) => {
        if (emails.length < 5) {
          return { emails: [...emails, generateEmail()] };
        }
        return {};
      });
    }, 2000);
  }

  componentWillUnmount() {
    clearInterval(this.polling);
  }

  render() {
    let value = {
      isAuthenticated : this.state.isAuthenticated,
      emails : this.state.emails,
      login : this.login,
      logout: this.logout,
      removeEmail: this.removeEmail
    }
    return <BaseContext.Provider value={value} {...this.props} />;
  }
}
