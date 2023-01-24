// Необходимо реализовать абстрактный класс Logger с 2-мя методами
// абстрактным - log(message): void
// printDate - выводящий в log дату
// К нему необходимо сделать реальный класс, который бы имел метод: logWithDate,
// выводящий сначала дату, а потом заданное сообщение

{
    abstract class Logger {
        public abstract log(message: String): void;
        printDate(date: Date) {
            this.log(date.toString());
        }
    }

    class UserLogger extends Logger {
        public log(message: String) {
            console.log(message);
        }

        public logWithDate(message: String) {
            this.printDate(new Date());
            this.log(message);
        }
    }

    const logger = new UserLogger();
    logger.log('new error');
    logger.printDate(new Date());
    logger.logWithDate('second error');
}
