import mongoose from 'mongoose';

const UserSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    unique: true,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  position: {
    type: String,
    required: true,
  },
  projects: [ // TODO - project id's ref
    {
      type: String,
    },
  ],
  organations: [ // TODO - org id's ref
    {
      type: String,
    },
  ],
});

const User = mongoose.model('User', UserSchema);

export default User;
