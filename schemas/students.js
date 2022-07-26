'use strict';

const mongoose = require('mongoose');

const { Schema } = mongoose;

const studentSchema = new Schema(
    {
        username: {
            type: String,
            // required: true,
        },
        firstName: {
            type: String,
            // required: true,
        },
        lastName: {
            type: String,
            // required: true,
        },
        email: {
            type: String,
        // required: true,
        },
        age: {
            type: Number,
        },
        region: {
            type: String,
        },
        studentPassword: {
            type: String,
        }
        // isFreezed: {
        //     type: Boolean,
        //     default: false,
        // },
        // gender: {
        //     type: String,
        //     default: null,
        // }, 
        // created: {
        //     type: Date,
        //     default: Date.now,
        // },
        // lastModified: {
        //     type: Date,
        //     default: Date.now,
        // }
    }, {collection: 'students'}
);

const Student = mongoose.model('Student', studentSchema);

module.exports = Student;