import mongoose from 'mongoose';

const MONGODB_URI = process.env.MONGODB_URI as string;

if (!MONGODB_URI) {
  throw new Error('Please define the MONGODB_URI environment variable');
}

interface ConnectionCache {
  conn: typeof mongoose | null;
  promise: Promise<typeof mongoose> | null;
}

declare global {
  var mongooseURI: ConnectionCache;
}

let cachedURI: ConnectionCache = global.mongooseURI || { conn: null, promise: null };

if (!global.mongooseURI) {
  global.mongooseURI = { conn: null, promise: null };
  cachedURI = global.mongooseURI;
}

export async function dbConnect(): Promise<typeof mongoose> {
  if (cachedURI.conn) return cachedURI.conn;
  if (!cachedURI.promise) {
    const opts = { bufferCommands: false };
    cachedURI.promise = mongoose.connect(MONGODB_URI, opts);
  }
  try {
    cachedURI.conn = await cachedURI.promise;
    return cachedURI.conn;
  } catch (error) {
    throw error;
  }
}