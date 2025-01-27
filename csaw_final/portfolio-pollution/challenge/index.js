import express from 'express';
import { LowSync, MemorySync } from 'lowdb';
import merge from 'merge-objects';
import xss from 'xss';

import { emergencyAlert } from './hero.js';

const app = express();
const db = new LowSync(new MemorySync());
db.data = { 'emergencies': [], 'submissions': [] }


app.use(express.json());
app.use(express.static('public'));

function sanitize(string) {
    if (!string) return '';

    console.log(xss.toString());
    let sanitized = xss(string);

    // Villians have been keeping tabs on the hero. I think they're tracking
    // him through his cookie...although I can't figure out how they keep 
    // getting past the XSS filtering. This seems to have stopped them for 
    // now until we can figure out a more permanent solution to the problem.
    return sanitized.replace(/C/g, '\u0421').replace(/c/g, '\u0441');
}

app.post('/contact', (req, res) => {
    let details = {
        'name': 'Anonymous',
        'email': 'n/a',
        'phone': 'n/a',
        'emergency': false
    };

    merge(details, req.body);
    details.message = sanitize(details.message);


    console.log(details.message);
    console.log(details.hax);

    if (details.message) {
        if (details.emergency) {
            // Update the emergencies list and immediately alert the hero
            db.data.emergencies.push(details);
            emergencyAlert();
        } else {
            // Save non-emergencies for later review
            db.data.submissions.push(details);
        }
    }

    res.end();
});

app.get('/handle-emergency', (req, res) => {
    console.log(req.connection.remoteAddress)
        // Only the hero can access the list of emergencies
    if (req.connection.remoteAddress != '::ffff:127.0.0.1') return res.redirect('/');

    // Retrieve the next emergency and send info back to the hero
    let emergency = db.data.emergencies.shift();
    res.send(emergency.message);
});

app.listen(8888, () => { console.log('Listening on port 8888...'); });