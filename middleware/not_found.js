const notFound = (req, res) => res.status(404).send('Route doesnot Found')

export { notFound }