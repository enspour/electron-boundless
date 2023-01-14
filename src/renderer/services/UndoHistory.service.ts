import { Service, Destroyer } from ".";

export interface Command {
    name: string;
    execute: (...args: any[]) => void;
    undo: (...args: any[]) => void;
}

export interface UndoHistoryItemArgs {
    redo: any[];
    undo: any[];
}

const initialState: UndoHistoryItemArgs = {
    redo: [],
    undo: [],
};

interface UndoRedoItem {
    name: string;
    args: UndoHistoryItemArgs;
}

export interface UndoHistoryOptions {
    size: number;
}

const initialOptions: UndoHistoryOptions = {
    size: 100,
};

class UndoHistoryService implements Service {
    private commands: Command[];
    private history: UndoRedoItem[];
    private position: number;
    private options: UndoHistoryOptions;

    constructor(options?: UndoHistoryOptions) {
        this.commands = [];
        this.history = [];
        this.position = 0;
        this.options = Object.assign({}, initialOptions, options);
    }

    initialize(): Destroyer {
        return () => {
            this.commands = [];
            this.history = [];
            this.position = 0;
        };
    }

    register(command: Command) {
        this.commands.push(command);
    }

    execute(name: string, args: UndoHistoryItemArgs = initialState) {
        const isExists = this.commands.some((item) => item.name === name);
        if (isExists) {
            for (const command of this.commands) {
                if (command.name === name) {
                    command.execute(...args.redo);
                }
            }

            if (this.position !== this.history.length - 1) {
                this.history.splice(this.position + 1);
            }

            this.history.push({
                name,
                args,
            });

            this.position += 1;
        }
    }

    push(name: string, args: UndoHistoryItemArgs = initialState) {
        const isExists = this.commands.some((item) => item.name === name);
        if (isExists) {
            if (this.position !== this.history.length - 1) {
                this.history.splice(this.position + 1);
            }

            this.history.push({
                name,
                args,
            });

            this.position += 1;
        }
    }

    undo() {
        if (this.history.length === 0) {
            return;
        }

        if (this.position === this.history.length) {
            this.position -= 1;
        }

        if (this.position >= 0) {
            const history = this.history[this.position];

            for (const command of this.commands) {
                if (command.name === history.name) {
                    command.undo(...history.args.undo);
                }
            }

            this.position -= 1;
        }
    }

    redo() {
        if (this.history.length === 0) {
            return;
        }

        if (this.position < this.history.length) {
            this.position += 1;
        }

        if (this.position < this.history.length) {
            const history = this.history[this.position];

            for (const command of this.commands) {
                if (command.name === history.name) {
                    command.execute(...history.args.redo);
                }
            }
        }
    }
}

export default UndoHistoryService;
