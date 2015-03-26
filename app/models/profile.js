var mongoose = require('mongoose');
var findOrCreate = require('mongoose-findorcreate');

var ProfileSchema  = new Schema({
    encodedId: String,
    oauthToken: String,
    oauthTokenSecret: String,
    fullName: String,
    timezone: String,
    strideLengthWalking: Number,
    phoneNumber: String,
    isPhoneNumberVerified: Boolean,
    lastSyncTime: Date,
    lastNotificationTime: Date
});

ProfileSchmea.plugin(findOrCreate);

module.exports = mongoose.model('Profile', ProfileSchema);
