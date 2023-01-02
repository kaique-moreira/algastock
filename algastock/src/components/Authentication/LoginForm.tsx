// @ts-nocheck
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import {useNavigate } from "react-router";
import Swal from "sweetalert2";
import { login } from "../../redux/Authentication/Authentication.actions";
import Button from "../../shared/Button";
import Form from "../../shared/Form";
import Input from "../../shared/Input";

const LoginForm = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate()
  const [form, setForm] = useState({
    user: "",
    pass: "",
  });

  const handleLogin = async () => {
    try {
      await dispatch(login(form));
      navigate('/')
    } catch (err) {
      Swal.fire("Error", err.response?.data?.message || err.message, "error");
    }
  };

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { value, name } = event.target;

    setForm({
      ...form,
      [name]: value,
    });
  };

  return (
    <Form title="Algastock" onSubmit={handleLogin}>
      <Input
        label="User"
        name="user"
        value={form.user}
        onChange={handleInputChange}
        placeholder="E.g.: your_user_name"
      />
      <Input
        label="Password"
        name="pass"
        value={form.pass}
        onChange={handleInputChange}
        placeholder="password"
      />
      <Button>Login</Button>
    </Form>
  );
};

export default LoginForm;
