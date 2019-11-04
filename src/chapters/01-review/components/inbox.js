import React from "react";

import Empty from "./empty";
import Preview from "./preview";
import Denied from "./denied";

export default function Inbox({ emails, isAuthenticated, removeEmail }) {
  if (!emails.length) {
    return <Empty />;
  }

  if (!isAuthenticated) {
    return <Denied />;
  }

  return (
    <ul className="inbox">
      {emails.map(email => {
        return <Preview key={email.id} {...email} removeEmail={removeEmail} />;
      })}
    </ul>
    
  );
}
