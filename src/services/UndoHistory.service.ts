import { Service, Destroyer } from ".";

export interface Command {
    name: string;
    execute: (...args: any[]) => void;
    undo: (...args: any[]) => void;
}

export interface UndoHistoryItemState {
    current: any[];
    previous: any[];
}

const initialState: UndoHistoryItemState = {
    current: [],
    previous: [],
};

interface UndoRedoItem {
    name: string;
    state: UndoHistoryItemState;
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

    execute(name: string, state: UndoHistoryItemState = initialState) {
        const command = this.commands.find((item) => item.name === name);
        if (command) {
            command.execute(...state.current);

            if (this.position !== this.history.length - 1) {
                this.history.splice(this.position + 1);
            }

            this.history.push({
                name,
                state,
            });

            this.position += 1;
        }
    }

    push(name: string, state: UndoHistoryItemState = initialState) {
        const command = this.commands.find((item) => item.name === name);
        if (command) {
            if (this.position !== this.history.length - 1) {
                this.history.splice(this.position + 1);
            }

            this.history.push({
                name,
                state,
            });

            this.position += 1;
        }
    }

    undo() {
        if (this.history.length === 0) {
            return;
        }

        if (this.position === this.history.length) {
            this.position = this.history.length - 1;
        }

        if (this.position >= 0) {
            const history = this.history[this.position];

            const command = this.commands.find(
                (item) => item.name === history.name
            );

            if (command) {
                command.undo(...history.state.previous);
            }

            this.position -= 1;
        }
    }

    redo() {
        if (this.history.length === 0) {
            return;
        }

        if (this.position === -1) {
            this.position = 0;
        }

        if (this.position < this.history.length) {
            const history = this.history[this.position];

            const command = this.commands.find(
                (item) => item.name === history.name
            );

            if (command) {
                command.execute(...history.state.current);
            }

            this.position += 1;
        }
    }
}

export default UndoHistoryService;
