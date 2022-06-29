'use strict';

const mongoose = require('mongoose');

const { Schema } = mongoose;

const regionSchema = new Schema(
    {
        kay: {
            type: String,
            // required: true,
        },
        nameArm: {
            type: String,
            // required: true,
        },
        nameEn: {
            type: String,
        // required: true,
        }
        // map: {
        //     type: Number,
        // }
    }
, {collection: 'regions'});

const Region = mongoose.model('Region', regionSchema );

module.exports = Region;