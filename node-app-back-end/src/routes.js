const {
    addNoteHandler,
    getAllNoteHandler,
    getNodeByidHandler,
    editNoteByIdHandler,
    deleteNoteByIdHandler
} = require('./handler');

const routes = [{
        method: 'POST',
        path: '/notes',
        handler: addNoteHandler,
    },
    {
        method: 'GET',
        path: '/notes',
        handler: getAllNoteHandler,
    },
    {
        method: 'GET',
        path: '/notes/{id}',
        handler: getNodeByidHandler,
    },
    {
        method: 'PUT',
        path: '/notes/{id}',
        handler: editNoteByIdHandler,
    },
    {
        method: 'DELETE',
        path: '/notes/{id}',
        handler: deleteNoteByIdHandler,
    }
];

module.exports = routes;