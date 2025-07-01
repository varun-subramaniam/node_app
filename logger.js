import winston from "winston";
import DailyRotateFile from "winston-daily-rotate-file";

const { combine, timestamp, printf, align } = winston.format;


const logger = winston.createLogger({
    level: process.env.LOG_LEVEL,
    format: combine(
        align(),
        timestamp({format: 'YYYY-MM-DD HH:mm:ss'}),
        printf((info) => {
            return `${info.timestamp} [${process.platform},${process.pid}] ${
                info.level
            }: ${info.message}`
        })
    ),
    transports : new DailyRotateFile(
        {
            level: process.env["LOG_LEVEL"],
            datePattern: 'YYYY-MM-DD',
            maxSize: '19m',
            filename: 'horizon-%DATE%.log',
            frequency: '24h',
        }
    )
})

export {logger}