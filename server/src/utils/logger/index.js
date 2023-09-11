import morgan from 'morgan'
import winston from 'winston'
import path from 'path'
import dotenv from 'dotenv'
dotenv.config(path.join(path.resolve(),'.env'));

const {format} = winston
const {combine, timestamp, colorize, printf} = format

const logLevels = {
    error: 0,
    warn: 1,
    info:2,
    http:3,
    debug:4
}

const getLogLevel = ()=>{
    const isDevelopment = process.env.NODE_ENVV === 'development'
    return isDevelopment ? 'debug' : 'warn'
}

const colors = {
    error: 'red',
    warn: 'yellow',
    info: 'green',
    http: 'magenta',
    debug: 'white'
}

winston.addColors(colors)

const logFormat = combine(
    timestamp({format: 'YYYY-MM-DD HH:mm:ss'}),
    colorize({all:true}),
    printf(info => `${info.timestamp} ${info.level}: ${info.message}`),
)

const logger = winston.createLogger({
    // >= logLevel will be logged
    level: getLogLevel(),
    levels: logLevels,
    format: logFormat,
    transports: [
        new winston.transports.Console(),
        new winston.transports.File({
            filename: path.join(path.resolve(), 'logs', 'error.log'),
            level: 'error',
        }),
    ]
})

export const morganMiddleware = morgan(':method :url :status - :response-time ms',{
    stream: {
        write: (message) => logger.http(message.trim())
    }
})

export default logger