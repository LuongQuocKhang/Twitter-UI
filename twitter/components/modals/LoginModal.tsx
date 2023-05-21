'use client'

import useLoginModel from "@/Hooks/useLoginModal";
import { useCallback, useState } from "react";
import Input from "../Input";
import Modal from "../Modal";

const LoginModal = () => {
  const loginModal = useLoginModel();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const onSubmit = useCallback(async () => {
    try {
      setIsLoading(true);

      // TODO ADD LOG IN

      loginModal.onClose();
    } catch (error) {
      console.log(error);
    } finally {
      setIsLoading(false);
    }
  }, [loginModal]);

  const bodyContent = (
    <div className="flex flex-col gap-4">
      <Input
        placeholder="Email"
        onChange={(e) => setEmail(e.target.value)}
        value={email}
        type="text"
        disabled={isLoading}
      />
      <Input
        placeholder="Password"
        onChange={(e) => setPassword(e.target.value)}
        value={password}
        type="password"
        disabled={isLoading}
      />
    </div>
  );

  return (
    <Modal
    disabled={isLoading}
    isOpen={loginModal.isOpen}
    title="Sign in to Twitter"
    actionLabel="Sign In"
    onClose={loginModal.onClose}
    onSubmit={onSubmit}
    body={bodyContent}
  />
  )
};

export default LoginModal;
