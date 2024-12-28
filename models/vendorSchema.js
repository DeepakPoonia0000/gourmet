const mongoose = require('mongoose');

const vendorSchema = new mongoose.Schema({
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    role:{ type: String, required: true ,default:"vendor"}
}, { timestamps: true });

const Vendor = mongoose.model('Vendor', vendorSchema);
module.exports = Vendor