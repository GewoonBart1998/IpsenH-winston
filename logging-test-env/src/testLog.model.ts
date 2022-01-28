export class testLog {

    public timeStamp: string;
    public level: string;
    public subject: string
    public message: string;
    public application: string;

    constructor(
        timeStamp: string,
        level: string,
        subject: string,
        message: string,
        application: string
    ) {
        this.timeStamp = timeStamp;
        this.level = level;
        this.subject = subject;
        this.message = message;
        this.application = application;
    }
}
