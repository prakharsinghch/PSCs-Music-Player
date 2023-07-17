import './globals.css'
import { Figtree } from 'next/font/google'
import Sidebar from '../components/Sidebar'
import SupabaseProvider from '../providers/SupabaseProvider'
import UserProvider from '../providers/UserProvider'
import ModelProvider from '../providers/ModelProvider'
import ToasterProvider from '../providers/ToasterProvider'
import getSongsByUserId from '../actions/getSongsByUserId'
import Player from '../components/Player'


const font = Figtree({ subsets: ['latin'] })

export const metadata = {
  title: "PSC's Music Player",
  description: 'Play your heart!',
};

export const revalidate = 0;

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {

  const userSongs = await getSongsByUserId();
  // console.log("layout ", userSongs.length)



  return (
    <html lang="en">
      <body className={font.className}>
          <ToasterProvider/>
          <SupabaseProvider>
              <UserProvider>
                <ModelProvider />
                <Sidebar songs={userSongs}> 
                  {children}
                </Sidebar>
                <Player />
             </UserProvider>
          </SupabaseProvider>
      </body>
    </html>
  )
}
