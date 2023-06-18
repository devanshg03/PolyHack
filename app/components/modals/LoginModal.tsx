'use client'
import {signIn} from 'next-auth/react'
import { AiFillGithub } from 'react-icons/ai'
import {FcGoogle} from 'react-icons/fc'
import { useCallback, useState } from 'react'

import useRegisterModal from '@/app/hooks/useRegisterModal'

import { FieldValues, SubmitHandler, useForm} from 'react-hook-form'
import Modal from './Modal'
import Heading from '../Heading'
import Input from '../inputs/Input'
import { toast } from 'react-hot-toast'
import useLoginModal from '@/app/hooks/useLoginModal'
import { useRouter } from 'next/navigation'
import Button from '../Button'

function LoginModal() {

    const router = useRouter()

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
            email:'',
            password:''
        }
    })

    const onSubmit : SubmitHandler<FieldValues> = (data) => {
        setIsLoading(true)

        signIn('credentials', {
            ...data,
            redirect:false
        })
        .then((callback)=>{
            setIsLoading(false)

            if (callback?.ok){
                toast.success('Logged In')
                router.refresh()
                loginModal.onClose()
            }

            if (callback?.error){
                toast.error(callback.error)
            }
        })
        .catch((err)=>{
            console.log(err)
        })
    }

    const toggle = useCallback(()=>{
        loginModal.onClose()
        registerModal.onOpen()
    },[registerModal,loginModal])

    const bodyContent = (
        <div className='flex flex-col gap-4'>
            <Heading title='Welcome back' subtitle='Login to your account!'/>
            <Input id="email" label='Email' disabled={isLoading} register={register} errors={errors} required/>
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
                onClick={()=> signIn('github')}
            />
            <Button
                outline
                icon={FcGoogle}
                label='Continue with Google'
                onClick={()=>signIn('google')}
            />
            <div className='flex justify-center items-center gap-2 text-sm'>
                <div>
                    First time using AudaIQ?
                </div>
                <div className='cursor-pointer hover:underline text-neutral-900 ' onClick={toggle}>
                    Create an account
                </div>
            </div>
        </div>
    )


    return (
        <Modal
            disabled={isLoading}
            isOpen={loginModal.isOpen}
            title='Login'
            actionLabel='Continue'
            onClose={loginModal.onClose}
            onSubmit={handleSubmit(onSubmit)}
            body={bodyContent}
            footer={footerContent}
        />
    )
}

export default LoginModal
