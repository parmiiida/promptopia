import { connectToDB } from "@utils/database"
import Prompt from "@models/prompt";

export const POST =async(request) => {
    const {userId ,prompt ,tag} = await request.json()

    try{
        await connectToDB();
        const newPrompt = new Prompt({
            creator: userId ,
            prompt,
            tag 
        })

        //save to the database
        await newPrompt.save();

        return new Response(JSON.stringify(newPrompt) , {status:201})
    }    catch (error){
        return new Response('Faild to create a new prompt', {status:500})

    }
    
}