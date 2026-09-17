import express from 'express';
import appSource from './app.js';

const app = appSource(express, fetch);

app.listen(process.env.PORT);