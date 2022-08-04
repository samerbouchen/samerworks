const mongoose= require('mongoose');
const carschema = new mongoose.Schema({
    category: {
        type : String,
        require: [true, 'car category is required']
    },
    owner : {
        type :String,
        require: true,
    },
    marque: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true,
    }
},
    {
    timestamps: true,
    }
     );

         const car = mongoose.model('car', carschema);



      module.exports = car;