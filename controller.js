const Link = require('./module');

const getLink = () => {
    return new Promise((resolve, reject) => {
        Link.find()
        .then((response) => 
            resolve(response)
        )
        .catch((error) => {
            reject(error);
        });
    })
};

const addLink = (req) => {
    return new Promise((resolve, reject) => {
        const link = new Link({
            link: req.body.link
        });
        link.save()
        .then((response) => {
            resolve(response);
        })
        .catch((error) => {
            reject(error);
        });
    })
};

const updateLink = (req) => {
    return new Promise((resolve, reject) => {
        Link.updateOne({_id: "67d72042a7b2a7d7d601f568"}, {$set: {link: req.body.link}})
        .then((response) => {
            resolve(response);
        })
        .catch((error) => {
            reject(error);
        });
    })
};

const deleteLink = () => {
    return new Promise((resolve, reject) => {
        Link.deleteMany()
        .then((response) => {
            resolve(response);
        })
        .catch((error) => {
            reject(error);
        });
    })
};

exports.getLink = getLink;
exports.addLink = addLink;
exports.updateLink = updateLink;
exports.deleteLink = deleteLink;