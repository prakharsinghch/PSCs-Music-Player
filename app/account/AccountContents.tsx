"use client";

import { useRouter } from "next/navigation";
import { useUser } from "../../hooks/useUser";
import { useEffect, useState } from "react";

const AccountContents = () => {

    const router = useRouter();
    const {isLoading, user} = useUser();

    const [Loading, setLoading] = useState(false);

    useEffect(() =>{
        if(!isLoading && !user) {
            router.replace('/');
        }
    },[isLoading, user, router]);

    // setLoading(true);

    return ( 
        <div className="mb-7 px-6">
            <div className="flex flex-col gap-y-4">
                <div className="text-neutral-600 lg:text-3xl">
                    Nothing Much to see here...
                </div>
            </div>
        </div>
     );
}
 
export default AccountContents;