"use client";

import { useSessionContext, useSupabaseClient } from "@supabase/auth-helpers-react";
import { useRouter } from "next/navigation";
import { Auth } from "@supabase/auth-ui-react";
import Modal from "./Model";
import { ThemeSupa } from "@supabase/auth-ui-shared";
import useAuthModal from "../hooks/useAuthModal";
import { useEffect } from "react";

const AuthModal = () => {

    const supabaseClient = useSupabaseClient();
    const router = useRouter();
    const { session } = useSessionContext();
    const {onClose, isOpen} = useAuthModal();

    useEffect( () => {
        if(session){
            router.refresh();
            onClose();
        }
    },[session,router, onClose]);

    const onChange = (open: boolean) => {
        if(!open){
            onClose();
        }   
    }

    return (
        <Modal
            title="Welcome !!"
            description="login in your account"
            isOpen = {isOpen}
            onChange={onChange}
        >
            <Auth 
                supabaseClient={supabaseClient}
                magicLink
                providers = {["github"]}
                appearance = {{
                    theme: ThemeSupa,
                    
                    variables: {
                        default: {
                          colors: {
                            brand: '#404040',
                            brandAccent: '#b000b2',
                          },
                        },
                      },
                
                }}
                theme="dark"
            />
        </Modal>
     );
}
 
export default AuthModal;