const express = require('express');
const app = express();
const port = 5000;
const authRouter=require("./routes/authRouter");
const userRouter = require('./routes/userRouter');
const config = require('./config/config');
const authMiddleware = require('./middleware/authMiddleware');
const cors = require("cors");
const infosRouter = require('./routes/infoRouter');
const verifiedRouter = require('./routes/verifiedRouter');
const likesRouter = require('./routes/likeRouter');
const dislikesRouter = require('./routes/dislikeRouter');
const blocksRouter = require('./routes/blockRouter');
const reportsRouter = require('./routes/reportRouter');
const connectionRouter = require('./routes/connectionRouter');
const visitsRouter = require('./routes/visitRouter');
const photosRouter = require('./routes/photoRouter');
const messagesRouter = require('./routes/messageRouter');
const settingsRouter = require('./routes/settingsRouter');
const notifsRouter = require('./routes/notifRouter');
const interestsRouter = require('./routes/interestRouter');
//body data parsing
app.use(express.json());

app.use(cors({
    origin: "http://localhost:3000", // Allow frontend domain
    methods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"],  // Allowed HTTP methods
    allowedHeaders: ["Content-Type", "Authorization"],  // Allowed headers
    credentials: true,  // Allow cookies/sessions
  }));



if (config.seedDB) { require('./models/Seed'); }

//routers
app.use('/auth',authRouter)
app.use('/user',authMiddleware, userRouter)
app.use('/infos', infosRouter);
app.use('/verified', verifiedRouter);
app.use('/likes', likesRouter);
app.use('/dislikes', dislikesRouter);
app.use('/blocks', blocksRouter);
app.use('/reports', reportsRouter);
app.use('/connection', connectionRouter);
app.use('/visits', visitsRouter);
app.use('/photos', photosRouter);
app.use('/messages', messagesRouter);
app.use('/settings', settingsRouter);
app.use('/notifs', notifsRouter);
app.use('/interests', interestsRouter);

//to create server and start on port
app.listen(port, () => {
  console.log(` server running at http://localhost:${port}`);
});