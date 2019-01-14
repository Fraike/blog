import mongoose from 'mongoose'
const Schema = mongoose.Schema
const Share = new Schema({
  title: {
    type: String,
    require: true
  },
  desc: {
    type: String,
    require: true
  },
  urlPath: {
    type: String,
    require: true
  }
})

export default mongoose.model('Share', Share)
