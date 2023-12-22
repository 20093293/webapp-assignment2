import jwt from 'jsonwebtoken';
import User from '../api/users/userModel';

const authenticate = async (request, response, next) => {
    try { 
        const authHeader = request.headers.authorization;
        if (!authHeader) {
            return response.status(401).json({ error: 'No authorization header' });
        }

        const token = authHeader.split(" ")[1];
        if (!token) {
            return response.status(401).json({ error: 'Bearer token not found' });
        }

        const decoded = await jwt.verify(token, process.env.SECRET); 
        console.log(decoded);

        // Assuming decoded contains a username field
        const user = await User.findByUserName(decoded.username); 
        if (!user) {
            return response.status(401).json({ error: 'User not found' });
        }

        request.user = user; // Optionally attach the user to the request for further use
        next();
    } catch(err) {
        next(new Error(`Verification Failed: ${err.message}`));
    }
};

export default authenticate;
