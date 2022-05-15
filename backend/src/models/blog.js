const mongoose = require('mongoose')

const Blog = mongoose.model('Blog',{
    title: {
        type : String,
        required : true,
        trim : true
    },
    date: {
        type : Date,
        required : true
    },
    source: {
        type : String,
        required : true,
        trim : true
    },
    destination: {
        type : String,
        required : true,
        trim : true
    },
    content: {
        type : String,
        required : true,
        trim : true
    },
    ExpensePerHead: {
        type: Number,
        required: true,
        trim: true,
        validate(value){
            if(value<0){
                throw new error('Expense must be non-negative')
            }
        }
    },
    AvailableSeats: {
        type: Number,
        required: true,
        trim: true,
        validate(value){
            if(value<0){
                throw new error('Seats must be non-negative')
            }
        }
    },
    Likes: [
        {
            userid: {
                type: mongoose.Schema.Types.ObjectId,
                required: true
            }
        }
    ],
    comment: [
        {
            userid: {
                type: mongoose.Schema.Types.ObjectId,
                required: true
            },
            description: {
                type: String, 
                required: true
            }
        }
    ],
    owner: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: 'User'
    }
})

module.exports = Blog