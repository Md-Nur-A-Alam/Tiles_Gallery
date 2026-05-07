import { getProducts } from '@/lib/getProducts';
import { NextResponse } from 'next/server';

export async function GET(request, { params }) {
    const { id } = await params;
    const products = await getProducts();
    const product = products.find(p => p.id === id);
    
    if (!product) {
        return NextResponse.json({ error: 'Product not found' }, { status: 404 });
    }
    
    return NextResponse.json(product);
}
