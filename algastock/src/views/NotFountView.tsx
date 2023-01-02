import React from "react";
import { Link } from "react-router-dom";

declare interface NotFountViewProps {}

const NotFountView: React.FC<NotFountViewProps> = () => {
  return (
    <div style={{
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
      minHeight: '100vh'

    }}>
      <h1 style={{
        color: '#09f',
        fontWeight: 900
      }}>404</h1>
      <p>Not found</p>
      <Link to={"/"} style={{
        color: '#09f',
        textDecoration: 'none',
        fontSize: 12
      }}>Voltar para Home</Link>
    </div>
  );
};

export default NotFountView;
