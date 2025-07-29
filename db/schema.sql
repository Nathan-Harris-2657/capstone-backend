DROP TABLE IF EXISTS users;
DROP TABLE IF EXISTS trailers;
DROP TABLE IF EXISTS estimates;
DROP TABLE IF EXISTS vendors;
DROP TABLE IF EXISTS industries;

CREATE TABLE users(
  id SERIAL PRIMARY KEY,
  email VARCHAR(255) UNIQUE NOT NULL,
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
  industry_id INTEGER REFERENCES industries(id),
  specs JSONB, 
  images TEXT[],
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


