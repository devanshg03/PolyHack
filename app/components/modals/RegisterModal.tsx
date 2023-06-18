'use client'
import axios from 'axios'
import { AiFillGithub } from 'react-icons/ai'
import {FcGoogle} from 'react-icons/fc'
import { useCallback, useState } from 'react'

import useRegisterModal from '@/app/hooks/useRegisterModal'

import { FieldValues, SubmitHandler, useForm} from 'react-hook-form'
import Modal from './Modal'
import Heading from '../Heading'
import Input from '../inputs/Input'
import { toast } from 'react-hot-toast'
import { signIn } from 'next-auth/react'
import useLoginModal from '@/app/hooks/useLoginModal'
import Button from '../Button'


function RegisterModal() {

    const registerModal = useRegisterModal();
    const loginModal = useLoginModal()

    const [isLoading,setIsLoading] = useState(false)

    const {
        register,
        handleSubmit,
        formState:{
            errors,
        }
    } = useForm<FieldValues>({
        defaultValues:{
            name:'',
            email:'',
            password:''
        }
    })

    const onSubmit : SubmitHandler<FieldValues> = (data) => {
        setIsLoading(true)

        axios.post('/api/register',data)
        .then(()=>{
            toast.success('Success')
            registerModal.onClose()
            loginModal.onOpen()
        })
        .catch((err)=>{
            toast.error("Something went wrong, please try again.")
        })
        .finally(()=>{
            setIsLoading(false)
        })
    }

    const toggle = useCallback(()=>{
        registerModal.onClose()
        loginModal.onOpen()
    },[registerModal,loginModal])

    const bodyContent = (
        <div className='flex flex-col gap-4'>
            <Heading title='Welcome to AudaIQ' subtitle='Create an account!'/>
            <Input id="email" label='Email' disabled={isLoading} register={register} errors={errors} required/>
            <Input id="name" label='Name' disabled={isLoading} register={register} errors={errors} required/>
            <Input id="password" label='Password' disabled={isLoading} register={register} errors={errors} required type='password'/>
        </div>
    )

    const footerContent = (
        <div className='flex flex-col gap-3 mt-3'>
            <hr></hr>
            <Button
                outline
                icon={AiFillGithub}
                label='Continue with Github'
                onClick={()=>signIn('github')}
            />
            <Button
                outline
                icon={FcGoogle}
                label='Continue with Google'
                onClick={()=>signIn('google')}
            />
            <div className='flex justify-center items-center gap-2 text-sm'>
                <div>
                    Already have an account?
                </div>
                <div className='cursor-pointer hover:underline text-neutral-900 ' onClick={toggle}>
                    Login
                </div>
            </div>
        </div>
    )


    return (
        <Modal
            disabled={isLoading}
            isOpen={registerModal.isOpen}
            title='Register'
            actionLabel='Continue'
            onClose={registerModal.onClose}
            onSubmit={handleSubmit(onSubmit)}
            body={bodyContent}
            footer={footerContent}
        />
    )
}

export default RegisterModal
