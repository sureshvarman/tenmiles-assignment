/**
 * @class Bookmark
 * @prop {mongoose.Schema.ObjectId} id - Unique identifier for a record
 * @prop {mongoose.Schema.String} url - complete url of the given bookmark info
 * @prop {mongoose.Schema.Date} createdAt - Date time on when the record was created
 * @prop {mongoose.Schema.Date} updatedAt - Date time on when the record updated
 * @prop {mongoose.Schema.String} createdBy - User Id of the record creator
 * @prop {mongoose.Schema.String} updatedBy - User Id of the record updator
 */
const mongoose = require('mongoose');
const validators = require('mongoose-validators');
const Schema = mongoose.Schema;

var BookmarkSchema = new Schema({
  id: { type: Schema.ObjectId },
  name: { type: String, required: true },
  url: { type: String, required: true, unique: true, validate: [validators.isURL()] },
  tags: [{ type: String }],
  createdAt: { type: Date, default: Date.now },
  updatedAt: { type: Date, default: Date.now },
  createdBy: { type: String, default: 'TM' },
  updatedBy: { type: String, default: 'TM' }
});

module.exports = mongoose.model('Bookmark', BookmarkSchema);
