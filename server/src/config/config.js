import dotenv from 'dotenv';

// init config
dotenv.config();

const { PORT } = process.env;

export default PORT;