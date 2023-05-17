export default (req, res) => {
  const myVariable = process.env.PRIVATE_KEY || 'b117c3687a5a17612921828ba8d378c0ac99c4140421e39702f717d728fd72a9';
  res.status(200).json({ myVariable });
};