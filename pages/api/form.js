export default function handler(req, res) {
    // Get data submitted in request's body.
    const body = req.body
  
    // Optional logging to see the responses
    // in the command line where next.js app is running.
    console.log('body: ', body)
  
    // Both of these are required.
    if (!body.first || !body.last) {
      return res.json({ data: 'First or last name not found' })
    }
  
    // Found the name.
    res.json({ data: `${body.first} ${body.last}` })
  }