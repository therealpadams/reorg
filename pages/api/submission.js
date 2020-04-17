import faunadb, { query as q } from 'faunadb';

const { FAUNADB_SECRET: secret } = process.env;

let client;

if (secret) {
  client = new faunadb.Client({ secret });
}

export default async (req, res) => {
  try {
    if (!client) {
      return [];
    }

    const submission = await client.query(
      q.Get(
        q.Ref(
          q.Collection('submissions'), req.query.id
        )
      )
    ); 
    res.json(submission);
  } catch (error) {
    res.status(500).json({ error });
  }     
}