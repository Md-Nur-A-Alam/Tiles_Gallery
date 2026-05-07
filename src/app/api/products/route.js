import { getProducts } from '@/lib/getProducts';
import { NextResponse } from 'next/server';

export async function GET() {
    const products = await getProducts();
    if (products.length === 0) {
        return NextResponse.json({ error: 'Failed to fetch products' }, { status: 500 });
    }
    return NextResponse.json(products);
}
