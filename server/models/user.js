import mongoose from "mongoose";

const {Schema}=mongoose;

const userSchema =new Schema(
    {
        name:{
            type: String,
            trim:true,
            required:true,
        },
        email:{
            type: String,
            trim:true,
            required:true,
            unique:true
        },
        password:{
            type: String,
            required:true,
            min:6,
            max:64
        },
        picture:{
            type: String,
             default:'/avatar.png',
        },

        role:{
            type : [String],
            default: ["Instructor"],
            enum: ["Subscriber","Instructor","Admin"],
        },
        // payment data
        // stripe_account_id: "",
        // stripe_seller: {},
        // stripeSession: {},
        passwordResetCode: {
            type: String,
            default: "",
        },
    },
    {timestamps: true }
);

const User = mongoose.model("User", userSchema);
export default User;