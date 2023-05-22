'use client'

import useLoginModel from "@/Hooks/useLoginModal";
import { useCallback, useState } from "react";
import Input from "../forms/Input";
import Modal from "./Modal";
import useRegisterModel from "@/Hooks/useRegisterModal";
import { FcGoogle } from 'react-icons/fc';

const LoginModal = () => {
  const loginModal = useLoginModel();
  const registerModal = useRegisterModel();

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

  const onToggle = useCallback(() => {
    if(isLoading) {
      return;
    }

    loginModal.onClose();
    registerModal.onOpen();
  }, [isLoading, registerModal, loginModal] )
  
  const bodyContent = (
    <div className="flex flex-col gap-4">
      <form className="bg-white rounded px-8 pt-6 pb-8 mb-4">
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2">
            Email
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
        
        <div className="flex items-center justify-between">
          <a className="inline-block align-baseline font-bold text-sm text-blue-500 hover:text-blue-800" href="#">
            Forgot Password?
          </a>
        </div>
        <div className="inline-flex items-center justify-center w-full">
          <hr className="w-64 h-px my-8 bg-gray-200 border-0 dark:bg-gray-700" />
          <span className="absolute px-3 font-medium text-gray-900 -translate-x-1/2 bg-white left-1/2 dark:text-white dark:bg-gray-900">or</span>
        </div>
        
        <div className="flex flex-col gap-4">
          <button type="button" className="py-2.5 px-5 mr-2 text-sm font-medium text-gray-900 bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:outline-none focus:ring-blue-700 focus:text-blue-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700 inline-flex items-center"
            style={{ width: 300, justifyContent: 'center', margin: "0 auto" }}>
            <FcGoogle size={24}/>
            Sign in with Google
          </button>
          <button type="button" className="py-2.5 px-5 mr-2 text-sm font-medium text-gray-900 bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:outline-none focus:ring-blue-700 focus:text-blue-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700 inline-flex items-center"
            style={{ width: 300, justifyContent: 'center', margin: "0 auto" }}>
            <svg className="w-4 h-4 mr-2 -ml-1" aria-hidden="true" focusable="false" data-prefix="fab" data-icon="facebook-f" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512"><path fill="currentColor" d="M279.1 288l14.22-92.66h-88.91v-60.13c0-25.35 12.42-50.06 52.24-50.06h40.42V6.26S260.4 0 225.4 0c-73.22 0-121.1 44.38-121.1 124.7v70.62H22.89V288h81.39v224h100.2V288z"></path></svg>
            Sign in with Facebook
          </button>
        </div>
      </form>
    </div>
  );

  const footContent = (
    <div className="text-neutral-400 text-center mt-4">
      <p> First time using Twitter?</p>
      <span onClick={onToggle}
      className="text-black cursor-pointer hover:underline">
        <strong> Create an account </strong>
      </span>
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
      footer={footContent}
    />
  )
};

export default LoginModal;
