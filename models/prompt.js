import {Schema ,model ,models} from "mongoose";

const PromptSchema =new Schema({

    //creator is going to be a document in database
    creator :{
        type : Schema.Types.ObjectId,
        //refrence is going to be to the user
        //one user will be able to create many prompts
        ref : 'User'
    },
    prompt: {
        type:String ,
        required :[true , 'Prompt is required']
    },
    tag :{
        type: String ,
        required :[ true , 'Tag is required']
    }

});

const Prompt = models.Prompt || model('Prompt' ,PromptSchema)

export default Prompt ;