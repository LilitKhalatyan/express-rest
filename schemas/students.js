'use strict';

const mongoose = require('mongoose');

const { Schema } = mongoose;

const studentSchema = new Schema(
    {
        firstName: {
            type: String,
            // required: true,
        },
        lastName: {
            type: String,
            // required: true,
        }
        // age: {
        //     type: Number,
        // },
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
    }
);

const Student = mongoose.model('Student', studentSchema);

module.exports = Student;