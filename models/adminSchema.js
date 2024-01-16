const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const  adminSchema  = new mongoose.Schema({
    name:String,
    lastName:String,
    pseudoName:String,
    login:{type:String,unique:true},
    password:String,
    isSuperAdmin:Boolean,
    teleAdmin:String,
    resultatRoulette:Number,
    role:String,
    historique:[],
    hist:[],
    roulette:{ type: Schema.Types.ObjectId, ref:'roulette'},
    solde:Number,
    prencentage:Number,
    Listejoueurs: [{ type: Schema.Types.ObjectId, ref:'joueurSchema'}],
    tickets: [{ type: Schema.Types.ObjectId, ref:'ticketSchema'}], 
    admins: [{ type: Schema.Types.ObjectId, ref:'adminSchema'}], 
    text1:    {title:String,
                value:String,
                status:Boolean},
    text2:    {title:String,
               value:String,
               status:Boolean},
    text3:    {title:String,
              value:String,
               status:Boolean}
});
//aaaaa
module.exports=mongoose.model('adminSchema',adminSchema);