import React from "react";
import LoginForm from "../components/Authentication/LoginForm";

declare interface LoginViewProps {}

const LoginView: React.FC<LoginViewProps> = () => {
  return <div style={{
    minHeight: '100vh',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center'
  }}>
    <div style={{
      minWidth: '320px'
    }}>
      <LoginForm/>
    </div>
  </div>;
};

export default LoginView;
