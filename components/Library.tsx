"use client";

import { TbPlaylist } from "react-icons/tb"
import {AiOutlinePlus} from "react-icons/ai"
import useAuthModal from "../hooks/useAuthModal";
import { useUser } from "../hooks/useUser";
import useUploadModal from "../hooks/useUploadModal";
import { Song } from "../types";
import MediaItem from "./MediaItem";
import useOnPlay from "../hooks/useOnPlay";



interface LibraryProps {
    songs: Song[];
}

const Library: React.FC<LibraryProps> = ({
    songs
}) => {
    const authModal = useAuthModal();
    const {user} = useUser();

    const onPlay = useOnPlay(songs);

    const uploadModal = useUploadModal();
    const onClick = () => {

        if(!user){
            return authModal.onOpen();
        }
        return uploadModal.onOpen();
    };

    // console.log(songs.length)

    return ( 
        <div className="flex flex-col">
        <div className="flex items-center justify-between px-5 pt-4  cursor-pointer" onClick={onClick} >
          <div className="inline-flex items-center gap-x-2">
            <AiOutlinePlus className="text-white" size={26} />
            <p className="text-white font-medium text-md">
              Your Songs
            </p>
          </div>
        </div>
        <div className="flex flex-col gap-y-2 mt-4 px-3">
            {songs.map( (item) => (
                <MediaItem 
                    onClick={(id:string) => onPlay(id)}
                    key = {item.id}
                    data = {item}
                />
            ) )}
        </div>
        </div>
     );
}
 
export default Library;