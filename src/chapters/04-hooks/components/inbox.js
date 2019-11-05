import React from "react";
import { AppContext } from "../context";
import Denied from "./denied";
import Empty from "./empty";
import Preview from "./preview";
import EmailError from "./email-error";

// const Inbox = () => (
//    //const {isAuthenticated, email, login} = React.useContext(AppContext);

//     if (!isAuthenticated) {
//       return <Denied />;
//     }

//     if (!emails.length) {
//       return <Empty />;
//     }

//     return (
//       <ul className="inbox">
//         {emails.map(email => {
//           return (
//             <EmailError key={email.id} onClear={() => removeEmail(email.id)}>
//               <Preview {...email} />
//             </EmailError>
//           );
//         })}
//       </ul>
//     );

// );


const Inbox = () => {
  const {isAuthenticated, emails, removeEmail} = React.useContext(AppContext);

    if (!isAuthenticated) {
      return <Denied />;
    }

    if (!emails.length) {
      return <Empty />;
    }

    return (
      <ul className="inbox">
        {emails.map(email => {
          return (
            <EmailError key={email.id} onClear={() => removeEmail(email.id)}>
              <Preview {...email} />
            </EmailError>
          );
        })}
      </ul>
    );
}

export default Inbox