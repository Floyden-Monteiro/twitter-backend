import mongoose from 'mongoose';

const connect = async () => {
  await mongoose.connect(
   'mongodbUrl'
    
  );
};

export default connect;
 