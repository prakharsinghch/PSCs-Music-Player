"use client";

import { useEffect, useState } from "react";

import Modal from "../components/Model";
import AuthModal from "../components/authModal";
import UploadModal from "../components/uploadModal";

const ModelProvider = () => {

    const [isMounted, setIsMounted] = useState(false);

    useEffect(() => {
        setIsMounted(true);
    },[]);

    if(!isMounted){
        return null;
    }


    return ( 
        <>
            {/* <Modal 
                title="Test Modal"
                description="Test Description"
                isOpen
                onChange={() => {}}
            >
                Test Children
            </Modal> */}
            <AuthModal />
            <UploadModal />
        </>
     );
}
 
export default ModelProvider;