import mongoose ,{Schema} from "mongoose";
import mongooseAggregatePaginate from "mongoose-aggregate-paginate-v2";

const VideoSchema=new Schema({
videofile:{
    type:String,//cloudinary url
    required:true
},
thumbnail:{
    type:String,
    required:true
},
title:{
    type:String,
    required:true
},
description:{
    type:String,
    required:true
},
duration:{
    type:String,
    required:true
},
Views:{
    type:String,
    required:true
},
isPublished:{
    type:Boolean,
    default:true
},
owner:{
    type:Schema.Types.ObjectId,
    ref:"User"
}
},
{
    timestamps:true
}
)

VideoSchema.plugin(mongooseAggregatePaginate)

export const Video=mongoose.model("Video",VideoSchema)