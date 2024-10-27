import { JSONFilePreset } from "lowdb/node";

export interface PostData {
    title: string;
    content: string;
}

export interface Post extends PostData {
    id: string;
}

export interface DB {
    posts: Post[];
}

const defaultData: DB = { posts: [] };

const db = await JSONFilePreset("db.json", defaultData);

export default db;
