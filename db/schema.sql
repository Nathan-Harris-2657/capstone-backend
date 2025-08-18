DROP TABLE IF EXISTS users CASCADE;
DROP TABLE IF EXISTS trailers CASCADE;
DROP TABLE IF EXISTS estimates CASCADE;
DROP TABLE IF EXISTS vendors; CASCADE;
DROP TABLE IF EXISTS industries; CASCADE;

CREATE TABLE users(
  id SERIAL PRIMARY KEY,
  username TEXT NOT NULL,
  email VARCHAR(255) NOT NULL,
  password TEXT NOT NULL,
  role VARCHAR(50),
  saved_preferences JSONB,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);


CREATE TABLE trailers(
  id SERIAL PRIMARY KEY,
  type VARCHAR(50), 
  make VARCHAR(100),
  model VARCHAR(100),
  year INTEGER NOT NULL,
  specs JSONB, 
  images TEXT[],
  price NUMERIC,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE estimates(
  id SERIAL PRIMARY KEY,
  user_id INTEGER REFERENCES users(id),
  trailer_id INTEGER REFERENCES trailers(id),
  location VARCHAR(100),
  fees NUMERIC,
  tax NUMERIC,
  shipping NUMERIC,
  total_cost NUMERIC,
  saved_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE industries (
  id SERIAL PRIMARY KEY,
  name VARCHAR(100) UNIQUE NOT NULL,         
  description TEXT,                                                                              
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE vendors (
  id SERIAL PRIMARY KEY,
  name VARCHAR(255),
  location VARCHAR(255),
  contact_info JSONB,
  ratings NUMERIC, 
  reviews TEXT[],
  trailer_types TEXT[] 
)


