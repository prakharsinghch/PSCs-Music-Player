import Image from 'next/image'
import Header from '../../components/Header'
import ListItem from '../../components/ListItem'
import getSongs from '../../actions/getSongs';
import PageContent from './PageContent';

export const revalidate = 0;

export default async function Home() {

  const songs = await getSongs();


  return (
      <div className ="
        bg-black
        rounded-lg
        h-full
        w-full
        overflow-hidden
        overflow-y-auto
      ">
        <Header>
          <div className='mb-2'>
            <h1 className='
              text-white
              text-4xl
              font-semibold'>
                get groovy..
              </h1>
              <div className='
                grid
                gird-cols-1
                sm:grid-cols-2
                xl:grid-cols-3
                2xl:grid-cols-3
                gap-3
                mt-5
              '>
                <ListItem  
                  image ="/images/img.png"
                  name="Your Likes"
                  href='liked'
                  />
              </div>
          </div>
        </Header>
        <div className='mt-2 mb-7 px-6'>
          <div className='flex justify-between items-center'>
            <h1 className='text-white text-2xl font-semibold'>
              Song List
            </h1>
          </div>
          <PageContent songs={songs}/>
        </div>
        
      </div>
  )
}
