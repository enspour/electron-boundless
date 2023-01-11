import fs from "fs";

export class FileNotFoundError extends Error {
    constructor(message: string) {
        super(message);
    }
}

export class DirNotFoundError extends Error {
    constructor(message: string) {
        super(message);
    }
}

class Store {
    async write<T>(path: string, value: T): Promise<string> {
        const data = JSON.stringify(value, null, 4);
        await fs.promises.writeFile(path, data);
        return data;
    }

    async read<T>(path: string): Promise<T> {
        try {
            const is = await this.isFile(path);
            if (is) {
                const file = await fs.promises.readFile(path, {
                    encoding: "utf-8",
                });

                return JSON.parse(file) as T;
            }
        } catch {}

        throw new FileNotFoundError("Oops, file is not found.");
    }

    async isFile(path: string) {
        try {
            const stat = await fs.promises.stat(path);
            if (stat.isFile()) {
                return true;
            }
        } catch {}

        return false;
    }

    async isDirectory(path: string) {
        try {
            const stat = await fs.promises.stat(path);
            if (stat.isDirectory()) {
                return true;
            }
        } catch {}

        return false;
    }

    async mkdir(path: string): Promise<string> {
        await fs.promises.mkdir(path, { recursive: true });
        return path;
    }

    async rmdir(path: string): Promise<string> {
        await fs.promises.rm(path, { recursive: true });
        return path;
    }

    async readdir(path: string): Promise<string[]> {
        try {
            return await fs.promises.readdir(path);
        } catch {}

        throw new DirNotFoundError("Oops, directory is not found.");
    }
}

export default new Store();
