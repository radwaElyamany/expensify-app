import React from "react";
import ReactDOM from "react-dom";

const Info = props => (
  <div>
    <h1>info</h1>
    <p>the info is: {props.info}</p>
  </div>
);

const withAdminWarning = WrappedComponent => {
  return props => (
    <div>
      {props.isAdmin && <p>this is a private info</p>}
      <WrappedComponent {...props} />
    </div>
  );
};

const AdminInfo = withAdminWarning(Info);

ReactDOM.render(
  <AdminInfo isAdmin={true} info="i am not feeling ok" />,
  document.getElementById("root")
);
