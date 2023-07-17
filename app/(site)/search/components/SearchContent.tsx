"use client";

import MediaItem from "../../../../components/MediaItem";
import { Song } from "../../../../types";
import LikeButton from "../../../../components/LikeButton";
import useOnPlay from "../../../../hooks/useOnPlay";

interface SearchContentProps {
    songs: Song[];
}

const SearchContent: React.FC<SearchContentProps> = ({
    songs
}) => {
    const onPlay = useOnPlay(songs);
    if(songs.length === 0){
        return(
        <div
            className="
                mt-2
                flex
                flex-col
                gap-y-2
                w-full
                px-6
                text-neutral-400
            "
        >
            <h1 className="text-2xl">No Songs Found!</h1>
        </div>
    )}

    return ( 
        <div className="flex flex-col gap-y-2 w-full px-6">
          {songs.map((song) => (
            <div
                key={song.id}
                className="flex items-center gap-x-4 w-full"
            >
                <div className="flex-1">
                    <MediaItem
                        onClick={(id:string) => onPlay(id)}
                        data={song}
                     />
                </div>
                {/* todo : like button */}
                <LikeButton songId={song.id} />

            </div>
          ))}
        </div>
     );
}
 
export default SearchContent;