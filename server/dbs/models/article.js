import mongoose from 'mongoose'
const Schema = mongoose.Schema
const Article = new Schema({
  title: {
    type: String,
    require: true
  },
  date: {
    type: Date,
    default: Date.now
  },
  content: {
    type: String,
    require: true
  },
  favor: {
    type: Number,
    require: true
  },
  comments: [{
    body: String,
    date: Date
  }
]
})

export default mongoose.model('Article', Article)
