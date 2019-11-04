import React from "react";
import Denied from "./denied";
import Empty from "./empty";
import Preview from "./preview";
import {BaseContext} from '../context';

export default function Inbox() {
  let appContext = React.useContext(BaseContext);
  if (!appContext.isAuthenticated) {
    return <Denied />;
  }

  if (!appContext.emails.length) {
    return <Empty />;
  }

  return (
    <ul className="inbox">
      {appContext.emails.map(email => {
        return <Preview key={email.id} {...email} removeEmail={appContext.removeEmail} />;
      })}
    </ul>
  );
}
