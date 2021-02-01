// 1. mongoose모듈 가져오기
const mongoose = require('mongoose');

// 2. 스키마정의
const userSchema = mongoose.Schema({
    name : {
        type: String,
        maxlength: 50
    },
    email: {
        type: String,
        trim: true,
        unique: 1
    },
    password: {
        type: String,
        maxlength: 50
    },
    role: {
        type: Number,
        default: 0
    },
    image: String,
    token: {
        type: String
    },
    tokenExp: {
        type: Number
    }
})

// 3. 스키마를 모델로 감싸줌
const User = mongoose.model('User',userSchema);

// 4. 모듈 export
module.exports = { User };
