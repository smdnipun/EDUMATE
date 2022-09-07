import express from 'express';
import { createStreams, updateStream, deleteStream, getStreams } from '../controller/Stream.controler.js';

const streamrouter = express.Router();

//create
streamrouter.post ('/add', createStreams);

//UPDATE
streamrouter.put('/:id', updateStream)

//DELETE
streamrouter.delete('/:id', deleteStream)

//GET ALL
streamrouter.get('/', getStreams)

export default streamrouter;


