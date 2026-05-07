import { promises as fs } from 'fs';
import path from 'path';

export async function getProducts() {
    try {
        const filePath = path.join(process.cwd(), 'db.json');
        const fileData = await fs.readFile(filePath, 'utf8');
        const data = JSON.parse(fileData);
        return data.products || data;
    } catch (error) {
        console.error('Error reading db.json:', error);
        return [];
    }
}
