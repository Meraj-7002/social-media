import React, { useState } from 'react';
import {TbSocial} from 'react-icons/tb';
import TextInput from '../components/TextInput';
import {useForm} from "react-hook-form";
import {Link} from "react-router-dom";
import {useDispatch} from "react-redux";
import Loading from '../components/Loading';
import CustomBotton from '../components/CustomBotton';
import { BgImage } from '../assets';
import{BsShare} from "react-icons/bs"

function Login() {
 const {
  register,
  handleSubmit,
  formState: { errors },
 } = useForm({
  mode: "onChange"
 });
const onSubmit = async(data)=>{

 }
 const [isSubmitting , setisSubmitting] = useState(false);
 const dispatch = useDispatch();
  return (
    <div className='bg-bgColor w-full h-[100vh] flex item-center justify-center p-6'>
    <div className='w-full md:w-2/3 h-fit lg:h-full 2x1:h-5/6 py-8 lg:py-0 flex bg-primary rounded-x1 overflow-hidden shadow-xl'>
      {/*LEFT*/}
      <div className='w-full lg:w-1/2 h-full p-10 2xl:px-20 flex flex-col justify-center'>
        <div className='w-full flex gap-2 item-center mb-6'>
          <div className='p-2 bg-[#065ad8] rounded text-white'>
            <TbSocial />
          </div>
          <span className='text-2xl text-[#065ad8]' font-semibol>KOOBECAF</span>
        </div>
        <p className='text-ascent-1 text-base font-semibold'>
          Log In Your Account 
        </p>
        <span className='text-sm mt-2 text-ascent-2'>Welcome Back</span>
        <form className='py-8 flex flex-col gap-5' 
        onSubmit={handleSubmit(onSubmit)}
        >
          <TextInput 
          name="email" placeholder="email@example.com"
          label="Email Address"
          type="email"
          register={
            register("email", {required: "Email Address is required"})
          }
          styles='w-full rounder-full'
          labelStyle='ml-2'
          error={errors.email ? errors.email.message:""}
          />
           <TextInput 
          name="password" placeholder="Password"
          label="password"
          type="password"
          register={
            register("password", {required: "Password is required"})
          }
          styles='w-full rounder-full'
          labelStyle='ml-2'
          error={errors.password ? errors.password?.message:""}
          />
          <Link
          to="/reset-password"
          className='text-sm text-right text-blue font-semibold'
          >Forgot Password ?</Link>
          {
            isSubmitting ? <Loading /> : <CustomBotton 
            type="submit"
            containerStyles={`inline-flex justify-center rounded-md bg-blue px-8 py-3 text-sm font-medium text-white outline-none`}
            title="Login"
            />
          }
        </form>
        <p className='text-ascent-2 text-sm text-center'>
          Don't have account ? {" "}
          <Link 
          to='/register' 
          className='text-[#065ad8] font-semibold ml-2 cursor-pointer'
          >
            Create account 
          </Link>
        </p>
      </div>
      {/* RIGHT */}
      <div className='hidden w-1/2 h-full lg:flex flex-col items-center justify-center bg-blue'>
        <div className='related w-full flex item-center justify-center'>
          <img src={BgImage}
          alt='Bg Image'
          className='w-48 2xl:w-64 h-48 2xl:h-64 rounded-full object-cover' 
          />
        </div>
      </div>
    </div>
    </div>
  )
}

export default Login;