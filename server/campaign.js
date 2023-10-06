import mysql from 'mysql';
import express from 'express';
import cors from "cors";
import bcrypt, { hash } from "bcrypt"
import bodyParser from 'body-parser';
import cookieParser from 'cookie-parser';
import session from 'express-session';


const db = mysql.createConnection({
    // TODO make all of these env
    host: "login-database.cjo8nnyxv8ib.eu-west-2.rds.amazonaws.com",
    port: 3306,
    user: "admin",
    password: "Tcdm.2021",
    database:"trustmotores"
});