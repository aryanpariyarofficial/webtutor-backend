import mongoose from 'mongoose';

const schema = new mongoose.Schema({
//     Title type, required, minLength, maxLength
    title: {
        type: String,
        required: [true, 'please enter the course title'],
        minLength: [10, 'title length should be at least 10 characters'],
        maxLength: [100, 'title length should be at most 100 characters'],
    },
// Description type, required, minLength
description: {
    type: String,
    required: [true, 'please enter the course description'],
    minLength: [20, 'title length should be at least 10 characters'],
    
},
// Lectures title,description,videos { public_id,url }
    lectures: [
        {
            title:{
                type: String,
                required: true,
            },
            description:{
                type: String,
                required: true,
            },
            video: {
                public_id: {
                    type: String,
                    required: true,
                },
                url: {
                    type: String,
                    required: true,
                },
            
            },
        }
    ],
// Poster public_id, url
    poster: {
        public_id: {
            type: String,
            required: true,
        },
        url: {
            type: String,
            required: true,
        },

    },
// Views type, default
    views:{
        type: Number,
        default: 0
    },
// NumOfVideos type, default
    numOfVideos:{
        type: Number,
        default: 0
    },
// Category type, required
    category: {
        type: String,
        required: true,
    },
// CreatedBy type, required
    createdBy:{
        type: String,
        required: [true, 'Enter the creator name'],
    },
// CreatedAt type, default
    createdAt: {
        type: Date,
        default: Date.now,
    },
});

export const Course = mongoose.model("Course", schema);