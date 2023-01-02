import { Service, Destroyer } from ".";

export interface Command {
    name: string;
    execute: (...args: any[]) => void;
    undo: (...args: any[]) => void;
}

export interface UndoHistoryItemArgs {
    redoArgs: any[];
    undoArgs: any[];
}

const initialState: UndoHistoryItemArgs = {
    redoArgs: [],
    undoArgs: [],
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
        const command = this.commands.find((item) => item.name === name);
        if (command) {
            command.execute(...args.redoArgs);

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
        const command = this.commands.find((item) => item.name === name);
        if (command) {
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

            const command = this.commands.find(
                (item) => item.name === history.name
            );

            if (command) {
                command.undo(...history.args.undoArgs);
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

            const command = this.commands.find(
                (item) => item.name === history.name
            );

            if (command) {
                command.execute(...history.args.redoArgs);
            }
        }
    }
}

export default UndoHistoryService;
