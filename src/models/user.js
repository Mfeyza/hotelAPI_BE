"use strict"

const { mongoose } = require('../configs/dbConnection')
/* ------------------------------------------------------- */
// User Model:

const passwordEncrypt = require('../helpers/passwordEncrypt')

const UserSchema = new mongoose.Schema({

    username: {
        type: String,
        trim: true,
        required: true,
        unique: true,
    },

    password: {
        type: String,
        trim: true,
        required: true,
        // validate: [
        //     (password) => /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&]).{8,}$/.test(password),
        //     'Password type is not correct.'
        // ],
        // set: passwordEncrypt
        //? Yöntem-1:
        set: (password) => {
            if (/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&]).{8,}$/.test(password)) {
                return passwordEncrypt(password)
            } else {
                throw new Error('Password type is not correct.')
            }
        }, //' set fonksiyonu validateden önce çalışır. Geliştiriciler genellikle verinin nasıl saklanacağını (örneğin, şifrelerin nasıl şifreleneceğini) kontrol etmek isterler. set fonksiyonlarının önce çalışması, verinin saklanmadan önce uygun şekilde dönüştürüldüğünden emin olunmasını sağlar, bu da validasyonun daha anlamlı ve etkili olmasına olanak tanır.
        //? Yöntem-2:
        // set: (password) => {
        //     if (/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&]).{8,}$/.test(password)) {
        //         return passwordEncrypt(password)
        //     } else {
        //         return 'wrong'
        //     }
        // },
        // validate: (password) => (password != 'wrong')
    },

    email: {
        type: String,
        trim: true,
        required: true,
        unique: true,
        validate: [
            (email) => /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email),
            'Email type is not correct.'//'test() metodu, form validasyonları, kullanıcı girişleri ve diğer benzer durumlar için veri doğrulama işlemlerinde sıkça kullanılır. Bu metod sayesinde, geliştiriciler veri girişlerinin uygulamanın beklediği format ve kurallara uygun olup olmadığını kolaylıkla kontrol edebilir.
        ]
    },

    isActive: {
        type: Boolean,
        default: true
    },

    isAdmin: {
        type: Boolean,
        default: false
    },

}, {
    collection: 'users',
    timestamps: true
})

// Model:
module.exports = mongoose.model('User', UserSchema)