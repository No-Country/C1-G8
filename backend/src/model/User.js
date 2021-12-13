const { Schema , model } = require('mongoose');

const UserSchema = new Schema({
    userName: {
        type: String,
        required: true,
        unique: true    
    },
    email: {
        type: String,
        required: true,
        unique: true,
    },
    password: {
        type: String,
        required:true,
    },
    wallet: [
        {
        name: String, 
        quantity: Number,            
        }
    ]
    
},{
    timestamps: true
})

module.exports = model('Users', UserSchema);
