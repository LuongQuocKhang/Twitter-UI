"use client";

import useRegisterModel from "@/Hooks/useRegisterModal";
import { useCallback, useState } from "react";
import Input from "../forms/Input";
import Modal from "./Modal";
import useLoginModel from "@/Hooks/useLoginModal";
import axios from "axios";
import { toast } from 'react-hot-toast';
import { signIn } from 'next-auth/react';

const RegisterModal = () => {
  const registerModal = useRegisterModel();
  const loginModal = useLoginModel();

  const [name, setName] = useState("");
  const [userName, setUserName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const onToggle = useCallback(() => {
    if(isLoading) {
      return;
    }

    registerModal.onClose();
    loginModal.onOpen();
  }, [isLoading, registerModal, loginModal] )

  const onSubmit = useCallback(async () => {
    try {
      setIsLoading(true);

      await axios.post('/api/register', {
        email,
        password,
        userName,
        name
      })

      toast.success("Account created.");

	  signIn('credentials', {
		email,
		password
	  })

      registerModal.onClose();

    } catch (error) {
      console.log(error);
	  toast.error("Something when wrong.");
    } finally {
      setIsLoading(false);
    }
  }, [registerModal, email, password, userName, name]);

  const bodyContent = (
    <>
      <div className="flex flex-col gap-4">
        <form className="bg-white rounded px-8 pt-4 pb-4 mb-4">
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2">
              Full Name
            </label>
            <Input
              placeholder="Name"
              onChange={(e) => setName(e.target.value)}
              value={name}
              type="text"
              disabled={isLoading}
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2">
              Username
            </label>
            <Input
              placeholder="Username"
              onChange={(e) => setUserName(e.target.value)}
              value={userName}
              disabled={isLoading}
              type="text"
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2">
              Username
            </label>
            <Input
              placeholder="Email"
              onChange={(e) => setEmail(e.target.value)}
              value={email}
              type="text"
              disabled={isLoading}
            />
          </div>
          <div className="mb-6">
            <label className="block text-gray-700 text-sm font-bold mb-2">
              Password
            </label>
            <Input
              placeholder="Password"
              onChange={(e) => setPassword(e.target.value)}
              value={password}
              type="password"
              disabled={isLoading}
            />
          </div>
        </form>
      </div>
    </>
  );

  const footContent = (
    <div className="text-neutral-400 text-center mt-4">
      <p> Already have an account?</p>
      <span onClick={onToggle}
      className="text-black cursor-pointer hover:underline">
        <strong> Sign In </strong>
      </span>
    </div>
  );
  
  return (
    <Modal
      disabled={isLoading}
      isOpen={registerModal.isOpen}
      title="Create an account"
      actionLabel="Sign Up"
      onClose={registerModal.onClose}
      onSubmit={onSubmit}
      body={bodyContent}
      footer={footContent}
    />
  );
};

export default RegisterModal;
