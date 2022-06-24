'use strict';

const mongoose = require('mongoose');
// import mongoose from 'mongoose';

const { Schema } = mongoose;

const studentSchema = new Schema(
    {
        title: {
            type: String,
            // required: true,
        },
        name: {
            type: String,
            required: true,
        },
        age: {
            type: Number,
        },
        isFreezed: {
            type: Boolean,
            default: false,
        },
        gender: {
            type: String,
            default: null,
        }, 
        created: {
            type: Date,
            default: Date.now,
        }
    }
);

const Student = mongoose.model('Student', studentSchema);

module.exports = Student;
// export default Student; 