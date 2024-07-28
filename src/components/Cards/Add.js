let comments = [];
let currentId = 1;

export default function handler(req, res) {
    if (req.method === 'GET') {
        res.status(200).json(comments);
    } else if (req.method === 'POST') {
        const comment = req.body.title;
        const newComment = {
            id: currentId++,
            title: comment
        };
        comments.push(newComment);
        res.status(201).json(newComment);
    } else {
        res.status(405).json({ message: 'Method not allowed' });
    }
}
