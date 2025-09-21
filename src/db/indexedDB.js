// src/db/indexedDB.js
import Dexie from 'dexie';

export const db = new Dexie('NigeriaDataDB');
db.version(1).stores({
  weather: '++id, city, temperature, humidity, timestamp',
});
