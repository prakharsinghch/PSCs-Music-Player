import Header from "../../components/Header";
import AccountContents from "./AccountContents";

const Account = () => {
    return (  
        <div
            className="
                bg-black
                rounded-lg
                h-full
                w-full
                overflow-hidden
                overflow-y-auto
            ">
                <Header className="from-bg-neutral-900">
                    <div className="mb-2 flex flex-col gap-y-6">
                        <h1 className="text-white text-3xl font-semibold">
                            Account Details
                        </h1>
                    </div>
                </Header>
                <AccountContents />
        </div>
        );
}
 
export default Account;