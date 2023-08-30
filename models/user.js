import { Schema, model, models } from 'mongoose';
// The .model() function makes a copy of schema


const UserSchema =new Schema({
    email: {
        type :String,
        unique : [true, 'Email already exists'],
        required: [true, 'Email is required'],
    },
    username:{
        type:String,
        required:[true, 'username is required'],
        match:[/^(?=.{8,20}$)(?![_.])(?!.*[_.]{2})[a-zA-Z0-9._]+(?<![_.])$/, "Username invalid, it should contain 8-20 alphanumeric letters and be unique!"]
    },
    image:{
        type: String,
    }
});

//check if the user alreday exxist || if not make new one
const User = models.User || model('User', UserSchema);
export default User ;


// first look into (models.user ) and if the user is not there then add new user (model('user),userschema)

//the 'models' object is provided by the mongoose library and stores all the registered models.
//if a model named 'User' already exists in the 'models' object , it assigns that existing model
//to the 'User' variable.
//this prevents redifining the model and ensures that the existing model is reused

//if a model named 'User' does not exists in the 'models' object, the 'model' function from mongoose
//is called to create a ne3w model
//the newly created model is then assigned to the 'User ' variable