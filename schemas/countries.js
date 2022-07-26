'use strict';

const mongoose = require('mongoose');

const { Schema } = mongoose;

const countrySchema = new Schema(
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
, {collection: 'countries'});

const Country = mongoose.model('countries', countrySchema );

module.exports = Country;