import {Schema,model,Document} from "mongoose";


interface iuser extends user, Document {}

const userSchema = new Schema()