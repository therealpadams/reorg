extern crate chrono;
#[macro_use]
extern crate diesel;
extern crate dotenv;

pub mod models;
pub mod schema;

use diesel::prelude::*;
use diesel::pg::PgConnection;
use dotenv::dotenv;
use self::models::{Conference, NewConference};
use std::env;

pub fn establish_connection() -> PgConnection {
    dotenv().ok();

    let database_url = env::var("DATABASE_URL")
        .expect("DATABASE_URL must be set");
    PgConnection::establish(&database_url)
        .expect(&format!("Error connecting to {}", database_url))
}

pub fn create_conference(conn: &PgConnection, new_conference: &NewConference) -> Conference {
    use schema::conferences;
    diesel::insert_into(conferences::table)
        .values(new_conference)
        .get_result(conn)
        .expect("Error saving new conference")
}
