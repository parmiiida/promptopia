'use client'
import { useEffect ,useState }  from 'react';
import { useSession } from 'next-auth/react';
import { useRouter } from 'next/navigation'

import Profile from '@components/profile'

const MyProfile = () => {

  const {data :session} = useSession();
  const router = useRouter();

  const[myPosts ,setMyPosts] = useState([])
  useEffect(() => {
    const fetchPosts = async () => {
      //we only wan to get data from a specific user $
      const response = await fetch(`/api/users/${session?.user.id}/posts`);
      const data = await response.json();

      setMyPosts(data);
    }


    //only wanto fetch data if we have have the user we wanna fetch them for
    if(session?.user.id) fetchPosts();
  } ,[])

  const handleEdit =(post) =>{
    router.push(`/update-prompt?id=${post._id}`)
  }
  const handleDelete = async(post)=>{
    const hasConfirmed = confirm('are you sure you want to delet this prompt');

    if(hasConfirmed){
      try{
        await fetch(`api/prompt/${post._id.toString()}` ,{
          method: 'DELETE'
        });
        const filteredPosts = myPosts.filter((p) =>{
          p._id !== post._id
        })

        setMyPosts(filteredPosts)
      }catch(error){
        console.log(error)
      }
    }
  }
  return (
    
    <Profile 
    name='My '
    desc='welcome to your personalized page'
    data={myPosts}
    handleEdit={handleEdit}
    handleDelete={handleDelete}
    />
  )
}
export default MyProfile
