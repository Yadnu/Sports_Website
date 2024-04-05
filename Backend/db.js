const mongoose = require("mongoose");

mongoose.connect("mongodb+srv://admin:Virat%4018@cluster0.xbu8c1d.mongodb.net/DKTE")
.then( ()=>{console.log("connected");})
const userSchema = new mongoose.Schema({
    username: {
        type:String,
        required: true,
        unique: true,
        trim: true,
        lowercase: true,
        minLength: 3,
        maxLength: 30
    },
    password:{
        type: String,
        required: true,
        minLength: 6
    },
    firstName:{
        type: String,
        required: true,
        trim: true,
        maxLength: 50
    }
});
const sportsSchema = new mongoose.Schema({
    sportsName: String,
    sportType: {
        type: String,
        enum: ['Individual', 'Group']
      }

})
const teamSchema = new mongoose.Schema({
    teamName: String,
    departmentName : String,
    players: [{
        type: Schema.Types.ObjectId,
        ref: 'User'
      }]
})



const User = mongoose.model('User', userSchema);

module.exports = {
    User,
    teamSchema,
    sportsSchema
};