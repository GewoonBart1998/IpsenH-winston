import winston, { format, transports } from 'winston';

export class LoggerConfig {
    private readonly options: winston.LoggerOptions;
    constructor() {
        this.options = {
            exitOnError: false,
            transports: [new transports.Console({ level: 'info' })],
        };
    }

    public settings(): winston.LoggerOptions {
        return this.options;
    }
}
