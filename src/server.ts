import { app } from "./router";
import { config } from "./config";
const PORT: string | undefined = config.port;

app.listen(PORT, () => console.log(`server listen on port ${PORT}`))




