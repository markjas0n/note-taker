// tests/server.test.js
const request = require('supertest');
const express = require('express');
const fs = require('fs');
const path = require('path');
const { v4: uuidv4 } = require('uuid');
const app = express();

// Middleware and routes setup here
// ...

describe('GET /api/notes', () => {
  it('should return all notes', async () => {
    const res = await request(app).get('/api/notes');
    expect(res.statusCode).toEqual(200);
    expect(res.body).toBeInstanceOf(Array);
  });
});

describe('POST /api/notes', () => {
  it('should create a new note', async () => {
    const newNote = { title: 'Test Note', text: 'Test text' };
    const res = await request(app).post('/api/notes').send(newNote);
    expect(res.statusCode).toEqual(200);
    expect(res.body).toHaveProperty('id');
    expect(res.body.title).toEqual('Test Note');
  });
});

describe('DELETE /api/notes/:id', () => {
  it('should delete a note', async () => {
    const newNote = { title: 'Test Note', text: 'Test text', id: uuidv4() };
    fs.writeFileSync('db.json', JSON.stringify([newNote]), 'utf8');
    const res = await request(app).delete(`/api/notes/${newNote.id}`);
    expect(res.statusCode).toEqual(200);
    expect(res.body).toHaveProperty('message', 'Note deleted');
  });
});
